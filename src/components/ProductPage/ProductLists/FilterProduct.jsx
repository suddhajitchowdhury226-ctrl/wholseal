import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { Itemcard } from "../../common/UI/Itemcard/Itemcard";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../common/Navbar/Navbar";
import { debounce } from "lodash";

const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);
  
  const updateFilter = useCallback((name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
  }, []);
  
  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);
  
  return { filters, updateFilter, resetFilters };
};

const useProductsAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel('Request cancelled due to new request');
    }

    cancelTokenRef.current = axios.CancelToken.source();

    try {
      const response = await axios.get(url, {
        ...config,
        cancelToken: cancelTokenRef.current.token
      });
      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log('Request cancelled:', error.message);
        return null;
      }
      throw error;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel('Component unmounted');
      }
    };
  }, []);

  return { fetchWithCancel };
};

export const FilterProduct = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 8,
  });

  const { filters, updateFilter, resetFilters } = useFilters({
    minPrice: "",
    maxPrice: "",
    sortBy: "All",
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchWithCancel } = useProductsAPI(BASE_URL);

  const getToken = useCallback(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      setError("Please log in to view products");
      // navigate("/auth/login");
      return null;
    }
    return token;
  }, [navigate]);

  const validatePriceRange = useCallback((minPrice, maxPrice) => {
    const min = parseFloat(minPrice);
    const max = parseFloat(maxPrice);

    if (minPrice && maxPrice && min > max) {
      return "Minimum price cannot be greater than maximum price";
    }

    if ((minPrice && min < 0) || (maxPrice && max < 0)) {
      return "Price cannot be negative";
    }

    return null;
  }, []);

  const buildQueryParams = useCallback((filters, page, limit) => {
    const queryParams = new URLSearchParams({
      role: "wholesaler",
      page: page.toString(),
      limit: limit.toString(),
      categoryId, // Use categoryId to match backend
    });

    if (filters.minPrice && parseFloat(filters.minPrice) >= 0) {
      queryParams.append("minPrice", filters.minPrice);
    }

    if (filters.maxPrice && parseFloat(filters.maxPrice) >= 0) {
      queryParams.append("maxPrice", filters.maxPrice);
    }

    if (filters.sortBy && filters.sortBy !== "All") {
      queryParams.append("sortBy", filters.sortBy);
    }

    return queryParams;
  }, [categoryId]);

  const generateNoProductsMessage = useCallback((filters) => {
    const filterParts = [];

    if (filters.minPrice || filters.maxPrice) {
      let priceRange = "";
      if (filters.minPrice && filters.maxPrice) {
        priceRange = `$${filters.minPrice} - $${filters.maxPrice}`;
      } else if (filters.minPrice) {
        priceRange = `above $${filters.minPrice}`;
      } else if (filters.maxPrice) {
        priceRange = `below $${filters.maxPrice}`;
      }
      filterParts.push(`price range ${priceRange}`);
    }

    return filterParts.length > 0 
      ? `No products found for ${filterParts.join(" and ")} in this category.`
      : "No products found in this category";
  }, []);

  const fetchProducts = useCallback(
    async (currentFilters, page = 1, limit = 8, showFilterLoading = false) => {
      const token = getToken();
      // if (!token) return;

      try {
        const priceError = validatePriceRange(currentFilters.minPrice, currentFilters.maxPrice);
        if (priceError) {
          setError(priceError);
          setProducts([]);
          return;
        }

        if (showFilterLoading) {
          setIsFiltering(true);
        }
        setError("");

        const queryParams = buildQueryParams(currentFilters, page, limit);
        const apiUrl = `${BASE_URL}/api/wholesaler/get-tirtho-wholesaler-category?${queryParams.toString()}`;

        const response = await fetchWithCancel(apiUrl, {
          headers: {
            // Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        if (!response) return;

        const { products, currentPage, totalPages, totalProducts } = response.data;
        setProducts(Array.isArray(products) ? products : []);
        setPagination({
          currentPage: currentPage || 1,
          totalPages: totalPages || 1,
          totalItems: totalProducts || 0,
          itemsPerPage: limit,
        });

        if (Array.isArray(products) && products.length === 0) {
          setError(generateNoProductsMessage(currentFilters));
        }
      } catch (err) {
        console.error("Error fetching products:", err.response?.data, "Status:", err.response?.status);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userToken");
          setError("Please log in to view products");
          // navigate("/auth/login");
        } else {
          setError(err.response?.data?.message || "Failed to load products. Please try again.");
        }
        setProducts([]);
      } finally {
        if (showFilterLoading) {
          setIsFiltering(false);
        }
        setLoading(false);
      }
    },
    [BASE_URL, getToken, buildQueryParams, generateNoProductsMessage, fetchWithCancel, navigate]
  );

  const debouncedFetchProducts = useMemo(
    () => debounce((filters, page, limit) => {
      fetchProducts(filters, page, limit, true);
    }, 500),
    [fetchProducts]
  );

  useEffect(() => {
    const initializeData = async () => {
      setLoading(true);
      await fetchProducts(filters, pagination.currentPage, pagination.itemsPerPage);
      setIsInitialized(true);
    };

    initializeData();
  }, []);

  useEffect(() => {
    if (isInitialized) {
      debouncedFetchProducts(filters, 1, pagination.itemsPerPage);
    }
  }, [filters, isInitialized, debouncedFetchProducts, pagination.itemsPerPage]);

  useEffect(() => {
    if (isInitialized) {
      fetchProducts(filters, pagination.currentPage, pagination.itemsPerPage, true);
    }
  }, [pagination.currentPage, isInitialized, filters, pagination.itemsPerPage, fetchProducts]);

  const handleFilterChange = useCallback((e) => {
    const { name, value } = e.target;

    if (name === "minPrice" || name === "maxPrice") {
      if (value === "" || (!isNaN(value) && parseFloat(value) >= 0)) {
        updateFilter(name, value);
      }
    } else {
      updateFilter(name, value);
    }

    setPagination(prev => ({ ...prev, currentPage: 1 }));
  }, [updateFilter]);

  useEffect(() => {
    if (isInView && Array.isArray(products) && products.length > 0 && !isFiltering) {
      animate(
        ".PS__ProductCardWrapper",
        {
          opacity: [0, 1],
          y: ["1vh", "0vh"],
        },
        {
          duration: 0.6,
          ease: "backInOut",
          type: "spring",
          mass: 2.5,
          power: 10,
          delay: stagger(0.25),
        }
      );
    }
  }, [isInView, products, animate, isFiltering]);

  const getImageUrl = useCallback(
    (imagePath) => {
      if (!imagePath) return "https://via.placeholder.com/150";
      return imagePath.startsWith("http") ? imagePath : `${BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
    },
    [BASE_URL]
  );

  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= pagination.totalPages) {
        setPagination(prev => ({ ...prev, currentPage: newPage }));
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    },
    [pagination.totalPages]
  );

  const clearFilters = useCallback(() => {
    resetFilters();
    setError("");
    setPagination(prev => ({ ...prev, currentPage: 1 }));
  }, [resetFilters]);

  const productList = useMemo(() => {
    return products.map((product) => (
      <div
        key={product._id}
        className="PS__ProductCardWrapper"
        onClick={() => navigate(`/products-details/${product._id}`)}
        style={{
          cursor: "pointer",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/products-details/${product._id}`);
          }
        }}
      >
        <Itemcard
          id={product._id}
          image={getImageUrl(product.images?.[0])}
          company={product.createdBy?.name || "Unknown"}
          title={product.name}
          price={product.buyPrice !== undefined ? product.buyPrice : "Price not available"}
          stock={product.stock > 0 ? "In Stock" : "Out of Stock"}
        />
      </div>
    ));
  }, [products, getImageUrl, navigate]);

  const hasActiveFilters = filters.minPrice || filters.maxPrice || filters.sortBy !== "All";

  return (
    <>
      <Navbar />
      <div 
        ref={scope} 
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "24px",
          background: "linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%)",
          minHeight: "100vh",
          fontFamily: "'Inter', sans-serif"
        }}
      >
        <div 
          style={{
            background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
            borderRadius: "16px",
            padding: "24px",
            boxShadow: "0 8px 32px rgba(59, 130, 246, 0.2)",
            marginBottom: "24px",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.2)"
          }}
        >
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 50%)",
              pointerEvents: "none"
            }}
          />
          <div 
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "24px",
              paddingBottom: "16px",
              borderBottom: "1px solid rgba(255,255,255,0.2)",
              position: "relative"
            }}
          >
            <h3 style={{ 
              fontSize: "24px", 
              fontWeight: "600", 
              color: "white",
              margin: 0,
              textShadow: "0 2px 4px rgba(0,0,0,0.1)"
            }}>
              Product Filters
            </h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                style={{
                  background: "rgba(255,255,255,0.95)",
                  color: "#7c3aed",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
                }}
                aria-label="Clear all filters"
              >
                Clear All Filters
              </button>
            )}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "24px" }}>
            <div>
              <label 
                htmlFor="min-price-filter"
                style={{ 
                  display: "block", 
                  fontSize: "14px", 
                  fontWeight: "500", 
                  color: "white",
                  marginBottom: "8px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                }}
              >
                Min Price ($)
              </label>
              <input
                id="min-price-filter"
                name="minPrice"
                placeholder="Enter minimum price"
                type="number"
                min="0"
                step="0.01"
                value={filters.minPrice}
                onChange={handleFilterChange}
                disabled={isFiltering}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  fontSize: "14px",
                  color: "white",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.2s ease"
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="max-price-filter"
                style={{ 
                  display: "block", 
                  fontSize: "14px", 
                  fontWeight: "500", 
                  color: "white",
                  marginBottom: "8px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                }}
              >
                Max Price ($)
              </label>
              <input
                id="max-price-filter"
                name="maxPrice"
                placeholder="Enter maximum price"
                type="number"
                min="0"
                step="0.01"
                value={filters.maxPrice}
                onChange={handleFilterChange}
                disabled={isFiltering}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  fontSize: "14px",
                  color: "white",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.2s ease"
                }}
              />
            </div>

            <div>
              <label 
                htmlFor="sort-filter"
                style={{ 
                  display: "block", 
                  fontSize: "14px", 
                  fontWeight: "500", 
                  color: "white",
                  marginBottom: "8px",
                  textShadow: "0 1px 2px rgba(0,0,0,0.1)"
                }}
              >
                Sort by
              </label>
              <select
                id="sort-filter"
                name="sortBy"
                value={filters.sortBy}
                onChange={handleFilterChange}
                disabled={isFiltering}
                style={{
                  width: "100%",
                  padding: "12px",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.3)",
                  background: "rgba(255,255,255,0.1)",
                  fontSize: "14px",
                  color: "white",
                  backdropFilter: "blur(4px)",
                  transition: "all 0.2s ease"
                }}
              >
                <option value="All" style={{ color: "#1f2937" }}>Default</option>
                <option value="createdAt-desc" style={{ color: "#1f2937" }}>Newest</option>
                <option value="createdAt-asc" style={{ color: "#1f2937" }}>Oldest</option>
                <option value="purchaseCount-desc" style={{ color: "#1f2937" }}>Most Purchased</option>
                <option value="sellPrice-asc" style={{ color: "#1f2937" }}>Price: Low to High</option>
                <option value="sellPrice-desc" style={{ color: "#1f2937" }}>Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "24px" }}>
          {(loading || isFiltering) && (
            <div 
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: "40px",
                background: "white",
                borderRadius: "16px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)"
              }}
              role="status"
              aria-live="polite"
            >
              <div style={{
                width: "40px",
                height: "40px",
                border: "4px solid #3b82f6",
                borderTop: "4px solid transparent",
                borderRadius: "50%",
                animation: "spin 1s linear infinite"
              }}></div>
              <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
                Loading products...
              </span>
            </div>
          )}

          {!loading && !isFiltering && error && (
            <div 
              style={{
                background: "#fef2f2",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                border: "1px solid #fee2e2"
              }}
              role="alert"
            >
              <p style={{ color: "#dc2626", fontSize: "16px", margin: "0 0 16px 0" }}>{error}</p>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  style={{
                    background: "#ef4444",
                    color: "white",
                    padding: "8px 16px",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "500",
                    transition: "background 0.2s ease"
                  }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}

          {!loading && !isFiltering && Array.isArray(products) && products.length === 0 && !error && (
            <div 
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                textAlign: "center",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                border: "1px solid #e5e7eb"
              }}
              role="status"
            >
              <p style={{ color: "#374151", fontSize: "16px", margin: 0 }}>
                No products available
              </p>
            </div>
          )}

          {!loading && !isFiltering && Array.isArray(products) && products.length > 0 && (
            <>
              <div 
                style={{
                  marginBottom: "16px",
                  padding: "16px",
                  background: "white",
                  borderRadius: "12px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  border: "1px solid #e5e7eb"
                }}
                role="status"
                aria-live="polite"
              >
                <p style={{ color: "#374151", fontSize: "16px", margin: 0 }}>
                  Showing {products.length} of {pagination.totalItems} products
                  {hasActiveFilters && " (filtered)"}
                </p>
              </div>
              <div 
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                  gap: "24px",
                  padding: "16px"
                }}
                role="list"
              >
                {productList}
              </div>
            </>
          )}
        </div>

        {!loading && pagination.totalPages > 1 && (
          <nav 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "16px",
              marginTop: "24px",
              padding: "16px",
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
              border: "1px solid #e5e7eb"
            }}
            aria-label="Product pagination"
          >
            <button
              disabled={pagination.currentPage === 1 || isFiltering}
              onClick={() => handlePageChange(pagination.currentPage - 1)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                background: pagination.currentPage === 1 || isFiltering ? "#f3f4f6" : "white",
                color: pagination.currentPage === 1 || isFiltering ? "#9ca3af" : "#1f2937",
                cursor: pagination.currentPage === 1 || isFiltering ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.2s ease"
              }}
              aria-label="Go to previous page"
            >
              Previous
            </button>
            <span style={{ color: "#374151", fontSize: "14px", fontWeight: "500" }} aria-current="page">
              Page {pagination.currentPage} of {pagination.totalPages}
            </span>
            <button
              disabled={pagination.currentPage === pagination.totalPages || isFiltering}
              onClick={() => handlePageChange(pagination.currentPage + 1)}
              style={{
                padding: "8px 16px",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
                background: pagination.currentPage === pagination.totalPages || isFiltering ? "#f3f4f6" : "white",
                color: pagination.currentPage === pagination.totalPages || isFiltering ? "#9ca3af" : "#1f2937",
                cursor: pagination.currentPage === pagination.totalPages || isFiltering ? "not-allowed" : "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.2s ease"
              }}
              aria-label="Go to next page"
            >
              Next
            </button>
          </nav>
        )}

        <style>
          {`
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    </>
  );
};

export default FilterProduct;