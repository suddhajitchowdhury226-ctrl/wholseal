import React, { useEffect, useRef, useState } from "react";
import {
  User,
  MapPin,
  Package,
  CreditCard,
  Heart,
  Edit,
  CameraIcon,
  CircleX,
  Shield,
  Wallet,
  ChevronRight,
  Check,
  Trash2,
  Star,
  ArrowLeft,
  ShoppingCart,
  Hash,
  Calendar,
  Truck,
  View,
  FileText,
  Download,
  ChevronDown,
  Loader,
} from "lucide-react";
import "./Profilepage.scss";
import ProfileImg from "../../assets/images/bg/ProfileImg.png";
import prodImg from "../../assets/images/bg/prod-img.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axiosInstance";
import { toast } from 'react-toastify';
import { Modal } from "antd";
import { downloadInvoice, previewInvoice } from "../../utils/invoiceGenerator";

// Utility function for image URLs
const getImageUrl = (imagePath, baseUrl) => {
  if (!imagePath) return ProfileImg; // Use fallback image for profile
  if (imagePath.startsWith('http')) return imagePath;
  const normalizedPath = imagePath.replace(/\\/g, "/").replace(/^\/+/, "");
  return `${baseUrl}/${normalizedPath}`;
};

// Helper function to get display status based on refundStatus and status
const getDisplayStatus = (order) => {
  // If refundStatus is 'processed', always show as refunded
  if (order.refundStatus === 'processed') {
    return 'refunded';
  }
  // Otherwise return the actual status
  return order.status;
};

// Helper function to get status display text
const getStatusDisplayText = (order) => {
  const displayStatus = getDisplayStatus(order);
  
  if (displayStatus === 'refunded') {
    return 'Refunded';
  } else if (order.status === 'refund_requested') {
    return 'Refund Requested';
  } else {
    return order.status.charAt(0).toUpperCase() + order.status.slice(1);
  }
};

// Helper function to get status CSS classes
const getStatusClasses = (order) => {
  const displayStatus = getDisplayStatus(order);
  
  if (displayStatus === 'refunded') {
    return 'bg-blue-100 text-blue-700';
  } else if (order.status === 'refund_requested') {
    return 'bg-yellow-100 text-yellow-700';
  } else if (order.status === 'completed') {
    return 'bg-green-100 text-green-700';
  } else {
    return 'bg-gray-100 text-gray-700';
  }
};

export const Profilepage = () => {
  const [activeTab, setActiveTab] = useState("Personal Info");
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalOrderId, setModalOrderId] = useState(null);
  const [modalOrderData, setModalOrderData] = useState(null);
  const [modalPaymentId, setModalPaymentId] = useState(null);
  const [modalPaymentData, setModalPaymentData] = useState(null);
  const BASE_URL = import.meta.env.VITE_BASE_URL;
  const router = useLocation();
  const navigate = useNavigate();

  const showModal = (orderId, type = 'order') => {
    if (type === 'order') {
      setModalOrderId(orderId);
      setModalPaymentId(null);
    } else {
      setModalPaymentId(orderId);
      setModalOrderId(null);
    }
    setIsModalVisible(true);
  };

  const handleOk = () => setIsModalVisible(false);
  const handleCancel = () => setIsModalVisible(false);

  useEffect(() => {
    if (router?.state?.openTab) {
      setActiveTab(router?.state?.openTab);
    }
  }, [router?.state?.openTab]);

  const NavTabHeader = [
    { icon: <User size={30} />, title: "Personal Info" },
    { icon: <MapPin size={30} />, title: "Address" },
    { icon: <Package size={30} />, title: "My Order" },
    { icon: <CreditCard size={30} />, title: "Payments" },
    { icon: <Heart size={30} />, title: "Wishlist" },
  ];

  const renderForm = (currentTab) => {
    switch (currentTab) {
      case "Personal Info":
        return <PersonalInfoTab />;
      case "Address":
        return <AddressTab />;
      case "My Order":
        return selectedOrderId ? (
          <OrderDetails
            orderId={selectedOrderId}
            onBack={() => setSelectedOrderId(null)}
            baseUrl={BASE_URL}
          />
        ) : (
          <MyOrderTab
            setActiveTab={setActiveTab}
            baseUrl={BASE_URL}
            onOrderSelect={setSelectedOrderId}
            showModal={showModal}
            modalOrderId={modalOrderId}
            setModalOrderData={setModalOrderData}
          />
        );
      case "Payments":
        return (
          <PaymentMethodTab
            baseUrl={BASE_URL}
            showModal={showModal}
            modalPaymentId={modalPaymentId}
            setModalPaymentData={setModalPaymentData}
          />
        );
      case "Wishlist":
        return <WishlistTab />;
      default:
        return <PersonalInfoTab />;
    }
  };

  return (
    <div className="profile__container">
      <Modal
        title={modalOrderId ? "Order Info" : "Payment Info"}
        open={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={800}
      >
        {modalOrderId && modalOrderData ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Order Summary</h3>
              <p><strong>Order ID:</strong> {modalOrderData._id}</p>
              <p><strong>Status:</strong> {getStatusDisplayText(modalOrderData)}</p>
              <p><strong>Total:</strong> ₹{modalOrderData.total}</p>
              <p><strong>Payment ID:</strong> {modalOrderData.paymentIntentId}</p>
              <p><strong>Purchase ID:</strong> {modalOrderData.purchaseId}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Customer Info</h3>
              <p><strong>Name:</strong> {modalOrderData.user?.name}</p>
              <p><strong>Email:</strong> {modalOrderData.user?.email}</p>
              <p><strong>Phone:</strong> {modalOrderData.user?.phone}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Shipping Address</h3>
              <p>{modalOrderData.shipment?.address?.name}</p>
              <p>{modalOrderData.shipment?.address?.addressLine1}</p>
              <p>{modalOrderData.shipment?.address?.city}, {modalOrderData.shipment?.address?.state}, {modalOrderData.shipment?.address?.zipcode}</p>
              <p>{modalOrderData.shipment?.address?.country}</p>
              <p><strong>Phone:</strong> {modalOrderData.shipment?.address?.contactNumber}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Products</h3>
              {modalOrderData.items?.map((item, idx) => (
                <div key={item._id} className="border p-2 rounded mb-2">
                  <p><strong>Name:</strong> {item.product?.name}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Price:</strong> ₹{item.price}</p>
                  <img
                    src={item.product?.images?.[0] ? `${import.meta.env.VITE_BASE_URL}/${item.product.images[0].replace(/\\/g, '/')}` : prodImg}
                    alt={item.product?.name || "Product"}
                    className="w-[100px] h-[100px] object-contain mt-2"
                    onError={(e) => { e.target.src = prodImg; }}
                  />
                </div>
              ))}
            </div>
            <div>
              <h3 className="font-semibold text-lg">Shipment</h3>
              <p><strong>Status:</strong> {modalOrderData.shipment?.status}</p>
              <p><strong>Tracking #:</strong> {modalOrderData.shipment?.shipping?.trackingNumber}</p>
              <Link
                to={`/tracking?carrierCode=ups&trackingNumber=${modalOrderData.shipment.shipping.trackingNumber}`}
                className="text-blue-600 underline"
              >
                Track Shipment
              </Link>
            </div>
          </div>
        ) : modalPaymentId && modalPaymentData ? (
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg">Payment Summary</h3>
              <p><strong>Payment ID:</strong> {modalPaymentData.paymentIntentId}</p>
              <p><strong>Purchase ID:</strong> {modalPaymentData.purchaseId}</p>
              <p><strong>Status:</strong> {modalPaymentData.status}</p>
              <p><strong>Total:</strong> ${modalPaymentData.total}</p>
              <p><strong>Date:</strong> {new Date(modalPaymentData.createdAt).toLocaleDateString()}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Customer Info</h3>
              <p><strong>Name:</strong> {modalPaymentData.user?.name}</p>
              <p><strong>Email:</strong> {modalPaymentData.user?.email}</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Products</h3>
              {modalPaymentData.items?.map((item, idx) => (
                <div key={item._id} className="border p-2 rounded mb-2">
                  <p><strong>Name:</strong> {item.product?.name}</p>
                  <p><strong>Quantity:</strong> {item.quantity}</p>
                  <p><strong>Price:</strong> ${item.price}</p>
                  <img
                    src={item.product?.images?.[0] ? `${import.meta.env.VITE_BASE_URL}/${item.product.images[0].replace(/\\/g, '/')}` : prodImg}
                    alt={item.product?.name || "Product"}
                    className="w-[100px] h-[100px] object-contain mt-2"
                    onError={(e) => { e.target.src = prodImg; }}
                  />
                </div>
              ))}
            </div>
          </div>
        ) : (
          <p>Loading details...</p>
        )}
      </Modal>

      <aside>
        <h3 className="mainFont text-center font-[500] mb-4 text-[2dvw] leading-normal">
          My Account
        </h3>
        <div className="border-t border-[#d4d4d4] flex flex-col gap-4 py-5 px-4">
          {NavTabHeader.map((cur, id) => (
            <div
              key={id}
              onClick={() => {
                setActiveTab(cur.title);
                if (cur.title !== "My Order") {
                  setSelectedOrderId(null);
                }
              }}
              className={`flex justify-start items-center gap-3 ${
                activeTab === cur.title
                  ? "bg-[var(--color-seconday)] text-white active"
                  : "bg-transparent text-black"
              } p-3 rounded-lg hover:bg-[var(--color-seconday)] hover:text-white cursor-pointer transition-all duration-200 ease-linear`}
            >
              {cur.icon}
              <h3 className="txtclass text-[1.4dvw] mainFont font-[600]">{cur.title}</h3>
            </div>
          ))}
        </div>
      </aside>
      <div className="mainSectionWrapper">
        {renderForm(activeTab)}
      </div>
    </div>
  );
};

// MyOrderTab Component
const MyOrderTab = ({ baseUrl, onOrderSelect, showModal, modalOrderId, setModalOrderData }) => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [refundLoading, setRefundLoading] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const [selectedOrderForRefund, setSelectedOrderForRefund] = useState(null);
  const [refundReason, setRefundReason] = useState('');
  const [invoiceDropdown, setInvoiceDropdown] = useState({});
  const [userData, setUserData] = useState({});
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [selectedPurchaseId, setSelectedPurchaseId] = useState(null);
  const [selectedProductName, setSelectedProductName] = useState('');
  const [reviewData, setReviewData] = useState(null);
  const [reviewAggregates, setReviewAggregates] = useState({});
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const getImageUrl = (imagePath) => {
    if (!imagePath) return prodImg;
    if (imagePath.startsWith('http')) return imagePath;
    const normalizedPath = imagePath.replace(/\\/g, '/').replace(/^\/+/, '');
    return `${baseUrl}/${normalizedPath}`;
  };

  const formatDateTime = (dateStr) => {
    const date = new Date(dateStr);
    return `${date.toLocaleDateString()} at ${date.toLocaleTimeString()}`;
  };

  const handleRefundRequest = async (purchaseId) => {
    setSelectedOrderForRefund(purchaseId);
    setShowRefundModal(true);
    setRefundReason('');
  };

  const submitRefundRequest = async () => {
    if (!refundReason || refundReason.trim() === '') {
      toast.error('Please provide a reason for the refund request');
      return;
    }

    try {
      setRefundLoading(true);
      const token = localStorage.getItem('userToken');
      if (!token) {
        toast.error('Please log in to request a refund');
        navigate('/auth/login');
        return;
      }

      const response = await axiosInstance.post(
        '/api/user/request-refund',
        {
          purchaseId: selectedOrderForRefund,
          refundReason: refundReason.trim()
        },
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      toast.success('Refund request submitted successfully! We will review your request and get back to you soon.');
      
      // Close modal and reset form
      setShowRefundModal(false);
      setSelectedOrderForRefund(null);
      setRefundReason('');
      
      // Refresh orders to show updated status
      const ordersResponse = await axiosInstance.get('/api/user/all-purchases?websiteRole=wholesaler', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(ordersResponse.data.purchases || []);

    } catch (error) {
      console.error('Refund request error:', error);
      const errorMessage = error.response?.data?.message || 'Failed to submit refund request. Please try again.';
      toast.error(errorMessage);
    } finally {
      setRefundLoading(false);
    }
  };

  const closeRefundModal = () => {
    setShowRefundModal(false);
    setSelectedOrderForRefund(null);
    setRefundReason('');
  };

  const handleShowReviewModal = async (purchaseId, productName) => {
    try {
      const token = localStorage.getItem('userToken');
      const response = await axiosInstance.get(`/api/user/aggregated-reviews/${purchaseId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setReviewData(response.data);
      setSelectedPurchaseId(purchaseId);
      setSelectedProductName(productName);
      setShowReviewModal(true);
    } catch (error) {
      toast.error('No reviews found for this purchase');
    }
  };



  const closeReviewModal = () => {
    setShowReviewModal(false);
    setSelectedPurchaseId(null);
    setSelectedProductName('');
    setReviewData(null);
  };

  // Invoice functions
  const toggleInvoiceDropdown = (orderId) => {
    setInvoiceDropdown(prev => ({
      ...prev,
      [orderId]: !prev[orderId]
    }));
  };

  const handleInvoicePreview = (order) => {
    try {
      previewInvoice(order, userData);
      setInvoiceDropdown({});
      toast.success('Invoice opened in new tab');
    } catch (error) {
      console.error('Error generating invoice preview:', error);
      toast.error('Failed to generate invoice preview');
    }
  };

  const handleInvoiceDownload = (order) => {
    try {
      downloadInvoice(order, userData);
      setInvoiceDropdown({});
      toast.success('Invoice downloaded successfully');
    } catch (error) {
      console.error('Error downloading invoice:', error);
      toast.error('Failed to download invoice');
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.invoice-dropdown-container')) {
        setInvoiceDropdown({});
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          setError('Please log in to view orders');
          navigate('/auth/login');
          return;
        }

        const response = await axiosInstance.get('/api/user/all-purchases?websiteRole=wholesaler', {
          headers: { Authorization: `Bearer ${token}` },
        });

        const purchases = response.data.purchases || [];
        setOrders(purchases);
        
        // Extract review aggregates from backend response
        const aggregates = {};
        purchases.forEach(purchase => {
          const key = purchase.purchaseId || purchase._id;
          aggregates[key] = purchase.reviewAggregate || { totalReviews: 0, averageRating: 0 };
        });
        setReviewAggregates(aggregates);
      } catch (err) {
        console.error('Failed to fetch orders:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        const errorMessage = err.response?.data?.message || 'Failed to load orders';
        setError(errorMessage);
        if (err.response?.status === 401) {
          localStorage.removeItem('userToken');
          navigate('/auth/login');
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (!token) return;

        const response = await axiosInstance.get('/api/auth/me', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setUserData({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone
        });
      } catch (err) {
        console.error('Failed to fetch user data:', err);
      }
    };

    const fetchOrderModal = async () => {
      const token = localStorage.getItem('userToken');
      if (!token) {
        setError('Please log in to view orders');
        navigate('/auth/login');
        return;
      }
      if (modalOrderId) {
        const response = await axiosInstance.get(`/api/user/get-purchases/${modalOrderId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("Fetched order for modal:", response.data.data);
        setModalOrderData(response.data.data);
      }
    };

    fetchOrders();
    fetchUserData();
    fetchOrderModal();
  }, [navigate, modalOrderId]);



  const handleOrderClick = (orderId) => {
    onOrderSelect(orderId);
  };

  // Pagination logic
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setPageLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setPageLoading(false);
    }, 500); // Simulate loading delay
  };

  if (loading || pageLoading) {
    return (
      <div className="my-orders-container p-5 flex justify-center items-center gap-3">
        <Loader className="animate-spin h-12 w-12 text-gray-900" />
        <p className="text-gray-600 text-lg">Loading orders...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="my-orders-container p-5">
        <p className="error">{error}</p>
      </div>
    );
  }

  return (
    <div className="my-orders-container p-5">
      <h2 className="text-[2dvw] text-gray-500 font-[600] mainFont">My Orders</h2>
      <div className="orders-list mt-5">
        {orders.length === 0 ? (
          <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">No orders found</p>
        ) : (
          <>
            {currentOrders.map((order) => (
              <div
                key={order._id}
                className="order-item border bg-[#eeeeee]/40 border-[var(--color-seconday)] shadow rounded-md p-5 mb-4 cursor-pointer hover:shadow-lg transition-shadow"
              >
                <div className="flex justify-between items-center flex-wrap gap-2">
                  <h3 className="text-[1.5dvw] mainFont font-semibold truncate max-w-[50%]">
                    Order #{order.paymentIntentId || order._id.slice(-10)}
                  </h3>
                  <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                    {formatDateTime(order.createdAt)}
                  </p>
                  <div className="flex justify-end gap-2 w-full sm:w-auto">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        showModal(order._id, 'order');
                      }}
                      className="bg-[var(--color-seconday)] py-1 rounded-md mainFont font-semibold cursor-pointer px-2 sm:px-4 text-white flex justify-center items-center gap-2 text-sm sm:text-[1dvw]"
                    >
                      <View size={16} /> View
                    </button>
                    
                    {/* Invoice Dropdown Button */}
                    <div className="relative invoice-dropdown-container">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleInvoiceDropdown(order._id);
                        }}
                        className="invoice-dropdown-button bg-green-600 hover:bg-green-700 py-1 rounded-md mainFont font-semibold cursor-pointer px-2 sm:px-4 text-white flex justify-center items-center gap-2 text-sm sm:text-[1dvw] transition-colors"
                      >
                        <FileText size={16} /> Invoice <ChevronDown size={14} />
                      </button>
                      
                      {invoiceDropdown[order._id] && (
                        <div className="invoice-dropdown-menu absolute right-0 top-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-10 min-w-[120px]">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInvoicePreview(order);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                          >
                            <View size={14} /> Preview
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleInvoiceDownload(order);
                            }}
                            className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2 border-t border-gray-100"
                          >
                            <Download size={14} /> Download
                          </button>
                        </div>
                      )}
                    </div>
                    {order.status === 'completed' && getDisplayStatus(order) !== 'refunded' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleRefundRequest(order._id);
                        }}
                        disabled={refundLoading}
                        className={`py-1 rounded-md mainFont font-semibold cursor-pointer px-2 sm:px-4 text-white flex justify-center items-center gap-2 text-sm sm:text-[1dvw] transition-colors ${
                          refundLoading 
                            ? 'bg-gray-400 cursor-not-allowed' 
                            : 'bg-red-600 hover:bg-red-700'
                        }`}
                      >
                        {refundLoading ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                            Processing...
                          </>
                        ) : (
                          <>
                            <ArrowLeft size={16} /> Refund
                          </>
                        )}
                      </button>
                    )}
                    {order.status === 'refund_requested' && getDisplayStatus(order) !== 'refunded' && (
                      <span className="bg-yellow-100 text-yellow-800 py-1 px-3 rounded-md text-xs font-medium flex items-center gap-1">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                        Refund Pending
                      </span>
                    )}
                    {getDisplayStatus(order) === 'refunded' && (
                      <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-md text-xs font-medium flex items-center gap-1">
                        <Check size={12} />
                        Refunded
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2 my-3">
                  <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                    Total: ₹{order.total.toFixed(2)}
                  </p>
                  <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                    Status: <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusClasses(order)}`}>
                      {getStatusDisplayText(order)}
                    </span>
                  </p>
                  <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                    Items: {order.items.length}
                  </p>
                </div>
                <div className="items-preview mt-3">
                  <div className="flex gap-2 flex-wrap">
                    {order.items.slice(0, 3).map((item, index) => (
                      <img
                        key={index}
                        src={getImageUrl(item.product?.images?.[0])}
                        alt={item.product?.name || "Product"}
                        className="w-12 h-12 object-cover rounded"
                        onError={(e) => { e.target.src = prodImg; }}
                      />
                    ))}
                    {order.items.length > 3 && (
                      <div className="w-12 h-12 bg-gray-200 rounded flex items-center justify-center text-gray-600 text-sm">
                        +{order.items.length - 3}
                      </div>
                    )}
                  </div>
                  {reviewAggregates[order.purchaseId || order._id]?.totalReviews > 0 && (
                    <div className="mt-3 p-2 bg-yellow-50 rounded-lg border border-yellow-200">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowReviewModal(order.purchaseId || order._id, 'Purchase Reviews');
                        }}
                        className="flex items-center gap-2 text-sm hover:text-yellow-700 transition-colors"
                      >
                        <div className="flex">
                          {[1,2,3,4,5].map(star => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= reviewAggregates[order.purchaseId || order._id]?.averageRating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="font-medium">
                          {reviewAggregates[order.purchaseId || order._id]?.averageRating}/5
                        </span>
                        <span className="text-gray-600">
                          ({reviewAggregates[order.purchaseId || order._id]?.totalReviews} review{reviewAggregates[order.purchaseId || order._id]?.totalReviews !== 1 ? 's' : ''})
                        </span>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-2 sm:px-4 py-1 bg-[var(--color-seconday)] text-white rounded-md disabled:opacity-50 text-sm sm:text-[1dvw]"
              >
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`px-2 sm:px-4 py-1 rounded-md text-sm sm:text-[1dvw] ${
                    currentPage === page
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-2 sm:px-4 py-1 bg-[var(--color-seconday)] text-white rounded-md disabled:opacity-50 text-sm sm:text-[1dvw]"
              >
                Next
              </button>
            </div>
          </>
        )}
      </div>

      {/* Refund Request Modal */}
      {showRefundModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Request Refund</h3>
              <button
                onClick={closeRefundModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <CircleX size={24} />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-3">
                  Please provide a reason for your refund request. This will help us process your request more efficiently.
                </p>
                <textarea
                  value={refundReason}
                  onChange={(e) => setRefundReason(e.target.value)}
                  placeholder="Enter your refund reason here..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                  rows={4}
                  maxLength={500}
                />
                <div className="text-xs text-gray-500 mt-1">
                  {refundReason.length}/500 characters
                </div>
              </div>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                <div className="flex items-start">
                  <Shield className="w-5 h-5 text-yellow-600 mt-0.5 mr-2 flex-shrink-0" />
                  <div className="text-sm text-yellow-800">
                    <strong>Please note:</strong> Once submitted, your refund request will be reviewed by our team. 
                    This process may take 3-5 business days.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <button
                onClick={closeRefundModal}
                className="flex-1 px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                disabled={refundLoading}
              >
                Cancel
              </button>
              <button
                onClick={submitRefundRequest}
                disabled={refundLoading || !refundReason.trim()}
                className={`flex-1 px-4 py-2 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2 ${
                  refundLoading || !refundReason.trim()
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700'
                }`}
              >
                {refundLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    Submitting...
                  </>
                ) : (
                  'Submit Refund Request'
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl p-6 w-[90%] max-w-md mx-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-gray-900">Product Review</h3>
              <button
                onClick={closeReviewModal}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <CircleX size={24} />
              </button>
            </div>
            
            {reviewData && reviewData.reviews?.length > 0 ? (
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <p className="text-lg font-semibold">{reviewData.totalReviews} Review{reviewData.totalReviews !== 1 ? 's' : ''}</p>
                  <div className="flex items-center justify-center gap-2">
                    <div className="flex">
                      {[1,2,3,4,5].map(star => (
                        <Star 
                          key={star} 
                          className={`w-5 h-5 ${star <= reviewData.averageRating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({reviewData.averageRating}/5)</span>
                  </div>
                </div>
                <div className="max-h-80 overflow-y-auto pr-2" style={{scrollbarWidth: 'thin'}}>
                  {reviewData.reviews.map((review, index) => (
                    <div key={review._id} className="border-b pb-4 mb-4 last:border-b-0 last:mb-0">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium text-sm">{review.user?.name || 'Anonymous'}</span>
                        <div className="flex">
                          {[1,2,3,4,5].map(star => (
                            <Star 
                              key={star} 
                              className={`w-4 h-4 ${star <= review.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500">({review.rating}/5)</span>
                      </div>
                      {review.comment && (
                        <p className="text-sm text-gray-700 mb-2">"{review.comment}"</p>
                      )}
                      <p className="text-xs text-gray-500">
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Star className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No reviews found for this purchase</p>
              </div>
            )}

            <div className="flex justify-end mt-6">
              <button
                onClick={closeReviewModal}
                className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// PersonalInfoTab Component
const PersonalInfoTab = () => {
  const profileImgRef = useRef(null);
  const [isEditable, setIsEditable] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    profileImage: "",
  });
  const [error, setError] = useState("");
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const fetchUserData = async () => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) throw new Error("No token found");
      const response = await axiosInstance.get("/api/auth/me", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setUserData({
        name: response.data.name,
        phone: response.data.phone,
        email: response.data.email,
        profileImage: response.data.profileImage || "",
      });
      if (response.data.profileImage) {
        const imageUrl = getImageUrl(response.data.profileImage, BASE_URL);
        setPreviewImage(imageUrl);
      }
    } catch (err) {
      console.error("Failed to fetch user data:", err);
      setError("Failed to fetch user data");
    }
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const filetypes = /jpeg|jpg|png/;
      const isValidType = filetypes.test(file.type) && filetypes.test(file.name.split(".").pop().toLowerCase());
      if (!isValidType) {
        setError("Only JPEG, JPG, and PNG files are allowed!");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size exceeds 5MB limit!");
        return;
      }
      setPreviewImage(URL.createObjectURL(file));
      setError("");
    }
  };

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("userToken");
      if (!token) throw new Error("No token found");

      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("email", userData.email);
      formData.append("phone", userData.phone);
      if (profileImgRef.current?.files[0]) {
        formData.append("profileImage", profileImgRef.current.files[0]);
      }

      const response = await axiosInstance.put("/api/auth/update", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      const updated = response.data.user;
      setUserData({
        name: updated.name,
        phone: updated.phone,
        email: updated.email,
        profileImage: updated.profileImage || "",
      });

      if (updated.profileImage) {
        const imageUrl = getImageUrl(updated.profileImage, BASE_URL);
        setPreviewImage(imageUrl);
      }

      setIsEditable(false);
      setError("");
    } catch (err) {
      console.error("Failed to update user data:", err.response?.data || err.message);
      setError(err.response?.data?.message || "Failed to update user data");
    }
  };

  return (
    <div className="w-full p-5">
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-[2dvw] text-gray-500 font-[600] mainFont">
            Personal Information
          </h3>
          <button
            onClick={() => {
              if (isEditable) handleUpdate();
              else setIsEditable(true);
            }}
            className="text-sm sm:text-base md:text-[1dvw] cursor-pointer flex justify-center items-center gap-2 px-5 py-2 rounded-2xl bg-[var(--color-primary)] text-white font-semibold mainFont"
          >
            {isEditable ? <>Save</> : <><Edit size={16} /> Edit</>}
          </button>
        </div>

        <div className="profileUpdate__mainWrapper">
          <div className="changeProfilePic__wrapper">
            <div className="profileImg__wrapper">
              <img
                src={previewImage || ProfileImg}
                alt="profile"
                className="w-24 h-24 object-cover rounded-full"
                onError={(e) => {
                  e.target.src = ProfileImg;
                }}
              />
            </div>
            <div className="profileImgInfo__wrapper">
              <h4>Profile Picture</h4>
              <p>Change Your profile Picture</p>
              <button
                disabled={!isEditable}
                className="disabled:cursor-not-allowed disabled:opacity-50"
                onClick={() => profileImgRef.current.click()}
              >
                <CameraIcon />
                Change Picture
              </button>
              <input
                hidden
                ref={profileImgRef}
                onChange={handleOnChange}
                type="file"
                accept="image/jpeg,image/jpg,image/png"
              />
            </div>
          </div>

          <div className="inputs__mainWrapper">
            <div className="inputLabel__wrapper">
              <label>Username</label>
              <input
                name="name"
                readOnly={!isEditable}
                placeholder="Username"
                type="text"
                value={userData.name}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="inputLabel__wrapper">
              <label>Phone Number</label>
              <input
                name="phone"
                readOnly={!isEditable}
                placeholder="Phone Number"
                type="tel"
                value={userData.phone}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
            <div className="inputLabel__wrapper">
              <label>Email ID</label>
              <input
                name="email"
                readOnly={!isEditable}
                placeholder="Email"
                type="email"
                value={userData.email}
                onChange={handleInputChange}
                className="border p-2 rounded w-full"
              />
            </div>
          </div>
        </div>

        <div className="changePassword__mainWrapper">
          <div className="general__headingWrapper">
            <h4>Update Password</h4>
          </div>
          <div className="changePassword__inputWrapper">
            <div className="inputLabel__wrapper">
              <label>Password</label>
              <input
                placeholder="**********"
                type="password"
                disabled
                className="border p-2 rounded w-full"
              />
            </div>
            <button disabled className="disabled:cursor-not-allowed disabled:opacity-50">
              Change Password
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// AddressTab Component
const AddressTab = () => {
  const [isModelShow, setIsModelShow] = useState({
    state: false,
    data: null,
    activeType: '',
  });
  const [addresses, setAddresses] = useState([]);
  const [addressLoading, setAddressLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchAddresses = async () => {
    try {
      setAddressLoading(true);
      const res = await axiosInstance.get('/api/auth/get-addresses');
      setAddresses(res.data.addresses || []);
      setAddressLoading(false);
    } catch (error) {
      console.error('Error fetching addresses:', error);
      setError('Failed to fetch addresses');
      setAddressLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this address?");
    if (!confirmDelete) return;

    try {
      await axiosInstance.delete(`/api/auth/delete-address/${id}`);
      toast.success('Address deleted successfully');
      fetchAddresses();
    } catch (error) {
      console.error('Error deleting address:', error);
      toast.error('Failed to delete address');
    }
  };

  useEffect(() => {
    fetchAddresses();
  }, []);

  return (
    <>
      <div className="w-full p-5">
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="flex justify-between items-center">
          <h3 className="text-[2dvw] text-gray-500 font-[600] mainFont">
            Shipping Address
          </h3>
          <button
            onClick={() =>
              setIsModelShow({
                state: true,
                data: null,
                activeType: 'Add',
              })
            }
            className="text-sm sm:text-base md:text-[1dvw] cursor-pointer flex justify-center items-center gap-2 px-5 py-2 rounded-xl bg-[var(--color-primary)] text-white font-semibold mainFont"
          >
            Add New
          </button>
        </div>

        <div className="my-5">
          <h3 className="text-[1.5dvw] font-semibold mainFont my-3 p-4 px-6">
            Saved Addresses
          </h3>

          {addressLoading ? (
            <div className="flex justify-center items-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
          ) : addresses.length === 0 ? (
            <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">No addresses found</p>
          ) : (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-5 my-5 border-t py-5 border-[#d4d4d4]">
              {addresses.map((addr) => (
                <div
                  key={addr._id}
                  className="border bg-[#eeeeee]/40 border-[var(--color-seconday)] shadow rounded-md p-5"
                >
                  <div className="flex justify-between items-center gap-4 flex-wrap">
                    <div className="flex justify-start gap-4 items-center">
                      <h3 className="text-[1.5dvw] font-semibold mainFont">
                        {addr.title}
                      </h3>
                      {addr.isDefault && (
                        <span className="bg-[var(--color-seconday)] px-3 text-xs sm:text-sm md:text-[.9dvw] py-1 rounded-2xl text-white mainFont font-semibold">
                          Default
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap justify-end gap-2">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsModelShow({
                            activeType: 'Edit',
                            data: addr,
                            state: true,
                          });
                        }}
                        className="bg-[var(--color-seconday)] py-1 rounded-md mainFont font-semibold cursor-pointer px-2 sm:px-4 text-white flex justify-center items-center gap-2 text-sm sm:text-[1dvw]"
                      >
                        <Edit size={16} /> Edit
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDelete(addr._id);
                        }}
                        className="bg-red-500 py-1 rounded-md mainFont font-semibold cursor-pointer px-2 sm:px-4 text-white flex justify-center items-center gap-2 text-sm sm:text-[1dvw]"
                      >
                        <Trash2 size={16} /> Delete
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 my-5">
                    <h3 className="text-[1.3dvw] mainFont font-semibold leading-normal">
                      {addr.name}
                    </h3>
                    <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                      {addr.addressLine1}
                    </p>
                    {addr.addressLine2 && (
                      <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                        {addr.addressLine2}
                      </p>
                    )}
                    <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                      {addr.city}, {addr.state}, {addr.country} - {addr.zipcode}
                    </p>
                    <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                      Contact: {addr.contactNumber}
                    </p>
                    {addr.email && (
                      <p className="text-sm sm:text-[1.2dvw] paraFont font-normal">
                        Email: {addr.email}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {isModelShow.state && (
        <EditAndAddModel
          isModelShow={isModelShow}
          setIsModelShow={(val) => {
            setIsModelShow(val);
            if (val.state === false) fetchAddresses();
          }}
        />
      )}
    </>
  );
};

// PaymentMethodTab Component
const PaymentMethodTab = ({ baseUrl, showModal, modalPaymentId, setModalPaymentData }) => {
  const [payments, setPayments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageLoading, setPageLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const navigate = useNavigate();

  const getImageUrl = (imagePath) => {
    if (!imagePath) return prodImg;
    if (imagePath.startsWith('http')) return imagePath;
    const normalizedPath = imagePath.replace(/\\/g, '/').replace(/^\/+/, '');
    return `${baseUrl}/${normalizedPath}`;
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const getPaymentMethodIcon = (paymentId) => {
    if (!paymentId) {
      return <Wallet className="w-6 h-6 text-green-600" />;
    }
    if (paymentId.includes('cs_test')) {
      return <CreditCard className="w-6 h-6 text-blue-600" />;
    } else {
      return <Wallet className="w-6 h-6 text-green-600" />;
    }
  };

  useEffect(() => {
    const fetchPayments = async () => {
      try {
        const token = localStorage.getItem('userToken');
        if (!token) {
          setError('Please log in to view payment history');
          navigate('/auth/login');
          return;
        }

        const response = await axiosInstance.get('/api/user/all-purchases?websiteRole=wholesaler', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setPayments(response.data.purchases || []);
      } catch (err) {
        console.error('Failed to fetch payments:', {
          message: err.message,
          status: err.response?.status,
          data: err.response?.data,
        });
        const errorMessage = err.response?.data?.message || 'Failed to load payment history';
        setError(errorMessage);
        if (err.response?.status === 401) {
          localStorage.removeItem('userToken');
          navigate('/auth/login');
        }
      } finally {
        setLoading(false);
      }
    };

    const fetchPaymentModal = async () => {
      const token = localStorage.getItem('userToken');
      if (!token) {
        setError('Please log in to view payment details');
        navigate('/auth/login');
        return;
      }
      if (modalPaymentId) {
        try {
          const response = await axiosInstance.get(`/api/user/get-purchases/${modalPaymentId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          console.log("Fetched payment for modal:", response.data.data);
          setModalPaymentData(response.data.data);
        } catch (err) {
          console.error('Failed to fetch payment details:', err);
          setError('Failed to load payment details');
        }
      }
    };

    fetchPayments();
    fetchPaymentModal();
  }, [navigate, modalPaymentId]);

  // Pagination logic
  const totalPages = Math.ceil(payments.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentPayments = payments.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setPageLoading(true);
    setTimeout(() => {
      setCurrentPage(pageNumber);
      setPageLoading(false);
    }, 500); // Simulate loading delay
  };

  if (loading || pageLoading) {
    return (
      <div className="payments-container p-6">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-blue-600"></div>
          <p className="ml-3 text-gray-600">Loading payments...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="payments-container p-6">
        <p className="text-red-500 text-center">{error}</p>
      </div>
    );
  }

  return (
    <div className="payments-container p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-blue-900 mainFont">Payment History</h2>
        <button
          onClick={() => navigate('/add-payment-method')}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <CreditCard className="w-4 h-4" />
          Add Payment Method
        </button>
      </div>
      {payments.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-lg shadow-md">
          <Wallet className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg mb-4">No payment history found</p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Shop Now
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentPayments.map((payment) => (
              <div
                key={payment._id}
                className="payment-card bg-white rounded-xl shadow-lg border border-blue-100 hover:border-blue-300 transition-all cursor-pointer"
                onClick={() => showModal(payment._id, 'payment')}
              >
                <div className="p-5">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center gap-3">
                      {getPaymentMethodIcon(payment.paymentIntentId)}
                      <h3 className="text-lg font-semibold text-blue-900">
                        Payment #{payment.paymentIntentId?.slice(-8) || payment._id.slice(-8)}
                      </h3>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        payment.status === 'completed'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(payment.createdAt)}
                    </p>
                    <p className="text-lg font-bold text-blue-900">
                      ${payment.total.toFixed(2)}
                    </p>
                    <p className="text-sm text-gray-600">
                      Items: {payment.items.length}
                    </p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {payment.items.slice(0, 2).map((item, index) => (
                      <img
                        key={index}
                        src={getImageUrl(item.product?.images?.[0])}
                        alt={item.product?.name || "Product"}
                        className="w-10 h-10 object-cover rounded-md"
                        onError={(e) => { e.target.src = prodImg; }}
                      />
                    ))}
                    {payment.items.length > 2 && (
                      <div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 text-sm font-medium">
                        +{payment.items.length - 2}
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <button
                      className="w-full py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
                      onClick={(e) => {
                        e.stopPropagation();
                        showModal(payment._id, 'payment');
                      }}
                    >
                      <ChevronRight className="w-4 h-4" />
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-2 mt-6">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-2 sm:px-4 py-1 bg-[var(--color-seconday)] text-white rounded-md disabled:opacity-50 text-sm sm:text-[1dvw]"
            >
              Previous
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <button
                key={page}
                onClick={() => handlePageChange(page)}
                className={`px-2 sm:px-4 py-1 rounded-md text-sm sm:text-[1dvw] ${
                  currentPage === page
                    ? 'bg-[var(--color-primary)] text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-2 sm:px-4 py-1 bg-[var(--color-seconday)] text-white rounded-md disabled:opacity-50 text-sm sm:text-[1dvw]"
            >
              Next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

// WishlistTab Component
const WishlistTab = ({ onOpenCart = null }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [removingItem, setRemovingItem] = useState(null);
  const [addingToCart, setAddingToCart] = useState(null);
  const navigate = useNavigate();
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const getImageUrl = (imagePath) => {
    if (!imagePath) return '/path/to/fallback-image.jpg';
    return `${BASE_URL}/${imagePath.replace(/\\/g, '/')}`;
  };

  const fetchWishlist = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('userToken');
      if (!token) {
        setLoading(false);
        toast.error('Please log in to view wishlist');
        navigate('/auth/login');
        return;
      }

      const response = await axiosInstance.get('/api/auth/wishlist');
      setWishlistItems(response.data.wishlist || []);
    } catch (error) {
      console.error('Error fetching wishlist:', error);
      toast.error(error.response?.data?.message || 'Failed to load wishlist');
      if (error.response?.status === 401) {
        localStorage.removeItem('userToken');
        navigate('/auth/login');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleRemoveFromWishlist = async (productId) => {
    try {
      setRemovingItem(productId);
      const token = localStorage.getItem('userToken');
      if (!token) {
        toast.error('Please log in to modify wishlist');
        navigate('/auth/login');
        return;
      }

      await axiosInstance.delete(`/api/auth/wishlist/${productId}`);
      setWishlistItems((prev) => prev.filter((item) => item._id !== productId));
      toast.success('Item removed from wishlist');
      window.dispatchEvent(new Event('wishlistUpdated'));
    } catch (error) {
      console.error('Error removing from wishlist:', error);
      toast.error(error.response?.data?.message || 'Failed to remove item');
    } finally {
      setRemovingItem(null);
    }
  };

  const handleAddToCart = async (product) => {
    try {
      setAddingToCart(product._id);
      const token = localStorage.getItem('userToken');
      if (!token) {
        toast.error('Please log in to add items to cart');
        navigate('/auth/login');
        return;
      }

      if (product.stock === 0) {
        toast.error('Product is out of stock');
        return;
      }

      await axiosInstance.post('/api/user/add-to-cart', {
        productId: product._id,
        quantity: 1,
      });

      const cartItem = {
        _id: `${product._id}_${Date.now()}`,
        product: {
          _id: product._id,
          name: product.name,
          sellPrice: product.sellPrice,
          images: product.images,
          stock: product.stock,
        },
        quantity: 1,
      };

      const existingCart = JSON.parse(localStorage.getItem('localCart') || '[]');
      const itemIndex = existingCart.findIndex((item) => item.product?._id === product._id);

      if (itemIndex > -1) {
        existingCart[itemIndex].quantity += 1;
      } else {
        existingCart.push(cartItem);
      }

      localStorage.setItem('localCart', JSON.stringify(existingCart));
      window.dispatchEvent(new Event('cartUpdated'));
      toast.success('Item added to cart successfully!');
      setTimeout(() => {
        window.dispatchEvent(new CustomEvent('openCartModal'));
      }, 500);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error(error.response?.data?.message || 'Failed to add to cart');
    } finally {
      setAddingToCart(null);
    }
  };

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  const calculateDiscount = (originalPrice, currentPrice) => {
    if (!originalPrice || originalPrice <= currentPrice) return 0;
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="spinner"></div>
        <p className="ml-3 text-gray-600">Loading wishlist...</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-[2dvw] text-gray-500 font-[600] mainFont">
          Wishlist ({wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'})
        </h3>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="text-center py-12">
          <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-600 text-lg mb-4">Your wishlist is empty</p>
          <button
            onClick={() => navigate('/products')}
            className="px-6 py-3 bg-[var(--color-primary)] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlistItems.map((item) => {
            if (!item || !item._id) return null;
            const discount = calculateDiscount(item.originalPrice, item.sellPrice);
            return (
              <div
                key={item._id}
                className="bg-white rounded-lg shadow-md border-2 border-blue-100 overflow-hidden hover:border-yellow-400 transition-all hover:shadow-lg"
              >
                <div className="relative">
                  <img
                    src={getImageUrl(item.images?.[0])}
                    alt={item.name || 'Product'}
                    className="w-full h-48 object-cover cursor-pointer"
                    onClick={() => handleProductClick(item._id)}
                    onError={(e) => { e.target.src = '/path/to/fallback-image.jpg'; }}
                  />
                  <button
                    className="absolute top-3 right-3 p-2 bg-white/90 rounded-full shadow-md hover:bg-red-50 transition-colors group"
                    onClick={() => handleRemoveFromWishlist(item._id)}
                    disabled={removingItem === item._id}
                    title="Remove from wishlist"
                  >
                    {removingItem === item._id ? (
                      <div className="w-5 h-5 border-2 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <Heart className="w-5 h-5 text-red-500 fill-current" />
                    )}
                  </button>
                  {discount > 0 && (
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      -{discount}% OFF
                    </div>
                  )}
                  {item.stock === 0 && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <span className="bg-white text-red-600 px-4 py-2 rounded-lg font-semibold">
                        Out of Stock
                      </span>
                    </div>
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h4
                      className="font-semibold text-black cursor-pointer hover:text-[var(--color-primary)] transition-colors"
                      onClick={() => handleProductClick(item._id)}
                    >
                      {item.name || 'Unnamed Product'}
                    </h4>
                    {item.rating && (
                      <div className="flex items-center bg-yellow-100 px-2 py-1 rounded">
                        <Star className="w-4 h-4 fill-current text-yellow-500" />
                        <span className="text-sm font-medium text-black ml-1">
                          {item.rating.toFixed(1)}
                        </span>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {item.description || 'No description available'}
                  </p>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl font-bold text-black">
                      ${item.sellPrice?.toFixed(2) || '0.00'}
                    </span>
                    {item.originalPrice && item.originalPrice > item.sellPrice && (
                      <span className="text-lg text-gray-400 line-through">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <span className={`font-medium ${item.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {item.stock > 0 ? `${item.stock} in stock` : 'Out of stock'}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="flex-1 px-4 py-2 bg-[var(--color-primary)] text-white font-semibold rounded-lg transition-all hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                      onClick={() => handleAddToCart(item)}
                      disabled={item.stock === 0 || addingToCart === item._id}
                    >
                      {addingToCart === item._id ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Adding...
                        </>
                      ) : (
                        <>
                          <ShoppingCart size={18} />
                          Add to Cart
                        </>
                      )}
                    </button>
                    <button
                      className="p-2 border-2 border-gray-300 rounded-lg hover:bg-gray-50 hover:border-red-300 transition-all disabled:opacity-50"
                      onClick={() => handleRemoveFromWishlist(item._id)}
                      disabled={removingItem === item._id}
                      title="Remove from wishlist"
                    >
                      {removingItem === item._id ? (
                        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <Trash2 className="w-5 h-5 text-gray-600" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

// EditAndAddModel Component
const EditAndAddModel = ({ isModelShow, setIsModelShow }) => {
  const [formData, setFormData] = useState({
    title: '',
    name: '',
    contactNumber: '',
    email: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    country: '',
    zipcode: '',
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isModelShow.activeType === 'Edit' && isModelShow.data) {
      setFormData({
        title: isModelShow.data.title || '',
        name: isModelShow.data.name || '',
        contactNumber: isModelShow.data.contactNumber || '',
        email: isModelShow.data.email || '',
        addressLine1: isModelShow.data.addressLine1 || '',
        addressLine2: isModelShow.data.addressLine2 || '',
        city: isModelShow.data.city || '',
        state: isModelShow.data.state || '',
        country: isModelShow.data.country || '',
        zipcode: isModelShow.data.zipcode || '',
      });
    } else {
      setFormData({
        title: '',
        name: '',
        contactNumber: '',
        email: '',
        addressLine1: '',
        addressLine2: '',
        city: '',
        state: '',
        country: '',
        zipcode: '',
      });
    }
    setErrors({});
  }, [isModelShow]);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.title) newErrors.title = 'Address title is required';
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.contactNumber) newErrors.contactNumber = 'Contact number is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.addressLine1) newErrors.addressLine1 = 'Address line 1 is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.state) newErrors.state = 'State is required';
    if (!formData.country) newErrors.country = 'Country is required';
    if (!formData.zipcode) newErrors.zipcode = 'Zipcode is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleSave = async () => {
    if (!validateForm()) {
      toast.error('Please fill all required fields');
      return;
    }

    try {
      const token = localStorage.getItem('userToken');
      if (!token) throw new Error('No token found');

      if (isModelShow.activeType === 'Add') {
        await axiosInstance.post('/api/auth/add-address', formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success('Address added successfully');
      } else if (isModelShow.activeType === 'Edit') {
        await axiosInstance.put(`/api/auth/update-address/${isModelShow.data._id}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        toast.success('Address updated successfully');
      }

      setIsModelShow({ state: false, data: null, activeType: '' });
    } catch (error) {
      console.error('Error saving address:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'Failed to save address');
    }
  };

  return (
    <div className="fixed top-0 left-0 z-[9999999] flex justify-center items-center w-full h-[100vh] bg-black/20 backdrop-blur-md">
      <div className="bg-white rounded-md p-5 w-[95%] max-w-[375px] sm:w-[80%] sm:max-w-none md:w-[60%]">
        <div className="flex justify-between items-center">
          <h3 className="text-[2dvw] text-gray-500 font-[600] mainFont">
            {isModelShow.activeType} Address
          </h3>
          <button
            onClick={() => setIsModelShow({ state: false, data: null, activeType: '' })}
            className="text-sm sm:text-base md:text-[1dvw] flex items-center gap-2 px-5 py-2 rounded-xl text-red-600 font-semibold mainFont"
          >
            <CircleX size={30} /> Close
          </button>
        </div>

        <div className="grid grid-cols-2 gap-4 my-5">
          {[
            { name: 'title', label: 'Address Title', placeholder: 'Home, office...' },
            { name: 'name', label: 'Name', placeholder: 'Enter name...' },
            { name: 'contactNumber', label: 'Contact Number', placeholder: 'Enter number...', type: 'number' },
            { name: 'email', label: 'Email', placeholder: 'Enter email...', type: 'email' },
            { name: 'addressLine1', label: 'Address Line 1', placeholder: 'Street address...' },
            { name: 'addressLine2', label: 'Address Line 2', placeholder: 'Apartment, suite...' },
            { name: 'city', label: 'City', placeholder: 'Enter city...' },
            { name: 'state', label: 'State', placeholder: 'Enter state...' },
            { name: 'country', label: 'Country', placeholder: 'Enter country...' },
            { name: 'zipcode', label: 'Zipcode', placeholder: 'Enter zipcode...', type: 'number' },
          ].map(({ name, label, placeholder, type = 'text' }) => (
            <div className="flex flex-col gap-3" key={name}>
              <label className="paraFont font-medium text-sm sm:text-base md:text-[1.1dvw] px-2">{label}</label>
              <input
                name={name}
                value={formData[name]}
                onChange={handleChange}
                type={type}
                className={`w-full bg-[#eeeeee] p-3 rounded-lg font-medium border ${
                  errors[name] ? 'border-red-500' : 'border-transparent'
                } outline-none focus:border-[var(--color-primary)] transition-all`}
                placeholder={placeholder}
              />
              {errors[name] && <p className="text-red-500 text-sm">{errors[name]}</p>}
            </div>
          ))}
        </div>

        <div className="w-full flex gap-5 justify-end items-center my-5">
          <button
            onClick={() => setIsModelShow({ state: false, data: null, activeType: '' })}
            className="bg-[#d4d4d4] px-5 py-1 font-medium text-sm sm:text-base md:text-[1.2dvw] rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="bg-[var(--color-primary)] text-white px-5 py-1 font-medium text-sm sm:text-base md:text-[1.2dvw] rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profilepage;