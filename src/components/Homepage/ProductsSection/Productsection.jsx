// import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
// import { stagger, useAnimate, useInView } from "framer-motion";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import PorductBgImg1 from "../../../assets/images/bg/ProductBg1.jpg";
// import FeatureBgImg1 from "../../../assets/images/bg/FeatureBg1.jpg";
// import FeatureBgImg2 from "../../../assets/images/bg/FeatureBg2.jpg";
// import SloganImg from "../../../assets/images/bg/SloganImg1.png";

// // Custom hook for API calls
// const useProductsAPI = (BASE_URL) => {
//   const cancelTokenRef = useRef();
  
//   const fetchWithCancel = useCallback(async (url, config) => {
//     if (cancelTokenRef.current) {
//       cancelTokenRef.current.cancel('Request cancelled due to new request');
//     }
    
//     cancelTokenRef.current = axios.CancelToken.source();
    
//     try {
//       const response = await axios.get(url, {
//         ...config,
//         cancelToken: cancelTokenRef.current.token
//       });
//       return response;
//     } catch (error) {
//       if (axios.isCancel(error)) {
//         console.log('Request cancelled:', error.message);
//         return null;
//       }
//       throw error;
//     }
//   }, []);
  
//   useEffect(() => {
//     return () => {
//       if (cancelTokenRef.current) {
//         cancelTokenRef.current.cancel('Component unmounted');
//       }
//     };
//   }, []);
  
//   return { fetchWithCancel };
// };

// export const Productsection = () => {
//   const [products, setProducts] = useState([]);
//   const [error, setError] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [scope, animate] = useAnimate();
//   const isInView = useInView(scope, { once: true });
//   const navigate = useNavigate();
//   const BASE_URL = import.meta.env.VITE_BASE_URL;
//   const { fetchWithCancel } = useProductsAPI(BASE_URL);

//   // Memoized token getter
//   const getToken = useCallback(() => {
//     const token = localStorage.getItem("userToken");
//     if (!token) {
//       setError("Please log in to view products");
//       return null;
//     }
//     return token;
//   }, [navigate]);

//   // Build query parameters for fetching new arrivals
//   const buildQueryParams = useCallback((page = 1, limit = 8) => {
//     const queryParams = new URLSearchParams({
//       role: "wholesaler",
//       page: page.toString(),
//       limit: limit.toString(),
//       sortBy: "createdAt-desc", // Fetch newest products for "New Arrivals"
//     });
//     return queryParams;
//   }, []);

//   // Fetch products
//   const fetchProducts = useCallback(
//     async (page = 1, limit = 8) => {
//       const token = getToken();
//       try {
//         setError("");
//         const queryParams = buildQueryParams(page, limit);
        
//         const response = await fetchWithCancel(
//           `${BASE_URL}/api/wholesaler/get-tirtho-wholesaler?role=wholesaler`,
//           {
//             headers: {
//               'Content-Type': 'application/json',
//             },
//           }
//         );

//         if (!response) return;

//         const { products, currentPage, totalPages, totalProducts } = response.data;
        
//         setProducts(Array.isArray(products) ? products : []);

//         if (Array.isArray(products) && products.length === 0) {
//           setError("No new arrivals found.");
//         }
//       } catch (err) {
//         console.error("Error fetching products:", err.response?.data, "Status:", err.response?.status);
//         if (err.response?.status === 401 || err.response?.status === 403) {
//           localStorage.removeItem("userToken");
//           setError("Please log in to view products");
//         } else {
//           setError(err.response?.data?.message || "Failed to load products. Please try again.");
//         }
//         setProducts([]);
//       } finally {
//         setLoading(false);
//       }
//     },
//     [BASE_URL, navigate, getToken, buildQueryParams, fetchWithCancel]
//   );

//   // Initial load
//   useEffect(() => {
//     fetchProducts();
//   }, [fetchProducts]);

//   // Animation effect
//   useEffect(() => {
//     if (isInView && Array.isArray(products) && products.length > 0 && !loading) {
//       animate(
//         ".PS__ProductCardWrapper",
//         {
//           opacity: [0, 1],
//           y: ["1vh", "0vh"],
//         },
//         {
//           duration: 0.6,
//           ease: "backInOut",
//           type: "spring",
//           mass: 2.5,
//           power: 10,
//           delay: stagger(0.25),
//         }
//       );
//     }
//   }, [isInView, products, animate, loading]);

//   const getImageUrl = useCallback(
//     (imagePath) => {
//       if (!imagePath) return "https://via.placeholder.com/150";
//       return imagePath.startsWith("http") ? imagePath : `${BASE_URL}/${imagePath.replace(/\\/g, "/")}`;
//     },
//     [BASE_URL]
//   );

//   const productList = useMemo(() => {
//     return products.map((product) => (
//       <div
//         key={product._id}
//         className="PS__ProductCardWrapper product-card"
//         onClick={() => navigate(`/products-details/${product._id}`)}
//         style={{
//           cursor: "pointer",
//           transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
//           background: "white",
//           borderRadius: "16px",
//           boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
//           overflow: "hidden",
//           height: "320px",
//           position: "relative",
//           transformOrigin: "center",
//         }}
//         role="button"
//         tabIndex={0}
//         onKeyPress={(e) => {
//           if (e.key === 'Enter' || e.key === ' ') {
//             navigate(`/products-details/${product._id}`);
//           }
//         }}
//         onMouseEnter={(e) => {
//           e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
//           e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
//           e.currentTarget.style.zIndex = "10";
//         }}
//         onMouseLeave={(e) => {
//           e.currentTarget.style.transform = "scale(1) translateY(0px)";
//           e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
//           e.currentTarget.style.zIndex = "1";
//         }}
//       >
//         {/* Gradient overlay for premium look */}
//         <div 
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "linear-gradient(135deg, rgba(119, 161, 61, 0.02) 0%, rgba(233, 119, 23, 0.02) 100%)",
//             pointerEvents: "none",
//             zIndex: 1
//           }}
//         />
        
//         <div 
//           style={{
//             width: "100%",
//             height: "200px",
//             overflow: "hidden",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//             backgroundColor: "#fafafa",
//             position: "relative"
//           }}
//         >
//           <img 
//             src={getImageUrl(product.images?.[0])} 
//             alt={product.name || "Product image"} 
//             style={{
//               maxWidth: "90%",
//               maxHeight: "90%",
//               objectFit: "contain",
//               borderRadius: "12px",
//               transition: "transform 0.4s ease",
//               position: "relative",
//               zIndex: 2
//             }}
//             onMouseEnter={(e) => {
//               e.target.style.transform = "scale(1.1)";
//             }}
//             onMouseLeave={(e) => {
//               e.target.style.transform = "scale(1)";
//             }}
//           />
          
//           {/* Stock indicator */}
//           <div 
//             style={{
//               position: "absolute",
//               top: "12px",
//               right: "12px",
//               background: product.stock > 0 ? 
//                 "linear-gradient(135deg, #10b981, #059669)" : 
//                 "linear-gradient(135deg, #ef4444, #dc2626)",
//               color: "white",
//               padding: "4px 8px",
//               borderRadius: "12px",
//               fontSize: "11px",
//               fontWeight: "600",
//               textTransform: "uppercase",
//               letterSpacing: "0.5px",
//               boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
//               zIndex: 3
//             }}
//           >
//             {product.stock > 0 ? "In Stock" : "Out of Stock"}
//           </div>
//         </div>
        
//         <div 
//           style={{
//             padding: "16px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "space-between",
//             height: "120px",
//             position: "relative",
//             zIndex: 2
//           }}
//         >
//           <div>
//             <p style={{ 
//               color: "#77a13d", 
//               fontSize: "12px", 
//               margin: "0 0 6px 0",
//               fontWeight: "600",
//               textTransform: "uppercase",
//               letterSpacing: "0.5px"
//             }}>
//               {product.category?.name || "Unknown"}
//             </p>
//             <h4 style={{ 
//               color: "#1f2937", 
//               fontSize: "16px", 
//               fontWeight: "700", 
//               margin: "0 0 8px 0",
//               overflow: "hidden",
//               textOverflow: "ellipsis",
//               whiteSpace: "nowrap",
//               lineHeight: "1.2"
//             }}>
//               {product.name}
//             </h4>
//           </div>
          
//           <div style={{ 
//             display: "flex", 
//             justifyContent: "space-between", 
//             alignItems: "center" 
//           }}>
//             <div style={{
//               background: "linear-gradient(135deg, #e97717, #77a13d)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               backgroundClip: "text",
//             }}>
//               <h3 style={{ 
//                 fontSize: "20px", 
//                 fontWeight: "800", 
//                 margin: 0,
//                 background: "linear-gradient(135deg, #e97717, #77a13d)",
//                 WebkitBackgroundClip: "text",
//                 WebkitTextFillColor: "transparent",
//                 backgroundClip: "text",
//               }}>
//                 ${product.sellPrice.toFixed(2)}
//               </h3>
//             </div>
            
//             {/* Purchase count indicator */}
//             {product.purchaseCount && (
//               <div style={{
//                 background: "rgba(119, 161, 61, 0.1)",
//                 color: "#77a13d",
//                 padding: "4px 8px",
//                 borderRadius: "8px",
//                 fontSize: "11px",
//                 fontWeight: "600"
//               }}>
//                 {product.purchaseCount} sold
//               </div>
//             )}
//           </div>
//         </div>
        
//         {/* Hover effect overlay */}
//         <div 
//           className="card-hover-overlay"
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             background: "linear-gradient(135deg, rgba(233, 119, 23, 0.05) 0%, rgba(119, 161, 61, 0.05) 100%)",
//             opacity: 0,
//             transition: "opacity 0.3s ease",
//             pointerEvents: "none",
//             zIndex: 2
//           }}
//         />
//       </div>
//     ));
//   }, [products, getImageUrl, navigate]);

//   return (
//     <div 
//       style={{
//         position: "relative",
//         fontFamily: "'Inter', sans-serif",
//         background: "transparent"
//       }}
//     >
//       <div 
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           zIndex: -1
//         }}
//       >
//         <img 
//           src={PorductBgImg1} 
//           alt="wholesale-retailer.com" 
//           style={{ 
//             width: "100%", 
//             height: "100%", 
//             objectFit: "cover", 
//             opacity: 0.2 
//           }} 
//         />
//         <div 
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             background: "rgba(0,0,0,0.3)"
//           }}
//         />
//       </div>
      
//       <div 
//         style={{
//           maxWidth: "100%",
//           margin: "0 auto",
//           padding: "24px"
//         }}
//       >
//         <div 
//           style={{
//             background: "#fff",
//             borderRadius: "16px",
//             padding: "24px",
//             marginBottom: "24px",
//             position: "relative",
//             overflow: "hidden",
//             border: "1px solid rgba(255,255,255,0.2)"
//           }}
//         >
//           <div 
//             style={{
//               position: "absolute",
//               top: 0,
//               left: 0,
//               right: 0,
//               bottom: 0,
//               background: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.1), transparent 50%)",
//               pointerEvents: "none"
//             }}
//           />
//           <div 
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               alignItems: "center",
//               marginBottom: "24px",
//               paddingBottom: "16px",
//               borderBottom: "1px solid rgba(255,255,255,0.2)",
//               position: "relative"
//             }}
//           >
//             <div style={{ flex: 1, textAlign: "center" }}>
//               <h3 style={{ 
//                 fontSize: "28px", 
//                 fontWeight: "700", 
//                 color: "#1f2937",
//                 margin: 0,
//                 textShadow: "0 2px 4px rgba(0,0,0,0.1)",
//                 letterSpacing: "-0.5px"
//               }}>
//                 New Arrivals - Wholesaler
//               </h3>
//             </div>
//             <button
//               onClick={() => navigate("/products")}
//               style={{
//                 background: "linear-gradient(135deg, #e97717  0%, #e97717  100%)",
//                 color: "#fff",
//                 padding: "12px 24px",
//                 borderRadius: "12px",
//                 border: "2px solid rgba(255,255,255,0.3)",
//                 cursor: "pointer",
//                 fontSize: "14px",
//                 fontWeight: "700",
//                 transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
//                 boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
//                 textTransform: "uppercase",
//                 letterSpacing: "0.5px"
//               }}
//               onMouseEnter={(e) => {
//                 e.target.style.transform = "translateY(-2px)";
//                 e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
//               }}
//               onMouseLeave={(e) => {
//                 e.target.style.transform = "translateY(0px)";
//                 e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
//               }}
//             >
//               See All
//             </button>
//           </div>

//           {loading && (
//             <div 
//               style={{
//                 display: "flex",
//                 justifyContent: "center",
//                 alignItems: "center",
//                 padding: "60px",
//                 background: "rgba(255,255,255,0.1)",
//                 borderRadius: "20px",
//                 boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//                 backdropFilter: "blur(10px)"
//               }}
//               role="status"
//               aria-live="polite"
//             >
//               <div style={{
//                 width: "50px",
//                 height: "50px",
//                 border: "5px solid rgba(255,255,255,0.3)",
//                 borderTop: "5px solid white",
//                 borderRadius: "50%",
//                 animation: "spin 1s linear infinite"
//               }}></div>
//               <span style={{ position: "absolute", width: "1px", height: "1px", overflow: "hidden" }}>
//                 Loading products...
//               </span>
//             </div>
//           )}

//           {!loading && error && (
//             <div 
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 borderRadius: "20px",
//                 padding: "32px",
//                 textAlign: "center",
//                 boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//                 border: "2px solid rgba(239, 68, 68, 0.3)",
//                 backdropFilter: "blur(10px)"
//               }}
//               role="alert"
//             >
//               <p style={{ color: "#dc2626", fontSize: "18px", margin: 0, fontWeight: "600" }}>{error}</p>
//             </div>
//           )}

//           {!loading && Array.isArray(products) && products.length === 0 && !error && (
//             <div 
//               style={{
//                 background: "rgba(255,255,255,0.1)",
//                 borderRadius: "20px",
//                 padding: "32px",
//                 textAlign: "center",
//                 boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
//                 border: "2px solid rgba(255,255,255,0.2)",
//                 backdropFilter: "blur(10px)"
//               }}
//               role="status"
//             >
//               <p style={{ color: "#374151", fontSize: "18px", margin: 0, fontWeight: "600" }}>
//                 No new arrivals available
//               </p>
//             </div>
//           )}

//           {!loading && Array.isArray(products) && products.length > 0 && (
//             <div
//               ref={scope}
//               style={{
//                 display: "grid",
//                 gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
//                 gap: "24px",
//                 padding: "20px"
//               }}
//             >
//               {productList}
//             </div>
//           )}
//         </div>

//         {/* Commented-out section preserved */}
//         <div 
//           style={{
//             display: "grid",
//             gridTemplateColumns: "1fr 1fr",
//             gap: "24px",
//             marginTop: "24px"
//           }}
//         >
//           <div 
//             style={{
//               background: "white",
//               borderRadius: "16px",
//               padding: "24px",
//               boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "space-between",
//               position: "relative",
//               overflow: "hidden"
//             }}
//           >
//             <div style={{ zIndex: 1 }}>
//               <h3 style={{ 
//                 fontSize: "24px", 
//                 fontWeight: "600", 
//                 color: "#1f2937",
//                 margin: "0 0 16px 0"
//               }}>
//                 Boost Your Best: Unleash Peak Performance!
//               </h3>
//               <button
//                 onClick={() => navigate("/products")}
//                 style={{
//                   background: "#3b82f6",
//                   color: "white",
//                   padding: "8px 16px",
//                   borderRadius: "8px",
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: "14px",
//                   fontWeight: "600",
//                   transition: "all 0.2s ease",
//                 }}
//               >
//                 Shop Now
//               </button>
//             </div>
//             <div style={{ textAlign: "center" }}>
//               <img 
//                 src={SloganImg} 
//                 alt="wholesale-retailer.com" 
//                 style={{ maxWidth: "100%", height: "auto" }} 
//               />
//             </div>
//           </div>

//           <div>
//             <div 
//               style={{
//                 background: "white",
//                 borderRadius: "16px",
//                 padding: "24px",
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
//                 marginBottom: "24px",
//                 position: "relative",
//                 overflow: "hidden"
//               }}
//             >
//               <div 
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   zIndex: -1
//                 }}
//               >
//                 <img 
//                   src={FeatureBgImg1} 
//                   alt="FeatureBgImg1" 
//                   style={{ 
//                     width: "100%", 
//                     height: "100%", 
//                     objectFit: "cover", 
//                     opacity: 0.2 
//                   }} 
//                 />
//                 <div 
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background: "rgba(0,0,0,0.3)"
//                   }}
//                 />
//               </div>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <div style={{ zIndex: 1 }}>
//                   <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 8px 0" }}>
//                     Energize, Strengthen, Thrive.
//                   </p>
//                   <h3 style={{ 
//                     fontSize: "20px", 
//                     fontWeight: "600", 
//                     color: "#1f2937",
//                     margin: "0 0 16px 0"
//                   }}>
//                     Power Up Your Day: Fuel Your Strength!
//                   </h3>
//                   <button
//                     onClick={() => navigate("/products")}
//                     style={{
//                       background: "#3b82f6",
//                       color: "white",
//                       padding: "8px 16px",
//                       borderRadius: "8px",
//                       border: "none",
//                       cursor: "pointer",
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       transition: "all 0.2s ease",
//                     }}
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//                 <div>
//                   <img 
//                     src={products[0]?.images ? getImageUrl(products[0].images[0]) : "https://via.placeholder.com/150"} 
//                     alt="wholesale-retailer.com" 
//                     style={{ maxWidth: "150px", height: "auto" }} 
//                   />
//                 </div>
//               </div>
//             </div>

//             <div 
//               style={{
//                 background: "white",
//                 borderRadius: "16px",
//                 padding: "24px",
//                 boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
//                 position: "relative",
//                 overflow: "hidden"
//               }}
//             >
//               <div 
//                 style={{
//                   position: "absolute",
//                   top: 0,
//                   left: 0,
//                   width: "100%",
//                   height: "100%",
//                   zIndex: -1
//                 }}
//               >
//                 <img 
//                   src={FeatureBgImg2} 
//                   alt="FeatureBgImg2" 
//                   style={{ 
//                     width: "100%", 
//                     height: "100%", 
//                     objectFit: "cover", 
//                     opacity: 0.2 
//                   }} 
//                 />
//                 <div 
//                   style={{
//                     position: "absolute",
//                     top: 0,
//                     left: 0,
//                     width: "100%",
//                     height: "100%",
//                     background: "rgba(0,0,0,0.3)"
//                   }}
//                 />
//               </div>
//               <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                 <div>
//                   <img 
//                     src={products[1]?.images ? getImageUrl(products[1].images[0]) : "https://via.placeholder.com/150"} 
//                     alt="wholesale-retailer.com" 
//                     style={{ maxWidth: "150px", height: "auto" }} 
//                   />
//                 </div>
//                 <div style={{ zIndex: 1 }}>
//                   <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 8px 0" }}>
//                     Unleash Your Inner Power.
//                   </p>
//                   <h3 style={{ 
//                     fontSize: "20px", 
//                     fontWeight: "600", 
//                     color: "#1f2937",
//                     margin: "0 0 16px 0"
//                   }}>
//                     Elevate Your Energy: Thrive with Vitality!
//                   </h3>
//                   <button
//                     onClick={() => navigate("/products")}
//                     style={{
//                       background: "#3b82f6",
//                       color: "white",
//                       padding: "8px 16px",
//                       borderRadius: "8px",
//                       border: "none",
//                       cursor: "pointer",
//                       fontSize: "14px",
//                       fontWeight: "600",
//                       transition: "all 0.2s ease",
//                     }}
//                   >
//                     Shop Now
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style>
//         {`
//           @keyframes spin {
//             0% { transform: rotate(0deg); }
//             100% { transform: rotate(360deg); }
//           }
          
//           .product-card:hover .card-hover-overlay {
//             opacity: 1;
//           }
          
//           @media (max-width: 768px) {
//             .PS__ProductCardWrapper {
//               height: 300px !important;
//             }
//           }
//         `}
//       </style>
//     </div>
//   );
// };

// export default Productsection;


import React, { useEffect, useState, useCallback, useMemo, useRef } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PorductBgImg1 from "../../../assets/images/bg/ProductBg1.jpg";
import FeatureBgImg1 from "../../../assets/images/bg/FeatureBg1.jpg";
import FeatureBgImg2 from "../../../assets/images/bg/FeatureBg2.jpg";
import SloganImg from "../../../assets/images/bg/SloganImg1.png";

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

export const Productsection = () => {
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
      return null;
    }
    return token;
  }, [navigate]);

  // Build query parameters for fetching new arrivals
  const buildQueryParams = useCallback((page = 1, limit = 8) => {
    const queryParams = new URLSearchParams({
      role: "wholesaler",
      page: page.toString(),
      limit: limit.toString(),
      sortBy: "createdAt-desc",
    });
    return queryParams;
  }, []);

  // Fetch products
  const fetchProducts = useCallback(
    async (page = 1, limit = 8) => {
      const token = getToken();
      try {
        setError("");
        const queryParams = buildQueryParams(page, limit);
        
        const response = await fetchWithCancel(
          `${BASE_URL}/api/wholesaler/get-tirtho-wholesaler?role=wholesaler`,
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (!response) return;

        const { products, currentPage, totalPages, totalProducts } = response.data;
        
        setProducts(Array.isArray(products) ? products : []);

        if (Array.isArray(products) && products.length === 0) {
          setError("No new arrivals found.");
        }
      } catch (err) {
        console.error("Error fetching products:", err.response?.data, "Status:", err.response?.status);
        if (err.response?.status === 401 || err.response?.status === 403) {
          localStorage.removeItem("userToken");
          setError("Please log in to view products");
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
        className="PS__ProductCardWrapper product-card"
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
          width: "100%",
        }}
        role="button"
        tabIndex={0}
        onKeyPress={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            navigate(`/products-details/${product._id}`);
          }
        }}
        onMouseEnter={(e) => {
          if (window.innerWidth > 768) {
            e.currentTarget.style.transform = "scale(1.05) translateY(-8px)";
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(0,0,0,0.15)";
            e.currentTarget.style.zIndex = "10";
          }
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1) translateY(0px)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";
          e.currentTarget.style.zIndex = "1";
        }}
      >
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
            loading="lazy"
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
              if (window.innerWidth > 768) {
                e.target.style.transform = "scale(1.1)";
              }
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
          
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
            padding: "12px",
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
              fontSize: "14px", 
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
                fontSize: "18px", 
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
        position: "relative",
        fontFamily: "'Inter', sans-serif",
        background: "transparent",
        minHeight: "100vh",
     

      }}
    >
      <div 
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
            marginBottom:"3rem",
          zIndex: -1
        }}
      >
        <img 
          src={PorductBgImg1} 
          alt="wholesale-retailer.com" 
          loading="lazy"
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover", 
            opacity: 0.2 
          }} 
        />
        <div 
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
             
            background: "rgba(0,0,0,0.3)",
          
          }}
        />
      </div>
      
      <div 
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          padding: "16px",
           
        }}
      >
       <div
  style={{
    background: "#fff",
    borderRadius: "16px",
    padding: "16px",
    marginBottom: "16px",
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
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "16px",
      paddingBottom: "12px",
      borderBottom: "1px solid rgba(255,255,255,0.2)",
      position: "relative",
      gap: "12px"
    }}
  >
    <h3
      style={{
        fontSize: "clamp(20px, 5vw, 24px)",
        fontWeight: "600",
        color: "#1f2937",
        margin: 0,
        textShadow: "0 2px 4px rgba(0,0,0,0.1)",
        letterSpacing: "0.5px",
        textAlign: "center",
           marginTop:"3rem",
          
      }}
    >
      New Arrivals - Wholesaler
    </h3>
    <button
      onClick={() => navigate("/products")}
      style={{
        background: "linear-gradient(135deg, #e97717 0%, #e97717 100%)",
        color: "#fff",
        padding: "10px 20px",
        borderRadius: "12px",
        border: "2px solid rgba(255,255,255,0.3)",
        cursor: "pointer",
        fontSize: "14px",
        fontWeight: "700",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
        textTransform: "uppercase",
        letterSpacing: "0.5px",
        width: "fit-content",   marginBottom:"1rem"

      }}
      onMouseEnter={(e) => {
        if (window.innerWidth > 768) {
          e.target.style.transform = "translateY(-2px)";
          e.target.style.boxShadow = "0 12px 32px rgba(0,0,0,0.2)";
        }
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "translateY(0px)";
        e.target.style.boxShadow = "0 8px 24px rgba(0,0,0,0.15)";
      }}
      onTouchStart={(e) => {
        e.target.style.transform = "scale(0.95)";
      }}
      onTouchEnd={(e) => {
        e.target.style.transform = "scale(1)";
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
        padding: "40px",
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        backdropFilter: "blur(10px)"
      }}
      role="status"
      aria-live="polite"
    >
      <div
        style={{
          width: "40px",
          height: "40px",
          border: "4px solid rgba(255,255,255,0.3)",
          borderTop: "4px solid white",
          borderRadius: "50%",
          animation: "spin 1s linear infinite"
        }}
      ></div>
      <span
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          overflow: "hidden"
        }}
      >
        Loading products...
      </span>
    </div>
  )}

  {error && (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "24px",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        border: "2px solid rgba(239, 68, 68, 0.3)",
        backdropFilter: "blur(10px)"
      }}
      role="alert"
    >
      <p style={{ color: "#dc2626", fontSize: "16px", margin: 0, fontWeight: "600" }}>
        {error}
      </p>
    </div>
  )}

  {!loading && Array.isArray(products) && products.length === 0 && !error && (
    <div
      style={{
        background: "rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "24px",
        textAlign: "center",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        border: "2px solid rgba(255,255,255,0.2)",
        backdropFilter: "blur(10px)"
      }}
      role="status"
    >
      <p style={{ color: "#374151", fontSize: "16px", margin: 0, fontWeight: "600" }}>
        No new arrivals available
      </p>
    </div>
  )}

  {!loading && Array.isArray(products) && products.length > 0 && (
    <div
      ref={scope}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "16px",
        padding: "16px"
      }}
    >
      {productList}
    </div>
  )}
</div>


        <div 
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
            marginTop: "24px"
          }}
        >
          <div 
            style={{
              background: "white",
              borderRadius: "16px",
              padding: "24px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden"
            }}
          >
            <div style={{ zIndex: 1 }}>
              <h3 style={{ 
                fontSize: "24px", 
                fontWeight: "600", 
                color: "#1f2937",
                margin: "0 0 16px 0"
              }}>
                Boost Your Best: Unleash Peak Performance!
              </h3>
              <button
                onClick={() => navigate("/products")}
                style={{
                  background: "#3b82f6",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "14px",
                  fontWeight: "600",
                  transition: "all 0.2s ease",
                }}
                onTouchStart={(e) => {
                  e.target.style.transform = "scale(0.95)";
                }}
                onTouchEnd={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              >
                Shop Now
              </button>
            </div>
            <div style={{ textAlign: "center" }}>
              <img 
                src={SloganImg} 
                alt="wholesale-retailer.com" 
                loading="lazy"
                style={{ maxWidth: "100%", height: "auto" }} 
              />
            </div>
          </div>

          <div>
            <div 
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                marginBottom: "24px",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div 
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1
                }}
              >
                <img 
                  src={FeatureBgImg1} 
                  alt="FeatureBgImg1" 
                  loading="lazy"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    opacity: 0.2 
                  }} 
                />
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)"
                  }}
                />
              </div>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                flexDirection: "row"
              }}>
                <div style={{ zIndex: 1 }}>
                  <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 8px 0" }}>
                    Energize, Strengthen, Thrive.
                  </p>
                  <h3 style={{ 
                    fontSize: "20px", 
                    fontWeight: "600", 
                    color: "#1f2937",
                    margin: "0 0 16px 0"
                  }}>
                    Power Up Your Day: Fuel Your Strength!
                  </h3>
                  <button
                    onClick={() => navigate("/products")}
                    style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                    }}
                    onTouchStart={(e) => {
                      e.target.style.transform = "scale(0.95)";
                    }}
                    onTouchEnd={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    Shop Now
                  </button>
                </div>
                <div>
                  <img 
                    src={products[0]?.images ? getImageUrl(products[0].images[0]) : "https://via.placeholder.com/150"} 
                    alt="wholesale-retailer.com" 
                    loading="lazy"
                    style={{ maxWidth: "150px", height: "auto" }} 
                  />
                </div>
              </div>
            </div>

            <div 
              style={{
                background: "white",
                borderRadius: "16px",
                padding: "24px",
                boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden"
              }}
            >
              <div 
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: -1
                }}
              >
                <img 
                  src={FeatureBgImg2} 
                  alt="FeatureBgImg2" 
                  loading="lazy"
                  style={{ 
                    width: "100%", 
                    height: "100%", 
                    objectFit: "cover", 
                    opacity: 0.2 
                  }} 
                />
                <div 
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.3)"
                  }}
                />
              </div>
              <div style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center",
                flexDirection: "row"
              }}>
                <div>
                  <img 
                    src={products[1]?.images ? getImageUrl(products[1].images[0]) : "https://via.placeholder.com/150"} 
                    alt="wholesale-retailer.com" 
                    loading="lazy"
                    style={{ maxWidth: "150px", height: "auto" }} 
                  />
                </div>
                <div style={{ zIndex: 1 }}>
                  <p style={{ color: "#6b7280", fontSize: "14px", margin: "0 0 8px 0" }}>
                    Unleash Your Inner Power.
                  </p>
                  <h3 style={{ 
                    fontSize: "20px", 
                    fontWeight: "600", 
                    color: "#1f2937",
                    margin: "0 0 16px 0"
                  }}>
                    Elevate Your Energy: Thrive with Vitality!
                  </h3>
                  <button
                    onClick={() => navigate("/products")}
                    style={{
                      background: "#3b82f6",
                      color: "white",
                      padding: "8px 16px",
                      borderRadius: "8px",
                      border: "none",
                      cursor: "pointer",
                      fontSize: "14px",
                      fontWeight: "600",
                      transition: "all 0.2s ease",
                    }}
                    onTouchStart={(e) => {
                      e.target.style.transform = "scale(0.95)";
                    }}
                    onTouchEnd={(e) => {
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
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
          
          @media (max-width: 1024px) {
            .PS__ProductCardWrapper {
              height: 300px;
            }
          }

          @media (max-width: 768px) {
            .PS__ProductCardWrapper {
              height: 280px;
            }
            .PS__ProductCardWrapper img {
              max-width: 85%;
              max-height: 85%;
            }
            .PS__ProductCardWrapper div[style*="padding: 12px"] {
              padding: 10px;
            }
            .PS__ProductCardWrapper h4 {
              font-size: 13px;
            }
            .PS__ProductCardWrapper h3 {
              font-size: 16px;
            }
            div[style*="gridTemplateColumns: repeat(auto-fit, minmax(300px, 1fr))"] {
              grid-template-columns: 1fr;
            }
            div[style*="display: flex"][style*="justifyContent: space-between"] {
              flex-direction: column;
              align-items: center;
              gap: 12px;
            }
            div[style*="display: flex"][style*="justifyContent: space-between"] img {
              max-width: 120px;
            }
            div[style*="display: flex"][style*="justifyContent: space-between"] h3 {
              font-size: 18px;
              text-align: center;
            }
          }

          @media (max-width: 480px) {
            .PS__ProductCardWrapper {
              height: 260px;
            }
            .PS__ProductCardWrapper div[style*="height: 200px"] {
              height: 160px;
            }
            .PS__ProductCardWrapper div[style*="height: 120px"] {
              height: 100px;
            }
            .PS__ProductCardWrapper h4 {
              font-size: 12px;
            }
            .PS__ProductCardWrapper h3 {
              font-size: 14px;
            }
            .PS__ProductCardWrapper p {
              font-size: 11px;
            }
            div[style*="display: flex"][style*="justifyContent: space-between"] h3 {
              font-size: 16px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Productsection;