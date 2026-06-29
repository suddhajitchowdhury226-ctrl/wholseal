import React, { useCallback, useEffect, useState, useRef, useMemo } from "react";
import "./Productoverview.scss";
import { Rating } from "react-simple-star-rating";
import { Briefcase, Heart, Minus, Plus, ShoppingCart, CheckCircle, AlertCircle, X, MapPin, Share2 } from "lucide-react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { SimilarProduct } from "../SimilarProduct/SimilarProduct";
import placeholderImg from "../../../assets/images/bg/prod-img.webp";

// Spinner Component
const Spinner = ({ size = "medium", color = "#007bff" }) => {
  const sizeMap = {
    small: "20px",
    medium: "40px",
    large: "60px"
  };

  const spinnerStyle = {
    width: sizeMap[size],
    height: sizeMap[size],
    border: "3px solid #f3f3f3",
    borderTop: `3px solid ${color}`,
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
    display: "inline-block"
  };

  return (
    <div className="spinner-container" style={{ textAlign: "center", padding: "20px" }}>
      <div style={spinnerStyle}></div>
      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

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

// Full Screen Loader Component
const FullScreenLoader = ({ show, message = "Adding to cart..." }) => {
  if (!show) return null;

  return (
    <div className="fullscreen-loader">
      <div className="fullscreen-loader__backdrop">
        <div className="fullscreen-loader__content">
          <div className="fullscreen-loader__spinner"></div>
          <p className="fullscreen-loader__message">{message}</p>
        </div>
      </div>
    </div>
  );
};

export const Productoverview = () => {
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [rating, setRating] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [mainImage, setMainImage] = useState("");
  const [addingToCart, setAddingToCart] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [moq, setMoq] = useState(1);
  
  const { pid } = useParams();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const cancelTokenRef = useRef();

  const getImageUrl = useCallback((imagePath) => {
    if (!imagePath) return placeholderImg;
    return imagePath.startsWith("http") ? imagePath : `${BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
  }, []);

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
    const fetchProduct = async () => {
      if (!pid || pid === "undefined") {
        setError("Invalid product ID");
        setLoading(false);
        return;
      }

      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("userToken");
        const response = await fetchWithCancel(
          `${BASE_URL}/api/user/get-single-product/${pid}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (!response) return; // Request was cancelled

        const { product, similarProducts = [] } = response.data;
        if (!product) {
          setError("Product not found");
          setLoading(false);
          return;
        }

        setProduct(product);
        setSimilarProducts(Array.isArray(similarProducts) ? similarProducts : []);
        if (product.images?.length > 0) {
          setMainImage(getImageUrl(product.images[0]));
        }

        if (token) {
          // Fetch wishlist status only if user is logged in
          try {
            const wishlistRes = await axios.get(`${BASE_URL}/api/auth/wishlist`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            const wishlistItems = wishlistRes.data.wishlist || [];
            const isInWishlist = wishlistItems.some(item => item._id === product._id);
            setIsWishlisted(isInWishlist);
          } catch (err) {
            console.error("Error fetching wishlist:", err);
            setIsWishlisted(false);
          }
        }
      } catch (err) {
        console.error("Error fetching product:", err);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userToken");
          setError("Please log in to view product details");
          navigate("/auth/login");
        } else if (err.response?.status === 400) {
          setError("Invalid product ID format");
        } else if (err.response?.status === 404) {
          setError("Product not found");
        } else {
          setError(err.response?.data?.message || "Failed to load product");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [pid, navigate, getImageUrl, fetchWithCancel]);

  const handleRating = useCallback((rate) => {
    setRating(rate);
  }, []);

  const handleQuantityChange = useCallback((action) => {
    if (action === "increment" && product?.stock > quantity) {
      setQuantity(prev => prev + 1);
    } else if (action === "decrement" && quantity > moq) {
      setQuantity(prev => prev - 1);
    }
  }, [product, quantity, moq]);

  const handleImageClick = useCallback((image) => {
    setMainImage(image);
  }, []);

  const handleAddToCart = useCallback(async () => {
    const token = checkTokenAndRedirect();
    if (!token) return;

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

    setAddingToCart(true);

    try {
      const response = await axios.post(
        `${BASE_URL}/api/user/add-to-cart`,
        {
          productId: pid,
          quantity,
          websiteRole: 'wholesaler',
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const cartItem = {
        _id: `${pid}_${Date.now()}`,
        product: {
          _id: pid,
          name: product.name,
          sellPrice: product.sellPrice,
          images: product.images,
          stock: product.stock,
        },
        quantity,
      };

      const existingCart = JSON.parse(localStorage.getItem("localCart") || "[]");
      const itemIndex = existingCart.findIndex((item) => item.product._id === pid);

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
      setAddingToCart(false);
    }
  }, [pid, product, quantity, moq, showToast, checkTokenAndRedirect]);

  const handleWishlist = useCallback(async () => {
    const token = checkTokenAndRedirect();
    if (!token) return;

    try {
      if (isWishlisted) {
        await axios.delete(`${BASE_URL}/api/auth/wishlist/${product._id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setIsWishlisted(false);
        showToast("Removed from wishlist", "success");
        window.dispatchEvent(new Event("wishlistUpdated"));
      } else {
        await axios.post(
          `${BASE_URL}/api/auth/wishlist`,
          { productId: product._id },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setIsWishlisted(true);
        showToast("Added to wishlist", "success");
        window.dispatchEvent(new Event("wishlistUpdated"));
      }
    } catch (err) {
      console.error("Wishlist error:", err);
      showToast(err.response?.data?.message || "Wishlist action failed", "error");
    }
  }, [product, isWishlisted, showToast, checkTokenAndRedirect]);

  const totalPrice = useMemo(() => {
    return product ? (product.buyPrice * quantity).toFixed(2) : "0.00";
  }, [product, quantity]);

  useEffect(() => {
    if (moq > 1) {
      setQuantity(moq);
    }
  }, [moq]);

  return (
    <div className="product-overview">
      <FullScreenLoader show={addingToCart} message="Adding to cart..." />
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />

      {loading && <Spinner size="large" color="#007bff" />}
      {error && <p className="error">{error}</p>}
      {!loading && !error && product && (
        <>
          <div className="product-overview__container">
            <div className="product-overview__image-section">
              <div className="main-image">
                <img 
                  src={mainImage || placeholderImg} 
                  alt={product.name}
                  onError={(e) => { e.target.src = placeholderImg; }}
                />
              </div>
              <div className="thumbnail-gallery">
                {product.images?.map((image, index) => (
                  <div
                    key={index}
                    className={`thumbnail ${mainImage === getImageUrl(image) ? "active" : ""}`}
                    onClick={() => handleImageClick(getImageUrl(image))}
                  >
                    <img 
                      src={getImageUrl(image)} 
                      alt={`${product.name} preview ${index + 1}`}
                      onError={(e) => { e.target.src = placeholderImg; }}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="product-overview__info-section">
              <h4 className="category">{product.category?.name || "Uncategorized"}</h4>
              <h1 className="title">{product.name}</h1>


              <div className="price-section">
                <span className="buy-price">Price: ${product.buyPrice.toFixed(2)}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <p className={`stock-status ${product.stock > 0 ? "in-stock" : "out-of-stock"}`}>
                  {product.stock > 0 ? `In Stock (${product.stock} available)` : "Out of Stock"}
                </p>
                <button
                  onClick={() => {
                    navigator.share({
                      title: product.name,
                      text: `Check out ${product.name}`,
                      url: window.location.href
                    }).catch(() => {
                      navigator.clipboard.writeText(window.location.href);
                      showToast('Link copied to clipboard!', 'success');
                    });
                  }}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    cursor: 'pointer',
                    padding: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#77a13d'
                  }}
                  title="Share product"
                >
                  <Share2 size={20} />
                </button>
              </div>

              {product.bin_location && (
                <div className="bin-location-badge">
                  <MapPin size={16} />
                  <span>Bin Location: <strong>{product.bin_location}</strong></span>
                </div>
              )}

              <div className="action-section">
                <div className="quantity-selector">
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange("decrement")}
                    disabled={quantity <= moq}
                  >
                    <Minus size={16} />
                  </button>
                  <span className="quantity">{quantity}</span>
                  <button
                    className="quantity-btn"
                    onClick={() => handleQuantityChange("increment")}
                    disabled={quantity >= product.stock}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div style={{ fontSize: '12px', color: '#6b7280', marginTop: '8px' }}>
                  MINIMUM ORDER QUANTITY: {moq}
                </div>

                <div className="action-buttons">
                  <button
                    className="add-to-cart"
                    onClick={handleAddToCart}
                    disabled={product.stock === 0 || addingToCart}
                  >
                    <ShoppingCart size={20} />
                    Add to Cart
                  </button>
                  {/* <button
                    className="buy-now"
                    onClick={handleBuyNow}
                    disabled={product.stock === 0}
                  >
                    <Briefcase size={20} />
                    Buy Now
                  </button> */}
                  <button
                    className={`wishlist ${isWishlisted ? "wishlisted" : ""}`}
                    onClick={handleWishlist}
                    title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
                  >
                    <Heart size={20} fill={isWishlisted ? "red" : "none"} />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <SimilarProduct similarProducts={similarProducts} getImageUrl={getImageUrl} />
        </>
      )}
    </div>
  );
};
