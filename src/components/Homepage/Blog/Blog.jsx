import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Blog.scss";
import BlogBgImg1 from "../../../assets/images/bg/BlogBgImg1.jpg";
import BlogImg1 from "../../../assets/images/bg/BlogImg1.jpg";
import BlogImg2 from "../../../assets/images/bg/BlogImg2.jpg";
import BlogImg3 from "../../../assets/images/bg/BlogImg3.jpg";
import BlogImg4 from "../../../assets/images/bg/BlogImg4.jpg";
import { Send, ChevronLeft, ChevronRight } from "lucide-react";
import axios from 'axios';
import Cookies from 'js-cookie';
import { motion, AnimatePresence } from 'framer-motion';
import toast from 'react-hot-toast';

const FALLBACK_IMAGES = [BlogImg1, BlogImg2, BlogImg3, BlogImg4];

export const Blog = () => {
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const slideInterval = useRef(null);
  const API_BASE_URL = import.meta.env.VITE_BASE_URL;

  // Build full image URL — normalize backslashes, prepend base URL
  const getImageUrl = (imagePath, index = 0) => {
    if (!imagePath) return FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
    if (imagePath.startsWith('http')) return imagePath;
    const normalized = imagePath.replace(/\\/g, '/').replace(/^\/+/, '');
    return `${API_BASE_URL}/${normalized}`;
  };

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/api/wholesaler/get-all-blogs`);
        setBlogs(response.data.blogs || []);
      } catch (error) {
        console.error('Fetch blogs error:', error);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if (isAutoPlaying && blogs.length > 0) {
      slideInterval.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % Math.ceil(blogs.length / getCardsPerView()));
      }, 4000);
    }
    return () => clearInterval(slideInterval.current);
  }, [isAutoPlaying, blogs.length]);

  const getCardsPerView = () => {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 4;
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(blogs.length / getCardsPerView()));
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(blogs.length / getCardsPerView())) % Math.ceil(blogs.length / getCardsPerView()));
    setIsAutoPlaying(false);
  };

  const stripHtml = (html) => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncateText = (text, maxLength = 120) => {
    if (!text) return '';
    const plainText = stripHtml(text);
    if (plainText.length <= maxLength) return plainText;
    const truncated = plainText.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
  };

  const handleNewsletterSubmit = async () => {
    if (!message) {
      toast.error('Please enter your email address');
      return;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(message)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setLoading(true);
    try {
      await axios.post(`${API_BASE_URL}/api/wholesaler/newsletter`, { 
        email: message, 
        message
      });
      toast.success('Thank you for subscribing to our newsletter!');
      setMessage('');
    } catch (error) {
      console.error('Newsletter error:', error);
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Blog__mainWrapper">
      <div className="BlogBg__wrapper">
        <img src={BlogBgImg1} alt="blogbg-image" />
        <div className="Blog__layer" />
      </div>

      <div className="Blog__ContentWrapper">
        <div className="Blog__headingWrapper">
          <h2>Blogs &amp; Newsletters</h2>
          <button onClick={() => navigate('/blogs')}>See All</button>
        </div>

        <div className="Blog__carouselWrapper">
          {blogs.length > 0 ? (
            <>
              <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous">
                <ChevronLeft size={24} />
              </button>
              <div className="Blog__carouselTrack" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {blogs.map((blog, idx) => (
                  <div className="Blog__cardWrapper" key={blog._id}>
                    <div className="Blog__cardImgWrapper">
                      <img 
                        src={getImageUrl(blog.images?.[0], idx)}
                        alt={blog.title || 'Blog post'}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = FALLBACK_IMAGES[idx % FALLBACK_IMAGES.length];
                        }}
                      />
                    </div>
                    <div className="Blog__infoWrapper">
                      <div className="blog-meta">
                        <span className="meta-item">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                            <line x1="16" y1="2" x2="16" y2="6"></line>
                            <line x1="8" y1="2" x2="8" y2="6"></line>
                            <line x1="3" y1="10" x2="21" y2="10"></line>
                          </svg>
                          {new Date(blog.createdAt).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </span>
                        <span className="meta-item">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                          </svg>
                          Blog
                        </span>
                      </div>
                      <h3>{blog.title}</h3>
                      <p className="blog-excerpt">{truncateText(blog.content)}</p>
                      <button 
                        onClick={() => navigate(`/blog/${blog._id}`)}
                        className="read-more-btn"
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-btn next" onClick={nextSlide} aria-label="Next">
                <ChevronRight size={24} />
              </button>
              <div className="carousel-dots">
                {Array.from({ length: Math.ceil(blogs.length / getCardsPerView()) }).map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot ${currentSlide === idx ? 'active' : ''}`}
                    onClick={() => { setCurrentSlide(idx); setIsAutoPlaying(false); }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          ) : (
            <div className="no-blogs">No blogs available</div>
          )}
        </div>

        <div className="Blog__newsletterWrapper">
          <h2>News Letter</h2>
          <h3>Stay Strong, Stay Vibrant: Your Weekly Wellness Boost</h3>
          <div className="newsletter__inputWrapper">
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubmit()}
              autoComplete="email"
              aria-label="Email address for newsletter subscription"
            />
            <button
              onClick={handleNewsletterSubmit}
              disabled={loading}
              aria-label={loading ? 'Subscribing, please wait' : 'Subscribe to newsletter'}
              type="button"
            >
              <Send />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
