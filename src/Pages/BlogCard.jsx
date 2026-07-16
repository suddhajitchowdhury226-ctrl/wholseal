import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.scss';
import BlogImg1 from '../assets/images/bg/BlogImg1.jpg';
import BlogImg2 from '../assets/images/bg/BlogImg2.jpg';
import BlogImg3 from '../assets/images/bg/BlogImg3.jpg';
import BlogImg4 from '../assets/images/bg/BlogImg4.jpg';

const FALLBACK_IMAGES = [BlogImg1, BlogImg2, BlogImg3, BlogImg4];

const BlogCard = ({ webinar, index = 0 }) => {
  const navigate = useNavigate();
  const fallback = FALLBACK_IMAGES[index % FALLBACK_IMAGES.length];
  const {
    category,
    title,
    description,
    speaker,
    date,
    time,
    coverage,
    type,
    registerLink,
    watchLink
  } = webinar;

  const handleAction = () => {
    if (type === 'upcoming' && registerLink) {
      window.open(registerLink, '_blank');
    } else if (type === 'past' && watchLink) {
      window.open(watchLink, '_blank');
    } else {
      // Navigate to blog detail page
      navigate(`/blog/${webinar.id}`);
    }
  };

  const getActionText = () => {
    switch (type) {
      case 'upcoming':
        return 'Register';
      case 'past':
        return 'Watch Now';
      default:
        return 'Read More';
    }
  };

  const getCategoryColor = () => {
    if (category.includes('Health')) return 'health';
    if (category.includes('Wellness')) return 'wellness';
    if (category.includes('Continuous')) return 'continuous';
    if (category.includes('Zero')) return 'zero-defects';
    if (category.includes('Scale')) return 'scale';
    if (category.includes('AI')) return 'ai';
    if (category.includes('Collaborate')) return 'collaborate';
    if (category.includes('QA Solutions')) return 'qa-solutions';
    return 'default';
  };

  return (
    <div className={`blog-card ${type}`}>
      <div className="card-header">
        <span className={`category-tag ${getCategoryColor()}`}>
          {category}
        </span>
        {date && time && (
          <div className="date-time">
            <span className="date">{date}</span>
            <span className="time">{time}</span>
          </div>
        )}
        {coverage && (
          <span className="coverage-badge">{coverage}</span>
        )}
      </div>

      {(webinar.blogImage || fallback) && (
        <div className="blog-featured-image">
          <img 
            src={webinar.blogImage || fallback}
            alt={title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = fallback;
            }}
          />
        </div>
      )}

      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>

      <div className="card-footer">
        <div className="speaker-info">
          <div className="speaker-avatar">
              <img 
                src={speaker.image || fallback}
                alt={speaker.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = fallback;
                }}
              />
            </div>
          <span className="speaker-name">Date</span>
          {webinar.createdAt && (
            <span className="blog-date">
              {new Date(webinar.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>
        <button 
          className="action-button"
          onClick={handleAction}
        >
          {getActionText()}
        </button>
      </div>
    </div>
  )
}

export default BlogCard;