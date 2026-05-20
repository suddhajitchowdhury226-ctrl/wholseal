import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { debounce } from "lodash";
import { CheckCircle, AlertCircle, X } from "lucide-react";

// Toast Component
const Toast = ({ message, type, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "20px",
        background: type === "success" ? "#10b981" : "#ef4444",
        color: "white",
        padding: "12px 24px",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        zIndex: 1000,
      }}
    >
      <div>
        {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
      </div>
      <span>{message}</span>
      <button
        onClick={onClose}
        style={{
          background: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
        }}
      >
        <X size={16} />
      </button>
    </div>
  );
};

// Custom hook for managing filters
const useFilters = (initialFilters) => {
  const [filters, setFilters] = useState(initialFilters);

  const updateFilter = useCallback((name, value, isArray = false) => {
    setFilters((prev) => {
      if (isArray) {
        const currentValues = Array.isArray(prev[name]) ? prev[name] : [];
        const newValues = currentValues.includes(value)
          ? currentValues.filter((v) => v !== value)
          : [...currentValues, value];
        return { ...prev, [name]: newValues };
      }
      return { ...prev, [name]: value };
    });
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  return { filters: useMemo(() => filters, [filters]), updateFilter, resetFilters };
};

// Custom hook for API calls
const useProductsAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current) {
      cancelTokenRef.current.cancel("Request cancelled due to new request");
    }

    cancelTokenRef.current = axios.CancelToken.source();

    try {
      const response = await axios.get(url, {
        ...config,
        cancelToken: cancelTokenRef.current.token,
      });
      return response;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request cancelled:", error.message);
        return null;
      }
      throw error;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (cancelTokenRef.current) {
        cancelTokenRef.current.cancel("Component unmounted");
      }
    };
  }, []);

  return { fetchWithCancel };
};

export const ProductLists = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});
  const [subcategoryCounts, setSubcategoryCounts] = useState({});
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFiltering, setIsFiltering] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 7,
  });
  const [isPaginationLoading, setIsPaginationLoading] = useState(false);
  const [quantities, setQuantities] = useState({});
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [addingToCart, setAddingToCart] = useState({});
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState({});
  const [wishlistItems, setWishlistItems] = useState([]);
  const [addingToWishlist, setAddingToWishlist] = useState({});
  const [moq, setMoq] = useState(1); // Minimum Order Quantity
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const { filters, updateFilter, resetFilters } = useFilters({
    categories: [],
    subcategories: [],
    minPrice: "",
    maxPrice: "",
    sortBy: "All",
  });

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchWithCancel } = useProductsAPI(BASE_URL);

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      navigate("/auth/login");
    }
  }, [navigate]);

  const showToast = useCallback((message, type = "success") => {
    setToast({ show: true, message, type });
  }, []);

  const hideToast = useCallback(() => {
    setToast({ show: false, message: "", type: "" });
  }, []);

  const checkTokenAndRedirect = useCallback(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      showToast("Please log in to perform this action", "error");
      navigate("/auth/login");
      return false;
    }
    return token;
  }, [navigate, showToast]);

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
    });

    if (filters.categories.length > 0) {
      filters.categories.forEach((cat) => queryParams.append("category", cat));
    }
    if (filters.subcategories.length > 0) {
      filters.subcategories.forEach((sub) => queryParams.append("subcategory", sub));
    }
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
  }, []);

  const generateNoProductsMessage = useCallback(
    (filters, categories) => {
      const filterParts = [];

      if (filters.categories.length > 0) {
        const selectedCategories = categories.filter((cat) => filters.categories.includes(cat._id));
        if (selectedCategories.length > 0) {
          filterParts.push(`categories "${selectedCategories.map((cat) => cat.name).join(', ')}"`);
        }
      }
      if (filters.subcategories.length > 0) {
        const selectedCategory = categories.find((cat) => filters.categories.includes(cat._id));
        if (selectedCategory) {
          const selectedSubcategories = selectedCategory.subcategories.filter((sub) =>
            filters.subcategories.includes(sub._id)
          );
          if (selectedSubcategories.length > 0) {
            filterParts.push(`subcategories "${selectedSubcategories.map((sub) => sub.name).join(', ')}"`);
          }
        }
      }
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
        ? `No products found for ${filterParts.join(" and ")}.`
        : "No products found";
    },
    []
  );

  const fetchAllProducts = useCallback(
    async (page = 1, limit = 7) => {
      console.log("fetchAllProducts called with page:", page);
      try {
        setError("");
        if (page === 1) {
          setLoading(true);
        } else {
          setIsPaginationLoading(true);
        }

        const queryParams = new URLSearchParams({
          role: "wholesaler",
          page: page.toString(),
          limit: limit.toString(),
        });

        const apiUrl = `${BASE_URL}/api/wholesaler/get-tirtho-wholesaler?${queryParams.toString()}`;
        console.log("All Products API URL:", apiUrl);

        const response = await fetchWithCancel(apiUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response) return; // Request was cancelled

        const { products, currentPage, totalPages, totalProducts } = response.data;
        console.log("All Products API Response:", {
          products: products.length,
          currentPage,
          totalPages,
          totalProducts,
        });

        setProducts(Array.isArray(products) ? products : []);
        setPagination({
          currentPage: currentPage || 1,
          totalPages: totalPages || 1,
          totalItems: totalProducts || 0,
          itemsPerPage: limit,
        });

        if (Array.isArray(products) && products.length === 0) {
          setError("No products available");
        }
      } catch (err) {
        console.error("Error fetching all products:", err.response?.data, "Status:", err.response?.status);
        setError(err.response?.data?.message || "Failed to load products. Please try again.");
        setProducts([]);
      } finally {
        setLoading(false);
        setIsPaginationLoading(false);
      }
    },
    [BASE_URL, fetchWithCancel]
  );

  const fetchFilteredProducts = useCallback(
    async (currentFilters, page = 1, limit = 7, showFilterLoading = false) => {
      console.log("fetchFilteredProducts called with filters:", currentFilters, "page:", page);
      try {
        const priceError = validatePriceRange(currentFilters.minPrice, currentFilters.maxPrice);
        if (priceError) {
          setError(priceError);
          setProducts([]);
          return;
        }

        if (showFilterLoading) {
          setIsFiltering(true);
        } else if (page > 1) {
          setIsPaginationLoading(true);
        }
        setError("");

        const queryParams = buildQueryParams(currentFilters, page, limit);
        const apiUrl = `${BASE_URL}/api/user/filter-products?${queryParams.toString()}`;
        console.log("Filtered Products API URL:", apiUrl);

        const response = await fetchWithCancel(apiUrl, {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response) return; // Request was cancelled

        const { products, currentPage, totalPages, totalProducts } = response.data;
        console.log("Filtered Products API Response:", {
          products: products.length,
          currentPage,
          totalPages,
          totalProducts,
        });

        setProducts(Array.isArray(products) ? products : []);
        setPagination({
          currentPage: currentPage || 1,
          totalPages: totalPages || 1,
          totalItems: totalProducts || 0,
          itemsPerPage: limit,
        });

        if (Array.isArray(products) && products.length === 0) {
          const hasActiveFilters =
            currentFilters.categories.length > 0 || currentFilters.subcategories.length > 0 ||
            currentFilters.minPrice || currentFilters.maxPrice;
          if (hasActiveFilters) {
            setError(generateNoProductsMessage(currentFilters, categories));
          } else {
            setError("No products found");
          }
        }
      } catch (err) {
        console.error("Error fetching filtered products:", err.response?.data, "Status:", err.response?.status);
        setError(err.response?.data?.message || "Failed to load products. Please try again.");
        setProducts([]);
      } finally {
        if (showFilterLoading) {
          setIsFiltering(false);
        }
        setLoading(false);
        setIsPaginationLoading(false);
      }
    },
    [BASE_URL, categories, validatePriceRange, buildQueryParams, generateNoProductsMessage, fetchWithCancel]
  );

  const fetchInitialData = useCallback(async () => {
    try {
      setLoading(true);
      const [categoriesResponse, countsResponse, moqResponse] = await Promise.all([
        axios.get(`${BASE_URL}/api/user/categories`),
        axios.get(`${BASE_URL}/api/user/product-count`),
        axios.get(`${BASE_URL}/api/bulk/get-bulk-order`),
      ]);

      const categoriesData = Array.isArray(categoriesResponse.data) ? categoriesResponse.data : [];
      // Sort categories alphabetically by name (A-Z)
      const sortedCategories = categoriesData.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(sortedCategories);
      if (countsResponse && countsResponse.data.success) {
        setCategoryCounts(countsResponse.data.categoryCounts || {});
        setSubcategoryCounts(countsResponse.data.subcategoryCounts || {});
        console.log('Product counts:', countsResponse.data);
      } else {
        console.warn('No valid counts response:', countsResponse?.data);
        setCategoryCounts({});
        setSubcategoryCounts({});
      }

      // Set MOQ from bulk order API
      if (moqResponse && moqResponse.data && moqResponse.data.bulkOrderNumber) {
        setMoq(moqResponse.data.bulkOrderNumber);
        console.log('MOQ set to:', moqResponse.data.bulkOrderNumber);
      }

      setIsInitialized(true);
    } catch (err) {
      console.error('Error fetching initial data:', err.message, err.response?.data);
      setCategories([]);
      setCategoryCounts({});
      setSubcategoryCounts({});
      setError("Failed to load initial data");
    } finally {
      setLoading(false);
    }
  }, [BASE_URL]);

  const debouncedFetchFilteredProducts = useMemo(
    () =>
      debounce((filters, page, limit) => {
        console.log("debouncedFetchFilteredProducts triggered with filters:", filters, "page:", page);
        fetchFilteredProducts(filters, page, limit, true);
      }, 500),
    [fetchFilteredProducts]
  );

  const debouncedSearch = useMemo(
    () =>
      debounce(async (query) => {
        if (!query.trim()) {
          setSearchResults([]);
          setIsSearching(false);
          return;
        }

        try {
          setIsSearching(true);
          const response = await fetchWithCancel(`${BASE_URL}/api/wholesaler/search-products?search=${encodeURIComponent(query)}&page=1&limit=8`);

          if (response) {
            setSearchResults(response.data.products || []);
          }
        } catch (error) {
          console.error('Search error:', error);
          setSearchResults([]);
        } finally {
          setIsSearching(false);
        }
      }, 300),
    [BASE_URL, fetchWithCancel]
  );

  // Initial data fetch on component mount
  useEffect(() => {
    fetchInitialData();
  }, [fetchInitialData]);

  // Handle filter and pagination changes
  const hasActiveFilters = useMemo(
    () => filters.categories.length > 0 || filters.subcategories.length > 0 || filters.minPrice || filters.maxPrice || filters.sortBy !== "All",
    [filters]
  );

  useEffect(() => {
    if (isInitialized) {
      console.log("useEffect triggered for filters or page change:", filters, pagination.currentPage);
      if (hasActiveFilters) {
        debouncedFetchFilteredProducts(filters, pagination.currentPage, pagination.itemsPerPage);
      } else {
        fetchAllProducts(pagination.currentPage, pagination.itemsPerPage);
      }
    }
  }, [isInitialized, filters, pagination.currentPage, pagination.itemsPerPage, hasActiveFilters, debouncedFetchFilteredProducts, fetchAllProducts]);

  const handleFilterChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      console.log("Filter changed:", name, value);

      if (name === "minPrice" || name === "maxPrice") {
        if (value === "" || (!isNaN(value) && parseFloat(value) >= 0)) {
          updateFilter(name, value);
        }
      } else {
        updateFilter(name, value);
      }

      setPagination((prev) => ({ ...prev, currentPage: 1 }));
    },
    [updateFilter]
  );

  const handleSearchChange = useCallback((e) => {
    const query = e.target.value;
    setSearchQuery(query);
    debouncedSearch(query);
  }, [debouncedSearch]);

  const clearSearch = useCallback(() => {
    setSearchQuery("");
    setSearchResults([]);
    setIsSearching(false);
  }, []);

  // Handle search query changes
  useEffect(() => {
    if (!searchQuery.trim() && searchResults.length === 0 && !isSearching) {
      // Reload original products when search is cleared
      if (hasActiveFilters) {
        fetchFilteredProducts(filters, pagination.currentPage, pagination.itemsPerPage, false);
      } else {
        fetchAllProducts(pagination.currentPage, pagination.itemsPerPage);
      }
    }
  }, [searchQuery, searchResults.length, isSearching, hasActiveFilters, filters, pagination.currentPage, pagination.itemsPerPage, fetchFilteredProducts, fetchAllProducts]);

  const handleCategoryChange = useCallback((categoryId) => {
    setProducts([]);
    setLoading(true);
    updateFilter('categories', categoryId, true);
    if (!filters.categories.includes(categoryId)) {
      const category = categories.find((cat) => cat._id === categoryId);
      if (category && category.subcategories && category.subcategories.length > 0) {
        const subcategoryIds = category.subcategories.map((sub) => sub._id);
        const newSubcategories = filters.subcategories.filter((subId) => !subcategoryIds.includes(subId));
        updateFilter('subcategories', newSubcategories, true);
      }
    } else {
      setExpandedCategories((prev) => ({ ...prev, [categoryId]: true }));
    }
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [updateFilter, filters.categories, categories]);

  const handleSubcategoryChange = useCallback((subcategoryId) => {
    if (!subcategoryId || typeof subcategoryId !== 'string' || subcategoryId.length !== 24) {
      console.warn('Invalid subcategory ID:', subcategoryId);
      return;
    }

    const isValidSubcategory = categories.some((cat) =>
      cat.subcategories.some((sub) => sub._id === subcategoryId && filters.categories.includes(cat._id))
    );
    if (!isValidSubcategory) {
      console.warn('Subcategory not found in selected categories:', subcategoryId);
      return;
    }

    setProducts([]);
    setLoading(true);
    updateFilter('subcategories', subcategoryId, true);
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [updateFilter, filters.categories, categories]);

  const clearFilters = useCallback(() => {
    console.log("Clearing filters");
    resetFilters();
    setExpandedCategories({});
    setError("");
    setPagination((prev) => ({ ...prev, currentPage: 1 }));
  }, [resetFilters]);

  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= pagination.totalPages && !isPaginationLoading) {
        console.log("Page changed to:", newPage);
        setPagination((prev) => ({ ...prev, currentPage: newPage }));
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    [pagination.totalPages, isPaginationLoading]
  );

  const getPageNumbers = useCallback(() => {
    const pages = [];
    const { currentPage, totalPages } = pagination;
    
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 3) {
        pages.push(1, 2, 3, 4, '...', totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1, '...', totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages);
      }
    }
    return pages;
  }, [pagination]);

  const toggleCategoryExpand = useCallback((categoryId) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }));
  }, []);

  const getImageUrl = useCallback(
    (imagePath) => {
      if (!imagePath) return "https://via.placeholder.com/150";
      return imagePath.startsWith("http") ? imagePath : `${BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
    },
    [BASE_URL]
  );

  // Quantity management functions
  const getQuantity = useCallback(
    (productId) => {
      return quantities[productId] || moq;
    },
    [quantities, moq]
  );

  const updateQuantity = useCallback((productId, newQuantity) => {
    setQuantities((prev) => ({
      ...prev,
      [productId]: newQuantity,
    }));
  }, []);

  const incrementQuantity = useCallback(
    (productId, maxStock) => {
      const currentQty = getQuantity(productId);
      if (currentQty < maxStock) {
        updateQuantity(productId, currentQty + 1);
      }
    },
    [getQuantity, updateQuantity]
  );

  const decrementQuantity = useCallback(
    (productId) => {
      const currentQty = getQuantity(productId);
      if (currentQty > moq) {
        updateQuantity(productId, currentQty - 1);
      }
    },
    [getQuantity, updateQuantity, moq]
  );

  // Modal functions
  const openModal = useCallback((product) => {
    setSelectedProduct(product);
    setShowModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedProduct(null);
    setShowModal(false);
  }, []);

  // Add to Cart function
  const addToCart = useCallback(
    async (product) => {
      const token = checkTokenAndRedirect();
      if (!token) return;

      const quantity = getQuantity(product._id);

      if (!product || product.stock === 0) {
        showToast("Product is out of stock", "error");
        return;
      }

      if (quantity < moq) {
        showToast(`Minimum order quantity is ${moq} items`, "error");
        return;
      }

      if (quantity > product.stock) {
        showToast(`Only ${product.stock} items available in stock`, "error");
        return;
      }

      setAddingToCart(prev => ({ ...prev, [product._id]: true }));

      try {
        const response = await axios.post(
          `${BASE_URL}/api/user/add-to-cart`,
          {
            productId: product._id,
            quantity,
            websiteRole: 'wholesaler',
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        const cartItem = {
          _id: `${product._id}_${Date.now()}`,
          product: {
            _id: product._id,
            name: product.name,
            sellPrice: product.buyPrice,
            images: product.images || [],
            stock: product.stock,
          },
          quantity,
        };

        const existingCart = JSON.parse(localStorage.getItem("localCart") || "[]");
        const itemIndex = existingCart.findIndex((item) => item.product._id === product._id);

        if (itemIndex > -1) {
          existingCart[itemIndex].quantity += quantity;
        } else {
          existingCart.push(cartItem);
        }

        localStorage.setItem("localCart", JSON.stringify(existingCart));

        window.dispatchEvent(new Event("cartUpdated"));
        showToast(
          `${quantity} ${quantity === 1 ? "item" : "items"} added to cart successfully!`,
          "success"
        );
      } catch (err) {
        console.error("Error adding to cart:", err);
        showToast(err.response?.data?.message || "Failed to add to cart", "error");
      } finally {
        setAddingToCart(prev => ({ ...prev, [product._id]: false }));
      }
    },
    [getQuantity, showToast, checkTokenAndRedirect]
  );

  // Fetch wishlist (if logged in) or from localStorage fallback
  const fetchWishlist = useCallback(async () => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) {
        const local = JSON.parse(localStorage.getItem("localWishlist") || "[]");
        setWishlistItems(Array.isArray(local) ? local : []);
        return;
      }
      const resp = await axios.get(`${BASE_URL}/api/auth/wishlist`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const ids = Array.isArray(resp.data?.wishlist)
        ? resp.data.wishlist.map((p) => p._id || p.product?._id || p.product)
        : [];
      setWishlistItems(ids.filter(Boolean));
      localStorage.setItem("localWishlist", JSON.stringify(ids.filter(Boolean)));
    } catch (err) {
      console.warn("Could not fetch wishlist, using local fallback", err?.message);
      const local = JSON.parse(localStorage.getItem("localWishlist") || "[]");
      setWishlistItems(Array.isArray(local) ? local : []);
    }
  }, [BASE_URL]);

  const addToWishlist = useCallback(
    async (product) => {
      if (!product || !product._id) return;
      const productId = product._id;
      setAddingToWishlist((s) => ({ ...s, [productId]: true }));
      try {
        const token = localStorage.getItem("userToken");
        const isInWishlist = wishlistItems.includes(productId);

        if (!token) {
          // local fallback toggle
          const local = JSON.parse(localStorage.getItem("localWishlist") || "[]");
          const exists = local.includes(productId);
          const updated = exists ? local.filter((id) => id !== productId) : [...local, productId];
          localStorage.setItem("localWishlist", JSON.stringify(updated));
          setWishlistItems(updated);
          showToast(exists ? "Removed from wishlist" : "Added to wishlist", "success");
          return;
        }

        if (isInWishlist) {
          await axios.delete(`${BASE_URL}/api/auth/wishlist/${productId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setWishlistItems((prev) => prev.filter((id) => id !== productId));
          const local = JSON.parse(localStorage.getItem("localWishlist") || "[]");
          localStorage.setItem("localWishlist", JSON.stringify(local.filter((id) => id !== productId)));
          showToast("Removed from wishlist", "success");
        } else {
          await axios.post(
            `${BASE_URL}/api/auth/wishlist`,
            { productId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setWishlistItems((prev) => [...prev, productId]);
          const local = JSON.parse(localStorage.getItem("localWishlist") || "[]");
          localStorage.setItem("localWishlist", JSON.stringify(Array.from(new Set([...local, productId]))));
          showToast("Added to wishlist", "success");
        }
      } catch (err) {
        console.error("Wishlist error:", err?.response?.data || err.message);
        showToast(err.response?.data?.message || "Failed to update wishlist", "error");
      } finally {
        setAddingToWishlist((s) => ({ ...s, [productId]: false }));
      }
    },
    [BASE_URL, showToast, wishlistItems]
  );

  // populate wishlist on mount
  useEffect(() => {
    fetchWishlist();
  }, [fetchWishlist]);

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (isInView && Array.isArray(products) && products.length > 0 && !isFiltering) {
      animate(
        "tbody tr",
        {
          opacity: [0, 1],
          y: ["10px", "0px"],
        },
        {
          duration: 0.4,
          ease: "easeOut",
          delay: stagger(0.1),
        }
      );
    }
  }, [isInView, products, animate, isFiltering]);

  const productTable = useMemo(() => {
    console.log("Rendering product table:", products.length);

    return (
      <div
        style={{
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
          overflow: "hidden",
          border: "1px solid #e5e7eb",
        }}
      >
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}
        >
          <thead>
            <tr
              style={{
                background: "linear-gradient(135deg, #77a13d 0%, #9fc965ff 100%)",
                color: "white",
              }}
            >
              <th
                style={{
                  padding: "16px",
                  textAlign: "left",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                SKU/UPC
              </th>
              <th
                style={{
                  padding: "16px",
                  textAlign: "left",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Product Item
              </th>
              <th
                style={{
                  padding: "16px",
                  textAlign: "left",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Price
              </th>
              <th
                style={{
                  padding: "16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Quantity
              </th>
              <th
                style={{
                  padding: "16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Subtotal
              </th>
              <th
                style={{
                  padding: "16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Add to Cart
              </th>
              <th
                style={{
                  padding: "16px",
                  textAlign: "center",
                  fontWeight: "600",
                  borderBottom: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Details
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => {
              const quantity = getQuantity(product._id);
              const isOutOfStock = product.stock === 0;
              const isMaxQuantity = quantity >= product.stock;
              const isAddingToCart = addingToCart[product._id] || false;

              return (
                <tr
                  key={product._id}
                  style={{
                    borderBottom: "1px solid #f3f4f6",
                    transition: "background-color 0.2s ease",
                    backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
                    opacity: 0,
                    transform: "translateY(10px)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#f0f9ff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = index % 2 === 0 ? "#fafafa" : "white";
                  }}
                >
                  <td
                    style={{
                      padding: "16px",
                      color: "#6b7280",
                      fontFamily: "monospace",
                      fontSize: "12px",
                    }}
                  >
                    {product.sku || "N/A"}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "500",
                      color: "#1f2937",
                      maxWidth: "200px",
                    }}
                  >
                    <div
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {product.name}

                    </div>
                    <div
                      style={{
                        fontSize: "12px",
                        color: "#77a13d",
                        marginTop: "4px",
                        fontWeight: "600",
                      }}
                    >
                      {product.category?.name || "Unknown"} / {product.subcategory?.name || "Unknown"}
                    </div>
                    {product.bin_location && (
                      <div
                        style={{
                          fontSize: "11px",
                          color: "#6b7280",
                          marginTop: "2px",
                          fontStyle: "italic",
                        }}
                      >
                        Bin Location: {product.bin_location}
                      </div>
                    )}
                    <div
                      className="mobile-price-display"
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginTop: "8px",
                        background: "linear-gradient(135deg, #e97717, #77a13d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Price: ${product.buyPrice.toFixed(2)}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      fontWeight: "700",
                      fontSize: "16px",
                      background: "linear-gradient(135deg, #e97717, #77a13d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ${product.buyPrice.toFixed(2)}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={() => decrementQuantity(product._id)}
                        disabled={quantity <= moq || isAddingToCart}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          border: "1px solid #d1d5db",
                          background: quantity <= moq || isAddingToCart ? "#f3f4f6" : "white",
                          color: quantity <= moq || isAddingToCart ? "#9ca3af" : "#374151",
                          cursor: quantity <= moq || isAddingToCart ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "18px",
                          fontWeight: "bold",
                          transition: "all 0.2s ease",
                        }}
                      >
                        -
                      </button>
                      <span
                        style={{
                          minWidth: "40px",
                          textAlign: "center",
                          fontWeight: "600",
                          fontSize: "16px",
                          color: "#1f2937",
                        }}
                      >
                        {quantity}
                      </span>
                      <button
                        onClick={() => incrementQuantity(product._id, product.stock)}
                        disabled={isMaxQuantity || isOutOfStock || isAddingToCart}
                        title={isMaxQuantity ? "No stock available" : ""}
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          border: "1px solid #d1d5db",
                          background: isMaxQuantity || isOutOfStock || isAddingToCart ? "#f3f4f6" : "white",
                          color: isMaxQuantity || isOutOfStock || isAddingToCart ? "#9ca3af" : "#374151",
                          cursor: isMaxQuantity || isOutOfStock || isAddingToCart ? "not-allowed" : "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "18px",
                          fontWeight: "bold",
                          transition: "all 0.2s ease",
                        }}
                      >
                        +
                      </button>
                    </div>
                    <div
                      style={{
                        fontSize: "11px",
                        color: "#6b7280",
                        marginTop: "4px",
                      }}
                    >
                      Stock: {product.stock} | MOQ: {moq}
                    </div>
                    <div
                      className="mobile-subtotal-display"
                      style={{
                        fontSize: "14px",
                        fontWeight: "700",
                        marginTop: "8px",
                        background: "linear-gradient(135deg, #e97717, #77a13d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Subtotal: ${(product.buyPrice * quantity).toFixed(2)}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      textAlign: "center",
                      fontWeight: "700",
                      fontSize: "16px",
                      background: "linear-gradient(135deg, #e97717, #77a13d)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    ${(product.buyPrice * quantity).toFixed(2)}
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                      <button
                        onClick={() => addToCart(product)}
                        disabled={isOutOfStock || isAddingToCart}
                        style={{
                          background: isOutOfStock || isAddingToCart
                            ? "#f3f4f6"
                            : "linear-gradient(135deg, #77a13d, #9fc965ff)",
                          color: isOutOfStock || isAddingToCart ? "#9ca3af" : "white",
                          border: "none",
                          padding: "8px 12px",
                          borderRadius: "8px",
                          fontSize: "12px",
                          fontWeight: "600",
                          cursor: isOutOfStock || isAddingToCart ? "not-allowed" : "pointer",
                          transition: "all 0.2s ease",
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {isOutOfStock ? "Out of Stock" : isAddingToCart ? "Adding..." : "Buy Now"}
                      </button>

                      {/* Wishlist button placed next to Buy Now */}
                      <button
                        onClick={() => addToWishlist(product)}
                        disabled={addingToWishlist[product._id]}
                        title={wishlistItems.includes(product._id) ? 'Remove from wishlist' : 'Add to wishlist'}
                        style={{
                          background: wishlistItems.includes(product._id) ? '#fff1f2' : '#fff',
                          border: wishlistItems.includes(product._id) ? '1px solid #ef4444' : '1px solid #d1d5db',
                          color: wishlistItems.includes(product._id) ? '#ef4444' : '#374151',
                          borderRadius: 8,
                          padding: '8px 10px',
                          cursor: addingToWishlist[product._id] ? 'not-allowed' : 'pointer',
                          fontWeight: 700,
                        }}
                      >
                        {addingToWishlist[product._id] ? 'Saving...' : (wishlistItems.includes(product._id) ? '♥' : '♡')}
                      </button>
                    </div>
                  </td>
                  <td
                    style={{
                      padding: "16px",
                      textAlign: "center",
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <span style={{ fontWeight: '700', fontSize: '12px' }}>Details</span>
                      <button
                        onClick={() => openModal(product)}
                        style={{
                          background: "transparent",
                          border: "1px solid #d1d5db",
                          borderRadius: "8px",
                          padding: "8px",
                          cursor: "pointer",
                          transition: "all 0.2s ease",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.background = "#f3f4f6";
                          e.target.style.borderColor = "#77a13d";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.background = "transparent";
                          e.target.style.borderColor = "#d1d5db";
                        }}
                      >
                        👁️
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }, [products, getQuantity, incrementQuantity, decrementQuantity, addToCart, openModal, addingToCart, wishlistItems, addingToWishlist, moq]);

  return (
    <div className="container">
      <button
        onClick={toggleSidebar}
        className="mobile-hamburger"
      >
        <svg
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth="2"
          style={{
            width: '24px',
            height: '24px',
            transform: isSidebarOpen ? 'rotate(45deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s ease'
          }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </button>
      {isSidebarOpen && <div className="sidebar-overlay" onClick={toggleSidebar} />}
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
      <div className="sidebar">
        <div className="sidebar-content">
          <div className="filters-header">
            <h3>Filters</h3>
            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="clear-filters"
              >
                Clear All
              </button>
            )}
          </div>
          <h4 style={{ color: "#fff", marginBottom: "12px", letterSpacing: ".9px" }}>Departments</h4>
          <div className="filter-section">

            {categories
              .filter((category) => categoryCounts[category._id] > 0)
              .sort((a, b) => a.name.localeCompare(b.name)) // Sort categories A-Z
              .map((category) => (
                <div key={category._id}>
                  <div className="category-item">
                    <label className="filter-option">
                      <input
                        type="checkbox"
                        checked={filters.categories.includes(category._id)}
                        onChange={() => handleCategoryChange(category._id)}
                        disabled={isFiltering}
                      />
                      <span>{category.name} ({categoryCounts[category._id] || 0})</span>
                    </label>
                    {category.subcategories?.length > 0 && (
                      <svg
                        onClick={() => toggleCategoryExpand(category._id)}
                        className="plus-icon"
                        fill="none"
                        stroke="#ffffff"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        style={{ transform: expandedCategories[category._id] ? 'rotate(45deg)' : 'rotate(0deg)' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    )}
                  </div>
                  {category.subcategories?.length > 0 && expandedCategories[category._id] && (
                    <div className="subcategory-list">
                      {category.subcategories
                        .filter((subcategory) => subcategoryCounts[subcategory._id] > 0)
                        .sort((a, b) => a.name.localeCompare(b.name)) // Sort subcategories A-Z
                        .map((subcategory) => (
                          <label key={subcategory._id} className="filter-option">
                            <input
                              type="checkbox"
                              checked={filters.subcategories.includes(subcategory._id)}
                              onChange={() => handleSubcategoryChange(subcategory._id)}
                              disabled={!filters.categories.includes(category._id) || isFiltering}
                            />
                            <span>{subcategory.name} ({subcategoryCounts[subcategory._id] || 0})</span>
                          </label>
                        ))}
                    </div>
                  )}
                </div>
              ))}
          </div>
          <div className="filter-section">
            <h4>Price Range</h4>
            <div className="price-inputs">
              <div>
                <label>Min ($)</label>
                <input
                  name="minPrice"
                  placeholder="0"
                  type="number"
                  min="0"
                  value={filters.minPrice}
                  onChange={handleFilterChange}
                />
              </div>
              <div>
                <label>Max ($)</label>
                <input
                  name="maxPrice"
                  placeholder="1000"
                  type="number"
                  min="0"
                  value={filters.maxPrice}
                  onChange={handleFilterChange}
                />
              </div>
            </div>
          </div>
          <div className="filter-section">
            <h4>Sort By</h4>
            <select
              name="sortBy"
              value={filters.sortBy}
              onChange={handleFilterChange}
            >
              <option value="All">Default</option>
              <option value="createdAt-desc">Newest</option>
              <option value="createdAt-asc">Oldest</option>
              <option value="buyPrice-asc">Price: Low to High</option>
              <option value="buyPrice-desc">Price: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <div ref={scope} className="main-content">
        <div className="search-container">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search products by name"
              value={searchQuery}
              onChange={handleSearchChange}
              className="search-input"
            />
            {searchQuery && (
              <button onClick={clearSearch} className="clear-search">
                ×
              </button>
            )}
          </div>
        </div>
        {(loading || isFiltering || isSearching) && (
          <div className="loader">
            <div className="spinner" />
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
              {isSearching ? "Searching..." : "Loading products..."}
            </span>
          </div>
        )}
        {!loading && !isFiltering && error && (
          <div className="error-message">
            <p>{error}</p>
            {hasActiveFilters && (
              <button onClick={clearFilters}>Clear Filters</button>
            )}
          </div>
        )}
        {!loading && !isFiltering && Array.isArray(products) && products.length === 0 && !error && (
          <div className="no-products">No products available</div>
        )}
        {!loading && !isFiltering && !isSearching && searchQuery && searchResults.length === 0 && (
          <div className="no-products">
            No products found for "{searchQuery}"
          </div>
        )}
        {!loading && !isFiltering && !isSearching && ((searchQuery && searchResults.length > 0) || (!searchQuery && Array.isArray(products) && products.length > 0)) && (
          <>
            <div className="products-info">
              <p>
                {searchQuery
                  ? `Found ${searchResults.length} products for "${searchQuery}"`
                  : `Showing ${products.length} of ${pagination.totalItems} Products`
                }
              </p>
            </div>
            {searchQuery ? (
              <div
                style={{
                  background: "white",
                  borderRadius: "16px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                  overflow: "hidden",
                  border: "1px solid #e5e7eb",
                }}
              >
                <table
                  style={{
                    width: "100%",
                    borderCollapse: "collapse",
                    fontSize: "14px",
                  }}
                >
                  <thead>
                    <tr
                      style={{
                        background: "linear-gradient(135deg, #77a13d 0%, #9fc965ff 100%)",
                        color: "white",
                      }}
                    >
                      <th style={{ padding: "16px", textAlign: "left", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>SKU/UPC</th>
                      <th style={{ padding: "16px", textAlign: "left", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Product Title</th>
                      <th style={{ padding: "16px", textAlign: "left", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Price</th>
                      <th style={{ padding: "16px", textAlign: "center", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Quantity</th>
                      <th style={{ padding: "16px", textAlign: "center", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Subtotal</th>
                      <th style={{ padding: "16px", textAlign: "center", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Add to Cart</th>
                      <th style={{ padding: "16px", textAlign: "center", fontWeight: "600", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    {searchResults.map((product, index) => {
                      const quantity = getQuantity(product._id);
                      const isOutOfStock = product.stock === 0;
                      const isMaxQuantity = quantity >= product.stock;
                      const isAddingToCart = addingToCart[product._id] || false;

                      return (
                        <tr
                          key={product._id}
                          style={{
                            borderBottom: "1px solid #f3f4f6",
                            backgroundColor: index % 2 === 0 ? "#fafafa" : "white",
                          }}
                        >
                          <td style={{ padding: "16px", color: "#6b7280", fontFamily: "monospace", fontSize: "12px" }}>
                            {product.sku || "N/A"}
                          </td>
                          <td style={{ padding: "16px", fontWeight: "500", color: "#1f2937", maxWidth: "200px" }}>
                            <div style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                              {product.name}
                            </div>
                            <div style={{ fontSize: "12px", color: "#77a13d", marginTop: "4px", fontWeight: "600" }}>
                              {product.category?.name || "Unknown"} / {product.subcategory?.name || "Unknown"}
                            </div>
                            {product.bin_location && (
                              <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "2px", fontStyle: "italic" }}>
                                Bin: {product.bin_location}
                              </div>
                            )}
                          </td>
                          <td style={{ padding: "16px", fontWeight: "700", fontSize: "16px", background: "linear-gradient(135deg, #e97717, #77a13d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            ${product.buyPrice.toFixed(2)}
                          </td>
                          <td style={{ padding: "16px", textAlign: "center" }}>
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
                              <button
                                onClick={() => decrementQuantity(product._id)}
                                disabled={quantity <= moq || isAddingToCart}
                                style={{
                                  width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #d1d5db",
                                  background: quantity <= moq || isAddingToCart ? "#f3f4f6" : "white",
                                  color: quantity <= moq || isAddingToCart ? "#9ca3af" : "#374151",
                                  cursor: quantity <= moq || isAddingToCart ? "not-allowed" : "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: "18px", fontWeight: "bold"
                                }}
                              >
                                -
                              </button>
                              <span style={{ minWidth: "40px", textAlign: "center", fontWeight: "600", fontSize: "16px", color: "#1f2937" }}>
                                {quantity}
                              </span>
                              <button
                                onClick={() => incrementQuantity(product._id, product.stock)}
                                disabled={isMaxQuantity || isOutOfStock || isAddingToCart}
                                style={{
                                  width: "32px", height: "32px", borderRadius: "6px", border: "1px solid #d1d5db",
                                  background: isMaxQuantity || isOutOfStock || isAddingToCart ? "#f3f4f6" : "white",
                                  color: isMaxQuantity || isOutOfStock || isAddingToCart ? "#9ca3af" : "#374151",
                                  cursor: isMaxQuantity || isOutOfStock || isAddingToCart ? "not-allowed" : "pointer",
                                  display: "flex", alignItems: "center", justifyContent: "center",
                                  fontSize: "18px", fontWeight: "bold"
                                }}
                              >
                                +
                              </button>
                            </div>
                            <div style={{ fontSize: "11px", color: "#6b7280", marginTop: "4px" }}>
                              Stock: {product.stock} | MOQ: {moq}
                            </div>
                          </td>
                          <td style={{ padding: "16px", textAlign: "center", fontWeight: "700", fontSize: "16px", background: "linear-gradient(135deg, #e97717, #77a13d)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                            ${(product.buyPrice * quantity).toFixed(2)}
                          </td>
                          <td style={{ padding: "16px", textAlign: "center" }}>
                            <div style={{ display: 'flex', gap: 8, justifyContent: 'center', alignItems: 'center' }}>
                              <button
                                onClick={() => addToCart(product)}
                                disabled={isOutOfStock || isAddingToCart}
                                style={{
                                  background: isOutOfStock || isAddingToCart ? "#f3f4f6" : "linear-gradient(135deg, #77a13d, #9fc965ff)",
                                  color: isOutOfStock || isAddingToCart ? "#9ca3af" : "white",
                                  border: "none", padding: "8px 12px", borderRadius: "8px",
                                  fontSize: "12px", fontWeight: "600",
                                  cursor: isOutOfStock || isAddingToCart ? "not-allowed" : "pointer",
                                  textTransform: "uppercase", letterSpacing: "0.5px"
                                }}
                              >
                                {isOutOfStock ? "Out of Stock" : isAddingToCart ? "Adding..." : "Buy Now"}
                              </button>
                              <button
                                onClick={() => addToWishlist(product)}
                                disabled={addingToWishlist[product._id]}
                                title={wishlistItems.includes(product._id) ? 'Remove from wishlist' : 'Add to wishlist'}
                                style={{
                                  background: wishlistItems.includes(product._id) ? '#fff1f2' : '#fff',
                                  border: wishlistItems.includes(product._id) ? '1px solid #ef4444' : '1px solid #d1d5db',
                                  color: wishlistItems.includes(product._id) ? '#ef4444' : '#374151',
                                  borderRadius: 8, padding: '8px 10px',
                                  cursor: addingToWishlist[product._id] ? 'not-allowed' : 'pointer',
                                  fontWeight: 700
                                }}
                              >
                                {addingToWishlist[product._id] ? 'Saving...' : (wishlistItems.includes(product._id) ? '♥' : '♡')}
                              </button>
                            </div>
                          </td>
                          <td style={{ padding: "16px", textAlign: "center" }}>
                            <button
                              onClick={() => openModal(product)}
                              style={{
                                background: "transparent", border: "1px solid #d1d5db", borderRadius: "8px",
                                padding: "8px", cursor: "pointer", display: "flex",
                                alignItems: "center", justifyContent: "center", margin: "0 auto"
                              }}
                            >
                              👁️
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            ) : (
              productTable
            )}
            {!searchQuery && pagination.totalPages > 1 && (
              <nav className="pagination" aria-label="Product pagination">
                {isPaginationLoading && (
                  <div className="pagination-loader">
                    <div className="pagination-spinner" />
                    <span>Loading...</span>
                  </div>
                )}
                <button
                  disabled={pagination.currentPage === 1 || isFiltering || isPaginationLoading}
                  onClick={() => handlePageChange(1)}
                  aria-label="Go to first page"
                  className="pagination-btn"
                >
                  First
                </button>
                <button
                  disabled={pagination.currentPage === 1 || isFiltering || isPaginationLoading}
                  onClick={() => handlePageChange(pagination.currentPage - 1)}
                  aria-label="Go to previous page"
                  className="pagination-btn"
                >
                  Previous
                </button>
                <div className="page-numbers">
                  {getPageNumbers().map((page, index) => (
                    page === '...' ? (
                      <span key={`ellipsis-${index}`} className="pagination-ellipsis">...</span>
                    ) : (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        disabled={isPaginationLoading}
                        className={`page-number ${pagination.currentPage === page ? 'active' : ''}`}
                        aria-label={`Go to page ${page}`}
                        aria-current={pagination.currentPage === page ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    )
                  ))}
                </div>
                <button
                  disabled={pagination.currentPage === pagination.totalPages || isFiltering || isPaginationLoading}
                  onClick={() => handlePageChange(pagination.currentPage + 1)}
                  aria-label="Go to next page"
                  className="pagination-btn"
                >
                  Next
                </button>
                <button
                  disabled={pagination.currentPage === pagination.totalPages || isFiltering || isPaginationLoading}
                  onClick={() => handlePageChange(pagination.totalPages)}
                  aria-label="Go to last page"
                  className="pagination-btn"
                >
                  Last
                </button>
              </nav>
            )}
          </>
        )}
      </div>
      {showModal && selectedProduct && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 99999999,
            padding: "20px",
          }}
          onClick={closeModal}
        >
          <div
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "32px",
              maxWidth: "600px",
              width: "100%",
              maxHeight: "80vh",
              overflow: "auto",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
              position: "relative",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              style={{
                position: "absolute",
                top: "16px",
                right: "16px",
                background: "transparent",
                border: "none",
                fontSize: "24px",
                cursor: "pointer",
                color: "#6b7280",
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.background = "#f3f4f6";
                e.target.style.color = "#ef4444";
              }}
              onMouseLeave={(e) => {
                e.target.style.background = "transparent";
                e.target.style.color = "#6b7280";
              }}
            >
              ×
            </button>
            <div>
              <h2
                style={{
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#1f2937",
                  marginBottom: "24px",
                  paddingRight: "40px",
                }}
              >
                {selectedProduct.name}
              </h2>
              <div
                style={{
                  display: "grid",
                  gap: "20px",
                }}
              >
                {selectedProduct.description && (
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#77a13d",
                        marginBottom: "8px",
                      }}
                    >
                      Description
                    </h3>
                    <p
                      style={{
                        color: "#374151",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {selectedProduct.description}
                    </p>
                  </div>
                )}
                {selectedProduct.ingredient && (
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#77a13d",
                        marginBottom: "8px",
                      }}
                    >
                      Ingredients
                    </h3>
                    <p
                      style={{
                        color: "#374151",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {selectedProduct.ingredient}
                    </p>
                  </div>
                )}
                {selectedProduct.disclaimer && (
                  <div>
                    <h3
                      style={{
                        fontSize: "18px",
                        fontWeight: "600",
                        color: "#e97717",
                        marginBottom: "8px",
                      }}
                    >
                      Disclaimer
                    </h3>
                    <p
                      style={{
                        color: "#374151",
                        lineHeight: "1.6",
                        margin: 0,
                        padding: "12px",
                        background: "#fef2f2",
                        borderRadius: "8px",
                        border: "1px solid #fee2e2",
                        fontSize: "14px",
                      }}
                    >
                      {selectedProduct.disclaimer}
                    </p>
                  </div>
                )}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "16px",
                    padding: "16px",
                    background: "#f9fafb",
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                >
                  <div>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Price
                    </span>
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "700",
                        background: "linear-gradient(135deg, #e97717, #77a13d)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      ${selectedProduct.buyPrice.toFixed(2)}
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Stock
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: selectedProduct.stock > 0 ? "#10b981" : "#ef4444",
                      }}
                    >
                      {selectedProduct.stock} units
                    </span>
                  </div>
                  <div>
                    <span
                      style={{
                        fontSize: "14px",
                        color: "#6b7280",
                        display: "block",
                        marginBottom: "4px",
                      }}
                    >
                      Department
                    </span>
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#77a13d",
                      }}
                    >
                      {selectedProduct.category?.name || "Unknown"} / {selectedProduct.subcategory?.name || "Unknown"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
          .container {
            display: flex;
            min-height: 100vh;
            background: linear-gradient(135deg, #f5f7fa 0%, #e4e7eb 100%);
            flex-direction: row;
            width: 100%;
            max-width: 100vw;
            margin: 0 auto;
            padding: 0;
            font-family: 'Inter', sans-serif;
          }

          .mobile-hamburger {
            position: fixed;
            left: ${isSidebarOpen ? 'calc(18rem - 50px)' : '0'};
            top: 50%;
            transform: translateY(-50%);
            z-index: 1001;
            background: ${isSidebarOpen ? 'rgba(255,255,255,0.2)' : '#77a13d'};
            color: white;
            border: none;
            border-radius: ${isSidebarOpen ? '8px' : '0 8px 8px 0'};
            padding: 0.5rem;
            cursor: pointer;
            display: none;
            transition: all 0.3s ease;
            width: 40px;
            height: 40px;
            align-items: center;
            justify-content: center;
          }

          .sidebar-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0,0,0,0.5);
            z-index: 999;
            display: none;
          }

          .sidebar {
          // margin-top:5rem;
            width: 18rem;
            background: linear-gradient(135deg, #77a13d 0%, #9fc965ff 100%);
            box-shadow: 0.25rem 0 1.5rem rgba(0,0,0,0.1);
            overflow-y: auto;
            max-height: 120vh;
            position: sticky;
            top: 0;
            transition: transform 0.3s ease;
            padding: 1rem;
          }

          .sidebar-content {
            padding: 1rem;
            padding-top: 6rem;
            display: flex;
            flex-direction: column;
            height: 100%;
          }

          .filters-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid rgba(255,255,255,0.2);
          }

          .filters-header h3 {
            font-size: 1.25rem;
            font-weight: 600;
            color: white;
            margin: 0;
            text-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }

          .clear-filters {
            background: rgba(255,255,255,0.95);
            color: #7c3aed;
            padding: 0.375rem 0.625rem;
            border-radius: 0.375rem;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .clear-filters:hover {
            background: white;
          }

          .filter-section {
            margin-bottom: 1rem;
            flex: 1;
            overflow-y: auto;
            padding-right: 0.5rem;
          }

          .filter-section h4 {
            font-size: 0.875rem;
            font-weight: 600;
            color: white;
            margin-bottom: 0.5rem;
          }

          .category-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.25rem 0;
          }

          .plus-icon {
            width: 1rem;
            height: 1rem;
            cursor: pointer;
            transition: transform 0.2s ease;
          }

          .subcategory-list {
            margin-left: 1rem;
            margin-top: 0.25rem;
            max-height: ${expandedCategories ? '500px' : '0'};
            opacity: ${expandedCategories ? '1' : '0'};
            transition: max-height 0.3s ease, opacity 0.3s ease;
            overflow: hidden;
          }

          .subcategory-list .filter-option input {
            width: 0.75rem;
            height: 0.75rem;
          }

          .subcategory-list .filter-option span {
            font-size: 0.75rem;
            color: white;
          }

          .subcategory-list .filter-option input:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }

          .filter-option {
            display: flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.25rem 0;
            cursor: pointer;
            transition: background 0.2s ease;
            border-radius: 0.375rem;
          }

          .filter-option:hover {
            background: rgba(255,255,255,0.1);
          }

          .filter-option input[type="checkbox"] {
            appearance: none;
            width: 0.875rem;
            height: 0.875rem;
            border: 2px solid rgba(255,255,255,0.6);
            border-radius: 3px;
            background: transparent;
            cursor: pointer;
            position: relative;
            transition: all 0.2s ease;
            accent-color: #77a13d;
          }

          .filter-option input[type="checkbox"]:checked {
            background: #77a13d;
            border-color: #77a13d;
          }

          .filter-option input[type="checkbox"]:checked::after {
            content: "✓";
            position: absolute;
            top: -2px;
            left: 1px;
            color: white;
            font-size: 10px;
            font-weight: bold;
          }

          .filter-option span {
            font-size: 0.8125rem;
            color: white;
            font-weight: 400;
            user-select: none;
          }

          .price-inputs {
            display: flex;
            gap: 0.5rem;
            margin-bottom: 0.75rem;
          }

          .price-inputs div {
            flex: 1;
          }

          .price-inputs label {
            display: block;
            font-size: 0.75rem;
            color: rgba(255,255,255,0.8);
            margin-bottom: 0.25rem;
          }

          .price-inputs input {
            width: 100%;
            padding: 0.375rem 0.625rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(255,255,255,0.3);
            background: rgba(255,255,255,0.1);
            color: white;
            font-size: 0.875rem;
          }

          .price-inputs input::placeholder {
            color: rgba(255,255,255,0.6);
          }

          .filter-section select {
            width: 100%;
            padding: 0.5rem;
            border-radius: 0.375rem;
            border: 1px solid rgba(255,255,255,0.3);
            background: rgba(255,255,255,0.1);
            color: white;
            font-size: 0.875rem;
          }

          .filter-section select option {
            background: #374151;
            color: white;
          }

          .main-content {
            flex: 1;
            padding: 1.5rem;
            max-width: calc(100vw - 18rem);
          }

          .search-container {
            display: flex;
            justify-content: center;
            margin-bottom: 1.5rem;
          }

          .search-bar {
            position: relative;
            width: 100%;
            max-width: 600px;
          }

          .search-input {
            width: 100%;
            padding: 12px 16px;
            border: 2px solid #e5e7eb;
            border-radius: 12px;
            font-size: 16px;
            background: white;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            transition: all 0.2s ease;
          }

          .search-input:focus {
            outline: none;
            border-color: #77a13d;
            box-shadow: 0 4px 12px rgba(119, 161, 61, 0.2);
          }

          .clear-search {
            position: absolute;
            right: 12px;
            top: 50%;
            transform: translateY(-50%);
            background: #f3f4f6;
            border: none;
            border-radius: 50%;
            width: 24px;
            height: 24px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: #6b7280;
            transition: all 0.2s ease;
          }

          .clear-search:hover {
            background: #e5e7eb;
            color: #374151;
          }

          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 2.5rem;
          }

          .spinner {
            width: 2.5rem;
            height: 2.5rem;
            border: 0.25rem solid #f3f4f6;
            border-top: 0.25rem solid #77a13d;
            border-radius: 50%;
            animation: spin 1s linear infinite;
          }

          .error-message {
            background: #fef2f2;
            padding: 1.5rem;
            text-align: center;
            border-radius: 0.5rem;
            border: 1px solid #fee2e2;
          }

          .error-message p {
            color: #dc2626;
            font-size: 1rem;
            margin: 0 0 0.5rem 0;
          }

          .error-message button {
            background: #ef4444;
            color: white;
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: none;
            cursor: pointer;
            font-size: 0.875rem;
          }

          .no-products {
            background: white;
            padding: 1.5rem;
            text-align: center;
            font-size: 1rem;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
          }

          .products-info {
            margin-bottom: 1rem;
            padding: 1rem;
            background: white;
            font-size: 0.875rem;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
          }

          .pagination {
            display: flex;
            justify-content: center;
            gap: 0.5rem;
            margin-top: 1.5rem;
            align-items: center;
            padding: 1rem;
            background: white;
            border-radius: 0.5rem;
            border: 1px solid #e5e7eb;
            flex-wrap: wrap;
            position: relative;
          }

          .pagination-loader {
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            display: flex;
            align-items: center;
            gap: 8px;
            background: white;
            padding: 8px 16px;
            border-radius: 8px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            font-size: 14px;
            color: #77a13d;
            font-weight: 600;
          }

          .pagination-spinner {
            width: 16px;
            height: 16px;
            border: 2px solid #f3f4f6;
            border-top: 2px solid #77a13d;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }

          .pagination-btn {
            padding: 0.5rem 1rem;
            border-radius: 0.5rem;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 600;
            transition: all 0.2s ease;
          }

          .pagination-btn:hover:not(:disabled) {
            background: #77a13d;
            color: white;
            border-color: #77a13d;
          }

          .pagination-btn:disabled {
            background: #f3f4f6;
            cursor: not-allowed;
            opacity: 0.5;
          }

          .page-numbers {
            display: flex;
            gap: 0.25rem;
            align-items: center;
          }

          .page-number {
            min-width: 40px;
            height: 40px;
            padding: 0.5rem;
            border-radius: 0.5rem;
            border: 1px solid #d1d5db;
            background: white;
            cursor: pointer;
            font-size: 0.875rem;
            font-weight: 600;
            transition: all 0.2s ease;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .page-number:hover:not(:disabled) {
            background: #f0f9ff;
            border-color: #77a13d;
          }

          .page-number.active {
            background: linear-gradient(135deg, #77a13d, #9fc965ff);
            color: white;
            border-color: #77a13d;
          }

          .page-number:disabled {
            cursor: not-allowed;
            opacity: 0.5;
          }

          .pagination-ellipsis {
            padding: 0 0.5rem;
            color: #6b7280;
            font-weight: 600;
          }

          table {
            table-layout: auto;
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }

          .sidebar::-webkit-scrollbar {
            width: 0.375rem;
          }

          .sidebar::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
            border-radius: 0.1875rem;
          }

          .sidebar::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 0.1875rem;
          }

          .filter-section::-webkit-scrollbar {
            width: 0.375rem;
          }

          .filter-section::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.1);
            border-radius: 0.1875rem;
          }

          .filter-section::-webkit-scrollbar-thumb {
            background: rgba(255,255,255,0.3);
            border-radius: 0.1875rem;
          }

          @media (max-width: 1024px) {
            .container {
              flex-direction: column;
            }

            .sidebar {
              width: 100%;
              max-width: 20rem;
              position: fixed;
              transform: ${isSidebarOpen ? 'translateX(0)' : 'translateX(-100%)'};
              z-index: 1000;
              height: 100vh;
              margin-top:3rem;
            }

            .mobile-hamburger {
              display: flex;
            }

            .sidebar-overlay {
              display: ${isSidebarOpen ? 'block' : 'none'};
            }

            .main-content {
              max-width: 100vw;
              padding: 1rem;
            }

            .search-bar {
              max-width: 100%;
            }

            .search-input {
              font-size: 14px;
              padding: 10px 14px;
            }

            table {
              font-size: 0.8125rem;
            }

            th, td {
              padding: 0.75rem;
            }

            td div[style*="maxWidth"] {
              max-width: 150px;
            }

            td button[style*="padding: 8px 16px"] {
              padding: 0.375rem 0.75rem;
              font-size: 0.75rem;
            }

            td button[style*="padding: 8px"] {
              padding: 0.25rem;
            }

            td span[style*="minWidth"] {
              min-width: 30px;
              font-size: 0.875rem;
            }

            td button[style*="width: 32px"] {
              width: 28px;
              height: 28px;
              font-size: 0.875rem;
            }
          }

          @media (max-width: 640px) {
            table {
              font-size: 0.75rem;
            }

            th, td {
              padding: 0.5rem;
            }

            td div[style*="maxWidth"] {
              max-width: 120px;
            }

            td button[style*="padding: 8px 16px"] {
              padding: 0.25rem 0.5rem;
              font-size: 0.6875rem;
            }

            td span[style*="minWidth"] {
              min-width: 24px;
              font-size: 0.75rem;
            }

            td button[style*="width: 32px"] {
              width: 24px;
              height: 24px;
              font-size: 0.75rem;
            }

            .filters-header h3 {
              font-size: 1.125rem;
            }

            .filter-section h4 {
              font-size: 0.8125rem;
            }

            .filter-option span {
              font-size: 0.75rem;
            }

            .price-inputs input {
              font-size: 0.8125rem;
            }

            .filter-section select {
              font-size: 0.8125rem;
            }

            .pagination {
              gap: 0.25rem;
              padding: 0.75rem;
            }

            .pagination-btn {
              padding: 0.375rem 0.75rem;
              font-size: 0.75rem;
            }

            .page-number {
              min-width: 32px;
              height: 32px;
              font-size: 0.75rem;
            }

            .pagination-loader {
              font-size: 12px;
              padding: 6px 12px;
            }

            .pagination-spinner {
              width: 14px;
              height: 14px;
            }
          }

          @media (max-width: 768px) {
            .main-content {
              padding: 0.75rem;
            }

            .sidebar {
              max-width: 16rem;
            }

            table {
              display: block;
              border: none;
            }

            thead {
              display: none;
            }

            tbody {
              display: block;
            }

            tr {
              display: block;
              margin-bottom: 1.25rem;
              background: white;
              border-radius: 16px;
              box-shadow: 0 2px 12px rgba(0,0,0,0.08);
              padding: 0;
              border: 1px solid #e5e7eb;
              overflow: hidden;
            }

            tr:hover {
              box-shadow: 0 4px 16px rgba(0,0,0,0.12) !important;
            }

            td {
              display: block !important;
              padding: 1.25rem 1rem !important;
              border: none !important;
              border-bottom: 1px solid #e5e7eb !important;
              background: transparent !important;
            }

            td:last-child {
              border-bottom: none !important;
            }

            td::before {
              content: attr(data-label);
              display: block;
              font-weight: 700;
              color: #374151;
              font-size: 0.6875rem;
              text-transform: uppercase;
              letter-spacing: 0.8px;
              margin-bottom: 0.75rem;
              line-height: 1.3;
              padding-bottom: 0.25rem;
            }

            td:nth-child(1)::before { content: "SKU/UPC"; }
            td:nth-child(2)::before { content: "Product Details"; }
            td:nth-child(3) { display: none !important; }
            td:nth-child(4)::before { content: ""; display: none; }
            td:nth-child(5) { display: none !important; }
            td:nth-child(6)::before { content: ""; display: none; }
            td:nth-child(7)::before { content: ""; display: none; }

            td:nth-child(1) {
              background: #f9fafb !important;
              font-family: 'Courier New', monospace !important;
              font-size: 0.875rem !important;
              color: #6b7280 !important;
              font-weight: 600 !important;
              letter-spacing: 0.5px;
              word-break: break-all !important;
              overflow-wrap: break-word !important;
              line-height: 4 !important;
              padding: 1.25rem 1rem !important;
            }

            td:nth-child(2) {
              padding: 1.25rem 1rem !important;
            }

            td:nth-child(2) * {
              max-width: 100% !important;
              box-sizing: border-box !important;
            }

            td:nth-child(2) > div:first-child {
              font-size: 1.0625rem !important;
              font-weight: 600 !important;
              color: #111827 !important;
              line-height: 4 !important;
              margin: 0 0 0.875rem 0 !important;
              padding: 0 !important;
              word-wrap: break-word !important;
              overflow-wrap: break-word !important;
              white-space: normal !important;
              overflow: visible !important;
              display: block !important;
            }

            td:nth-child(2) > div:nth-child(2) {
              font-size: 0.875rem !important;
              color: #77a13d !important;
              font-weight: 600 !important;
              margin: 0 0 0.5rem 0 !important;
              padding: 0 !important;
              line-height: 1.5 !important;
            }

            td:nth-child(2) > div:nth-child(3) {
              font-size: 0.8125rem !important;
              color: #9ca3af !important;
              font-style: italic !important;
              margin: 0 !important;
              padding: 0 !important;
              line-height: 1.5 !important;
            }

            td:nth-child(2) .mobile-price-display {
              display: block !important;
              font-size: 1rem !important;
              font-weight: 700 !important;
              margin-top: 0.75rem !important;
            }

            td:nth-child(3) {
              padding: 1rem !important;
              background: #f9fafb !important;
            }

            td:nth-child(3) * {
              font-size: 1.25rem !important;
              font-weight: 700 !important;
              background: linear-gradient(135deg, #e97717, #77a13d) !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
              background-clip: text !important;
            }

            td:nth-child(4) {
              padding: 1rem !important;
              background: white !important;
            }

            td:nth-child(4) > div:first-of-type {
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              gap: 10px !important;
              margin-bottom: 0.5rem !important;
            }

            td:nth-child(4) button {
              width: 40px !important;
              height: 40px !important;
              min-width: 40px !important;
              flex-shrink: 0 !important;
              font-size: 1.125rem !important;
            }

            td:nth-child(4) span {
              font-size: 1rem !important;
              font-weight: 600 !important;
              min-width: 45px !important;
              text-align: center !important;
            }

            td:nth-child(4) > div:last-child {
              font-size: 0.6875rem !important;
              color: #6b7280 !important;
              text-align: center !important;
            }

            td:nth-child(4) .mobile-subtotal-display {
              display: block !important;
              font-size: 1rem !important;
              font-weight: 700 !important;
              margin-top: 0.75rem !important;
              text-align: center !important;
            }

            td:nth-child(5) {
              padding: 1rem !important;
              background: #f0fdf4 !important;
            }

            td:nth-child(5) * {
              font-size: 1.25rem !important;
              font-weight: 700 !important;
              background: linear-gradient(135deg, #e97717, #77a13d) !important;
              -webkit-background-clip: text !important;
              -webkit-text-fill-color: transparent !important;
              background-clip: text !important;
            }

            td:nth-child(6) {
              padding: 1rem !important;
              background: white !important;
            }

            td:nth-child(6) > div {
              display: flex !important;
              flex-direction: row !important;
              gap: 0.5rem !important;
              align-items: center !important;
            }

            td:nth-child(6) button:first-child {
              flex: 1 !important;
              padding: 0.75rem !important;
              font-size: 0.875rem !important;
            }

            td:nth-child(6) button:nth-child(2) {
              width: 48px !important;
              height: 48px !important;
              padding: 0 !important;
              font-size: 1.25rem !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              flex-shrink: 0 !important;
            }

            td:nth-child(7) {
              padding: 1rem !important;
              border-bottom: none !important;
              background: #f9fafb !important;
              text-align: center !important;
              display: flex !important;
              flex-direction: column-reverse !important;
              align-items: center !important;
            }

            td:nth-child(7)::before {
              text-align: center !important;
              font-weight: 900 !important;
              margin-bottom: 0 !important;
              margin-top: 0.25rem !important;
              display: block !important;
              font-size: 0.75rem !important;
            }

            td:nth-child(7) button {
              width: 48px !important;
              height: 48px !important;
              padding: 0 !important;
              font-size: 1.5rem !important;
              border-radius: 8px !important;
              transition: all 0.2s ease !important;
              display: flex !important;
              align-items: center !important;
              justify-content: center !important;
              margin: 0 !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProductLists;