import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/common/Navbar/Navbar.jsx";
import { Footer } from "../components/common/Footer/Footer.jsx";
import "./BlogDetail.scss";

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBlogDetail();
  }, [id]);

  const fetchBlogDetail = async () => {
    try {
      setLoading(true);
      const API_BASE_URL = 'https://api.rayonewholesale.com';
      const response = await axios.get(`${API_BASE_URL}/api/wholesaler/get-all-blogs`);
      const blogData = response.data.blogs.find(blog => blog._id === id);
      
      if (blogData) {
        setBlog(blogData);
      } else {
        setError('Blog not found');
      }
    } catch (err) {
      console.error('Error fetching blog detail:', err);
      setError('Failed to load blog. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="blog-detail-page">
          <div className="container">
            <div className="loading-container">
              <p>Loading blog...</p>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  if (error || !blog) {
    return (
      <>
        <Navbar />
        <div className="blog-detail-page">
          <div className="container">
            <div className="error-container">
              <p>{error}</p>
              <button onClick={() => navigate('/blogs')} className="back-button">
                Back to Blogs
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="blog-detail-page">
        <div className="container">
          <div className="blog-detail-content">
            <button onClick={() => navigate('/blogs')} className="back-button">
              ← Back to Blogs
            </button>
            
            <article className="blog-article">
              <header className="blog-header">
                <div className="blog-meta">
                  <span className="blog-category">Health & Wellness</span>
                  <span className="blog-date">
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                <h1 className="blog-title">{blog.title}</h1>
                <div className="blog-author">
                  {/* <span>By {blog.author?.name || 'Anonymous'}</span> */}
                </div>
              </header>

              {blog.images && blog.images.length > 0 && (
                <div className="blog-images">
                  {blog.images.map((image, index) => (
                    <img
                      key={index}
                      src={`https://api.rayonewholesale.com/${image}`}
                      alt={`Blog image ${index + 1}`}
                      className="blog-image"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  ))}
                </div>
              )}

              <div className="blog-content">
                <div className="blog-text" dangerouslySetInnerHTML={{ __html: blog.content }} />
              </div>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default BlogDetail;