import React, { useEffect, useState, useCallback } from "react";
import "./SimilarProduct.scss";
import { stagger, useAnimate, useInView } from "framer-motion";
import { Itemcard } from "../../common/UI/Itemcard/Itemcard";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CheckCircle, AlertCircle, X } from "lucide-react";

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
    <div className={`toast toast--${type}`}>
      <div className="toast__content">
        <div className="toast__icon">
          {type === "success" ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
        </div>
        <span className="toast__message">{message}</span>
        <button className="toast__close" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export const SimilarProduct = ({ similarProducts = [], getImageUrl }) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Disclaimer");
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [moq, setMoq] = useState(1);
  const [wishlistItems, setWishlistItems] = useState([]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;

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

  useEffect(() => {
    const fetchMoq = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/bulk/get-bulk-order`);
        if (response?.data?.bulkOrderNumber) {
          setMoq(response.data.bulkOrderNumber);
        }
      } catch (err) {
        console.error("Error fetching MOQ:", err);
      }
    };
    fetchMoq();
  }, [BASE_URL]);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const token = localStorage.getItem("userToken");
        if (!token) return;
        const resp = await axios.get(`${BASE_URL}/api/auth/wishlist`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const ids = Array.isArray(resp.data?.wishlist)
          ? resp.data.wishlist.map((p) => p._id || p.product?._id || p.product)
          : [];
        setWishlistItems(ids.filter(Boolean));
      } catch (err) {
        console.error("Error fetching wishlist:", err);
      }
    };
    fetchWishlist();
  }, [BASE_URL]);

  const handleAddToCart = useCallback(async (e, product) => {
    e.stopPropagation();
    const token = checkTokenAndRedirect();
    if (!token) return;

    if (!product || product.stock === 0) {
      showToast("Product is out of stock", "error");
      return;
    }

    if (moq > product.stock) {
      showToast(`Only ${product.stock} items available in stock`, "error");
      return;
    }

    try {
      await axios.post(
        `${BASE_URL}/api/user/add-to-cart`,
        {
          productId: product._id,
          quantity: moq,
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
          images: product.images,
          stock: product.stock,
        },
        quantity: moq,
      };

      const existingCart = JSON.parse(localStorage.getItem("localCart") || "[]");
      const itemIndex = existingCart.findIndex((item) => item.product._id === product._id);

      if (itemIndex > -1) {
        existingCart[itemIndex].quantity += moq;
      } else {
        existingCart.push(cartItem);
      }

      localStorage.setItem("localCart", JSON.stringify(existingCart));
      window.dispatchEvent(new Event("cartUpdated"));
      showToast(`${moq} items added to cart successfully!`, "success");
    } catch (err) {
      console.error("Error adding to cart:", err);
      showToast(err.response?.data?.message || "Failed to add to cart", "error");
    }
  }, [moq, showToast, checkTokenAndRedirect, BASE_URL]);

  const handleWishlist = useCallback(async (e, product) => {
    e.stopPropagation();
    const token = checkTokenAndRedirect();
    if (!token) return;

    try {
      const isInWishlist = wishlistItems.includes(product._id);
      
      if (isInWishlist) {
        await axios.delete(`${BASE_URL}/api/auth/wishlist/${product._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWishlistItems(prev => prev.filter(id => id !== product._id));
        showToast("Removed from wishlist", "success");
      } else {
        await axios.post(
          `${BASE_URL}/api/auth/wishlist`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setWishlistItems(prev => [...prev, product._id]);
        showToast("Added to wishlist", "success");
      }
      window.dispatchEvent(new Event("wishlistUpdated"));
    } catch (err) {
      console.error("Wishlist error:", err);
      showToast(err.response?.data?.message || "Wishlist action failed", "error");
    }
  }, [wishlistItems, showToast, checkTokenAndRedirect, BASE_URL]);

  useEffect(() => {
    console.log("Rendering SimilarProduct with similarProducts:", similarProducts);
    
    if (isInView && Array.isArray(similarProducts) && similarProducts.length > 0) {
      animate(
        ".product-card",
        {
          opacity: [0, 1],
          y: [30, 0],
          scale: [0.95, 1],
        },
        {
          duration: 0.5,
          ease: [0.25, 0.46, 0.45, 0.94],
          delay: stagger(0.08, { startDelay: 0.1 }),
        }
      );
    }
  }, [isInView, similarProducts, animate]);

  const tabContent = {
    Description: "Grapefruit oil is cold-pressed out of the grapefruit peel. It contains potent antioxidants and fat-burning properties that aid weight loss, prevents cancer-causing DNA changes, reduce inflammation, boost the immune system, and reduce stress. In addition, its antibacterial properties combat fungal and bacterial infections.",
    "Additional information": "No additional information available.",
    Ingredient: "LATIN NAME: Citrus paradisi / PART USED: Peel / EXTRACTION METHOD: Cold Pressed / ORIGIN: USA. 100% Pure Pink Grapefruit Oil",
    Disclaimer: "*Disclaimer: Statements made, or products sold through this website, have not been evaluated by the United States Food and Drug Administration. They are not intended to diagnose, treat, cure or prevent any disease.",
  };

  return (
    <div className="similar-products">
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
      <div className="tab-section">
        {Object.keys(tabContent).map((tab) => (
          <button
            key={tab}
            className={`tab ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
        <div className="tab-content">{tabContent[activeTab]}</div>
      </div>
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-text">Customers also viewed</span>
          <span className="title-accent"></span>
        </h2>
        {Array.isArray(similarProducts) && similarProducts.length > 4 && (
          <button className="view-all-btn">
            View All
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {!Array.isArray(similarProducts) || similarProducts.length === 0 ? (
        <div className="no-products">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="empty-icon">
            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.3"/>
            <path d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <p>No similar products availablessss</p>
        </div>
      ) : (
        <div ref={scope} className="product-grid">
          {similarProducts.map((product, index) => (
            <div
              key={product._id}
              className="product-card"
              onClick={() => navigate(`/products-details/${product._id}`)}
              style={{ opacity: 0 }}
            >
              <div className="card-content">
                <div className="product-badge">
                  {product.stock > 5 && <span className="badge popular">Popular</span>}
                  {product.stock <= 5 && product.stock > 0 && <span className="badge limited">Limited</span>}
                </div>
                <Itemcard
                  id={product._id}
                  image={getImageUrl(product.images?.[0] || "")}
                  // company={product.createdBy?.name || "Unknown"}
                  title={product.name}
                  price={product.buyPrice}
                  stock={product.stock > 0 ? "In Stock" : "Out of Stock"}
                />
                <div className="quick-actions">
                  <button 
                    className="action-btn" 
                    onClick={(e) => handleWishlist(e, product)}
                    style={{ fill: wishlistItems.includes(product._id) ? 'red' : 'none' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill={wishlistItems.includes(product._id) ? 'red' : 'none'}>
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                  <button 
                    className="action-btn primary" 
                    onClick={(e) => handleAddToCart(e, product)}
                    disabled={product.stock === 0}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M9 2L3 6v6c0 3.31 2.69 6 6 6h6c3.31 0 6-2.69 6-6V6l-6-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M12 7v10m-5-5h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};