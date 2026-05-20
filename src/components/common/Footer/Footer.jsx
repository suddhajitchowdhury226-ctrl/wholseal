
import React, { useState, useEffect, useCallback, useRef } from "react";
import "./Footer.scss";
import {
  ArrowUp,
  CreditCard,
  Facebook,
  LifeBuoy,
  Linkedin,
  Mail,
  Phone,
  Repeat2,
  Truck,
  Twitter,
  ArrowRightLeft,
} from "lucide-react";
import { motion } from "framer-motion";
import Logo from "../../../assets/images/logos/WholesaleLogo2.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const useCategoriesAPI = (BASE_URL) => {
  const cancelTokenRef = useRef();
  const activeRequestRef = useRef(null);

  const fetchWithCancel = useCallback(async (url, config) => {
    if (cancelTokenRef.current && activeRequestRef.current !== url) {
      cancelTokenRef.current.cancel("Request cancelled due to new request");
    }

    cancelTokenRef.current = axios.CancelToken.source();
    activeRequestRef.current = url;

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
    } finally {
      activeRequestRef.current = null;
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

export const Footer = React.memo(() => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL ;
  const { fetchWithCancel } = useCategoriesAPI(BASE_URL);

  // const getToken = useCallback(() => {
  //   const token = localStorage.getItem("userToken");
  //   if (!token) {
  //     setError("Please log in to view categories");
  //     return null;
  //   }
  //   return token;
  // }, []);

  const fetchCategories = useCallback(async () => {
    // const token = getToken();
    // if (!token) return;

    try {
      setError("");
      setLoading(true);
      const response = await fetchWithCancel(`${BASE_URL}/api/user/categories`);
      if (!response) return;

      const data = Array.isArray(response.data) ? response.data : [];
      const sortedCategories = data.sort((a, b) => a.name.localeCompare(b.name));
      setCategories(sortedCategories.slice(0, 12));
      if (data.length === 0) {
        setError("No categories found.");
      }
    } catch (err) {
      console.error("Error fetching categories:", err.response?.data, "Status:", err.response?.status);
      if (err.response?.status === 401 || err.response?.status === 403) {
        localStorage.removeItem("userToken");
        setError("Please log in to view categories");
        navigate("/login");
      } else {
        setError(err.response?.data?.message || "Failed to load categories. Please try again.");
      }
      setCategories([]);
    } finally {
      setLoading(false);
    }
  }, [BASE_URL, fetchWithCancel, navigate]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  // Split categories into two groups of 6
  const firstColumnCategories = categories.slice(0, 6);
  const secondColumnCategories = categories.slice(6, 12);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="Footer__mainWrapper">
      <div className="Footer__ContentWrapper">
        <div className="grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:portrait:grid-cols-2 grid-cols-2 md:landscape:grid-cols-4 w-full gap-3">
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <Truck size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                Free Shipping
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                On Orders Over $99
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <Repeat2 size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                GUARANTEE
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                30 Days Money Back
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <CreditCard size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                SAFE PAYMENT
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                Safe your online payment
              </p>
            </div>
          </div>
          <div className="flex justify-start items-center 2xl:gap-5 xl:gap-5 lg:gap-5 md:portrait:gap-5 md:landscape:gap-5 gap-2">
            <div className="text-[var(--color-seconday)]">
              <LifeBuoy size={40} />
            </div>
            <div className="flex flex-col gap-0">
              <h4 className="2xl:text-[1.3dvw] xl:text-[1.3dvw] lg:text-[1.3dvw] md:portrait:text-[1.3dvw] md:landscape:text-[1.3dvw] text-[3.8dvw] font-[600] text-[#fff] mainFont uppercase">
                ONLINE SUPPORT
              </h4>
              <p className="text-white font-[400] 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[2.5dvw]">
                We Have Support 24/7
              </p>
            </div>
          </div>
        </div>

        <div className="w-full grid 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4 md:portrait:grid-cols-2 md:landscape:grid-cols-4 grid-cols-1 gap-8 border-t border-white py-5">
          <div className="Footer__leftWrapper">
            <div className="2xl:w-[20dvw] xl:w-[20dvw] lg:w-[20dvw] md:portrait:w-[20dvw] md:landscape:w-[20dvw] w-[60dvw] h-auto my-5">
              <img src={Logo} alt="logo" />
            </div>
            <p className="text-white paraFont 2xl:text-[1dvw] xl:text-[1dvw] lg:text-[1dvw] md:portrait:text-[1dvw] md:landscape:text-[1dvw] text-[3.5dvw] my-3">
              Use of Ray’s Healthy Living (RHL) products and results may vary
              with each individual. Vitamins, herbs, supplements, minerals, home-grown formulas, and alternative health products on this site have
              not been assessed by the U.S. Food and Drug Administration (FDA).
            </p>
            {/* <div className="flex justify-center items-center gap-5">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://www.facebook.com/maximumcardio4u" target="_blank" rel="noopener noreferrer">
                  <Facebook />
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://x.com/maximum_cardio" target="_blank" rel="noopener noreferrer">
                  <Twitter />
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://www.linkedin.com/company/maximumcardio/?_l=en_US" target="_blank" rel="noopener noreferrer">
                  <Linkedin />
                </a>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <a href="https://www.pinterest.com/rayhealthyliving/" target="_blank" rel="noopener noreferrer">
                  <svg fill="#000000" width="24" height="24" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                      <path d="M16.75 0.406c-6.413 0-12.75 4.275-12.75 11.194 0 4.4 2.475 6.9 3.975 6.9 0.619 0 0.975-1.725 0.975-2.212 0-0.581-1.481-1.819-1.481-4.238 0-5.025 3.825-8.588 8.775-8.588 4.256 0 7.406 2.419 7.406 6.863 0 3.319-1.331 9.544-5.644 9.544-1.556 0-2.888-1.125-2.888-2.737 0-2.363 1.65-4.65 1.65-7.088 0-4.137-5.869-3.387-5.869 1.613 0 1.050 0.131 2.212 0.6 3.169-0.863 3.713-2.625 9.244-2.625 13.069 0 1.181 0.169 2.344 0.281 3.525 0.212 0.238 0.106 0.213 0.431 0.094 3.15-4.313 3.038-5.156 4.463-10.8 0.769 1.463 2.756 2.25 4.331 2.25 6.637 0 9.619-6.469 9.619-12.3 0-6.206-5.363-10.256-11.25-10.256z"></path>
                    </g>
                  </svg>
                </a>
              </motion.button>
            </div> */}
          </div>
          <div className="linksMainWrapper">
            <h3 className="mainFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[1.5dvw] md:landscape:text-[1.5dvw] text-[7dvw] text-white font-[500] my-1.5">
              Quick Links
            </h3>
            <ul className="flex flex-col text-white gap-2 px-2 text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
              {[
                { to: "/", label: "Home" },
                { to: "/products", label: "Products" },
                { to: "/about", label: "About" },
                { to: "/blogs", label: "Blog" },
                { to: "/contact", label: "Contact" },
                { to: "/conditionofuse", label: "Condition of Use" },
                { to: "/return-policy", label: "Shipping & Return" },
                { to: "/private-policy", label: "Private Notice" },
                { to: "/delivery-policy", label: "Delivery Policy" },
                { to: "/our-testimonials", label: "Our Testimonial" },
                { to: "/commenting-policy", label: "Commenting Policy" },
                { to: "/faq", label: "FAQ" },
                { to: "/my-story", label: "My Story" },
              ].map((link) => (
                <motion.li
                  key={link.to}
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                >
                  <Link to={link.to} >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="linksMainWrapper">
            <h3 className="mainFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[1.5dvw] md:landscape:text-[1.5dvw] text-[7dvw] text-white font-[500] my-1.5">
              Departments
            </h3>
            {loading ? (
              <p className="text-white text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
                Loading Departments...
              </p>
            ) : error ? (
              <p className="text-red-400 text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
                {error}
              </p>
            ) : (
              <ul className="flex flex-col text-white gap-2 px-2 text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
                {categories.map((category) => (
                  <motion.li
                    key={category._id}
                    whileHover={{ scale: 1.05, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                  >
                    <a href={`/products?category=${category._id}`}>
                      {category.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            )}
          </div>
          <div className="linksMainWrapper">
            <h3 className="mainFont 2xl:text-[1.5dvw] xl:text-[1.5dvw] lg:text-[1.5dvw] md:portrait:text-[1.5dvw] md:landscape:text-[1.5dvw] text-[7dvw] text-white font-[500] my-1.5">
              Contact Us
            </h3>
            <div className="flex flex-col gap-3 paraFont text-[4dvw] 2xl:text-[1.2dvw] xl:text-[1.2dvw] lg:text-[1.2dvw] md:portrait:text-[1.2dvw] md:landscape:text-[1.2dvw]">
              <Link className="text-white cursor-default">
                70 Solomons Island Rd S Prince Frederick MD 20678. United States
              </Link>
              <Link
                to="tel:+1(443) 432-3295"
                className="text-white hover:text-[var(--color-seconday)]"
              >
                +1(443) 432-3295
              </Link>
              <Link
                to="mailto:info@rayshealthyliving.com"
                className="text-white hover:text-[var(--color-seconday)]"
              >
                info@rayshealthyliving.com
              </Link>
              <div className="mt-3">
                <iframe 
                  border="0" 
                  frameBorder="0" 
                  scrolling="no"
                  style={{ border: 0, height: '68px', width: '150px', overflow: 'hidden' }} 
                  src="https://seal-dc-easternpa.bbb.org/frame/ruhzbum/bbb-236042142.png?chk=6200EF3C44"
                  title="BBB Accredited Business"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white py-6">
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open("https://rayshealthyliving.com", "_blank")}
              aria-label="Switch to the retail website at rayshealthyliving.com"
              style={{
                background: "linear-gradient(135deg, #10b981, #059669)",
                color: "#fff",
                border: "none",
                padding: "0.875rem 2rem",
                borderRadius: "50px",
                fontWeight: "700",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(16, 185, 129, 0.35)",
                fontSize: "1.1rem",
                fontFamily: "'Poppins', 'Inter', sans-serif",
                letterSpacing: "0.025em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <ArrowRightLeft size={20} />
              Switch to Retail
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleScrollToTop}
              aria-label="Scroll back to top of page"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #667eea, #764ba2)",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                cursor: "pointer",
                boxShadow: "0 4px 15px rgba(102, 126, 234, 0.4)"
              }}
            >
              <ArrowUp size={24} />
            </motion.button>
          </div>
          <div className="text-[3.5dvw] 2xl:text-[1.1dvw] xl:text-[1.1dvw] lg:text-[1.1dvw] md:portrait:text-[1.1dvw] md:landscape:text-[1.1dvw] text-white text-center">
            <p style={{ width: "60%", margin: "auto", paddingBottom: ".8rem" }}>
              *Disclaimer: Statements made, or products sold through this website, have not been evaluated by the United States Food and Drug Administration. They are not intended to diagnose, treat, cure or prevent any disease.
            </p>
            <p>Copyright © 2025 Rays Healthy Living</p>
          </div>
        </div>
      </div>
    </footer>
  );
});