import React, { useState, useEffect } from "react";
import "./Contact.scss";
import Navbar from "../components/common/Navbar/Navbar";
import { Footer } from "../components/common/Footer/Footer";

const Contactpage = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    // Client-side validation
    // if (!formData.name || !formData.email || !formData.message) {
    //   setError("All fields are required");
    //   setIsLoading(false);
    //   return;
    // }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }

    // Validate phone format (basic check for digits and optional +)
    const phoneRegex = /^\+?\d{10,15}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("Please enter a valid phone number (10-15 digits, optional +)");
      setIsLoading(false);
      return;
    }

    // Validate message length
    if (formData.message.length < 10) {
      setError("Message must be at least 10 characters long");
      setIsLoading(false);
      return;
    }

    try {
      console.log("formData",formData)
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", phone: "", email: "", subject: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        setError(data.error || "Failed to submit feedback");
      }
    } catch (err) {
      setError("Network error: Unable to reach the server");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contact-page">
        {/* Hero Section */}
        <section className="contact-hero">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1>Contact Us</h1>
            <p>We'd love to hear from you — reach out with any questions about wholesale accounts, products, or orders.</p>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="contact-section">
          <div className="container">
            <div className="contact-content">
              <div className="contact-info">
                <h2>Get in Touch With Us</h2>
                <p className="info-text">We're here to help with all your wholesale needs.</p>
                <p className="info-description">
                  Whether you're looking to become an authorized reseller, have questions about our wholesale pricing, or need support with an existing order — our team is ready to assist you. Fill out the form and we'll get back to you within one business day.
                </p>
                <div className="phone-number">
                  <div className="phone-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </div>
                  <a href="tel:+14434323295" className="phone-link">+1(443) 432-3295</a>
                </div>
              </div>

              <div className="contact-form">
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-group">
                    <div className="input-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name *"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                      </svg>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone *"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M12 6v6l4 2" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject *"
                      value={formData.subject}
                      onChange={handleChange}
                      autoComplete="off"
                      required
                      aria-required="true"
                    />
                  </div>

                  <div className="form-group">
                    <div className="input-icon top">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                      </svg>
                    </div>
                    <textarea
                      name="message"
                      placeholder="Message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      aria-required="true"
                    ></textarea>
                  </div>

                  {error && (
                    <div className="error-message" role="alert" style={{ color: "red", marginBottom: "1rem" }}>
                      {error}
                    </div>
                  )}

                  {isSubmitted && (
                    <div className="success-message" role="status" style={{ color: "green", marginBottom: "1rem" }}>
                      Thank you! Your message has been successfully sent.
                    </div>
                  )}

                  <button
                    type="submit"
                    className="submit-btn"
                    disabled={isLoading}
                    aria-label={isLoading ? "Submitting your message, please wait" : "Submit your contact message"}
                    style={isLoading ? { opacity: 0.5, cursor: "not-allowed" } : {}}
                  >
                    {isLoading ? "Submitting..." : "Submit"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contactpage;