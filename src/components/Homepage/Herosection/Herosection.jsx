import React, { useEffect, useState } from "react";
import "./Herosection.scss";
import parse from "html-react-parser";
import { motion, AnimatePresence } from "framer-motion";

import HeroSliderImg1 from "../../../assets/images/bg/HeroSliderImg1.jpg";
import HeroSliderImg2 from "../../../assets/images/bg/HeroSliderImg2.jpg";
import HeroSliderImg3 from "../../../assets/images/bg/HeroSliderImg3.jpg";

import HeroSliderImg4 from "../../../assets/images/bg/Raygpt.jpeg";



const sliderData = [
  // {
  //   image: HeroSliderImg4,
  //   title: `Create Your Own <span className="headingSpan1">Ray GPT</span> 
  //                 <span className="headingSpan2">Store</span>`,
  //   smallInfo: `Build your personalized AI-powered store with Ray GPT. 
  //                 Streamline your business, enhance customer experience, 
  //                 and boost sales with intelligent automation. Start today!`,
  //   link: "https://rayonesystem.netlify.app/",
  //   isExternal: true
  // },
  {
    image: HeroSliderImg1,
    title: `Pure <span className="headingSpan1">Wellness</span> ,
                  <span className="headingSpan2">Naturally</span> Yours`,
    smallInfo: `Ray's Healthy Living offers organic supplements for your
                  family's health. Safe, natural, and affordable, our vitamins
                  boost vitality. Shop online or in-store today.`,
  },
  {
    image: HeroSliderImg2,
    title: `<span className="headingSpan1">Nature's </span> Best for Your
                  <span className="headingSpan2">Family</span>`,
    smallInfo: `Discover Ray's Healthy Living's organic supplements. Crafted
                  for safety and affordability, our natural vitamins enhance
                  family wellness. Shop online or at our stores now.`,
  },
  {
    image: HeroSliderImg3,
    title: `<span className="headingSpan1">Vitality </span> Starts with
                  <span className="headingSpan2">Nature</span>`,
    smallInfo: `Elevate health with Ray's Healthy Living's organic vitamins.
                  Safe, affordable, and natural, our supplements boost vitality.
                  Shop online or in-store today.`,
  },
];

const handleNext = (dataArray, setCurrentIndex) => {
  console.log("handleNext");
  setCurrentIndex((curr) => (curr === dataArray.length - 1 ? 0 : curr + 1));
};

export const Herosection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const autoSlide = setInterval(() => {
      handleNext(sliderData, setCurrentIndex);
    }, 8000);

    return () => {
      clearInterval(autoSlide);
    };
  }, []);

  return (
    <AnimatePresence mode="popLayout">
      <div className="Homepage__heroMainWrapper">
        <div className="Homepage__mainContainerWrapper">
          <div className="HP__heroSliderWrapper">
            {sliderData.map((cur, id) => (
              <motion.div
                animate={{
                  x: `-${currentIndex * 100}%`,
                  opacity: currentIndex === id ? 1 : 0,
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut",
                }}
                key={id}
                className="mainSliderWrapper"
              >
                <div className="sliderImgWrapper">
                  <img src={cur.image} alt="wholesale-retailer.com" />
                </div>
                <div className="sliderContentWrapper">
                  <div className="contentWrapper">
                    <h2>{parse(cur.title)}</h2>
                    <p>{cur.smallInfo}</p>
                    {/* Regular View All button for non-Ray GPT slides */}
                    {id !== 0 && cur.link && (
                      <a
                        href={cur.link}
                        target={cur.isExternal ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="heroViewBTN"
                      >
                        View All
                      </a>
                    )}
                  </div>

                  {/* Ray GPT Create Store Button - positioned like wholesaler badge */}
                  {id === 0 && (
                    <motion.a
                      href={cur.link}
                      target={cur.isExternal ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="createStore__badge"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{
                        opacity: currentIndex === id ? 1 : 0,
                        scale: currentIndex === id ? 1 : 0.8,
                        y: currentIndex === id ? 0 : 20
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "backOut"
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <motion.div
                        className="createStore__icon"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            fill="currentColor"
                          />
                        </svg>
                      </motion.div>
                      <div className="createStore__content">
                        <motion.span
                          className="createStore__title"
                          animate={{
                            textShadow: [
                              "0 0 5px rgba(255, 255, 255, 0.5)",
                              "0 0 15px rgba(255, 255, 255, 0.8)",
                              "0 0 5px rgba(255, 255, 255, 0.5)"
                            ]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Create
                        </motion.span>
                        <span className="createStore__subtitle">Store</span>
                      </div>
                      <motion.div
                        className="createStore__glow"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.a>
                  )}

                  {/* Wholesaler Badge - only show for non-Ray GPT slides */}
                  {id !== 0 && (
                    <motion.div
                      className="wholesaler__badge my-[-2rem]"
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      animate={{
                        opacity: currentIndex === id ? 1 : 0,
                        scale: currentIndex === id ? 1 : 0.8,
                        y: currentIndex === id ? 0 : 20
                      }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: "backOut"
                      }}
                    >
                      {/* ...existing badge content... */}
                      <motion.div
                        className="badge__icon"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      >
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M3 7H21L19 19H5L3 7ZM3 7L2 3H1M16 11V13M8 11V13M7.5 3L9.5 7M16.5 3L14.5 7"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </motion.div>
                      <div className="badge__content">
                        <motion.span
                          className="badge__title"
                          animate={{
                            x: [0, 2, 0],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          Authorized
                        </motion.span>
                        <span className="badge__subtitle">Wholesaler</span>
                      </div>
                      <motion.div
                        className="badge__glow"
                        animate={{
                          opacity: [0.5, 1, 0.5],
                          scale: [1, 1.2, 1]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="slider__indicatorWrapper">
          {sliderData.map((_, id) => (
            <motion.div
              onClick={() => {
                setCurrentIndex(id);
              }}
              animate={{
                scale: currentIndex === id ? 1.05 : 0.8,
                opacity: currentIndex === id ? 1 : 0.8,
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut",
              }}
              key={id}
              className="sliderIndicator"
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        /* ========== BASE STYLES (Mobile First) ========== */
        .Homepage__heroMainWrapper {
          min-height: 50vh;
          width: 100%;
          padding: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
        }

        .Homepage__mainContainerWrapper {
          width: 100%;
          height: 100%;
          border-radius: 12px;
          overflow: hidden;
        }

        .HP__heroSliderWrapper {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: start;
          align-items: center;
        }

        .mainSliderWrapper {
          width: 100%;
          height: 100%;
          flex-shrink: 0;
          position: relative;
        }

        .sliderImgWrapper {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
          filter: brightness(0.5) grayscale(0.2);
        }

        .sliderImgWrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .sliderContentWrapper {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .contentWrapper {
          width: 100% !important;
          padding: 15px 10px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 8px;
        }

        .contentWrapper h2 {
          font-size: 0.7rem;
          line-height: 1.1;
          font-family: var(--mainFont);
          color: var(--color-white);
          font-weight: 800;
          width: 100% !important;
        }

        .contentWrapper .headingSpan1 {
          color: var(--color-primary);
        }

        .contentWrapper .headingSpan2 {
          color: var(--color-seconday);
        }

        .contentWrapper p {
          font-size: 0.65rem;
          line-height: 1.35;
          font-weight: 400;
          font-family: var(--paraFont);
          color: var(--color-white);
          width: 100% !important;
        }

        .heroViewBTN {
          margin-top: 10px;
          height: 36px;
          width: 90px;
          padding: 8px 16px;
          border: none;
          outline: none;
          border-radius: 50px;
          cursor: pointer;
          background: var(--color-primary);
          font-family: var(--mainFont);
          color: var(--color-white);
          font-size: 0.75rem;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .heroViewBTN:hover {
          background: var(--color-seconday);
          transform: scale(1.05);
        }

        /* Badge Styles - Base (Mobile) - Overlays banner at bottom right */
        .createStore__badge,
        .wholesaler__badge {
          position: absolute !important;
          bottom: 10% !important;
          right: 3% !important;
          display: flex;
          align-items: center;
          gap: 6px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 50px;
          padding: 6px 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.4);
          z-index: 10 !important;
        }

        /* Only createStore badge moves lower */
        .createStore__badge {
          bottom: 2% !important;
        }

        .createStore__icon,
        .badge__icon {
          width: 20px;
          height: 20px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-seconday));
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          flex-shrink: 0;
        }

        .createStore__icon svg,
        .badge__icon svg {
          width: 12px;
          height: 12px;
        }

        .createStore__content,
        .badge__content {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .createStore__title,
        .badge__title {
          font-size: 0.6rem;
          font-weight: 700;
          color: var(--color-primary);
          font-family: var(--mainFont);
          text-transform: uppercase;
          letter-spacing: 0.2px;
        }

        .createStore__subtitle,
        .badge__subtitle {
          font-size: 0.5rem;
          font-weight: 500;
          color: rgba(255, 255, 255, 0.95);
          font-family: var(--paraFont);
          text-transform: uppercase;
          letter-spacing: 0.3px;
        }

        .createStore__glow,
        .badge__glow {
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-seconday));
          border-radius: 50px;
          z-index: -1;
          filter: blur(6px);
          opacity: 0.6;
        }

        .slider__indicatorWrapper {
          position: absolute;
          bottom: 3%;
          left: 0;
          width: 100%;
          padding: 8px;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 6px;
        }

        .sliderIndicator {
          width: 8px;
          height: 8px;
          background: var(--color-seconday);
          border-radius: 50%;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        /* ========== TABLET (768px and up) ========== */
        @media (min-width: 768px) {
          .Homepage__heroMainWrapper {
            min-height: 60vh;
            padding: 15px;
          }

          .Homepage__mainContainerWrapper {
            width: 98%;
            border-radius: 18px;
          }

          .contentWrapper {
            width: 80%;
            padding: 30px 25px;
            align-items: flex-start;
            text-align: left;
            gap: 15px;
          }

          .contentWrapper h2 {
            font-size: 2.2rem;
            line-height: 1.2;
          }

          .contentWrapper p {
            font-size: 1rem;
            line-height: 1.5;
            width: 90%;
          }

          .heroViewBTN {
            height: 45px;
            width: 110px;
            font-size: 0.9rem;
          }

          .createStore__badge,
          .wholesaler__badge {
            position: absolute;
            bottom: 12%;
            right: 5%;
            margin-top: 0;
            padding: 10px 18px;
            gap: 10px;
          }

          .createStore__icon,
          .badge__icon {
            width: 28px;
            height: 28px;
          }

          .createStore__icon svg,
          .badge__icon svg {
            width: 16px;
            height: 16px;
          }

          .createStore__title,
          .badge__title {
            font-size: 0.8rem;
          }

          .createStore__subtitle,
          .badge__subtitle {
            font-size: 0.65rem;
          }

          .slider__indicatorWrapper {
            gap: 8px;
          }

          .sliderIndicator {
            width: 10px;
            height: 10px;
          }
        }

        /* ========== DESKTOP (1024px and up) ========== */
        @media (min-width: 1024px) {
          .Homepage__heroMainWrapper {
            min-height: 75vh;
            padding: 20px;
          }

          .Homepage__mainContainerWrapper {
            width: 97%;
            border-radius: 20px;
          }

          .contentWrapper {
            width: 50%;
            padding: 50px 40px;
            gap: 20px;
          }

          .contentWrapper h2 {
            font-size: 3rem;
            line-height: 1.15;
          }

          .contentWrapper p {
            font-size: 1.15rem;
            line-height: 1.6;
            width: 85%;
          }

          .heroViewBTN {
            position: absolute;
            bottom: 10%;
            right: 5%;
            height: 55px;
            width: 120px;
            font-size: 1rem;
          }

          .createStore__badge,
          .wholesaler__badge {
            bottom: 15%;
            right: 10%;
            padding: 12px 20px;
            gap: 12px;
          }

          .createStore__icon,
          .badge__icon {
            width: 32px;
            height: 32px;
          }

          .createStore__icon svg,
          .badge__icon svg {
            width: 18px;
            height: 18px;
          }

          .createStore__title,
          .badge__title {
            font-size: 0.9rem;
          }

          .createStore__subtitle,
          .badge__subtitle {
            font-size: 0.7rem;
          }

          .sliderIndicator {
            width: 12px;
            height: 12px;
          }
        }

        /* ========== LARGE DESKTOP / TV (1440px and up) ========== */
        @media (min-width: 1440px) {
          .Homepage__heroMainWrapper {
            min-height: 85vh;
          }

          .contentWrapper {
            width: 45%;
            padding: 60px 50px;
            gap: 25px;
          }

          .contentWrapper h2 {
            font-size: 4rem;
            line-height: 1.1;
          }

          .contentWrapper p {
            font-size: 1.3rem;
            line-height: 1.7;
          }

          .heroViewBTN {
            height: 60px;
            width: 130px;
            font-size: 1.1rem;
          }

          .createStore__badge,
          .wholesaler__badge {
            padding: 14px 24px;
          }
        }

        /* ========== EXTRA LARGE / 4K TV (1920px and up) ========== */
        @media (min-width: 1920px) {
          .Homepage__heroMainWrapper {
            min-height: 80vh;
          }

          .contentWrapper h2 {
            font-size: 5rem;
          }

          .contentWrapper p {
            font-size: 1.5rem;
            line-height: 1.8;
          }
        }
      `}</style>
    </AnimatePresence>
  );
};