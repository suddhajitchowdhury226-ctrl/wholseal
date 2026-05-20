import React, { useState } from 'react';
import './ForgotPassword.scss';
import AuthSlideImg1 from '../../../assets/images/bg/LoginBgImg.png';
import Logo from '../../../assets/images/logos/WholesaleLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import axiosInstance from '../../../utils/axiosInstance';
import { CheckCircle, AlertCircle, X, Mail, Key, Lock } from 'lucide-react';

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

export const ForgotPassword = () => {
    const [step, setStep] = useState(1); // 1: Email, 2: OTP, 3: New Password
    const [email, setEmail] = useState('');
    const [otp, setOtp] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', type: '' });
    const navigate = useNavigate();

    const showToast = (message, type = 'success') => {
        setToast({ show: true, message, type });
    };

    const hideToast = () => {
        setToast({ show: false, message: '', type: '' });
    };

    // Step 1: Send OTP to email
    const handleSendOTP = async (e) => {
        e.preventDefault();
        if (!email.trim()) {
            showToast('Please enter your email', 'error');
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/auth/forgot-password', { email });
            showToast(response.data.message || 'OTP sent to your email!', 'success');
            setStep(2);
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to send OTP. Please try again.';
            showToast(errorMessage, 'error');
        } finally {
            setLoading(false);
        }
    };

    // Step 2: Verify OTP
    const handleVerifyOTP = async (e) => {
        e.preventDefault();
        if (!otp.trim() || otp.length !== 6) {
            showToast('Please enter a valid 6-digit OTP', 'error');
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/auth/verify-otp', { email, otp });
            showToast(response.data.message || 'OTP verified!', 'success');
            setStep(3);
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Invalid OTP. Please try again.';
            showToast(errorMessage, 'error');
        } finally {
            setLoading(false);
        }
    };

    // Step 3: Reset password
    const handleResetPassword = async (e) => {
        e.preventDefault();
        if (newPassword.length < 6) {
            showToast('Password must be at least 6 characters', 'error');
            return;
        }
        if (newPassword !== confirmPassword) {
            showToast('Passwords do not match', 'error');
            return;
        }

        setLoading(true);
        try {
            const response = await axiosInstance.post('/api/auth/reset-password', {
                email,
                otp,
                newPassword,
            });
            showToast(response.data.message || 'Password reset successfully!', 'success');
            setTimeout(() => {
                navigate('/auth/login');
            }, 2000);
        } catch (err) {
            const errorMessage = err.response?.data?.message || 'Failed to reset password. Please try again.';
            showToast(errorMessage, 'error');
        } finally {
            setLoading(false);
        }
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <form className="forgot__form" onSubmit={handleSendOTP}>
                        <div className="step-indicator">
                            <div className="step active">1</div>
                            <div className="step-line"></div>
                            <div className="step">2</div>
                            <div className="step-line"></div>
                            <div className="step">3</div>
                        </div>
                        <h2>Forgot Password</h2>
                        <p className="subtitle">Enter your email to receive a verification code</p>

                        <div className="inputWrapper">
                            <label><Mail size={16} /> Email</label>
                            <input
                                placeholder="Enter your email..."
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                            />
                        </div>

                        <button type="submit" disabled={loading || !email.trim()}>
                            {loading ? 'Sending OTP...' : 'Send OTP'}
                        </button>

                        <div className="backToLogin">
                            <Link to="/auth/login">← Back to Login</Link>
                        </div>
                    </form>
                );

            case 2:
                return (
                    <form className="forgot__form" onSubmit={handleVerifyOTP}>
                        <div className="step-indicator">
                            <div className="step completed">✓</div>
                            <div className="step-line active"></div>
                            <div className="step active">2</div>
                            <div className="step-line"></div>
                            <div className="step">3</div>
                        </div>
                        <h2>Verify OTP</h2>
                        <p className="subtitle">Enter the 6-digit code sent to {email}</p>

                        <div className="inputWrapper">
                            <label><Key size={16} /> OTP Code</label>
                            <input
                                placeholder="Enter 6-digit OTP..."
                                type="text"
                                value={otp}
                                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                                required
                                maxLength={6}
                                autoComplete="one-time-code"
                            />
                        </div>

                        <button type="submit" disabled={loading || otp.length !== 6}>
                            {loading ? 'Verifying...' : 'Verify OTP'}
                        </button>

                        <div className="resendOtp">
                            <button type="button" onClick={handleSendOTP} disabled={loading}>
                                Resend OTP
                            </button>
                        </div>

                        <div className="backToLogin">
                            <button type="button" onClick={() => setStep(1)}>← Change Email</button>
                        </div>
                    </form>
                );

            case 3:
                return (
                    <form className="forgot__form" onSubmit={handleResetPassword}>
                        <div className="step-indicator">
                            <div className="step completed">✓</div>
                            <div className="step-line active"></div>
                            <div className="step completed">✓</div>
                            <div className="step-line active"></div>
                            <div className="step active">3</div>
                        </div>
                        <h2>Reset Password</h2>
                        <p className="subtitle">Create a new password for your account</p>

                        <div className="inputWrapper">
                            <label><Lock size={16} /> New Password</label>
                            <input
                                placeholder="Enter new password..."
                                type="password"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                required
                                minLength={6}
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="inputWrapper">
                            <label><Lock size={16} /> Confirm Password</label>
                            <input
                                placeholder="Confirm new password..."
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                minLength={6}
                                autoComplete="new-password"
                            />
                        </div>

                        <button type="submit" disabled={loading || newPassword.length < 6 || newPassword !== confirmPassword}>
                            {loading ? 'Resetting...' : 'Reset Password'}
                        </button>
                    </form>
                );

            default:
                return null;
        }
    };

    return (
        <div className="ForgotPassword__mainWrapper">
            <Toast message={toast.message} type={toast.type} show={toast.show} onClose={hideToast} />
            <div className="forgotPage__leftWrapper">
                <div className="mainFormWrapper">
                    <div className="logoWrapper">
                        <img src={Logo} alt="logo" />
                    </div>
                    {renderStep()}
                </div>
            </div>
            <div className="forgotPage__rightWrapper">
                <img src={AuthSlideImg1} alt="bg" />
            </div>
        </div>
    );
};
