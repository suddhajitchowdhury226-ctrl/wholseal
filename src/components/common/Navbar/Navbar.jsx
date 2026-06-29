


import React, { useEffect, useRef, useState, useCallback, useMemo, memo } from "react";
import "./Navbar.scss";
import Logo from "../../../assets/images/logos/WholesaleLogo.png";
import {
  CircleX,
  Heart,
  ShoppingCart,
  Trash2,
  Minus,
  Plus,
  CheckCircle,
  AlertCircle,
  X,
  ChevronDown,
  ChevronUp,
  LogOut,
  User,
  Menu,
  Search,
  Home,
  Info,
  ShoppingBag,
  FileText,
  Mail,
  Building2,
  MessageSquare,
} from "lucide-react";
import { Avatar } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import { loadStripe } from "@stripe/stripe-js";
import _ from "lodash";
import { motion } from "framer-motion";

import { jwtDecode } from "jwt-decode";

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

const STRIPE_PUBLISHABLE_KEY =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ||
  "pk_test_51Pzw0LP7DJ8fgdDBWpegxFsZqtmbHZkIxChlGrx1cQmacXTlJa5w2FvSr9cEF8phWB7wxsRlzI2qCYoYHcm4YbQw00a45tFQ2c";
const stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);

export const Navbar = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });
  const [labelDetails, setLabelDetails] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchLoading, setSearchLoading] = useState(false);
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(null);

  const toggleCategory = (category) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  const token = localStorage.getItem("userToken");
  let decodedToken = null;
  let firstName = "User";

  if (token) {
    try {
      decodedToken = jwtDecode(token);
      firstName = decodedToken?.id?.name?.split(" ")[0] || "User";
    } catch (error) {
      console.error("Error decoding token:", error);
      localStorage.removeItem("userToken");
    }
  }

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: "", type: "" });
  };

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("checkoutSessionId");
    localStorage.removeItem("shipEngineLabelId");
    localStorage.removeItem("trackingNumber");
    localStorage.removeItem("labelDownload");
    showToast("Logged out successfully", "success");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
    setExpandedCategory(null);
    navigate("/");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const searchProducts = useCallback(
    _.debounce(async (query) => {
      if (!query.trim()) {
        setSearchSuggestions([]);
        setShowSuggestions(false);
        return;
      }

      setSearchLoading(true);
      try {
        const response = await axiosInstance.get(
          `${BASE_URL}/api/wholesaler/search-products?search=${encodeURIComponent(query.trim())}&page=1&limit=6`
        );

        if (response.data.products) {
          setSearchSuggestions(response.data.products);
          setShowSuggestions(true);
        }
      } catch (error) {
        console.error("Error searching products:", error);
        setSearchSuggestions([]);
      } finally {
        setSearchLoading(false);
      }
    }, 500),
    [BASE_URL]
  );

  const updateCartCount = useCallback(
    _.debounce(async () => {
      try {
        // Skip cart count update during any cart operations to prevent conflicts
        if (window.isCouponApplying) {
          console.log("[DEBUG] Skipping cart count update during coupon application");
          return;
        }

        const token = localStorage.getItem("userToken");
        if (!token) return;
        const response = await axiosInstance.get("/api/user/get-cart", {
          headers: {
            Authorization: `Bearer ${token}`,
            'X-Website-Role': 'wholesaler'
          },
        });
        const cart = response.data.cart;
        // Count unique products, not total quantity
        const uniqueItems = cart.items.length;
        setCartItemCount(uniqueItems);
      } catch (error) {
        console.error("Error fetching cart count:", error);
      }
    }, 300),
    []
  );

  useEffect(() => {
    updateCartCount();
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdate);
      updateCartCount.cancel();
    };
  }, [updateCartCount]);

  // Memoized Coupon Section to prevent unnecessary re-renders
  const CouponSection = memo(({
    couponCode,
    setCouponCode,
    couponError,
    setCouponError,
    couponLoading,
    couponDiscount,
    coupons,
    isCouponsOpen,
    setIsCouponsOpen,
    handleApplyCoupon,
    handleRemoveCoupon,
    handleSelectCoupon,
    loading,
    cartItems,
    totalCartPrice
  }) => {
    return (
      <div style={{ margin: "1rem 0" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            cursor: "pointer",
            padding: "0.75rem 1rem",
            backgroundColor: "#f5f5f5",
            borderRadius: "0.5rem",
          }}
          onClick={() => setIsCouponsOpen(!isCouponsOpen)}
        >
          <h3
            style={{
              fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.2dvw",
              fontFamily: "Roboto, sans-serif",
              fontWeight: "600",
              color: "#333",
            }}
          >
            Apply Coupon Code
          </h3>
          {isCouponsOpen ? (
            <ChevronUp size={window.innerWidth <= 768 ? 16 : 18} color="#333" />
          ) : (
            <ChevronDown size={window.innerWidth <= 768 ? 16 : 18} color="#333" />
          )}
        </div>

        {isCouponsOpen && coupons.length > 0 && (
          <div style={{ margin: "0.75rem 0", padding: "0.75rem", backgroundColor: "#f9f9f9", borderRadius: "0.5rem" }}>
            <h4 style={{ fontSize: window.innerWidth <= 768 ? "3vw" : "1.1dvw", marginBottom: "0.5rem" }}>
              Available Coupons
            </h4>
            <div style={{ display: "grid", gap: "0.5rem" }}>
              {coupons.map((coupon) => {
                const isApplicable = parseFloat(totalCartPrice) >= coupon.minPurchase;
                return (
                  <div
                    key={coupon._id}
                    style={{
                      border: `1px solid ${isApplicable ? "#28a745" : "#e0e0e0"}`,
                      borderRadius: "0.5rem",
                      padding: "0.75rem",
                      cursor: isApplicable ? "pointer" : "not-allowed",
                      backgroundColor: isApplicable ? "rgba(40, 167, 69, 0.1)" : "#f8f9fa",
                      opacity: isApplicable ? 1 : 0.6,
                    }}
                    onClick={() => isApplicable && handleSelectCoupon(coupon)}
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <h5 style={{ fontSize: window.innerWidth <= 768 ? "3vw" : "1.1dvw", margin: 0 }}>
                        {coupon.code}
                      </h5>
                      <span style={{
                        fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                        color: isApplicable ? "#28a745" : "#dc3545",
                        fontWeight: "600"
                      }}>
                        {coupon.discountType === "percentage" ? `${coupon.discountValue}% OFF` : `$${coupon.discountValue} OFF`}
                      </span>
                    </div>
                    <p style={{ fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw", margin: "0.25rem 0", color: "#666" }}>
                      Min Purchase: ${coupon.minPurchase}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", margin: "0.75rem 0" }}>
          <input
            type="text"
            placeholder="Enter coupon code"
            value={couponCode}
            onChange={(e) => {
              setCouponCode(e.target.value);
              setCouponError("");
            }}
            style={{
              flex: 1,
              padding: "0.5rem",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
              fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
              fontFamily: "Open Sans, sans-serif",
              outline: "none",
            }}
            disabled={couponLoading || loading}
          />
          {couponLoading ? (
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem" }}>
              <div className="spinner small-spinner"></div>
              <span style={{ fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw", color: "#666" }}>
                Applying...
              </span>
            </div>
          ) : (
            <button
              type="button"
              onClick={handleApplyCoupon}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "4px",
                backgroundColor: couponLoading || loading ? "#28a74580" : "#28a745",
                color: "#ffffff",
                fontFamily: "Roboto, sans-serif",
                fontWeight: "600",
                fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                cursor: couponLoading || loading ? "not-allowed" : "pointer",
                border: "none",
                transition: "background-color 0.2s",
              }}
              disabled={couponLoading || loading}
            >
              Apply
            </button>
          )}
        </div>

        {couponError && (
          <p style={{ color: "#dc3545", fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw", margin: "0.5rem 0" }}>
            {couponError}
          </p>
        )}

        {couponDiscount > 0 && (
          <div style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "0.5rem",
            backgroundColor: "#e9f7ef",
            borderRadius: "4px",
            margin: "0.5rem 0"
          }}>
            <span style={{ color: "#28a745", fontWeight: "600" }}>
              Coupon Applied: -${couponDiscount.toFixed(2)}
            </span>
            <button
              type="button"
              onClick={handleRemoveCoupon}
              style={{
                padding: "0.25rem 0.5rem",
                backgroundColor: "#dc3545",
                color: "#ffffff",
                border: "none",
                borderRadius: "4px",
                fontSize: window.innerWidth <= 768 ? "2vw" : "0.8dvw",
                cursor: "pointer",
              }}
            >
              Remove
            </button>
          </div>
        )}
      </div>
    );
  });

  const CartModel = ({ setIsCartOpen }) => {
    const [cartItems, setCartItems] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [shippingLoading, setShippingLoading] = useState(false);
    const [couponLoading, setCouponLoading] = useState(false);
    const [addresses, setAddresses] = useState([]);
    const [selectedAddressId, setSelectedAddressId] = useState(null);
    const [addressLoading, setAddressLoading] = useState(true);
    const [shippingCost, setShippingCost] = useState(0);
    const [isAddressOpen, setIsAddressOpen] = useState(false);
    const [couponCode, setCouponCode] = useState("");
    const [couponDiscount, setCouponDiscount] = useState(0);
    const [couponId, setCouponId] = useState(null);
    const [couponError, setCouponError] = useState("");
    const [coupons, setCoupons] = useState([]);
    const [isCouponsOpen, setIsCouponsOpen] = useState(false);
    const [toast, setToast] = useState({ show: false, message: "", type: "" });

    const showToast = (message, type = "success") => {
      setToast({ show: true, message, type });
    };

    const hideToast = () => {
      setToast({ show: false, message: "", type: "" });
    };
    const mainWrapperRef = useRef(null);
    const prevCartItemsRef = useRef(cartItems);
    const isCheckingOut = useRef(false);
    const isCouponApplying = useRef(false);
    const shippingFetched = useRef(false);

    const memoizedCartItems = useMemo(() => cartItems, [cartItems]);
    const initialCartFetched = useRef(false);

    useEffect(() => {
      if (initialCartFetched.current) return; // Prevent multiple fetches

      const fetchCart = async () => {
        try {
          setLoading(true);
          const token = localStorage.getItem("userToken");
          if (!token) {
            showToast("Please log in to view cart", "error");
            navigate("/auth/login");
            setIsCartOpen(false);
            return;
          }
          const response = await axiosInstance.get("/api/user/get-cart", {
            headers: {
              Authorization: `Bearer ${token}`,
              'X-Website-Role': 'wholesaler'
            },
          });
          const cart = response.data.cart;

          // Store createdBy info in cookie for review submission
          const createdByIds = cart.items.map(item => item.product.createdBy?._id).filter(Boolean);
          if (createdByIds.length > 0) {
            document.cookie = `cartCreatedBy=${JSON.stringify(createdByIds)}; path=/; max-age=3600`;
          }

          const validatedCart = cart.items
            .filter((item) => item.product?._id && /^[0-9a-fA-F]{24}$/.test(item.product._id))
            .map((item) => ({
              _id: `${item.product._id}_${Date.now()}`,
              product: {
                _id: item.product._id,
                name: item.product.name || "Unnamed Product",
                buyPrice: item.product.buyPrice || 0,
                images: item.product.images || [],
                stock: item.product.stock || 0,
                weight: item.product.weight || 0.016,
                dimensions: item.product.dimensions || { length: 10, width: 5, height: 2 },
                description: item.product.description || "No description available",
              },
              quantity: item.quantity,
            }));
          setCartItems(validatedCart);
          initialCartFetched.current = true;
        } catch (error) {
          console.error("Error fetching cart:", error);
          showToast("Failed to load cart", "error");
          setCartItems([]);
        } finally {
          setLoading(false);
        }
      };
      fetchCart();
    }, []);

    useEffect(() => {
      const fetchAddresses = async () => {
        // Skip address fetch if cart is empty
        if (cartItems.length === 0) {
          setAddressLoading(false);
          return;
        }

        try {
          setAddressLoading(true);
          const res = await axiosInstance.get("/api/auth/get-addresses");
          setAddresses(res.data.addresses || []);
          const defaultAddress = res.data.addresses.find((addr) => addr.isDefault);
          if (defaultAddress) {
            setSelectedAddressId(defaultAddress._id);
            setIsAddressOpen(false);
          } else {
            setIsAddressOpen(true);
          }
        } catch (error) {
          console.error("Error fetching addresses:", error);
          showToast("Failed to fetch addresses", "error");
        } finally {
          setAddressLoading(false);
        }
      };

      const fetchCoupons = async () => {
        try {
          const token = localStorage.getItem("userToken");
          if (!token) return;
          const response = await axiosInstance.get(`/api/user/get-coupon`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setCoupons(response.data || []);
        } catch (error) {
          console.error("Error fetching coupons:", error);
          showToast("Failed to fetch coupons", "error");
          setCoupons([]);
        }
      };

      // Fetch both address and coupons only once on mount
      fetchAddresses();
      fetchCoupons();
    }, [cartItems.length]);

    const fetchShippingRates = useCallback(
      _.debounce(async (addressId, cart) => {
        // Prevent shipping calculation during coupon application
        if (isCouponApplying.current) {
          console.log("[DEBUG] Skipping shipping calculation during coupon application");
          return;
        }

        if (!addressId || addressLoading || cart.length === 0) {
          setShippingCost(0);
          setShippingLoading(false);
          return;
        }

        // Skip if shipping already fetched for this cart and address combination
        if (shippingFetched.current && selectedAddressId === addressId) {
          console.log("[DEBUG] Shipping already calculated for this address");
          return;
        }

        try {
          setShippingLoading(true);
          const token = localStorage.getItem("userToken");
          if (!token) {
            showToast("Please log in to calculate shipping", "error");
            navigate("/auth/login");
            setIsCartOpen(false);
            return;
          }

          const payloadCart = cart.map((item) => ({
            product: {
              _id: item.product._id,
              weight: item.product.weight || 0.016,
              dimensions: item.product.dimensions || { length: 10, width: 5, height: 2 },
            },
            quantity: item.quantity,
          }));

          const response = await axiosInstance.post(
            "/api/user/calculate-shipping-rates",
            {
              addressId,
              cartItems: payloadCart,
            },
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          );

          if (response.data.shippingRates?.length > 0) {
            const cost = parseFloat(response.data.shippingRates[0].cost);
            setShippingCost(cost);
            shippingFetched.current = true; // Mark shipping as fetched
            console.log("[DEBUG] Shipping cost fetched:", cost);
          } else {
            showToast("No shipping rates available", "error");
            setShippingCost(0);
          }
        } catch (err) {
          console.error("Error fetching shipping rates:", err.response?.data || err);
          let errorMessage = err.response?.data?.message || "Error calculating shipping cost";
          if (err.response?.data?.validationErrors) {
            errorMessage = err.response.data.validationErrors[0]?.message || "Invalid shipping address";
            showToast(`${errorMessage}. Please update your address.`, "error");
            navigate("/account/my-profile", { state: { openTab: "Address" } });
            setIsCartOpen(false);
          } else {
            showToast(errorMessage, "error");
          }
          if (
            err.response?.status === 401 &&
            (err.response?.data?.message === "Not authorized, token failed" ||
              err.response?.data?.message === "Not authorized, no token")
          ) {
            localStorage.removeItem("userToken");
            navigate("/auth/login");
            setIsCartOpen(false);
          }
          setShippingCost(0);
        } finally {
          setShippingLoading(false);
        }
      }, 1000),
      [addressLoading, navigate]
    );

    useEffect(() => {
      // Skip all calculations during coupon application or if cart is empty
      if (isCouponApplying.current || memoizedCartItems.length === 0) {
        return;
      }

      const prevCart = prevCartItemsRef.current;
      const cartHasChanged =
        JSON.stringify(
          memoizedCartItems.map((item) => ({
            id: item.product._id,
            quantity: item.quantity,
            weight: item.product.weight || 0.016,
          }))
        ) !==
        JSON.stringify(
          prevCart.map((item) => ({
            id: item.product._id,
            quantity: item.quantity,
            weight: item.product.weight || 0.016,
          }))
        );

      // Only fetch shipping rates if cart items actually changed or address changed (first time)
      // Don't refetch on coupon state changes or if already fetched
      if ((cartHasChanged || (selectedAddressId && !shippingFetched.current)) &&
        !addressLoading &&
        !isCheckingOut.current &&
        initialCartFetched.current &&
        !isCouponApplying.current) {
        fetchShippingRates(selectedAddressId, memoizedCartItems);
      }
      prevCartItemsRef.current = memoizedCartItems;
    }, [selectedAddressId, memoizedCartItems, fetchShippingRates, addressLoading]);

    const handleSelectCoupon = useCallback((coupon) => {
      setCouponCode(coupon.code);
      setCouponError("");
      setIsCouponsOpen(false);
      showToast(`Selected coupon: ${coupon.code}`, "success");
    }, []);

    const handleApplyCoupon = useCallback(async (e) => {
      e.preventDefault();
      if (!couponCode) {
        setCouponError("Please enter or select a coupon code");
        showToast("Please enter or select a coupon code", "error");
        return;
      }
      if (!selectedAddressId) {
        setCouponError("Please select a shipping address before applying a coupon");
        showToast("Please select a shipping address", "error");
        return;
      }

      // Set flag to prevent other API calls
      isCouponApplying.current = true;
      window.isCouponApplying = true; // Global flag for updateCartCount
      setCouponLoading(true);
      setCouponError("");

      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          showToast("Please log in to apply coupon", "error");
          navigate("/auth/login");
          setIsCartOpen(false);
          return;
        }

        const payloadCart = memoizedCartItems.map((item) => ({
          product: { _id: item.product._id },
          quantity: item.quantity,
        }));

        const response = await axiosInstance.post(
          "/api/user/apply",
          {
            code: couponCode.trim().toUpperCase(),
            cartItems: payloadCart,
            addressId: selectedAddressId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        // Update coupon state without triggering other re-renders
        setCouponDiscount(response.data.discount);
        setCouponId(response.data.couponId);
        showToast(`Coupon applied! You saved $${response.data.discount.toFixed(2)}`, "success");

        // Keep the coupon applying flag for a short time to prevent immediate API calls
        setTimeout(() => {
          isCouponApplying.current = false;
          window.isCouponApplying = false;
        }, 1000);

      } catch (err) {
        console.error("Error applying coupon:", err.response?.data);
        const errorMessage = err.response?.data?.message || "Failed to apply coupon";
        setCouponError(errorMessage);
        setCouponDiscount(0);
        setCouponId(null);
        showToast(errorMessage, "error");
        isCouponApplying.current = false; // Reset flag on error
        window.isCouponApplying = false;
        if (
          err.response?.status === 401 &&
          (err.response?.data?.message === "Not authorized, token failed" ||
            err.response?.data?.message === "Not authorized, no token")
        ) {
          localStorage.removeItem("userToken");
          navigate("/auth/login");
          setIsCartOpen(false);
        }
      } finally {
        setCouponLoading(false);
      }
    }, [couponCode, selectedAddressId, memoizedCartItems, navigate]);

    const handleRemoveCoupon = useCallback(() => {
      setCouponCode("");
      setCouponDiscount(0);
      setCouponId(null);
      setCouponError("");
      isCouponApplying.current = false; // Reset flag when removing coupon
      window.isCouponApplying = false;
      showToast("Coupon removed", "success");
    }, []);

    const handleOnChange = (e) => {
      const value = e.target.value;
      if (value === "checkAll" && e.target.checked) {
        const allIds = memoizedCartItems.map((item) => item._id);
        setSelectedData(allIds);
      } else if (value === "checkAll" && !e.target.checked) {
        setSelectedData([]);
      } else {
        setSelectedData((prev) =>
          prev.includes(value) ? prev.filter((id) => id !== value) : [...prev, value]
        );
      }
    };

    const handleQuantityChange = async (item, action) => {
      if (isCheckingOut.current) {
        showToast("Checkout in progress, please wait", "error");
        return;
      }

      const newQuantity = action === "increment" ? item.quantity + 1 : item.quantity - 1;
      if (newQuantity < 1) {
        showToast("Quantity cannot be less than 1", "error");
        return;
      }
      if (newQuantity > item.product.stock) {
        showToast(`Only ${item.product.stock} items available`, "error");
        return;
      }

      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          showToast("Please log in to update cart", "error");
          navigate("/auth/login");
          setIsCartOpen(false);
          return;
        }

        if (!item.product._id || !/^[0-9a-fA-F]{24}$/.test(item.product._id)) {
          showToast("Invalid product ID in cart", "error");
          return;
        }

        const response = await axiosInstance.put(
          "/api/user/update-cart",
          {
            productId: item.product._id,
            quantity: newQuantity,
            websiteRole: 'wholesaler',
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        setCartItems(
          response.data.cart.items.map((item) => ({
            _id: `${item.product._id}_${Date.now()}`,
            product: {
              _id: item.product._id,
              name: item.product.name || "Unnamed Product",
              buyPrice: item.product.buyPrice || 0,
              images: item.product.images || [],
              stock: item.product.stock || 0,
              weight: item.product.weight || 0.016,
              dimensions: item.product.dimensions || { length: 10, width: 5, height: 2 },
              description: item.product.description || "No description available",
            },
            quantity: item.quantity,
          }))
        );

        // Don't clear coupon state when updating quantity
        // setCouponDiscount(0);
        // setCouponId(null);
        // setCouponCode("");
        // setCouponError("");
        showToast("Cart item updated successfully", "success");
        // Don't dispatch cartUpdated event during coupon application
        if (!isCouponApplying.current) {
          window.dispatchEvent(new Event("cartUpdated"));
        }
      } catch (err) {
        console.error("Error updating cart item:", err.response?.data);
        const errorMessage = err.response?.data?.message || "Failed to update cart item";
        showToast(errorMessage, "error");
        if (
          err.response?.status === 401 &&
          (err.response?.data?.message === "Not authorized, token failed" ||
            err.response?.data?.message === "Not authorized, no token")
        ) {
          localStorage.removeItem("userToken");
          navigate("/auth/login");
          setIsCartOpen(false);
        }
      } finally {
        setLoading(false);
      }
    };

    const handleRemoveItem = async (item) => {
      if (isCheckingOut.current) {
        showToast("Checkout in progress, please wait", "error");
        return;
      }

      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          showToast("Please log in to remove items from cart", "error");
          navigate("/auth/login");
          setIsCartOpen(false);
          return;
        }

        const productId = item.product._id;
        if (!productId || !/^[0-9a-fA-F]{24}$/.test(productId)) {
          showToast("Invalid product ID", "error");
          return;
        }

        const response = await axiosInstance.delete("/api/user/delete-cart", {
          data: { productId },
          headers: { Authorization: `Bearer ${token}` },
        });

        setCartItems(
          response.data.cart.items.map((item) => ({
            _id: `${item.product._id}_${Date.now()}`,
            product: {
              _id: item.product._id,
              name: item.product.name || "Unnamed Product",
              buyPrice: item.product.buyPrice || 0,
              images: item.product.images || [],
              stock: item.product.stock || 0,
              weight: item.product.weight || 0.016,
              dimensions: item.product.dimensions || { length: 10, width: 5, height: 2 },
              description: item.product.description || "No description available",
            },
            quantity: item.quantity,
          }))
        );

        setSelectedData((prev) => prev.filter((id) => id !== item._id));
        setCouponDiscount(0);
        setCouponId(null);
        setCouponCode("");
        setCouponError("");
        showToast("Item removed from cart", "success");
        window.dispatchEvent(new Event("cartUpdated"));
      } catch (err) {
        console.error("Error removing cart item:", err.response?.data);
        const errorMessage = err.response?.data?.message || "Failed to remove cart item";
        showToast(errorMessage, "error");
        if (
          err.response?.status === 401 &&
          (err.response?.data?.message === "Not authorized, token failed" ||
            err.response?.data?.message === "Not authorized, no token")
        ) {
          localStorage.removeItem("userToken");
          navigate("/auth/login");
          setIsCartOpen(false);
        }
      } finally {
        setLoading(false);
      }
    };

    const handleRemoveSelected = async () => {
      if (isCheckingOut.current) {
        showToast("Checkout in progress, please wait", "error");
        return;
      }

      if (selectedData.length === 0) {
        showToast("No items selected", "error");
        return;
      }

      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          showToast("Please log in to remove items from cart", "error");
          navigate("/auth/login");
          setIsCartOpen(false);
          return;
        }

        for (const itemId of selectedData) {
          const item = memoizedCartItems.find((cartItem) => cartItem._id === itemId);
          if (item) {
            const productId = item.product._id;
            if (!productId || !/^[0-9a-fA-F]{24}$/.test(productId)) {
              showToast("Invalid product ID in selected items", "error");
              continue;
            }
            await axiosInstance.delete("/api/user/delete-cart", {
              data: { productId },
              headers: { Authorization: `Bearer ${token}` },
            });
          }
        }

        const response = await axiosInstance.get("/api/user/get-cart", {
          headers: {
            Authorization: `Bearer ${token}`,
            'X-Website-Role': 'wholesaler'
          },
        });
        const updatedCart = response.data.cart.items.map((item) => ({
          _id: `${item.product._id}_${Date.now()}`,
          product: {
            _id: item.product._id,
            name: item.product.name || "Unnamed Product",
            buyPrice: item.product.buyPrice || 0,
            images: item.product.images || [],
            stock: item.product.stock || 0,
            weight: item.product.weight || 0.016,
            dimensions: item.product.dimensions || { length: 10, width: 5, height: 2 },
            description: item.product.description || "No description available",
          },
          quantity: item.quantity,
        }));

        setCartItems(updatedCart);
        setSelectedData([]);
        setCouponDiscount(0);
        setCouponId(null);
        setCouponCode("");
        setCouponError("");
        showToast("Selected items removed from cart", "success");
        window.dispatchEvent(new Event("cartUpdated"));
      } catch (err) {
        console.error("Error removing selected items:", err.response?.data);
        const errorMessage = err.response?.data?.message || "Failed to remove selected items";
        showToast(errorMessage, "error");
        if (
          err.response?.status === 401 &&
          (err.response?.data?.message === "Not authorized, token failed" ||
            err.response?.data?.message === "Not authorized, no token")
        ) {
          localStorage.removeItem("userToken");
          navigate("/auth/login");
          setIsCartOpen(false);
        }
      } finally {
        setLoading(false);
      }
    };

    const handleCheckout = async () => {
      if (isCheckingOut.current) {
        showToast("Checkout already in progress, please wait", "error");
        return;
      }

      isCheckingOut.current = true;

      if (memoizedCartItems.length === 0) {
        showToast("Cart is empty", "error");
        isCheckingOut.current = false;
        return;
      }

      if (addresses.length === 0) {
        showToast("Please add a shipping address before checkout", "error");
        navigate("/account/my-profile", { state: { openTab: "Address" } });
        setIsCartOpen(false);
        isCheckingOut.current = false;
        return;
      }

      if (!selectedAddressId) {
        showToast("Please select a shipping address", "error");
        isCheckingOut.current = false;
        return;
      }

      if (shippingLoading) {
        showToast("Shipping cost is still being calculated, please wait", "error");
        isCheckingOut.current = false;
        return;
      }

      if (shippingCost <= 0) {
        showToast("Shipping cost is not available, please try again", "error");
        isCheckingOut.current = false;
        return;
      }

      setLoading(true);
      setError("");
      try {
        const token = localStorage.getItem("userToken");
        if (!token) {
          showToast("Please log in to proceed to checkout", "error");
          navigate("/auth/login");
          setIsCartOpen(false);
          isCheckingOut.current = false;
          return;
        }

        const cartResponse = await axiosInstance.get("/api/user/get-cart", {
          headers: {
            Authorization: `Bearer ${token}`,
            'X-Website-Role': 'wholesaler'
          },
        });
        const validatedCart = cartResponse.data.cart.items
          .filter((item) => item.product?._id && /^[0-9a-fA-F]{24}$/.test(item.product._id))
          .map((item) => ({
            _id: `${item.product._id}_${Date.now()}`,
            product: {
              _id: item.product._id,
              name: item.product.name || "Unnamed Product",
              buyPrice: item.product.buyPrice || 0,
              weight: item.product.weight || 0.016,
              dimensions: item.product.dimensions || { length: 10, width: 5, height: 2 },
            },
            quantity: item.quantity,
          }));

        if (validatedCart.length === 0) {
          showToast("No valid items in cart", "error");
          isCheckingOut.current = false;
          setLoading(false);
          return;
        }

        console.log(
          "[DEBUG] Validated cart items before checkout:",
          JSON.stringify(validatedCart, null, 2)
        );
        console.log("[DEBUG] Shipping cost before checkout:", shippingCost);

        const checkoutPayload = {
          addressId: selectedAddressId,
          shippingCost: shippingCost,
          userType: 'wholesaler',
          websiteRole: 'wholesaler',
          cartItems: validatedCart.map((item) => ({
            product: {
              _id: item.product._id,
              name: item.product.name || "Unnamed Product",
              buyPrice: item.product.buyPrice,
            },
            quantity: item.quantity,
          })),
        };

        if (couponId) {
          checkoutPayload.couponId = couponId;
        }

        console.log('[DEBUG] Frontend - Checkout payload being sent:', JSON.stringify(checkoutPayload, null, 2));

        // Store shipping cost in cookie for purchase summary
        document.cookie = `shippingCost=${shippingCost}; path=/; max-age=3600`;

        const checkoutResponse = await axiosInstance.post(
          "/api/user/create-checkout-session",
          checkoutPayload,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        console.log(
          "[DEBUG] Checkout session response:",
          JSON.stringify(checkoutResponse.data, null, 2)
        );

        if (!checkoutResponse.data.url) {
          throw new Error("Invalid checkout session URL");
        }

        localStorage.setItem("checkoutSessionId", checkoutResponse.data.sessionId);

        // Redirect to Stripe checkout page
        window.location.href = checkoutResponse.data.url;
        return; // Stop execution here as we are redirecting
      } catch (err) {
        console.error("Error during checkout:", err.response?.data || err);
        let errorMessage = err.response?.data?.message || err.message || "Failed to initiate checkout";
        showToast(errorMessage, "error");

        if (
          err.response?.status === 401 &&
          (err.response?.data?.message === "Not authorized, token failed" ||
            err.response?.data?.message === "Not authorized, no token")
        ) {
          localStorage.removeItem("userToken");
          navigate("/auth/login");
          setIsCartOpen(false);
        }
      } finally {
        setLoading(false);
        isCheckingOut.current = false;
      }
    };

    const totalCartPrice = memoizedCartItems
      .reduce((sum, item) => sum + (item.product.buyPrice || 0) * item.quantity, 0)
      .toFixed(2);
    const totalWithShipping = (parseFloat(totalCartPrice) + shippingCost - couponDiscount).toFixed(2);

    const selectedAddress = addresses.find((addr) => addr._id === selectedAddressId);

    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          height: "100vh",
          width: "100%",
          zIndex: 99999999,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(5px)",
        }}
      >
        <div
          style={{
            width: window.innerWidth <= 768 ? "100%" : "50%",
            maxWidth: "600px",
            backgroundColor: "#ffffff",
            height: "100%",
            overflowY: "auto",
            padding: "1.5rem",
            borderRadius: window.innerWidth <= 768 ? "0" : "8px 0 0 8px",
            boxShadow: "-2px 0 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
          {loading && (
            <div className="loading-overlay">
              <div className="spinner"></div>
            </div>
          )}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              margin: "1.25rem 0",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3
                style={{
                  color: "#6c757d",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "bold",
                  fontSize: window.innerWidth <= 768 ? "5vw" : "2.5dvw",
                }}
              >
                Your Cart
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <input
                  id="selectAll"
                  onChange={handleOnChange}
                  type="checkbox"
                  value="checkAll"
                  checked={selectedData.length === memoizedCartItems.length && memoizedCartItems.length > 0}
                  style={{ height: window.innerWidth <= 768 ? "3vw" : "1dvw", width: window.innerWidth <= 768 ? "3vw" : "1dvw" }}
                  disabled={loading}
                />
                <label
                  style={{
                    fontSize: window.innerWidth <= 768 ? "3vw" : "1.2dvw",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "500",
                    cursor: "pointer",
                  }}
                  htmlFor="selectAll"
                >
                  Select All
                </label>
              </div>
            </div>
            <button
              type="button"
              onClick={() => {
                setIsCartOpen(false);
                setShippingCost(0);
                setLabelDetails(null);
                setCouponDiscount(0);
                setCouponId(null);
                setCouponCode("");
                setCouponError("");
              }}
              style={{ cursor: loading ? "not-allowed" : "pointer" }}
              disabled={loading}
            >
              <CircleX size={window.innerWidth <= 768 ? 24 : 30} />
            </button>
          </div>

          {labelDetails && (
            <div
              style={{
                margin: "1rem 0",
                padding: "1rem",
                backgroundColor: "#e9f7ef",
                borderRadius: "8px",
                border: "1px solid #28a745",
              }}
            >
              <h3
                style={{
                  fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.3dvw",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                  color: "#28a745",
                }}
              >
                Shipping Label Created
              </h3>
              <p
                style={{
                  fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#333",
                  margin: "0.5rem 0",
                }}
              >
                Tracking Number: {labelDetails.trackingNumber}
              </p>
              <a
                href={labelDetails.labelDownload.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                  fontFamily: "Roboto, sans-serif",
                  color: "#28a745",
                  textDecoration: "underline",
                  marginRight: "1rem",
                }}
              >
                Download Label (PDF)
              </a>
              <a
                href={labelDetails.tracking_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                  fontFamily: "Roboto, sans-serif",
                  color: "#28a745",
                  textDecoration: "underline",
                }}
              >
                Track Shipment
              </a>
            </div>
          )}

          <div style={{ margin: "0.75rem 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer",
                padding: "0.75rem 1rem",
                backgroundColor: "#f5f5f5",
                borderRadius: "0.5rem",
              }}
              onClick={() => setIsAddressOpen(!isAddressOpen)}
              aria-expanded={isAddressOpen}
            >
              <h3
                style={{
                  fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.2dvw",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                  color: "#333",
                }}
              >
                Select Shipping Address
              </h3>
              {isAddressOpen ? <ChevronUp size={window.innerWidth <= 768 ? 16 : 18} color="#333" /> : <ChevronDown size={window.innerWidth <= 768 ? 16 : 18} color="#333" />}
            </div>
            {selectedAddress && !isAddressOpen && (
              <div
                style={{
                  margin: "0.75rem 0",
                  padding: "0.75rem",
                  backgroundColor: "#f9f9f9",
                  borderRadius: "0.5rem",
                }}
              >
                <p
                  style={{
                    fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "400",
                    color: "#666",
                  }}
                >
                  Shipping to: {selectedAddress.name}, {selectedAddress.addressLine1},{" "}
                  {selectedAddress.city}, {selectedAddress.state} {selectedAddress.zipcode}
                </p>
                <p
                  style={{
                    fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "400",
                    color: "#666",
                  }}
                >
                  Service: USPS Priority Mail Express
                </p>
              </div>
            )}
            {isAddressOpen &&
              (addressLoading ? (
                <div style={{ margin: "0.75rem 0" }}>
                  <p
                    style={{
                      fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: "400",
                      color: "#666",
                    }}
                  >
                    Loading addresses...
                  </p>
                </div>
              ) : addresses.length === 0 ? (
                <div style={{ margin: "0.75rem 0" }}>
                  <p
                    style={{
                      fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: "400",
                      color: "#666",
                    }}
                  >
                    No addresses found. Please add a shipping address.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setIsCartOpen(false);
                      navigate("/account/my-profile", {
                        state: { openTab: "Address" },
                      });
                    }}
                    style={{
                      fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.5rem",
                      padding: "0.5rem 1rem",
                      borderRadius: "0.5rem",
                      backgroundColor: "#28a745",
                      color: "#ffffff",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "600",
                      marginTop: "0.5rem",
                      cursor: "pointer",
                      border: "none",
                      transition: "background-color 0.2s",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#218838")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#28a745")}
                  >
                    Add New Address
                  </button>
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "repeat(2, 1fr)",
                    gap: "0.75rem",
                    margin: "0.75rem 0",
                    borderTop: "1px solid #e0e0e0",
                    paddingTop: "0.75rem",
                  }}
                >
                  {addresses.map((addr) => (
                    <div
                      key={addr._id}
                      style={{
                        border: selectedAddressId === addr._id ? "2px solid #28a745" : "1px solid #e0e0e0",
                        boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
                        borderRadius: "0.5rem",
                        padding: "0.75rem",
                        cursor: "pointer",
                        backgroundColor:
                          selectedAddressId === addr._id ? "rgba(40, 167, 69, 0.1)" : "#ffffff",
                        transition: "background-color 0.2s",
                      }}
                      onClick={() => setSelectedAddressId(addr._id)}
                      onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        selectedAddressId === addr._id ? "rgba(40, 167, 69, 0.1)" : "#f9f9f9")
                      }
                      onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor =
                        selectedAddressId === addr._id ? "rgba(40, 167, 69, 0.1)" : "#ffffff")
                      }
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "flex-start",
                            gap: "0.5rem",
                            alignItems: "center",
                          }}
                        >
                          <h3
                            style={{
                              fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.2dvw",
                              fontFamily: "Roboto, sans-serif",
                              fontWeight: "600",
                              color: "#333",
                            }}
                          >
                            {addr.title}
                          </h3>
                          {addr.isDefault && (
                            <span
                              style={{
                                backgroundColor: "#6c757d",
                                padding: "0.2rem 0.5rem",
                                fontSize: window.innerWidth <= 768 ? "2vw" : "0.8dvw",
                                borderRadius: "0.75rem",
                                color: "#ffffff",
                                fontFamily: "Roboto, sans-serif",
                                fontWeight: "600",
                              }}
                            >
                              Default
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          gap: "0.25rem",
                          margin: "0.5rem 0",
                        }}
                      >
                        <h3
                          style={{
                            fontSize: window.innerWidth <= 768 ? "3vw" : "1.1dvw",
                            fontFamily: "Roboto, sans-serif",
                            fontWeight: "600",
                            color: "#333",
                            lineHeight: "1.2",
                          }}
                        >
                          {addr.name}
                        </h3>
                        <p
                          style={{
                            fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                            fontFamily: "Open Sans, sans-serif",
                            fontWeight: "400",
                            color: "#666",
                            lineHeight: "1.2",
                          }}
                        >
                          {addr.addressLine1}
                          {addr.addressLine2 ? `, ${addr.addressLine2}` : ""}
                          {addr.addressLine2 === "" ? " (No Apt/Suite)" : ""}
                        </p>
                        <p
                          style={{
                            fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                            fontFamily: "Open Sans, sans-serif",
                            fontWeight: "400",
                            color: "#666",
                            lineHeight: "1.2",
                          }}
                        >
                          {addr.city}, {addr.state}, {addr.country} - {addr.zipcode}
                        </p>
                        <p
                          style={{
                            fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                            fontFamily: "Open Sans, sans-serif",
                            fontWeight: "400",
                            color: "#666",
                            lineHeight: "1.2",
                          }}
                        >
                          {addr.contactNumber}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
          </div>

          {error && memoizedCartItems.length > 0 && (
            <p style={{ color: "#dc3545", fontSize: window.innerWidth <= 768 ? "3vw" : "1.2dvw", fontFamily: "Open Sans, sans-serif" }}>
              {error}
            </p>
          )}
          <div ref={mainWrapperRef} style={{ margin: "1.25rem 0" }}>
            {memoizedCartItems.length === 0 && (
              <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "3rem 1rem",
                textAlign: "center"
              }}>
                <svg
                  width="120"
                  height="120"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ marginBottom: "1.5rem", opacity: 0.5 }}
                >
                  <path
                    d="M9 2C9 1.44772 9.44772 1 10 1H14C14.5523 1 15 1.44772 15 2V3H20C20.5523 3 21 3.44772 21 4C21 4.55228 20.5523 5 20 5H19.9311L19.1305 19.2137C19.0567 20.7837 17.7678 22 16.1959 22H7.80407C6.23221 22 4.94331 20.7837 4.86949 19.2137L4.06888 5H4C3.44772 5 3 4.55228 3 4C3 3.44772 3.44772 3 4 3H9V2Z"
                    fill="#e0e0e0"
                  />
                </svg>
                <h3 style={{
                  fontSize: window.innerWidth <= 768 ? "4vw" : "1.5dvw",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                  color: "#666",
                  marginBottom: "0.5rem"
                }}>
                  Your cart is empty
                </h3>
                <p style={{
                  fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                  fontFamily: "Open Sans, sans-serif",
                  color: "#999",
                  marginBottom: "1.5rem"
                }}>
                  Add some products to get started!
                </p>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate("/products");
                  }}
                  style={{
                    padding: "0.75rem 2rem",
                    backgroundColor: "#28a745",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "600",
                    cursor: "pointer",
                    transition: "background-color 0.2s"
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#218838"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#28a745"}
                >
                  Browse Products
                </button>
              </div>
            )}
            {memoizedCartItems.map((item) => (
              <div
                key={item._id}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "1rem",
                  padding: "1rem 0",
                  borderBottom: "1px solid #e0e0e0",
                  transition: "background-color 0.2s",
                  backgroundColor: selectedData.includes(item._id) ? "#f9f9f9" : "transparent",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#f9f9f9")}
                onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = selectedData.includes(item._id)
                  ? "#f9f9f9"
                  : "transparent")
                }
              >
                <div style={{ position: "relative", flexShrink: 0 }}>
                  <input
                    onChange={handleOnChange}
                    type="checkbox"
                    value={item._id}
                    checked={selectedData.includes(item._id)}
                    style={{ height: window.innerWidth <= 768 ? "3vw" : "1dvw", width: window.innerWidth <= 768 ? "3vw" : "1dvw" }}
                    disabled={loading}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flex: 1,
                    flexDirection: window.innerWidth <= 768 ? "column" : "row",
                    gap: window.innerWidth <= 768 ? "0.5rem" : "0",
                  }}
                >
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    <h3
                      style={{
                        fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.2dvw",
                        fontFamily: "Roboto, sans-serif",
                        fontWeight: "600",
                        color: "#333",
                      }}
                    >
                      {item.product.name || "Unnamed Product"}
                    </h3>
                    <p
                      style={{
                        fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw",
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: "400",
                        color: "#666",
                      }}
                    >
                      {item.product.description || "No description available"}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        marginTop: "0.5rem",
                      }}
                    >
                      <h4
                        style={{
                          fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.3dvw",
                          fontFamily: "Roboto, sans-serif",
                          fontWeight: "700",
                          color: "#333",
                        }}
                      >
                        ${(item.product.buyPrice || 0).toFixed(2)}
                        {item.quantity > 1 && (
                          <span style={{ fontSize: window.innerWidth <= 768 ? "2.5vw" : "0.9dvw", fontWeight: "400", color: "#666" }}>
                            {" "}
                            (Total: ${((item.product.buyPrice || 0) * item.quantity).toFixed(2)})
                          </span>
                        )}
                      </h4>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                        <button
                          type="button"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: window.innerWidth <= 768 ? "2.5rem" : "2rem",
                            height: window.innerWidth <= 768 ? "2.5rem" : "2rem",
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #e0e0e0",
                            borderRadius: "4px",
                            cursor: item.quantity <= 1 || loading ? "not-allowed" : "pointer",
                            opacity: item.quantity <= 1 || loading ? 0.5 : 1,
                            transition: "background-color 0.2s",
                          }}
                          onClick={() => handleQuantityChange(item, "decrement")}
                          disabled={item.quantity <= 1 || loading}
                          onMouseEnter={(e) =>
                            !loading &&
                            item.quantity > 1 &&
                            (e.currentTarget.style.backgroundColor = "#e0e0e0")
                          }
                          onMouseLeave={(e) =>
                            !loading &&
                            item.quantity > 1 &&
                            (e.currentTarget.style.backgroundColor = "#f5f5f5")
                          }
                        >
                          <Minus size={window.innerWidth <= 768 ? 12 : 14} />
                        </button>
                        <span
                          style={{
                            fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                            backgroundColor: "#f5f5f5",
                            padding: "0.25rem 1rem",
                            borderRadius: "4px",
                          }}
                        >
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            width: window.innerWidth <= 768 ? "2.5rem" : "2rem",
                            height: window.innerWidth <= 768 ? "2.5rem" : "2rem",
                            backgroundColor: "#f5f5f5",
                            border: "1px solid #e0e0e0",
                            borderRadius: "4px",
                            cursor: item.quantity >= item.product.stock || loading ? "not-allowed" : "pointer",
                            opacity: item.quantity >= item.product.stock || loading ? 0.5 : 1,
                            transition: "background-color 0.2s",
                          }}
                          onClick={() => handleQuantityChange(item, "increment")}
                          disabled={item.quantity >= item.product.stock || loading}
                          onMouseEnter={(e) =>
                            !loading &&
                            item.quantity < item.product.stock &&
                            (e.currentTarget.style.backgroundColor = "#e0e0e0")
                          }
                          onMouseLeave={(e) =>
                            !loading &&
                            item.quantity < item.product.stock &&
                            (e.currentTarget.style.backgroundColor = "#f5f5f5")
                          }
                        >
                          <Plus size={window.innerWidth <= 768 ? 12 : 14} />
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    type="button"
                    style={{
                      cursor: loading ? "not-allowed" : "pointer",
                      color: "#666",
                      transition: "color 0.2s",
                    }}
                    onClick={() => handleRemoveItem(item)}
                    disabled={loading}
                    onMouseEnter={(e) => !loading && (e.currentTarget.style.color = "#dc3545")}
                    onMouseLeave={(e) => !loading && (e.currentTarget.style.color = "#666")}
                  >
                    <Trash2 size={window.innerWidth <= 768 ? 16 : 18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Coupon Section - Optimized and Memoized */}
          {memoizedCartItems.length > 0 && (
            <CouponSection
              couponCode={couponCode}
              setCouponCode={setCouponCode}
              couponError={couponError}
              setCouponError={setCouponError}
              couponLoading={couponLoading}
              couponDiscount={couponDiscount}
              coupons={coupons}
              isCouponsOpen={isCouponsOpen}
              setIsCouponsOpen={setIsCouponsOpen}
              handleApplyCoupon={handleApplyCoupon}
              handleRemoveCoupon={handleRemoveCoupon}
              handleSelectCoupon={handleSelectCoupon}
              loading={loading}
              cartItems={memoizedCartItems}
              totalCartPrice={totalCartPrice}
            />
          )}

          {memoizedCartItems.length > 0 && (
            <div
              style={{
                position: "sticky",
                bottom: 0,
                backgroundColor: "#ffffff",
                padding: "1.5rem",
                borderTop: "1px solid #e0e0e0",
                borderRadius: "8px",
                boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                marginTop: "1rem",
              }}
            >
              <h3
                style={{
                  fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.3dvw",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "600",
                  marginBottom: "1rem",
                }}
              >
                Order Summary
              </h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "400",
                    color: "#666",
                  }}
                >
                  Subtotal
                </span>
                <span
                  style={{
                    fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "500",
                  }}
                >
                  ${totalCartPrice}
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem",
                }}
              >
                <span
                  style={{
                    fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                    fontFamily: "Open Sans, sans-serif",
                    fontWeight: "400",
                    color: "#666",
                  }}
                >
                  Shipping fee
                </span>
                {shippingLoading ? (
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div className="spinner small-spinner"></div>
                    <span
                      style={{
                        fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                        fontFamily: "Open Sans, sans-serif",
                        fontWeight: "400",
                        color: "#666",
                      }}
                    >
                      Calculating...
                    </span>
                  </div>
                ) : (
                  <span
                    style={{
                      fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "500",
                    }}
                  >
                    ${shippingCost.toFixed(2)}
                  </span>
                )}
              </div>
              {couponDiscount > 0 && (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "0.5rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                      fontFamily: "Open Sans, sans-serif",
                      fontWeight: "400",
                      color: "#666",
                    }}
                  >
                    Coupon Discount ({couponCode})
                  </span>
                  <span
                    style={{
                      fontSize: window.innerWidth <= 768 ? "3vw" : "1dvw",
                      fontFamily: "Roboto, sans-serif",
                      fontWeight: "500",
                      color: "#28a745",
                    }}
                  >
                    -${couponDiscount.toFixed(2)}
                  </span>
                </div>
              )}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid #e0e0e0",
                }}
              >
                <span
                  style={{
                    fontSize: window.innerWidth <= 768 ? "3.2vw" : "1.1dvw",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Total (Incl. Shipping)
                </span>
                <span
                  style={{
                    fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.3dvw",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "700",
                    color: "#28a745",
                  }}
                >
                  ${totalWithShipping}
                </span>
              </div>
              <button
                type="button"
                style={{
                  borderRadius: "8px",
                  fontFamily: "Roboto, sans-serif",
                  fontWeight: "700",
                  fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.2dvw",
                  width: "100%",
                  backgroundColor:
                    loading ||
                      memoizedCartItems.length === 0 ||
                      !selectedAddressId ||
                      addressLoading ||
                      shippingLoading ||
                      shippingCost <= 0
                      ? "#28a74580"
                      : "#28a745",
                  color: "#ffffff",
                  padding: "0.75rem",
                  marginTop: "1rem",
                  cursor:
                    loading ||
                      memoizedCartItems.length === 0 ||
                      !selectedAddressId ||
                      addressLoading ||
                      shippingLoading ||
                      shippingCost <= 0
                      ? "not-allowed"
                      : "pointer",
                  border: "none",
                  transition: "background-color 0.2s, transform 0.1s",
                }}
                onClick={handleCheckout}
                disabled={
                  loading ||
                  memoizedCartItems.length === 0 ||
                  !selectedAddressId ||
                  addressLoading ||
                  shippingLoading ||
                  shippingCost <= 0
                }
                onMouseEnter={(e) =>
                  !loading &&
                  memoizedCartItems.length > 0 &&
                  selectedAddressId &&
                  !addressLoading &&
                  !shippingLoading &&
                  shippingCost > 0 &&
                  ((e.currentTarget.style.backgroundColor = "#218838"),
                    (e.currentTarget.style.transform = "translateY(-1px)"))
                }
                onMouseLeave={(e) =>
                  !loading &&
                  memoizedCartItems.length > 0 &&
                  selectedAddressId &&
                  !addressLoading &&
                  !shippingLoading &&
                  shippingCost > 0 &&
                  ((e.currentTarget.style.backgroundColor = "#28a745"),
                    (e.currentTarget.style.transform = "translateY(0)"))
                }
              >
                {loading ? "Processing..." : "Proceed to Checkout"}
              </button>
              {selectedData.length > 0 && (
                <button
                  type="button"
                  style={{
                    borderRadius: "8px",
                    fontFamily: "Roboto, sans-serif",
                    fontWeight: "700",
                    fontSize: window.innerWidth <= 768 ? "3.5vw" : "1.2dvw",
                    width: "100%",
                    backgroundColor: loading ? "#dc354580" : "#dc3545",
                    color: "#ffffff",
                    padding: "0.75rem",
                    marginTop: "0.5rem",
                    cursor: loading ? "not-allowed" : "pointer",
                    border: "none",
                    transition: "background-color 0.2s, transform 0.1s",
                  }}
                  onClick={handleRemoveSelected}
                  disabled={loading}
                  onMouseEnter={(e) =>
                    !loading &&
                    ((e.currentTarget.style.backgroundColor = "#c0392b"),
                      (e.currentTarget.style.transform = "translateY(-1px)"))
                  }
                  onMouseLeave={(e) =>
                    !loading &&
                    ((e.currentTarget.style.backgroundColor = "#dc3545"),
                      (e.currentTarget.style.transform = "translateY(0)"))
                  }
                >
                  Remove Selected
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <>
      <nav className="navbar-swanson">
        <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />

        <div className="navbar-swanson__utility">
          <div className="navbar-swanson__container">
            <div className="utility-links">
              <a href="/"><Home size={16} /> Home</a>
              <a href="/about"><Info size={16} /> About</a>
              <a href="/products"><ShoppingBag size={16} /> Products</a>
              <a href="/blogs"><FileText size={16} /> Blogs</a>
              <a href="/contact"><Mail size={16} /> Contact</a>
              <button className="wholesale-btn" onClick={() => window.open(import.meta.env.VITE_RETAIL_URL, "_blank")}><Building2 size={16} /> Retail</button>
              <button onClick={() => navigate("/feedback")}><MessageSquare size={16} /> Feedback</button>
            </div>
          </div>
        </div>

        <div className="navbar-swanson__top">
          <div className="navbar-swanson__container">
            <button
              className="navbar-swanson__mobile-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={24} />
            </button>

            <div className="navbar-swanson__logo">
              <img
                onClick={() => navigate("/")}
                src={Logo}
                alt="Wholesale Retailer"
                title="Go to Homepage"
              />
            </div>

            <div className="navbar-swanson__search" ref={searchRef}>
              <input
                type="text"
                placeholder="What can we help you find?"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  searchProducts(e.target.value);
                }}
                onKeyPress={(e) => {
                  if (e.key === "Enter" && searchQuery.trim()) {
                    navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
                    setShowSuggestions(false);
                  }
                }}
                onFocus={() => {
                  if (searchQuery.trim() && searchSuggestions.length > 0) {
                    setShowSuggestions(true);
                  }
                }}
              />
              <button className="navbar-swanson__search-btn" aria-label="Search products" type="button">
                <Search size={20} />
              </button>

              {showSuggestions && searchSuggestions.length > 0 && (
                <div className="navbar-swanson__suggestions">
                  {searchSuggestions.map((product) => (
                    <div
                      key={product._id}
                      onClick={() => {
                        navigate(`/products-details/${product._id}`);
                        setShowSuggestions(false);
                        setSearchQuery("");
                      }}
                      className="navbar-swanson__suggestion-item"
                    >
                      <div>
                        <div className="suggestion-name">{product.name}</div>
                        <div className="suggestion-price">${product.buyPrice?.toFixed(2) || '0.00'}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="navbar-swanson__icons">
              <button
                className="navbar-swanson__icon"
                onClick={() => {
                  if (!token) {
                    navigate("/auth/login");
                  } else {
                    navigate("/account/my-profile", { state: { openTab: "Wishlist" } });
                  }
                }}
                title="Wishlist"
              >
                <Heart size={28} />
              </button>

              <div className="navbar-swanson__profile" ref={profileRef}>
                {token ? (
                  <>
                    <button
                      className="navbar-swanson__icon"
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsProfileOpen(!isProfileOpen);
                      }}
                      title={`Welcome, ${firstName}!`}
                    >
                      <User size={28} />
                    </button>
                    {isProfileOpen && (
                      <div className="navbar-swanson__dropdown" onClick={(e) => e.stopPropagation()}>
                        <div className="dropdown-header">
                          <span className="dropdown-name">👋 {firstName}</span>
                          <span className="dropdown-email">{decodedToken?.id?.email || "N/A"}</span>
                        </div>
                        <button onClick={() => { navigate("/account/my-profile"); setIsProfileOpen(false); }}>
                          <User size={18} /> My Profile
                        </button>
                        <button onClick={handleLogout} className="logout-btn">
                          <LogOut size={18} /> Logout
                        </button>
                      </div>
                    )}
                  </>
                ) : (
                  <button
                    className="navbar-swanson__icon"
                    onClick={() => navigate("/auth/login")}
                    title="Login"
                  >
                    <User size={28} />
                  </button>
                )}
              </div>

              <button
                className="navbar-swanson__icon navbar-swanson__cart"
                onClick={() => setIsCartOpen(true)}
                title="Shopping Cart"
              >
                <ShoppingCart size={28} />
                {cartItemCount > 0 && (
                  <span className="cart-badge">{cartItemCount}</span>
                )}
              </button>
            </div>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="navbar-swanson__mobile-menu">
            <div className="mobile-menu-wrapper">
              <div className="mobile-menu-content">
                <div className="mobile-menu-header">
                  <img src={Logo} alt="Logo" className="mobile-menu-logo" />
                  <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
                    <X size={24} />
                  </button>
                </div>

                <button className="mobile-menu-retail" onClick={() => { window.open(import.meta.env.VITE_RETAIL_URL, "_blank"); setIsMobileMenuOpen(false); }}>
                  <Building2 size={18} /> Retail
                </button>

                <div className="mobile-menu-divider"></div>

                <a href="/" className="mobile-menu-utility" onClick={() => setIsMobileMenuOpen(false)}>
                  <Home size={18} /> Home
                </a>
                <a href="/about" className="mobile-menu-utility" onClick={() => setIsMobileMenuOpen(false)}>
                  <Info size={18} /> About
                </a>
                <a href="/products" className="mobile-menu-utility" onClick={() => setIsMobileMenuOpen(false)}>
                  <ShoppingBag size={18} /> Products
                </a>
                <a href="/blogs" className="mobile-menu-utility" onClick={() => setIsMobileMenuOpen(false)}>
                  <FileText size={18} /> Blogs
                </a>
                <a href="/contact" className="mobile-menu-utility" onClick={() => setIsMobileMenuOpen(false)}>
                  <Mail size={18} /> Contact
                </a>
                <button className="mobile-menu-utility" onClick={() => { navigate("/feedback"); setIsMobileMenuOpen(false); }}>
                  <MessageSquare size={18} /> Feedback
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="navbar-swanson__mobile-search" ref={searchRef}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              searchProducts(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter" && searchQuery.trim()) {
                navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
                setShowSuggestions(false);
              }
            }}
            onFocus={() => {
              if (searchQuery.trim() && searchSuggestions.length > 0) {
                setShowSuggestions(true);
              }
            }}
          />
          <button className="navbar-swanson__mobile-search-btn">
            <Search size={20} />
          </button>

          {showSuggestions && searchSuggestions.length > 0 && (
            <div className="navbar-swanson__suggestions">
              {searchSuggestions.map((product) => (
                <div
                  key={product._id}
                  onClick={() => {
                    navigate(`/products-details/${product._id}`);
                    setShowSuggestions(false);
                    setSearchQuery("");
                  }}
                  className="navbar-swanson__suggestion-item"
                >
                  <div>
                    <div className="suggestion-name">{product.name}</div>
                    <div className="suggestion-price">${product.buyPrice?.toFixed(2) || '0.00'}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </nav>
      {isCartOpen && <CartModel setIsCartOpen={setIsCartOpen} />}
    </>
  );
};

export default memo(Navbar);
