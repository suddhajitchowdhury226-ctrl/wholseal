// OrderDetails.jsx
import React, { useEffect, useState } from "react";
import { CircleX, ArrowLeft, Package, Truck, CreditCard, MapPin, Calendar, Hash } from "lucide-react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { Layout } from "../common/Layout/Layout";
import "./OrderDetails.scss";

const BASE_URL = import.meta.env.VITE_BASE_URL;

const OrderDetails = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getImageUrl = (imagePath) => {
    if (!imagePath) return "https://via.placeholder.com/150";
    // Handle both URL formats
    if (imagePath.startsWith("http")) return imagePath;
    const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "");
    return `${BASE_URL}/${normalizedPath}`;
  };

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          navigate('/auth/login');
          return;
        }

        const response = await axiosInstance.get(`/api/user/purchase/${orderId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        
        console.log("Fetched order:", response.data);
        setOrder(response.data.purchase);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch order:", err);
        setError("Failed to load order details.");
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId, navigate]);

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    })} at ${date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit' 
    })}`;
  };

  const getStatusColor = (status) => {
    const statusColors = {
      'pending': 'bg-yellow-100 text-yellow-800',
      'processing': 'bg-blue-100 text-blue-800',
      'shipped': 'bg-purple-100 text-purple-800',
      'delivered': 'bg-green-100 text-green-800',
      'cancelled': 'bg-red-100 text-red-800'
    };
    return statusColors[status?.toLowerCase()] || 'bg-gray-100 text-gray-800';
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex justify-center items-center">
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900"></div>
            <p className="mt-4 text-gray-600">Loading order details...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !order) {
    return (
      <Layout>
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md text-center">
            <div className="text-red-500 mb-4">
              <CircleX size={48} className="mx-auto" />
            </div>
            <p className="text-xl font-semibold mb-2">Oops! Something went wrong</p>
            <p className="text-gray-600 mb-6">{error || "Order not found."}</p>
            <button
              onClick={() => navigate("/account/my-profile")}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Back to My Orders
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        {/* Full Width Header */}
        <div className="bg-white shadow-sm border-b">
          <div className="w-full px-6 py-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => navigate("/account/my-profile")}
                  className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
                >
                  <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                  <span className="font-medium">Back to Orders</span>
                </button>
                <div className="h-6 w-px bg-gray-300"></div>
                <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                  <Hash size={20} className="text-gray-500" />
                  Order {order.paymentIntentId || order._id.slice(-10)}
                </h1>
              </div>
              <div className={`px-4 py-2 rounded-full font-semibold text-sm ${getStatusColor(order.status)}`}>
                {order.status?.toUpperCase()}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Full Width */}
        <div className="w-full px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Order Items (2/3 width on large screens) */}
            <div className="lg:col-span-2 space-y-6">
              {/* Order Summary Card */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Package size={24} className="text-blue-600" />
                  Order Summary
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Order Date</p>
                    <p className="font-semibold text-gray-900">{new Date(order.createdAt).toLocaleDateString()}</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Items</p>
                    <p className="font-semibold text-gray-900">{order.items.length}</p>
                  </div>
                  <div className="bg-purple-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Payment Status</p>
                    <p className="font-semibold text-green-600">Completed</p>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-4">
                    <p className="text-sm text-gray-600 mb-1">Total Amount</p>
                    <p className="font-semibold text-gray-900">₹{order.total.toFixed(2)}</p>
                  </div>
                </div>
              </div>

              {/* Products List */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Truck size={24} className="text-blue-600" />
                  Order Items ({order.items.length})
                </h2>
                <div className="space-y-4">
                  {order.items.map((item, index) => {
                    const product = item.product;
                    const imageUrl = getImageUrl(product?.images?.[0]);

                    return (
                      <div key={index} className="flex gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100">
                        <div className="flex-shrink-0">
                          <img
                            src={imageUrl}
                            alt={product?.name}
                            className="w-32 h-32 object-cover rounded-lg shadow-sm"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/150";
                            }}
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {product?.name || "Product Name Not Available"}
                          </h3>
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <p className="text-gray-500">Quantity</p>
                              <p className="font-semibold text-gray-900">{item.quantity}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Unit Price</p>
                              <p className="font-semibold text-gray-900">₹{item.price.toFixed(2)}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Subtotal</p>
                              <p className="font-semibold text-gray-900">₹{(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                            <div>
                              <p className="text-gray-500">Status</p>
                              <p className="font-semibold text-green-600">Confirmed</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Price Breakdown */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="space-y-2">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal</span>
                      <span>₹{order.total.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span className="text-green-600">Free</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-gray-900 pt-2 border-t">
                      <span>Total Amount</span>
                      <span className="text-2xl">₹{order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Order Info (1/3 width on large screens) */}
            <div className="space-y-6">
              {/* Payment Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <CreditCard size={20} className="text-blue-600" />
                  Payment Information
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">Payment Intent ID</p>
                    <p className="font-mono text-sm text-gray-900 break-all">{order.paymentIntentId || "N/A"}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Payment Method</p>
                    <p className="font-semibold text-gray-900">Online Payment</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Transaction Date</p>
                    <p className="text-gray-900">{formatDateTime(order.createdAt)}</p>
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              {order.address && !order.address.message && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <MapPin size={20} className="text-blue-600" />
                    Shipping Address
                  </h3>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <div className="flex-grow">
                        <p className="font-semibold text-gray-900">{order.address.title}</p>
                        <p className="text-gray-700">{order.address.name}</p>
                        <p className="text-gray-600">{order.address.addressLine1}</p>
                        {order.address.addressLine2 && (
                          <p className="text-gray-600">{order.address.addressLine2}</p>
                        )}
                        <p className="text-gray-600">
                          {order.address.city && `${order.address.city}, `}
                          {order.address.state} {order.address.zipcode}
                        </p>
                        <p className="text-gray-600">{order.address.country}</p>
                        <div className="mt-3 pt-3 border-t border-gray-100">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">Contact:</span> {order.address.contactNumber}
                          </p>
                          {order.address.email && (
                            <p className="text-sm text-gray-600">
                              <span className="font-medium">Email:</span> {order.address.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                    {order.address.isDefault && (
                      <span className="inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                        Default Address
                      </span>
                    )}
                  </div>
                </div>
              )}
              
              {order.address?.message && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                  <p className="text-red-600 text-sm">{order.address.message}</p>
                </div>
              )}

              {/* Order Timeline */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Calendar size={20} className="text-blue-600" />
                  Order Timeline
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">Order Placed</p>
                      <p className="text-sm text-gray-500">{formatDateTime(order.createdAt)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="flex-grow">
                      <p className="font-medium text-gray-900">Payment Confirmed</p>
                      <p className="text-sm text-gray-500">{formatDateTime(order.createdAt)}</p>
                    </div>
                  </div>
                  {order.status === 'delivered' && (
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <div className="flex-grow">
                        <p className="font-medium text-gray-900">Delivered</p>
                        <p className="text-sm text-gray-500">{formatDateTime(order.updatedAt)}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default OrderDetails;