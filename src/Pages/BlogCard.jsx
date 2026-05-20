import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogCard.scss';

const BlogCard = ({ webinar }) => {
  const navigate = useNavigate();
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

      {webinar.blogImage && (
        <div className="blog-featured-image">
          <img 
            src={webinar.blogImage} 
            alt={title}
            onError={(e) => {
              e.target.style.display = 'none';
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
              src={speaker.image} 
              alt={speaker.name}
              onError={(e) => {
                e.target.src = `https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face`;
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