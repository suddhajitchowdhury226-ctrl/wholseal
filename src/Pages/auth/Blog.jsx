import React, { useState, useEffect } from "react";
import axios from "axios";

import "../components/Blog/Blog.scss";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

import BlogSection from "../Blogsection.jsx";
import BlogCard from "../BlogCard.jsx";
import Navbar from "../../components/common/Navbar/Navbar.jsx";
import { Footer } from "../../components/common/Footer/Footer.jsx";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLoading, setPageLoading] = useState(false);
  const blogsPerPage = 9;

  const handlePageChange = (newPage) => {
    setPageLoading(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setCurrentPage(newPage);
      setPageLoading(false);
    }, 300);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const API_BASE_URL = import.meta.env.VITE_BASE_URL;
      const response = await axios.get(`${API_BASE_URL}/api/wholesaler/get-all-blogs`);
      
      // Transform API data to match BlogCard component structure
      const transformedBlogs = response.data.blogs.map((blog, index) => {
        // Strip HTML tags for description preview
        const stripHtml = (html) => {
          const tmp = document.createElement('div');
          tmp.innerHTML = html;
          return tmp.textContent || tmp.innerText || '';
        };
        const plainText = stripHtml(blog.content);
        // Truncate at word boundary to avoid mid-word cuts
        let description = plainText;
        if (plainText.length > 150) {
          const truncated = plainText.substring(0, 150);
          const lastSpace = truncated.lastIndexOf(' ');
          description = (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + '...';
        }
        
        return {
          id: blog._id,
          category: "Health & Wellness",
          title: blog.title,
          description,
          speaker: {
            name: blog.author?.name || "Anonymous",
            image: blog.images?.[0] ? `${API_BASE_URL}/${blog.images[0]}` : `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`,
          },
          type: "featured",
          createdAt: blog.createdAt,
          images: blog.images,
          blogImage: blog.images?.[0] ? `${API_BASE_URL}/${blog.images[0]}` : null
        };
      });
      
      setBlogs(transformedBlogs);
      setError(null);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError('Failed to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar/>
        <BlogSection />
        <div className="blog-page">
          <div className="blog-content">
            <div className="container">
              <div className="loading-container" style={{textAlign: 'center', padding: '50px'}}>
                <p>Loading blogs...</p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar/>
        <BlogSection />
        <div className="blog-page">
          <div className="blog-content">
            <div className="container">
              <div className="error-container" style={{textAlign: 'center', padding: '50px'}}>
                <p style={{color: 'red'}}>{error}</p>
                <button onClick={fetchBlogs} style={{marginTop: '10px', padding: '10px 20px'}}>Retry</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar/>
      <BlogSection />
      <div className="blog-page">
        <div className="blog-content">
          <div className="container">
            <section className="test-solutions-section">
              {blogs.length === 0 ? (
                <div className="no-blogs-container" style={{textAlign: 'center', padding: '50px'}}>
                  <p>No blogs available at the moment.</p>
                </div>
              ) : (
                <>
                  {pageLoading ? (
                    <div style={{ textAlign: 'center', padding: '100px' }}>
                      <div style={{ display: 'inline-block', width: '40px', height: '40px', border: '4px solid #f3f3f3', borderTop: '4px solid #10b981', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
                      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
                    </div>
                  ) : (
                    <div className="webinar-grid three-column">
                      {blogs.slice((currentPage - 1) * blogsPerPage, currentPage * blogsPerPage).map((blog) => (
                        <BlogCard key={blog.id} webinar={blog} />
                      ))}
                    </div>
                  )}
                  {blogs.length > blogsPerPage && (
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '40px' }}>
                      <button
                        onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                        disabled={currentPage === 1 || pageLoading}
                        style={{
                          padding: '10px 20px',
                          background: currentPage === 1 ? '#ccc' : '#10b981',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                        }}
                      >
                        Previous
                      </button>
                      <span style={{ fontSize: '16px', fontWeight: '600' }}>
                        Page {currentPage} of {Math.ceil(blogs.length / blogsPerPage)}
                      </span>
                      <button
                        onClick={() => handlePageChange(Math.min(currentPage + 1, Math.ceil(blogs.length / blogsPerPage)))}
                        disabled={currentPage === Math.ceil(blogs.length / blogsPerPage) || pageLoading}
                        style={{
                          padding: '10px 20px',
                          background: currentPage === Math.ceil(blogs.length / blogsPerPage) ? '#ccc' : '#10b981',
                          color: 'white',
                          border: 'none',
                          borderRadius: '5px',
                          cursor: currentPage === Math.ceil(blogs.length / blogsPerPage) ? 'not-allowed' : 'pointer'
                        }}
                      >
                        Next
                      </button>
                    </div>
                  )}
                </>
              )}
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Blog;
