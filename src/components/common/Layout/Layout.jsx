


// import React, { useState, useEffect, useCallback } from "react";
// import axios from "axios";
// import Navbar from "../Navbar/Navbar";

// // Custom hook for fetching brands
// const useBrandsAPI = (BASE_URL) => {
//   const fetchBrands = useCallback(async () => {
//     try {
//       const response = await axios.get(`${BASE_URL}/api/user/get-brands`);
//       const brands = Array.isArray(response.data) ? response.data.map(brand => brand.name) : [];
//       console.log('Brands fetched:', response.data);
//       return brands;
//     } catch (err) {
//       console.error("Error fetching brands:", err);
//       return [];
//     }
//   }, [BASE_URL]);

//   return { fetchBrands };
// };

// // RibbonNavigation component
// const RibbonNavigation = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [brands, setBrands] = useState([]);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5555";
//   const { fetchBrands } = useBrandsAPI(BASE_URL);

//   // Fetch brands on component mount
//   useEffect(() => {
//     const initializeBrands = async () => {
//       const fetchedBrands = await fetchBrands();
//       setBrands(fetchedBrands);
//     };
//     initializeBrands();
//   }, [fetchBrands]);

//   // Update isMobile state on window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth <= 768);
//     };
//     window.addEventListener('resize', handleResize);
//     handleResize();
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Ribbon data with URLs for <a> tags
//   const ribbonData = {
//     "IRISH MOSS": [
//       { name: "Shop Now", url: "/products" },
//       { name: "Know More", url: "/irish-moss-info" },
//     ],
//     "CBD": [
//       { name: "Shop Now", url: "/products" },
//       { name: "Know More", url: "/cbd-info" },
//     ],
//     "Health Concern": [],
//     "Brands": brands.map(brand => ({
//     name: brand,
//     url: `https://retailer-wholesaler-website.netlify.app/products?brand=${encodeURIComponent(brand)}`
//   })),
//     "Categories": [],
//     "Maximum Cardio": [
//       { name: "Shop Now", url: "/products" },
//       { name: "Know More", url: "/maximum-cardio-info" },
//       { name: "Video", url: "/maximum-cardio-video" },
//     ],
//     "Essential Oil": [
//       { name: "Shop Now", url: "https://retailer-wholesaler-website.netlify.app/products?category=6878f34fac69d215cf9da137" },
//       { name: "Know More", url: "https://retailer-wholesaler-website.netlify.app/essential-oils-info" },
//     ],
//     "Ray's Vitality": [],
//   };

//   // Handle click for items without dropdowns
//   const handleNoDropdownClick = (event, menuName) => {
//     event.stopPropagation();
//     if (menuName === "Categories") {
//       window.location.href = "/products";
//     } else if (menuName === "Health Concern") {
//       window.location.href = "/health-concern";
//     }
//   };

//   // Handle click/tap for mobile or hover for desktop
//   const handleMenuClick = (event, menuName) => {
//     event.stopPropagation();
//     if (ribbonData[menuName].length > 0) {
//       setActiveDropdown(activeDropdown === menuName ? null : menuName);
//     }
//   };

//   const handleMouseEnter = (menuName) => {
//     if (!isMobile && ribbonData[menuName].length > 0) {
//       setActiveDropdown(menuName);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (!isMobile) {
//       setActiveDropdown(null);
//     }
//   };

//   const handleItemClick = () => {
//     setActiveDropdown(null);
//   };

//   const handleOutsideClick = useCallback((event) => {
//     if (!event.target.closest('.ribbon-item')) {
//       setActiveDropdown(null);
//     }
//   }, []);

//   useEffect(() => {
//     document.addEventListener('click', handleOutsideClick);
//     return () => {
//       document.removeEventListener('click', handleOutsideClick);
//     };
//   }, [handleOutsideClick]);

//   return (
//     <>
//       <div className="ribbon-navigation">
//         <div className="ribbon-container">
//           {Object.keys(ribbonData).map((menuName) => {
//             const hasContent = ribbonData[menuName].length > 0;
//             return (
//               <div 
//                 key={menuName} 
//                 className={`ribbon-item ${activeDropdown === menuName ? 'active' : ''}`}
//                 onMouseEnter={() => handleMouseEnter(menuName)}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={(e) => isMobile ? handleMenuClick(e, menuName) : undefined}
//               >
//                 <div 
//                   className={`ribbon-link ${!hasContent ? 'no-dropdown' : ''}`}
//                   onClick={(e) => (menuName === "Categories" || menuName === "Health Concern") ? handleNoDropdownClick(e, menuName) : undefined}
//                   style={{ cursor: hasContent || menuName === "Categories" || menuName === "Health Concern" ? 'pointer' : 'default' }}
//                 >
//                   {menuName}
//                   {hasContent && (
//                     <svg
//                       className={`dropdown-arrow ${activeDropdown === menuName ? 'rotated' : ''}`}
//                       width="12"
//                       height="8"
//                       viewBox="0 0 12 8"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M1 1L6 6L11 1"
//                         stroke="currentColor"
//                         strokeWidth="1.5"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   )}
//                 </div>

//                 {hasContent && activeDropdown === menuName && (
//                   <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
//                     <div className="dropdown-content">
//                       {ribbonData[menuName].map((item, index) => (
//                         <a
//                           key={index}
//                           href={item.url}
//                           className="dropdown-item"
//                           onClick={handleItemClick}
//                         >
//                           <span className="item-name">{item.name}</span>
//                         </a>
//                       ))}
//                     </div>
//                   </div>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <style jsx>{`
//         .ribbon-navigation {
//           background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
//           box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//           position: relative;
//           z-index: 1000;
//         }

//         .ribbon-container {
//           display: flex;
//           flex-wrap: wrap;
//           justify-content: center;
//           align-items: center;
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 12px 16px;
//           gap: 12px;
//         }

//         .ribbon-item {
//           position: relative;
//           flex: 0 0 auto;
//         }

//         .ribbon-link {
//           display: flex;
//           align-items: center;
//           padding: 12px 16px;
//           color: white;
//           text-decoration: none;
//           font-weight: 500;
//           font-size: 15px;
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border-radius: 8px;
//           white-space: nowrap;
//           line-height: 1.5;
//         }

//         .ribbon-link:hover,
//         .ribbon-item.active .ribbon-link {
//           background-color: #FF6B35;
//           color: white;
//           transform: translateY(-2px);
//         }

//         .ribbon-link.no-dropdown:hover,
//         .ribbon-link.no-dropdown:active {
//           background-color: rgba(255, 255, 255, 0.1);
//           transform: none;
//           cursor: default;
//         }

//         .dropdown-arrow {
//           margin-left: 8px;
//           transition: transform 0.3s ease;
//         }

//         .dropdown-arrow.rotated {
//           transform: rotate(180deg);
//         }

//         .dropdown-menu {
//           position: absolute;
//           top: 100%;
//           left: 50%;
//           transform: translateX(-50%);
//           background: white;
//           min-width: 220px;
//           border-radius: 12px;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//           border: 1px solid #e0e0e0;
//           overflow: hidden;
//           z-index: 1000;
//           animation: dropdownSlide 0.3s ease-out;
//           margin-top: 8px;
//           visibility: hidden;
//           opacity: 0;
//           transition: visibility 0s linear 0.3s, opacity 0.3s ease-out;
//         }

//         .ribbon-item:hover .dropdown-menu,
//         .ribbon-item.active .dropdown-menu {
//           visibility: visible;
//           opacity: 1;
//           transition: visibility 0s linear, opacity 0.3s ease-out;
//         }

//         @keyframes dropdownSlide {
//           from {
//             opacity: 0;
//             transform: translateX(-50%) translateY(-10px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(-50%) translateY(0);
//           }
//         }

//         .dropdown-content {
//           padding: 12px 0;
//         }

//         .dropdown-item {
//           padding: 14px 20px;
//           cursor: pointer;
//           transition: all 0.2s ease;
//           border-bottom: 1px solid #f5f5f5;
//           display: block;
//           text-decoration: none;
//           color: #333;
//         }

//         .dropdown-item:last-child {
//           border-bottom: none;
//         }

//         .dropdown-item:hover,
//         .dropdown-item:active {
//           background-color: #FFF3E0;
//           color: #FF6B35;
//         }

//         .item-name {
//           font-weight: 500;
//           font-size: 14px;
//         }

//         .dropdown-item:hover .item-name,
//         .dropdown-item:active .item-name {
//           color: #FF6B35;
//         }

//         @media (max-width: 1024px) {
//           .ribbon-container {
//             padding: 10px 12px;
//             gap: 8px;
//           }

//           .ribbon-link {
//             padding: 10px 12px;
//             font-size: 14px;
//           }

//           .dropdown-menu {
//             min-width: 200px;
//           }
//         }

//         @media (max-width: 768px) {
//           .ribbon-container {
//             justify-content: space-around;
//             gap: 6px;
//             padding: 8px 10px;
//           }

//           .ribbon-item {
//             flex: 1 1 30%;
//             min-width: 120px;
//           }

//           .ribbon-link {
//             padding: 10px 12px;
//             font-size: 13px;
//             justify-content: space-between;
//           }

//           .dropdown-menu {
//             position: static;
//             width: 100%;
//             transform: none;
//             min-width: unset;
//             background: #f8f9fa;
//             border: none;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             border-radius: 8px;
//             margin-top: 4px;
//           }

//           .ribbon-item:hover .dropdown-menu {
//             visibility: hidden;
//             opacity: 0;
//           }

//           .ribbon-item.active .dropdown-menu {
//             visibility: visible;
//             opacity: 1;
//           }

//           .dropdown-content {
//             padding: 8px 0;
//           }

//           .dropdown-item {
//             padding: 12px 16px;
//             font-size: 13px;
//           }
//         }

//         @media (max-width: 480px) {
//           .ribbon-container {
//             flex-direction: column;
//             align-items: stretch;
//             padding: 8px 8px;
//             gap: 4px;
//           }

//           .ribbon-item {
//             flex: 1 1 100%;
//             min-width: unset;
//           }

//           .ribbon-link {
//             padding: 12px 16px;
//             font-size: 14px;
//             justify-content: space-between;
//             border-radius: 6px;
//           }

//           .dropdown-menu {
//             position: static;
//             width: 100%;
//             background: #f8f9fa;
//             border: none;
//             box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//             border-radius: 6px;
//             margin-top: 2px;
//           }

//           .dropdown-content {
//             padding: 8px 0;
//           }

//           .dropdown-item {
//             padding: 12px 16px;
//             font-size: 14px;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export const Layout = ({ children }) => {
//   return (
//     <>
//       <Navbar />
//       <RibbonNavigation />
//       {children}
//     </>
//   );
// };


import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

// Custom hook for fetching brands
const useBrandsAPI = (BASE_URL) => {
  const fetchBrands = useCallback(async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/user/get-brands`);
      const brands = Array.isArray(response.data) ? response.data.map(brand => brand.name) : [];
      console.log('Brands fetched:', response.data);
      return brands;
    } catch (err) {
      console.error("Error fetching brands:", err);
      return [];
    }
  }, [BASE_URL]);

  return { fetchBrands };
};

// RibbonNavigation component
const RibbonNavigation = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [brands, setBrands] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [dropdownTimeout, setDropdownTimeout] = useState(null); // New state for timeout
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const { fetchBrands } = useBrandsAPI(BASE_URL);

  // Fetch brands on component mount
  useEffect(() => {
    const initializeBrands = async () => {
      const fetchedBrands = await fetchBrands();
      setBrands(fetchedBrands);
    };
    initializeBrands();
  }, [fetchBrands]);

  // Update isMobile state on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Ribbon data with URLs for <a> tags
   const ribbonData = {
    "IRISH MOSS": [
      { name: "Shop Now", url: "/products" },
      { name: "Know More", url: "/irish-moss-info" },
    ],
    "CBD": [
      { name: "Shop Now", url: "/products" },
      { name: "Know More", url: "/cbd-info" },
    ],
    "Health Concern": [],
    "Brands": brands.map(brand => ({
    name: brand,
    url: `https://rayshealthyliving.com/products?brand=${encodeURIComponent(brand)}`
  })),
    "Categories": [],
    "Maximum Cardio": [
      { name: "Shop Now", url: "/products" },
      { name: "Know More", url: "/maximum-cardio-info" },
      { name: "Video", url: "/maximum-cardio-video" },
    ],
    "Essential Oil": [
      { name: "Shop Now", url: "https://rayshealthyliving.com/products?category=6878f34fac69d215cf9da137" },
      { name: "Know More", url: "https://rayshealthyliving.com/essential-oils-info" },
    ],
    "Ray's Vitality": [],
  };

  // Handle click for items without dropdowns
  const handleNoDropdownClick = (event, menuName) => {
    event.stopPropagation();
    if (menuName === "Categories") {
      window.location.href = "/products";
    } else if (menuName === "Health Concern") {
      window.location.href = "/health-concern";
    }
  };

  // Handle click/tap for mobile or hover for desktop
  const handleMenuClick = (event, menuName) => {
    event.stopPropagation();
    if (ribbonData[menuName].length > 0) {
      setActiveDropdown(activeDropdown === menuName ? null : menuName);
    }
  };

  const handleMouseEnter = (menuName) => {
    if (!isMobile && ribbonData[menuName].length > 0) {
      // Clear any existing timeout to prevent premature hiding
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        setDropdownTimeout(null);
      }
      setActiveDropdown(menuName);
    }
  };

  const handleMouseLeave = () => {
    if (!isMobile) {
      // Set a timeout to delay hiding the dropdown
      const timeout = setTimeout(() => {
        setActiveDropdown(null);
      }, 300); // 300ms delay
      setDropdownTimeout(timeout);
    }
  };

  const handleItemClick = () => {
    setActiveDropdown(null);
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
  };

  const handleOutsideClick = useCallback((event) => {
    if (!event.target.closest('.ribbon-item')) {
      setActiveDropdown(null);
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
        setDropdownTimeout(null);
      }
    }
  }, [dropdownTimeout]);

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick);
    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <>
      {/* <div className="ribbon-navigation">
        <div className="ribbon-container">
          {Object.keys(ribbonData).map((menuName) => {
            const hasContent = ribbonData[menuName].length > 0;
            return (
              <div 
                key={menuName} 
                className={`ribbon-item ${activeDropdown === menuName ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(menuName)}
                onMouseLeave={handleMouseLeave}
                onClick={(e) => isMobile ? handleMenuClick(e, menuName) : undefined}
              >
                <div 
                  className={`ribbon-link ${!hasContent ? 'no-dropdown' : ''}`}
                  onClick={(e) => (menuName === "Categories" || menuName === "Health Concern") ? handleNoDropdownClick(e, menuName) : undefined}
                  style={{ cursor: hasContent || menuName === "Categories" || menuName === "Health Concern" ? 'pointer' : 'default' }}
                >
                  <span className="ribbon-text">{menuName}</span>
                  {hasContent && (
                    <svg
                      className={`dropdown-arrow ${activeDropdown === menuName ? 'rotated' : ''}`}
                      width="12"
                      height="8"
                      viewBox="0 0 12 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L6 6L11 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                {hasContent && activeDropdown === menuName && (
                  <div 
                    className="dropdown-menu" 
                    onMouseEnter={() => {
                      if (dropdownTimeout) {
                        clearTimeout(dropdownTimeout);
                        setDropdownTimeout(null);
                      }
                    }}
                    onMouseLeave={handleMouseLeave}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="dropdown-content">
                      {ribbonData[menuName].map((item, index) => (
                        <a
                          key={index}
                          href={item.url}
                          className="dropdown-item"
                          onClick={handleItemClick}
                        >
                          <span className="item-name">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div> */}

      <style jsx>{`
        .ribbon-navigation {
          background: linear-gradient(135deg, #4CAF50 0%, #66BB6A 100%);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          position: relative;
          z-index: 1000;
        }

        .ribbon-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
          padding: 12px 16px;
          gap: 12px;
        }

        .ribbon-item {
          position: relative;
          flex: 0 0 auto;
        }

        .ribbon-link {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          color: white;
          text-decoration: none;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: all 0.3s ease;
          border-radius: 8px;
          white-space: nowrap;
          line-height: 1.5;
        }

        .ribbon-text {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .ribbon-link:hover,
        .ribbon-item.active .ribbon-link {
          background-color: #FF6B35;
          color: white;
          transform: translateY(-2px);
        }

        .ribbon-link.no-dropdown:hover,
        .ribbon-link.no-dropdown:active {
          background-color: rgba(255, 255, 255, 0.1);
          transform: none;
          cursor: default;
        }

        .dropdown-arrow {
          margin-left: 8px;
          transition: transform 0.3s ease;
          flex-shrink: 0;
        }

        .dropdown-arrow.rotated {
          transform: rotate(180deg);
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%);
          background: white;
          min-width: 220px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          border: 1px solid #e0e0e0;
          overflow: hidden;
          z-index: 1000;
          margin-top: 8px;
          visibility: hidden;
          opacity: 0;
          transform: translateX(-50%) translateY(-10px) scale(0.95);
          transition: visibility 0s, opacity 0.4s ease, transform 0.4s ease; /* Adjusted transition timing */
        }

        .ribbon-item:hover .dropdown-menu,
        .ribbon-item.active .dropdown-menu {
          visibility: visible;
          opacity: 1;
          transform: translateX(-50%) translateY(0) scale(1);
          transition: visibility 0s, opacity 0.4s ease, transform 0.4s ease; /* Adjusted transition timing */
        }

        @keyframes dropdownSlide {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }

        .dropdown-content {
          padding: 12px 0;
          max-height: 300px;
          overflow-y: auto;
        }

        .dropdown-item {
          padding: 14px 20px;
          cursor: pointer;
          transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
          border-bottom: 1px solid #f5f5f5;
          display: block;
          text-decoration: none;
          color: #333;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          transform: translateX(-5px);
          opacity: 0;
          animation: slideInLeft 0.3s ease-out forwards;
        }

        .ribbon-item.active .dropdown-item {
          transform: translateX(0);
          opacity: 1;
        }

        .dropdown-item:nth-child(1) { animation-delay: 0.05s; }
        .dropdown-item:nth-child(2) { animation-delay: 0.1s; }
        .dropdown-item:nth-child(3) { animation-delay: 0.15s; }
        .dropdown-item:nth-child(4) { animation-delay: 0.2s; }
        .dropdown-item:nth-child(5) { animation-delay: 0.25s; }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-5px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .dropdown-item:last-child {
          border-bottom: none;
        }

        .dropdown-item:hover,
        .dropdown-item:active {
          background-color: #FFF3E0;
          color: #FF6B35;
        }

        .item-name {
          font-weight: 500;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          display: block;
        }

        .dropdown-item:hover .item-name,
        .dropdown-item:active .item-name {
          color: #FF6B35;
        }

        @media (max-width: 1024px) {
          .ribbon-container {
            padding: 10px 12px;
            gap: 8px;
          }

          .ribbon-link {
            padding: 10px 12px;
            font-size: 14px;
          }

          .dropdown-menu {
            min-width: 200px;
          }
        }

        @media (max-width: 768px) {
          .ribbon-container {
            justify-content: space-around;
            gap: 4px;
            padding: 6px 8px;
          }

          .ribbon-item {
            flex: 1 1 auto;
            min-width: 0;
            max-width: calc(50% - 2px);
          }

          .ribbon-link {
            padding: 8px 10px;
            font-size: 12px;
            justify-content: space-between;
            min-width: 0;
          }

          .ribbon-text {
            max-width: calc(100% - 20px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }

          .dropdown-arrow {
            margin-left: 4px;
            width: 10px;
            height: 6px;
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            min-width: unset;
            background: #f8f9fa;
            border: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            border-radius: 6px;
            margin-top: 2px;
            z-index: 1001;
            visibility: hidden;
            opacity: 0;
            transform: translateY(-8px) scale(0.95);
            transition: all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .ribbon-item.active .dropdown-menu {
            visibility: visible;
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 0.25s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .dropdown-content {
            padding: 4px 0;
            max-height: 180px;
            overflow-y: auto;
          }

          .dropdown-item {
            padding: 8px 12px;
            font-size: 12px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-bottom: 1px solid #e8e8e8;
            transition: all 0.15s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .dropdown-item:last-child {
            border-bottom: none;
          }

          .item-name {
            font-size: 12px;
          }
        }

        @media (max-width: 480px) {
          .ribbon-container {
            flex-direction: row;
            flex-wrap: wrap;
            align-items: stretch;
            padding: 4px 4px;
            gap: 2px;
          }

          .ribbon-item {
            flex: 1 1 calc(33.333% - 1.5px);
            min-width: 0;
            max-width: calc(33.333% - 1.5px);
          }

          .ribbon-link {
            padding: 6px 4px;
            font-size: 10px;
            justify-content: space-between;
            border-radius: 4px;
            min-width: 0;
          }

          .ribbon-text {
            max-width: calc(100% - 14px);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 10px;
          }

          .dropdown-arrow {
            margin-left: 2px;
            width: 6px;
            height: 4px;
          }

          .dropdown-menu {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: #f8f9fa;
            border: none;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
            border-radius: 4px;
            margin-top: 1px;
            z-index: 1001;
            visibility: hidden;
            opacity: 0;
            transform: translateY(-6px) scale(0.95);
            transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .ribbon-item.active .dropdown-menu {
            visibility: visible;
            opacity: 1;
            transform: translateY(0) scale(1);
            transition: all 0.2s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .dropdown-content {
            padding: 2px 0;
            max-height: 120px;
            overflow-y: auto;
          }

          .dropdown-item {
            padding: 6px 8px;
            font-size: 10px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            border-bottom: 1px solid #e8e8e8;
            transition: all 0.12s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .dropdown-item:last-child {
            border-bottom: none;
          }

          .item-name {
            font-size: 10px;
          }
        }

        @media (max-width: 320px) {
          .ribbon-container {
            gap: 1px;
            padding: 3px 3px;
          }

          .ribbon-item {
            flex: 1 1 calc(50% - 0.5px);
            max-width: calc(50% - 0.5px);
          }

          .ribbon-link {
            padding: 5px 3px;
            font-size: 9px;
          }

          .ribbon-text {
            font-size: 9px;
            max-width: calc(100% - 12px);
          }

          .dropdown-arrow {
            width: 5px;
            height: 3px;
          }

          .dropdown-content {
            max-height: 100px;
            padding: 1px 0;
          }

          .dropdown-item {
            padding: 4px 6px;
            font-size: 9px;
            border-bottom: 1px solid #e8e8e8;
            transition: all 0.1s cubic-bezier(0.4, 0.0, 0.2, 1);
          }

          .dropdown-item:last-child {
            border-bottom: none;
          }

          .item-name {
            font-size: 9px;
          }
        }
      `}</style>
    </>
  );
};

export const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <RibbonNavigation />
      {children}
    </>
  );
};
