import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Custom hook for API calls
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

export const Offer = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchWithCancel } = useProductsAPI(BASE_URL);

  // Memoized token getter
  const getToken = useCallback(() => {
    const token = localStorage.getItem("userToken");
    if (!token) {
      setError("Please log in to view products");
      // navigate("/auth/login");
      return null;
    }
    return token;
  }, [navigate]);

  // Build query parameters for fetching best deals
  const buildQueryParams = useCallback((page = 1, limit = 4) => {
    const queryParams = new URLSearchParams({
      role: "wholesaler",
      page: page.toString(),
      limit: limit.toString(),
      sortBy: "purchaseCount-desc", // Fetch most purchased products for "Best Deals"
    });
    return queryParams;
  }, []);

  // Fetch products
  const fetchProducts = useCallback(
    async (page = 1, limit = 8) => {
      const token = getToken();
      // if (!token) return;

      try {
        setError("");
        const queryParams = buildQueryParams(page, limit);
        
        const response = await fetchWithCancel(
          `${BASE_URL}/api/wholesaler/get-tirtho-wholesaler?role=wholesaler`,
          {
            headers: {
              // Authorization: `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response) return;

        const { products, currentPage, totalPages, totalProducts } = response.data;
        
        // Use products instead of data
        setProducts(Array.isArray(products) ? products : []);

        if (Array.isArray(products) && products.length === 0) {
          setError("No new arrivals found.");
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
        setLoading(false);
      }
    },
    [BASE_URL, navigate, getToken, buildQueryParams, fetchWithCancel]
  );

  // Initial load
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  // Animation effect
  useEffect(() => {
    if (isInView && Array.isArray(products) && products.length > 0 && !loading) {
      animate(
        ".Offer__ProductCardWrapper",
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
  }, [isInView, products, animate, loading]);

  const getImageUrl = useCallback(
    (imagePath) => {
      if (!imagePath) return "https://via.placeholder.com/150";
      return imagePath.startsWith("http") ? imagePath : `${BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
    },
    [BASE_URL]
  );

  const productList = useMemo(() => {
    return products.map((product) => (
      <div
        key={product._id}
        className="Offer__ProductCardWrapper product-card"
        onClick={() => navigate(`/products-details/${product._id}`)}
        style={{
          cursor: "pointer",
          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
          background: "white",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          overflow: "hidden",
          height: "320px",
          position: "relative",
          transformOrigin: "center",
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/products-details/${product._id}`);
          }
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
          e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0px)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
          e.currentTarget.style.zIndex = "1";
        }}
      >
        {/* Gradient overlay for premium look */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(119, 161, 61, 0.02) 0%, rgba(233, 119, 23, 0.02) 100%)",
            pointerEvents: "none",
            zIndex: 1
          }}
        />
        
        <div 
          style={{
            width: "100%",
            height: "200px",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#fafafa",
            position: "relative"
          }}
        >
          <img 
            src={getImageUrl(product.images?.[0])} 
            alt={product.name || "Product image"} 
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              objectFit: "contain",
              borderRadius: "12px",
              transition: "transform 0.4s ease",
              position: "relative",
              zIndex: 2
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
          
          {/* Stock indicator */}
          <div 
            style={{
              position: "absolute",
              top: "12px",
              right: "12px",
              background: product.stock > 0 ? 
                "linear-gradient(135deg, #10b981, #059669)" : 
                "linear-gradient(135deg, #ef4444, #dc2626)",
              color: "white",
              padding: "4px 8px",
              borderRadius: "12px",
              fontSize: "11px",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 3
            }}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </div>
        </div>
        
        <div 
          style={{
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "120px",
            position: "relative",
            zIndex: 2
          }}
        >
          <div>
            <p style={{ 
              color: "#77a13d", 
              fontSize: "12px", 
              margin: "0 0 6px 0",
              fontWeight: "600",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}>
              {product.category?.name || "Unknown"}
            </p>
            <h4 style={{ 
              color: "#1f2937", 
              fontSize: "16px", 
              fontWeight: "700", 
              margin: "0 0 8px 0",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
              lineHeight: "1.2"
            }}>
              {product.name}
            </h4>
          </div>
          
          <div style={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "center" 
          }}>
            <div style={{
              background: "linear-gradient(135deg, #e97717, #77a13d)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              <h3 style={{ 
                fontSize: "20px", 
                fontWeight: "800", 
                margin: 0,
                background: "linear-gradient(135deg, #e97717, #77a13d)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}>
                ${product.sellPrice.toFixed(2)}
              </h3>
            </div>
            
            {/* Purchase count indicator */}
            {product.purchaseCount && (
              <div style={{
                background: "rgba(119, 161, 61, 0.1)",
                color: "#77a13d",
                padding: "4px 8px",
                borderRadius: "8px",
                fontSize: "11px",
                fontWeight: "600"
              }}>
                {product.purchaseCount} sold
              </div>
            )}
          </div>
        </div>
        
        {/* Hover effect overlay */}
        <div 
          className="card-hover-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "linear-gradient(135deg, rgba(233, 119, 23, 0.05) 0%, rgba(119, 161, 61, 0.05) 100%)",
            opacity: 0,
            transition: "opacity 0.3s ease",
            pointerEvents: "none",
            zIndex: 2
          }}
        />
      </div>
    ));
  }, [products, getImageUrl, navigate]);

  return (
    <div 
      style={{
        maxWidth: "100%",
        margin: "0 auto",
        padding: "24px",
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
        fontFamily: "'Inter', sans-serif",
        minHeight: "100vh"
      }}
    >
      <div 
        style={{
          background: "linear-gradient(135deg, #77a13d 0%, #314b0e 100%)",
          borderRadius: "20px",
          padding: "32px",
          boxShadow: "0 20px 60px rgba(119, 161, 61, 0.15), 0 8px 32px rgba(49, 75, 14, 0.1)",
          marginBottom: "32px",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.2)"
        }}
      >
        {/* Enhanced glassmorphism overlay */}
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.15), transparent 60%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08), transparent 40%)",
            pointerEvents: "none"
          }}
        />
        
        <div 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "32px",
            paddingBottom: "20px",
            borderBottom: "2px solid rgba(255,255,255,0.2)",
            position: "relative"
          }}
        >
          <h2 style={{ 
            fontSize: "28px", 
            fontWeight: "700", 
            color: "white",
            margin: 0,
            textShadow: "0 4px 8px rgba(0,0,0,0.2)",
            letterSpacing: "-0.5px"
          }}>
            Today's Best Deals - Wholesaler
          </h2>
          <button
            onClick={() => navigate("/products")}
            style={{
              background: "linear-gradient(135deg, #e97717  0%, #e97717  100%)",
              color: "#fff",
              padding: "12px 24px",
              borderRadius: "12px",
              // border: "2px solid rgba(255,255,255,0.3)",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "700",
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0px)";
              e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
            }}
          >
            See All
          </button>
        </div>

        {loading && (
          <div 
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "60px",
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              backdropFilter: "blur(10px)"
            }}
            role="status"
            aria-live="polite"
          >
            <div style={{
              width: "50px",
              height: "50px",
              border: "5px solid rgba(255,255,255,0.3)",
              borderTop: "5px solid white",
              borderRadius: "50%",
              animation: "spin 1s linear infinite"
            }}></div>
            <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
              Loading products...
            </span>
          </div>
        )}

        {!loading && error && (
          <div 
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "32px",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              border: "2px solid rgba(239, 68, 68, 0.3)",
              backdropFilter: "blur(10px)"
            }}
            role="alert"
          >
            <p style={{ color: "white", fontSize: "18px", margin: 0, fontWeight: "600" }}>{error}</p>
          </div>
        )}

        {!loading && Array.isArray(products) && products.length === 0 && !error && (
          <div 
            style={{
              background: "rgba(255,255,255,0.1)",
              borderRadius: "20px",
              padding: "32px",
              textAlign: "center",
              boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
              border: "2px solid rgba(255,255,255,0.2)",
              backdropFilter: "blur(10px)"
            }}
            role="status"
          >
            <p style={{ color: "white", fontSize: "18px", margin: 0, fontWeight: "600" }}>
              No best deals available
            </p>
          </div>
        )}

        {!loading && Array.isArray(products) && products.length > 0 && (
          <div 
            ref={scope}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "24px",
              padding: "20px"
            }}
          >
            {productList}
          </div>
        )}
      </div>

      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          
          .product-card:hover .card-hover-overlay {
            opacity: 1;
          }
          
          @media (max-width: 768px) {
            .Offer__ProductCardWrapper {
              height: 300px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Offer;