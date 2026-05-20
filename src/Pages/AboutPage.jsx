import "./About.scss";
import { useEffect, useState } from "react";

import Navbar from "../components/common/Navbar/Navbar";
import OrganicSourcing from "./OrganicSourcing";
import { Footer } from "../components/common/Footer/Footer";

const Aboutpage = () => {
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
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    },
    {
      title: "IDEAL GROWING ENVIRONMENT",
      description:
        "Our herbs and fruits are sourced from ideal growing environments, ensuring they are cultivated under optimal conditions. This guarantees the highest quality and potency in every product we offer.",
      image:
        "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&h=300&fit=crop",
    },
    {
      title: "SCIENTIFICALLY TESTED",
      description:
        "Our manufacturers employ advanced techniques like chromatographic fingerprinting and precise microscopic analysis to ensure our herbs and fruits are of the highest quality and not replaced with common substitutes",
      image:
        "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&h=300&fit=crop",
    },
    {
      title: "QUALITY CONTROL",
      description:
        "We maintain strict quality control measures throughout our supply chain, from sourcing to production. Each batch undergoes rigorous testing to ensure it meets our high standards for purity, potency, and safety.",
      image:
        "https://images.unsplash.com/photo-1585435557343-3b092031a831?w=400&h=300&fit=crop",
    },
    {
      title: "SATISFACTION",
      description:
        "We are committed to customer satisfaction and stand behind our products. If you are not completely satisfied with your purchase, we offer a hassle-free return policy to ensure you have a positive experience with us.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop",
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
    <Navbar/>

        <div className="about-page">
      {/* <Navbar isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} /> */}

      {/* Hero Section with Parallax */}
      <section className="hero-section">
        <div
          className="hero-background"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="hero-title">Natural Healing</h1>
              <h2 className="hero-subtitle">
                Discover the Power of Nature's Medicine
              </h2>
              <p className="hero-description">
                Harness the ancient wisdom of herbal remedies and natural
                healing practices. Transform your wellness journey with pure,
                organic solutions that nurture your body and soul.
              </p>
              <div className="hero-buttons">
                <button className="hero-btn secondary">Learn More</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Our Firm Section */}
      <section className="about-firm-section">
        <div className="container">
          <div className="about-firm-content">
            <div className="about-firm-image">
              {/* The image is set via CSS background */}
            </div>
            <div className="about-firm-text">
              <h2 className="firm-title">About Our Firm</h2>
              <div className="firm-underline"></div>
              <p className="firm-description">
              We do business through a network of traditional brick-and-mortar stores and our own brand website online. Ray’s Healthy Living offers products with enhanced natural vitamins and minerals through herbal supplements that have been produced through the most thorough and effective quality standards in the industry. We take pride in doing business while taking great care of our customers’ satisfaction and safety. Ray’s Healthy Living believes customers are part of the family, and we take care of our family. You can see why this is a key element in our business by reading our founder and CEO’s personal story
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality, Safety, and Satisfaction Section */}
      <section className="quality-section">
        <div className="container">
          <h2 className="quality-title capitalize">
            Quality, safety, and satisfaction
          </h2>
          <div className="quality-underline"></div>
          <div className="quality-grid">
            {qualityFeatures.map((feature, index) => (
              <div key={index} className="quality-card">
                <div className="quality-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="quality-content">
                  <h3 className="quality-card-title">{feature.title}</h3>
                  <p className="quality-card-description">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Comparison Section */}
      <section className="price-comparison-section">
        <div className="container">
          <div className="price-comparison-content">
            <div className="price-comparison-image">
              <img
                src="https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=600&h=500&fit=crop"
                alt="Natural Medicine Products"
                className="comparison-img"
              />
            </div>
            <div className="price-comparison-text">
              <h2 className="comparison-title">
                Natural Medicine Product Price Comparisons
              </h2>
              <div className="comparison-underline"></div>
              <p className="comparison-description">
                We are dedicated to offering high-quality natural herbal
                supplements at affordable prices to promote better health and
                lifestyle. Our products are competitively priced—among the
                lowest online—and we aim to be your one-stop shop for all
                organic supplement needs. If you find a lower price elsewhere,
                we’ll match or beat it.
              </p>

              <div className="comparison-cta">
                <button className="comparison-btn">
                  View Price Comparisons
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organic and Ethical Sourcing Section */}
      <OrganicSourcing />

      {/* Website Showcase Section */}
      <section className="website-showcase-section">
        <div className="container">
          <div className="website-showcase-content">
            <div className="website-text">
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
            </div>
            <div className="website-image">
              <div className="showcase-image">
                {/* Image will be set via CSS background */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-h2">What Our Partners Say</h2>
          <div className="testimonials-carousel">
            <div className="testimonials-grid">
              {getVisibleTestimonials().map((testimonial, index) => (
                <div key={index} className="testimonial-card">
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
                </div>
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

      <Footer />
    </div>
    </>

  );
};

export default Aboutpage;
