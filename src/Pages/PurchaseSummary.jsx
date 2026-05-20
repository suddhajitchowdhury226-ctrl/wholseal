import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import './PurchaseSummary.scss';
import { CheckCircle, AlertCircle, X, Star } from 'lucide-react';

const Toast = ({ message, type, onClose, show }) => {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  if (!show) return null;

  return (
    <div className={`toast toast--${type}`}>
      <div className="toast__content">
        <div className="toast__icon">
          {type === 'success' ? <CheckCircle size={20} /> : <AlertCircle size={20} />}
        </div>
        <span className="toast__message">{message}</span>
        <button className="toast__close" onClick={onClose}>
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

const PurchaseSummary = () => {
  const [purchase, setPurchase] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const [showReview, setShowReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [existingReview, setExistingReview] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/150";
    const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "");
    return `${BASE_URL}/${normalizedPath}`;
  };

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: '' });
  };

  const checkExistingReview = async (purchaseId) => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axiosInstance.get(`/api/user/reviews/${purchaseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setExistingReview(response.data.review);
    } catch (error) {
      console.log('No existing review found');
    }
  };

  const submitReview = async () => {
    try {
      const token = localStorage.getItem('userToken');

      // Get createdBy from cookie
      const getCookie = (name) => {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      };

      const createdByIds = getCookie('cartCreatedBy');
      const createdBy = createdByIds ? JSON.parse(createdByIds)[0] : null;

      await axiosInstance.post('/api/user/reviews', {
        purchaseId: purchase.purchaseId,
        rating,
        comment,
        websiteRole: 'wholesaler',
        createdBy: createdBy
      }, {
        headers: { Authorization: `Bearer ${token}` }
      });
      showToast('Review submitted successfully', 'success');
      setShowReview(false);

      // Clear cookie after successful submission
      document.cookie = 'cartCreatedBy=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

      checkExistingReview(purchase.purchaseId);
    } catch (error) {
      showToast(error.response?.data?.message || 'Failed to submit review', 'error');
    }
  };

  useEffect(() => {
    const fetchPurchaseSummary = async () => {
      try {
        setLoading(true);
        let sessionId = new URLSearchParams(location.search).get('session_id') || localStorage.getItem('checkoutSessionId');

        if (!sessionId) {
          console.log('[DEBUG] No sessionId found in URL or localStorage', { sessionId });
          setError('Invalid session ID');
          showToast('Invalid session ID', 'error');
          navigate('/cart');
          return;
        }

        if (!sessionId.startsWith('cs_')) {
          console.log('[DEBUG] Invalid sessionId format:', sessionId);
          setError('Invalid session ID format');
          showToast('Invalid session ID format', 'error');
          localStorage.removeItem('checkoutSessionId');
          navigate('/cart');
          return;
        }

        const token = localStorage.getItem('userToken');
        if (!token) {
          console.log('[DEBUG] No user token found in localStorage');
          setError('Please log in to view purchase summary');
          showToast('Please log in to view purchase summary', 'error');
          navigate('/auth/login');
          return;
        }

        console.log('[DEBUG] Fetching purchase summary with sessionId:', sessionId);
        const response = await axiosInstance.get(
          `/api/user/purchase-summary?session_id=${sessionId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        console.log('[DEBUG] Purchase summary response:', JSON.stringify(response.data, null, 2));

        console.log('[DEBUG] Purchase summary response:', response.data);
        const purchaseData = response.data.purchase || {};
        const shipmentDetails = response.data.shipmentDetails || {};
        const productDetails = response.data.productDetails || [];

        console.log('[DEBUG] purchaseData:', purchaseData);
        console.log('[DEBUG] shipmentDetails:', shipmentDetails);
        console.log('[DEBUG] productDetails:', productDetails);

        const newPurchaseState = {
          purchaseId: sessionId,
          paymentIntentId: response.data.paymentIntentId || purchaseData.paymentIntentId,
          total: Number(purchaseData.total ?? response.data.total ?? 0),
          shippingCost: Number(purchaseData.shippingCost ?? 0),
          itemsTotal: Number(purchaseData.total ?? 0) - Number(purchaseData.shippingCost ?? 0),
          address: shipmentDetails.address || purchaseData.address,
          items: productDetails.map(item => ({
            _id: item.name + Math.random(),
            product: {
              name: item.name,
              images: [],
            },
            quantity: item.quantity,
            price: Number(item.price ?? 0),
          })),
        };

        console.log('[DEBUG] Setting new purchase state:', newPurchaseState);
        setPurchase(newPurchaseState);

        // Clear shipping cost cookie after use
        document.cookie = 'shippingCost=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        showToast('Purchase summary loaded successfully', 'success');

        // Store creator info for review
        const creatorInfo = {
          id: response.data.productDetails?.[0]?.createdBy || 'admin',
          role: response.data.productDetails?.[0]?.creatorRole || 'admin'
        };
        localStorage.setItem('productCreator', JSON.stringify(creatorInfo));

        // Clear local cart and trigger cart update event
        localStorage.setItem('localCart', JSON.stringify([]));
        localStorage.removeItem('checkoutSessionId');

        // Dispatch cart updated event to update navbar cart count
        // The backend has already cleared the cart after successful purchase
        window.dispatchEvent(new Event('cartUpdated'));

        // Check for existing review
        if (sessionId) {
          checkExistingReview(sessionId);
        }
      } catch (err) {
        console.error('[ERROR] Error fetching purchase summary:', err.response?.data || err);
        const errorMessage = err.response?.data?.message || 'Failed to load purchase summary';
        setError(errorMessage);
        showToast(errorMessage, 'error');
        if (err.response?.status === 401) {
          console.log('[DEBUG] Unauthorized access, clearing userToken');
          localStorage.removeItem('userToken');
          localStorage.removeItem('checkoutSessionId');
          navigate('/auth/login');
        } else if (err.response?.status === 403) {
          console.log('[DEBUG] Forbidden access, redirecting to products');
          showToast('You do not have permission to view this page', 'error');
          navigate('/products');
        } else if (err.response?.status === 400 && errorMessage.includes('Invalid session')) {
          console.log('[DEBUG] Invalid session ID, clearing localStorage');
          localStorage.removeItem('checkoutSessionId');
          navigate('/cart');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseSummary();
  }, [location, navigate]);

  if (loading) {
    return (
      <div className="purchase-summary-container">
        <div className="spinner">Loading...</div>
        <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
      </div>
    );
  }

  if (error) {
    return (
      <div className="purchase-summary-container">
        <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
        <p className="error">{error}</p>
      </div>
    );
  }

  if (!purchase) {
    return (
      <div className="purchase-summary-container">
        <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
        <p>No purchase details available</p>
      </div>
    );
  }

  const totalPrice = purchase.total.toFixed(2);

  return (
    <div className="purchase-summary-container">
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />

      <div className="success-header">
        <CheckCircle className="success-icon" size={48} />
        <h1>You've sent ${totalPrice} USD to {purchase.address?.name || 'Customer'}</h1>
        <p>We'll let {purchase.address?.name || 'the customer'} know you sent it.</p>
      </div>

      <div className="transaction-details">
        <div className="detail-row">
          <span>Purchase ID:</span>
          <span>{purchase.purchaseId}</span>
        </div>
        <div className="detail-row">
          <span>Payment ID:</span>
          <span>{purchase.paymentIntentId || "N/A"}</span>
        </div>
        <div className="detail-row">
          <span>Items Total:</span>
          <span>${(purchase.itemsTotal || purchase.total - (purchase.shippingCost || 0)).toFixed(2)}</span>
        </div>
        {purchase.shippingCost > 0 && (
          <div className="detail-row">
            <span>Shipping Cost:</span>
            <span>${purchase.shippingCost.toFixed(2)}</span>
          </div>
        )}
        <div className="detail-row" style={{ borderTop: '1px solid #e0e0e0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
          <span>Total Amount:</span>
          <span>${totalPrice}</span>
        </div>
      </div>

      {purchase.address && (
        <div className="shipping-info">
          <h3>Shipping Address</h3>
          <div className="address-card">
            <p><strong>{purchase.address.name}</strong></p>
            <p>{purchase.address.addressLine1}</p>
            {purchase.address.addressLine2 && <p>{purchase.address.addressLine2}</p>}
            <p>{purchase.address.city}, {purchase.address.state} {purchase.address.zipcode}</p>
            <p>{purchase.address.country}</p>
          </div>
        </div>
      )}

      <div className="items-section">
        <h3>Items Purchased</h3>
        {purchase.items.map((item) => (
          <div key={item._id} className="item-card">
            <div className="item-image">
              {item.product.images?.[0] ? (
                <img
                  src={getImageUrl(item.product.images[0])}
                  alt={item.product.name}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80";
                  }}
                />
              ) : (
                <div className="no-image">No Image</div>
              )}
            </div>
            <div className="item-info">
              <h4>{item.product.name}</h4>
              <p>Qty: {item.quantity} × ${item.price.toFixed(2)}</p>
            </div>
            <div className="item-total">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      <div className="review-section">
        <div className="review-header">
          <h3>Tell us how this transaction went</h3>
          <button className="close-btn" onClick={() => setShowReview(false)}>×</button>
        </div>

        {existingReview ? (
          <div className="existing-review">
            <p>You rated this transaction:</p>
            <div className="stars">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className={star <= existingReview.rating ? 'filled' : ''} size={20} />
              ))}
            </div>
            {existingReview.comment && <p>"{existingReview.comment}"</p>}
          </div>
        ) : (
          <div className="review-form">
            <p>Based on your experience using our website today, how satisfied are you with our website as a means to manage your account?</p>

            <div className="rating-section">
              <div className="rating-buttons">
                {[1, 2, 3, 4, 5].map(num => (
                  <button
                    key={num}
                    className={`rating-btn ${rating === num ? 'selected' : ''}`}
                    onClick={() => setRating(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
              <div className="rating-labels">
                <span>Extremely Dissatisfied</span>
                <span>Extremely Satisfied</span>
              </div>
            </div>

            <textarea
              placeholder="Tell us about your experience (optional)"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              maxLength={500}
            />

            <button
              className="submit-review-btn"
              onClick={submitReview}
              disabled={!rating}
            >
              Submit Review
            </button>
          </div>
        )}
      </div>

      <button className="continue-shopping" onClick={() => navigate('/products')}>
        Continue Shopping
      </button>
    </div>
  );
};

export default PurchaseSummary;