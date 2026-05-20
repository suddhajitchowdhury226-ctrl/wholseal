import "./About.scss";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/common/Navbar/Navbar";
import OrganicSourcing from "./OrganicSourcing";
import { Footer } from "../components/common/Footer/Footer";
import imgg1 from "../assets/images/bg/imgg1.jpg";
import imgg2 from "../assets/images/bg/imgg2.jpg";
import imgg3 from "../assets/images/bg/imgg3.jpg";
import imgg4 from "../assets/images/bg/imgg4.jpg";
import imgg5 from "../assets/images/bg/imgg5.jpg";
import { Blog } from "../components/Homepage/Blog/Blog";
import About from "../components/Homepage/About Us/About";
import Feature from "../components/Homepage/Features/Feature";
import ChamberReview from "../components/Homepage/ChamberReview/ChamberReview";

const New = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Parallax effect for hero background
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const qualityFeatures = [
    {
      title: "SAFE INGREDIENTS",
      description:
        "Every product is made using only safe, natural ingredients derived from premium organic herbs and fruits. We ensure that all formulations are completely free from artificial additives, chemicals, and synthetic substances.",
      image:
        imgg1,
    },
    {
      title: "IDEAL GROWING ENVIRONMENT",
      description:
        "Our herbs and fruits are sourced from ideal growing environments, ensuring they are cultivated under optimal conditions. This guarantees the highest quality and potency in every product we offer.",
      image:
        imgg2,
    },
    {
      title: "SCIENTIFICALLY TESTED",
      description:
        "Our manufacturers employ advanced techniques like chromatographic fingerprinting and precise microscopic analysis to ensure our herbs and fruits are of the highest quality and not replaced with common substitutes",
      image:
        imgg3,
    },
    {
      title: "QUALITY CONTROL",
      description:
        "We maintain strict quality control measures throughout our supply chain, from sourcing to production. Each batch undergoes rigorous testing to ensure it meets our high standards for purity, potency, and safety.",
      image:
        imgg4,
    },
    {
      title: "SATISFACTION",
      description:
        "We are committed to customer satisfaction and stand behind our products. If you are not completely satisfied with your purchase, we offer a hassle-free return policy to ensure you have a positive experience with us.",
      image:
        imgg5,
    },
    {
      title: "CERTIFIED ORGANIC",
      description:
        "We partner with certified organic farmers and responsible wild harvesters to ensure that our products are not only effective but also environmentally sustainable. Our commitment to organic sourcing means you can trust the integrity of every ingredient.",
      image:
        "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=300&fit=crop",
    },
  ];

  const testimonials = [
    {
      name: "Jessica Martinez",
      company: "RetailPlus Store",
      text: "Working with this wholesale platform has transformed our inventory management. The quality products and competitive prices have helped us grow our business significantly.",
      image:
        "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=200&h=200&fit=crop",
    },
    {
      name: "Robert Kim",
      company: "Modern Boutique",
      text: "Excellent service and fast shipping! The product variety is amazing, and the customer support team is always helpful. Highly recommend to other retailers.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    },
    {
      name: "Sarah Thompson",
      company: "Urban Fashion Hub",
      text: "The streamlined ordering process and reliable delivery have made our operations so much smoother. We've been able to expand our product line thanks to their extensive catalog.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    },
    {
      name: "Michael Chen",
      company: "TechStyle Emporium",
      text: "Outstanding partnership! The quality control is impeccable, and the pricing structure allows us to maintain healthy margins while offering competitive retail prices.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    },
    {
      name: "Emma Rodriguez",
      company: "Boutique Collective",
      text: "Five years of partnership and counting! Their consistent quality, trend-forward products, and exceptional account management have been instrumental in our growth.",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop",
    },
  ];

  const itemsPerView = isMobile ? 1 : 2;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  const moveCarousel = (direction) => {
    setCurrentTestimonialIndex((prevIndex) => {
      const newIndex = prevIndex + direction;
      return Math.max(0, Math.min(newIndex, maxIndex));
    });
  };

  const goToSlide = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const getVisibleTestimonials = () => {
    const startIndex = currentTestimonialIndex * itemsPerView;
    return testimonials.slice(startIndex, startIndex + itemsPerView);
  };

  return (
    <>
  

        <div className="about-page">
      {/* <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> */}

      {/* Hero Section with Parallax */}
    
      {/* Quality, Safety, and Satisfaction Section */}
      <section className="quality-section" style={{background:"#f3f3f3",}}>
        <div className="container">
          <motion.h2 
            className="quality-title capitalize" 
            style={{color:"#000000"}}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
          >
            Quality, safety, and satisfaction
          </motion.h2>
          <motion.div 
            className="quality-underline"
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          ></motion.div>
          <div className="quality-grid">
            {qualityFeatures.map((feature, index) => (
              <motion.div 
                key={index} 
                className="quality-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="quality-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="quality-content">
                  <h3 className="quality-card-title">{feature.title}</h3>
                  <p className="quality-card-description">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
 

      {/* Organic and Ethical Sourcing Section */}
      <OrganicSourcing />

      {/* Website Showcase Section */}
      <section className="website-showcase-section">
        <div className="container">
          <div className="website-showcase-content">
            <motion.div 
              className="website-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              <h2 className="website-title">Natural Medicine Website</h2>
              <div className="website-underline"></div>
              <p className="website-description">
                NaturalMedicine.com is our online platform, offering a wide
                selection of natural organic supplements at affordable prices,
                including top brands and our own premium products. Designed for
                simplicity and ease, the site features a user-friendly shopping
                experience and a detailed Help Center for guidance. All customer
                information, including payment details, is kept completely
                secure with trusted, confidential systems.
              </p>
            </motion.div>
            <motion.div 
              className="website-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="showcase-image">
                {/* Image will be set via CSS background */}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <motion.h2 
            className="section-h2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.4 }}
          >
            What Our Partners Say
          </motion.h2>
          <div className="testimonials-carousel">
            <div className="testimonials-grid">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div 
                  key={index} 
                  className="testimonial-card"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <div className="testimonial-header">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="testimonial-img"
                    />
                    <div className="testimonial-info">
                      <h4 className="testimonial-h4">{testimonial.name}</h4>
                      <p className="testimonial-company">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                </motion.div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button
              className="carousel-nav prev"
              onClick={() => moveCarousel(-1)}
              disabled={currentTestimonialIndex === 0}
              aria-label="Previous testimonial"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>
            <button
              className="carousel-nav next"
              onClick={() => moveCarousel(1)}
              disabled={currentTestimonialIndex === maxIndex}
              aria-label="Next testimonial"
            >
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            {/* Indicators */}
            <div className="carousel-indicators">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  className={`indicator ${
                    index === currentTestimonialIndex ? "active" : ""
                  }`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <Blog />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <About/>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <ChamberReview />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.4 }}
      >
        <Feature />
      </motion.div>
      <Footer />
       
    </div>
    </>

  );
};

export default New;
