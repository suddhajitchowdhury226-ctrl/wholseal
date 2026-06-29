import React, { useEffect, useRef, useState, useCallback, memo } from "react";
import "./Navbar.scss";
import Logo from "../../../assets/images/logos/WholesaleLogo.png";
import {
  Heart,
  ShoppingCart,
  User,
  Menu,
  Search,
  X,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../../utils/axiosInstance";
import _ from "lodash";
import { jwtDecode } from "jwt-decode";

export const Navbar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchSuggestions, setSearchSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);
  
  const navigate = useNavigate();
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
    }
  }

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    setIsProfileOpen(false);
    setIsMobileMenuOpen(false);
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const searchProducts = useCallback(
    _.debounce(async (query) => {
      if (!query.trim()) {
        setSearchSuggestions([]);
        setShowSuggestions(false);
        return;
      }
      
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
      }
    }, 500),
    [BASE_URL]
  );

  const updateCartCount = useCallback(async () => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) return;
      const response = await axiosInstance.get("/api/user/get-cart", {
        headers: { 
          Authorization: `Bearer ${token}`,
          'X-Website-Role': 'wholesaler'
        },
      });
      setCartItemCount(response.data.cart.items.length);
    } catch (error) {
      console.error("Error fetching cart count:", error);
    }
  }, []);

  useEffect(() => {
    updateCartCount();
    const handleCartUpdate = () => updateCartCount();
    window.addEventListener("cartUpdated", handleCartUpdate);
    return () => window.removeEventListener("cartUpdated", handleCartUpdate);
  }, [updateCartCount]);

  return (
    <nav className="navbar-swanson">
      <div className="navbar-swanson__utility">
        <div className="navbar-swanson__container">
          <div className="utility-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/products">Products</a>
            <a href="/blogs">Blogs</a>
            <a href="/contact">Contact</a>
            <button className="wholesale-btn" onClick={() => window.open(import.meta.env.VITE_RETAIL_URL, "_blank")}>
              Retail
            </button>
            <button className="feedback-btn" onClick={() => navigate("/feedback")}>
              Feedback
            </button>
          </div>
        </div>
      </div>

      <div className="navbar-swanson__top">
        <div className="navbar-swanson__container">
          <button className="navbar-swanson__mobile-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu size={24} />
          </button>

          <div className="navbar-swanson__logo">
            <img onClick={() => navigate("/")} src={Logo} alt="Wholesale" />
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
            />
            <button className="navbar-swanson__search-btn">
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
                    <div className="suggestion-name">{product.name}</div>
                    <div className="suggestion-price">${product.buyPrice?.toFixed(2) || '0.00'}</div>
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
            >
              <Heart size={28} />
            </button>

            <div className="navbar-swanson__profile" ref={profileRef}>
              {token ? (
                <>
                  <button className="navbar-swanson__icon" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                    <User size={28} />
                  </button>
                  {isProfileOpen && (
                    <div className="navbar-swanson__dropdown">
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
                <button className="navbar-swanson__icon" onClick={() => navigate("/auth/login")}>
                  <User size={28} />
                </button>
              )}
            </div>

            <button className="navbar-swanson__icon navbar-swanson__cart" onClick={() => navigate("/cart")}>
              <ShoppingCart size={28} />
              {cartItemCount > 0 && <span className="cart-badge">{cartItemCount}</span>}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="navbar-swanson__mobile-menu">
          <div className="mobile-menu-wrapper">
            <div className="mobile-menu-header">
              <img src={Logo} alt="Logo" className="mobile-menu-logo" />
              <button className="mobile-menu-close" onClick={() => setIsMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            <div className="mobile-menu-content">
              <a href="/" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
              <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About</a>
              <a href="/products" onClick={() => setIsMobileMenuOpen(false)}>Products</a>
              <a href="/blogs" onClick={() => setIsMobileMenuOpen(false)}>Blogs</a>
              <a href="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
              <button className="wholesale-btn" onClick={() => { window.open(import.meta.env.VITE_RETAIL_URL, "_blank"); setIsMobileMenuOpen(false); }}>
                Retail
              </button>
              <button className="feedback-btn" onClick={() => { navigate("/feedback"); setIsMobileMenuOpen(false); }}>
                Feedback
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default memo(Navbar);
