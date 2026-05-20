import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Package } from 'lucide-react';
import axiosInstance from '../utils/axiosInstance';
import './OrderSuccess.scss';

const OrderSuccess = () => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const finalizeOrder = async () => {
            try {
                let sessionId = new URLSearchParams(location.search).get('session_id') || localStorage.getItem('checkoutSessionId');

                if (!sessionId || !sessionId.startsWith('cs_')) {
                    setError('Invalid session ID');
                    setLoading(false);
                    return;
                }

                const token = localStorage.getItem('userToken');
                if (!token) {
                    setError('User not authenticated');
                    setLoading(false);
                    return;
                }

                // Call the backend to finalize the order
                await axiosInstance.get(
                    `/api/user/purchase-summary?session_id=${sessionId}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );

                // Clear local cart and checkout session
                localStorage.setItem('localCart', JSON.stringify([]));
                localStorage.removeItem('checkoutSessionId');
                window.dispatchEvent(new Event('cartUpdated'));

                setLoading(false);
            } catch (err) {
                console.error('Error finalizing order:', err);
                setLoading(false);
            }
        };

        finalizeOrder();
    }, [location]);

    if (loading) {
        return (
            <div className="order-success-container flex flex-col items-center justify-center min-h-[60vh] bg-gray-50">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-12 h-12 border-4 border-gray-200 border-t-green-600 rounded-full mb-4"
                />
                <p className="text-gray-600 font-medium tracking-wide">Processing your order securely...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="order-success-container flex flex-col items-center justify-center min-h-[60vh]">
                <p className="text-red-500 mb-4">{error}</p>
                <button className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700" onClick={() => navigate('/')}>Return Home</button>
            </div>
        );
    }

    return (
        <div className="order-success-container flex items-center justify-center min-h-[60vh] bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                        delay: 0.3,
                        type: "spring",
                        stiffness: 200,
                        damping: 20
                    }}
                    className="mx-auto flex items-center justify-center h-24 w-24 rounded-full bg-green-100 mb-6"
                >
                    <CheckCircle className="h-16 w-16 text-green-600" />
                </motion.div>

                <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
                    Order Placed Successfully!
                </h2>

                <p className="text-gray-600 mb-8 text-lg">
                    Thank you for your purchase. Your order is being processed and will be shipped soon.
                </p>

                <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 justify-center">
                    <button
                        onClick={() => navigate('/account/my-profile', { state: { openTab: 'My Order' } })}
                        className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-sm transition-colors duration-200"
                    >
                        <Package className="mr-2 h-5 w-5" />
                        View Order
                    </button>

                    <button
                        onClick={() => navigate('/products')}
                        className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 shadow-sm transition-colors duration-200"
                    >
                        Continue Shopping
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default OrderSuccess;
