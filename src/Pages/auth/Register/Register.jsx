import React, { useState } from 'react';
import './Register.scss';
import AuthSlideImg1 from '../../../assets/images/bg/LoginBgImg.jpg';
import Logo from '../../../assets/images/logos/WholesaleLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance'; // Use axiosInstance
import { CheckCircle, AlertCircle, X } from 'lucide-react';

// Toast Component
const Toast = ({ message, type, onClose, show }) => {
  React.useEffect(() => {
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

export const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'user',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });
  const navigate = useNavigate();

  const [step, setStep] = useState('register'); // 'register' or 'otp'
  const [otp, setOtp] = useState('');
  const [registeredUserId, setRegisteredUserId] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ show: true, message, type });
  };

  const hideToast = () => {
    setToast({ show: false, message: '', type: '' });
  };

  const isFormValid = () => {
    return (
      formData.name.trim() &&
      formData.email &&
      formData.phone.length === 10 &&
      ['user', 'wholesaler', 'retailer'].includes(formData.role) &&
      formData.password.length >= 6
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      setFormData({ ...formData, phone: value.replace(/\D/g, '').slice(0, 10) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axiosInstance.post('/api/auth/register', formData);

      // Check if registration requires verification
      if (response.data.requiresVerification) {
        setRegisteredUserId(response.data.userId);
        setStep('otp');
        showToast('OTP sent to your email!', 'success');
      } else {
        // Fallback for logic if no verification needed (should not happen with new backend)
        const { token } = response.data;
        if (token) {
          localStorage.setItem('userToken', token);
          showToast('Registration successful!', 'success');
          navigate('/');
        }
      }
    } catch (err) {
      console.error('Error response:', err.response?.data);
      const errorMessage = err.response?.data?.message || 'Registration failed.';
      setError(errorMessage);
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleVerify = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axiosInstance.post('/api/auth/verify-email-otp', {
        userId: registeredUserId,
        otp
      });

      const { token } = response.data;
      if (token) {
        localStorage.setItem('userToken', token);
        showToast('Email verified successfully!', 'success');
        navigate('/');
      }
    } catch (err) {
      const errorMessage = err.response?.data?.message || 'Verification failed.';
      setError(errorMessage);
      showToast(errorMessage, 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleResendOtp = async () => {
    try {
      setLoading(true);
      await axiosInstance.post('/api/auth/resend-verification-otp', {
        email: formData.email
      });
      showToast('OTP resent successfully!', 'success');
    } catch (err) {
      showToast(err.response?.data?.message || 'Failed to resend OTP', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="Login__mainWrapper">
      <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
      <div className="loginPage__leftWrapper">
        <div className="mainFormWrapper">
          <div className="logoWrapper">
            <img src={Logo} alt="logo" style={{ width: "100px" }} />
          </div>

          <form className="login__from" onSubmit={step === 'register' ? handleSubmit : handleVerify}>
            {error && <p className="error">{error}</p>}

            {step === 'register' ? (
              <>
                <div className="fieldsWrapper">
                  <div className="inputWrapper">
                    <label>Full Name</label>
                    <input
                      placeholder="Enter full name..."
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="inputWrapper">
                    <label>Email</label>
                    <input
                      placeholder="Enter email..."
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="fieldsWrapper">
                  <div className="inputWrapper">
                    <label>Phone Number</label>
                    <input
                      placeholder="Enter number..."
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      pattern="\d{10}"
                      title="Please enter a valid 10-digit phone number"
                    />
                  </div>
                  <div className="inputWrapper">
                    <label>Role</label>
                    <select name="role" value={formData.role} onChange={handleChange} required>
                      <option value="user">User</option>

                    </select>
                  </div>
                </div>

                <div className="inputWrapper">
                  <label>Password</label>
                  <input
                    placeholder="Enter password..."
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    minLength={6}
                    title="Password must be at least 6 characters"
                  />
                </div>

                <button type="submit" disabled={loading || !isFormValid()}>
                  {loading ? 'Registering...' : 'Register Now'}
                </button>
              </>
            ) : (
              // OTP Step
              <>
                <div className="inputWrapper">
                  <label>Enter OTP Sent to {formData.email}</label>
                  <input
                    placeholder="Enter 6-digit OTP"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    required
                    maxLength={6}
                    style={{ letterSpacing: '2px', textAlign: 'center', fontSize: '1.2rem' }}
                  />
                </div>

                <button type="submit" disabled={loading || otp.length !== 6}>
                  {loading ? 'Verifying...' : 'Verify Email'}
                </button>

                <div style={{ marginTop: '15px', textAlign: 'center' }}>
                  <span style={{ cursor: 'pointer', color: '#666', fontSize: '0.9rem' }} onClick={handleResendOtp}>
                    Didn't receive code? <strong>Resend OTP</strong>
                  </span>
                </div>
              </>
            )}

            <div className="forgetAndRegisterlinkWrapper">
              <p>
                Already have an account? <Link to="/auth/login">Log in</Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="loginPage__rightWrapper">
        <img src={AuthSlideImg1} alt="bg" />
      </div>
    </div>
  );
};