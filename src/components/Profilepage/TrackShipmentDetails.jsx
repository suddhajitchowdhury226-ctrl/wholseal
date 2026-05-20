

// import React, { useState, useEffect } from 'react';
// import { Truck, Package, MapPin, Clock, CheckCircle, AlertCircle, ExternalLink, ArrowLeft, Calendar } from 'lucide-react';
// import { Layout } from '../common/Layout/Layout';

// // API function to track shipment
// const trackShipment = async (carrierCode, trackingNumber) => {
//   const url = `http://localhost:5555/track?carrierCode=ups&trackingNumber=${trackingNumber}`;

//   try {
//     const response = await fetch(url, {
//       headers: {
//         'API-Key': import.meta.env.SHIPENGINE_API_KEY,
//       },
//     });
    
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
    
//     return await response.json();
//   } catch (error) {
//     console.error('Error tracking shipment:', error.message);
//     throw error;
//   }
// };

// const StatusIcon = ({ status }) => {
//   const statusLower = status?.toLowerCase() || '';
  
//   if (statusLower.includes('delivered')) {
//     return <CheckCircle className="w-6 h-6 text-green-500" />;
//   } else if (statusLower.includes('out for delivery')) {
//     return <Truck className="w-6 h-6 text-blue-500" />;
//   } else if (statusLower.includes('transit') || statusLower.includes('shipped')) {
//     return <Package className="w-6 h-6 text-yellow-500" />;
//   } else {
//     return <AlertCircle className="w-6 h-6 text-gray-400" />;
//   }
// };

// const LoadingSpinner = () => (
//   <div className="flex items-center justify-center py-12">
//     <div className="relative">
//       <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
//       <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
//     </div>
//     <span className="ml-4 text-gray-600 font-medium">Tracking your package...</span>
//   </div>
// );

// const TrackingDetail = () => {
//   const [trackingData, setTrackingData] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Extract query parameters from URL or use defaults for demo
//   const urlParams = new URLSearchParams(window.location.search);
//   const carrierCode = urlParams.get('carrierCode') || 'ups';
//   const trackingNumber = urlParams.get('trackingNumber') || '1Z12345E0291980793';

//   useEffect(() => {
//     const fetchTrackingData = async () => {
//       if (!carrierCode || !trackingNumber) {
//         setError('Carrier code or tracking number missing.');
//         return;
//       }

//       setLoading(true);
//       try {
//         const data = await trackShipment(carrierCode, trackingNumber);
//         setTrackingData(data);
//         setError(null);
//       } catch (err) {
//         setError('Failed to fetch tracking information. Please try again later.');
//         console.error('Tracking error:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTrackingData();
//   }, [carrierCode, trackingNumber]);

//   const formatDate = (dateString) => {
//     return new Date(dateString).toLocaleDateString('en-US', {
//       weekday: 'long',
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric'
//     });
//   };

//   const formatTime = (dateString) => {
//     return new Date(dateString).toLocaleTimeString('en-US', {
//       hour: '2-digit',
//       minute: '2-digit'
//     });
//   };

//   return (
//     <Layout>
//           <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       {/* Header */}
//       <div className="bg-white ">
//         <div className="max-w-6xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-4">
//               <button 
//                 onClick={() => window.history.back()}
//                 className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
//               >
//                 <ArrowLeft className="w-5 h-5" />
//                 <span className="font-medium">Back to Profile</span>
//               </button>
//             </div>
//             <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
//               <Package className="w-7 h-7 text-blue-600" />
//               <span>Package Tracking</span>
//             </h1>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-4xl mx-auto px-4 py-8">
//         {loading ? (
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <LoadingSpinner />
//           </div>
//         ) : error ? (
//           <div className="bg-white rounded-2xl shadow-lg p-8">
//             <div className="flex items-center space-x-3 text-red-600 mb-4">
//               <AlertCircle className="w-6 h-6" />
//               <h2 className="text-xl font-semibold">Tracking Error</h2>
//             </div>
//             <p className="text-gray-600 mb-6">{error}</p>
//             <button 
//               onClick={() => window.location.reload()} 
//               className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
//             >
//               Try Again
//             </button>
//           </div>
//         ) : trackingData ? (
//           <div className="space-y-6">
//             {/* Status Card */}
//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
//                 <div className="flex items-center justify-between">
//                   <div>
//                     <h2 className="text-2xl font-bold mb-2">Tracking #{trackingData.tracking_number}</h2>
//                     <p className="text-blue-100">Carrier: {trackingData.carrier_code.toUpperCase()}</p>
//                   </div>
//                   <StatusIcon status={trackingData.status_description} />
//                 </div>
//               </div>
              
//               <div className="p-6">
//                 <div className="grid md:grid-cols-2 gap-6">
//                   <div className="space-y-4">
//                     <div className="flex items-center space-x-3">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
//                       <div>
//                         <p className="text-sm text-gray-500">Current Status</p>
//                         <p className="font-semibold text-gray-900">{trackingData.status_description}</p>
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center space-x-3">
//                       <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                       <div>
//                         <p className="text-sm text-gray-500">Carrier Status</p>
//                         <p className="font-medium text-gray-700">{trackingData.carrier_status_description}</p>
//                       </div>
//                     </div>
//                   </div>
                  
//                   <div className="space-y-4">
//                     {trackingData.ship_date && (
//                       <div className="flex items-center space-x-3">
//                         <Calendar className="w-5 h-5 text-gray-400" />
//                         <div>
//                           <p className="text-sm text-gray-500">Ship Date</p>
//                           <p className="font-semibold text-gray-900">{formatDate(trackingData.ship_date)}</p>
//                         </div>
//                       </div>
//                     )}
                    
//                     {trackingData.estimated_delivery_date && !trackingData.actual_delivery_date && (
//                       <div className="flex items-center space-x-3">
//                         <Clock className="w-5 h-5 text-blue-500" />
//                         <div>
//                           <p className="text-sm text-gray-500">Expected Delivery</p>
//                           <p className="font-semibold text-blue-600">{formatDate(trackingData.estimated_delivery_date)}</p>
//                         </div>
//                       </div>
//                     )}
                    
//                     {trackingData.actual_delivery_date && (
//                       <div className="flex items-center space-x-3">
//                         <CheckCircle className="w-5 h-5 text-green-500" />
//                         <div>
//                           <p className="text-sm text-gray-500">Delivered On</p>
//                           <p className="font-semibold text-green-600">{formatDate(trackingData.actual_delivery_date)}</p>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
                
//                 {trackingData.tracking_url && (
//                   <div className="mt-6 pt-6 border-t border-gray-100">
//                     <a
//                       href={trackingData.tracking_url}
//                       target="_blank"
//                       rel="noreferrer"
//                       className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
//                     >
//                       <ExternalLink className="w-4 h-4" />
//                       <span>View on Carrier's Website</span>
//                     </a>
//                   </div>
//                 )}
//               </div>
//             </div>

//             {/* Tracking Timeline */}
//             {trackingData.events?.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-lg p-6">
//                 <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
//                   <MapPin className="w-5 h-5 text-blue-600" />
//                   <span>Tracking Timeline</span>
//                 </h3>
                
//                 <div className="space-y-4">
//                   {trackingData.events.map((event, index) => (
//                     <div key={index} className="relative flex items-start space-x-4 pb-4">
//                       {/* Timeline line */}
//                       {index !== trackingData.events.length - 1 && (
//                         <div className="absolute left-6 top-8 w-0.5 h-16 bg-gray-200"></div>
//                       )}
                      
//                       {/* Timeline dot */}
//                       <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
//                         index === 0 
//                           ? 'bg-blue-100 border-2 border-blue-500' 
//                           : 'bg-gray-100 border-2 border-gray-300'
//                       }`}>
//                         <MapPin className={`w-5 h-5 ${
//                           index === 0 ? 'text-blue-600' : 'text-gray-500'
//                         }`} />
//                       </div>
                      
//                       {/* Event details */}
//                       <div className="flex-1 min-w-0">
//                         <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
//                           <div className="flex items-start justify-between mb-2">
//                             <h4 className="font-semibold text-gray-900">{event.description}</h4>
//                             <span className={`text-sm px-2 py-1 rounded-full ${
//                               index === 0 
//                                 ? 'bg-blue-100 text-blue-700' 
//                                 : 'bg-gray-200 text-gray-600'
//                             }`}>
//                               {index === 0 ? 'Latest' : `${trackingData.events.length - index} events ago`}
//                             </span>
//                           </div>
                          
//                           <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
//                             <div className="flex items-center space-x-2">
//                               <Clock className="w-4 h-4" />
//                               <span>{formatDate(event.occurred_at)} at {formatTime(event.occurred_at)}</span>
//                             </div>
//                             {(event.city_locality || event.state_province || event.postal_code) && (
//                               <div className="flex items-center space-x-2">
//                                 <MapPin className="w-4 h-4" />
//                                 <span>
//                                   {[event.city_locality, event.state_province, event.postal_code]
//                                     .filter(Boolean)
//                                     .join(', ')
//                                   }
//                                 </span>
//                               </div>
//                             )}
//                           </div>
                          
//                           {event.signer && (
//                             <div className="mt-2 text-sm text-gray-600">
//                               <strong>Signed by:</strong> {event.signer}
//                             </div>
//                           )}
                          
//                           {event.latitude && event.longitude && (
//                             <div className="mt-2 text-sm text-gray-600">
//                               <strong>Coordinates:</strong> {event.latitude}, {event.longitude}
//                             </div>
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         ) : (
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
//             <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
//             <h2 className="text-xl font-semibold text-gray-900 mb-2">No Tracking Information</h2>
//             <p className="text-gray-600">We couldn't find any tracking information for this package.</p>
//           </div>
//         )}
//       </div>
//     </div>

//     </Layout>

//   );
// };

// export default TrackingDetail;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { Truck, Package, MapPin, Clock, CheckCircle, AlertCircle, ExternalLink, ArrowLeft, Calendar } from 'lucide-react';
import { Layout } from '../common/Layout/Layout';

// API function to track shipment
const trackShipment = async (carrierCode, trackingNumber) => {
  const url = `${import.meta.env.VITE_BASE_URL}/track?carrierCode=ups&trackingNumber=${trackingNumber}`;

  try {
    const response = await fetch(url, {
      headers: {
        'API-Key': import.meta.env.SHIPENGINE_API_KEY,
      },
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error tracking shipment:', error.message);
    throw error;
  }
};

// API function to fetch user purchases
const fetchPurchases = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/api/user/all-purchases`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
      },
      withCredentials: true,
    });
    console.log('Purchases fetched:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching purchases:', error.message);
    throw error;
  }
};

// API function to request refund
const requestRefund = async (purchaseId, refundReason) => {
  try {
    console.log('Attempting to request refund for purchaseId:', purchaseId);
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/api/user/request-refund`,
      { purchaseId, refundReason },
      {
        headers: {
          'Content-Type': 'application/json',
           'Authorization': `Bearer ${localStorage.getItem('userToken')}`,
        },
        withCredentials: true,
      }
    );
    console.log('Refund request response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error requesting refund:', error.message);
    throw error;
  }
};

const StatusIcon = ({ status }) => {
  const statusLower = status?.toLowerCase() || '';
  
  if (statusLower.includes('delivered')) {
    return <CheckCircle className="w-6 h-6 text-green-500" />;
  } else if (statusLower.includes('out for delivery')) {
    return <Truck className="w-6 h-6 text-blue-500" />;
  } else if (statusLower.includes('transit') || statusLower.includes('shipped')) {
    return <Package className="w-6 h-6 text-yellow-500" />;
  } else {
    return <AlertCircle className="w-6 h-6 text-gray-400" />;
  }
};

const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="relative">
      <div className="w-12 h-12 border-4 border-blue-200 rounded-full"></div>
      <div className="absolute top-0 left-0 w-12 h-12 border-4 border-blue-600 rounded-full animate-spin border-t-transparent"></div>
    </div>
    <span className="ml-4 text-gray-600 font-medium">Tracking your package...</span>
  </div>
);

const TrackingDetail = () => {
  const [trackingData, setTrackingData] = useState(null);
  const [purchases, setPurchases] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refundReason, setRefundReason] = useState('');
  const [refundError, setRefundError] = useState(null);
  const [refundSuccess, setRefundSuccess] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Extract query parameters from URL
  const urlParams = new URLSearchParams(window.location.search);
  const carrierCode =  'ups';
  const trackingNumber = urlParams.get('trackingNumber') || '1Z12345E0291980793';
  const purchaseIdFromUrl = urlParams.get('purchaseId');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        // Fetch tracking data
        if (!carrierCode || !trackingNumber) {
          throw new Error('Carrier code or tracking number missing.');
        }
        const trackingResult = await trackShipment(carrierCode, trackingNumber);
        setTrackingData(trackingResult);

        // Fetch purchases
        const purchaseData = await fetchPurchases();
        const completedPurchases = purchaseData.purchases.filter(p => p.status === 'completed');
        setPurchases(completedPurchases);

        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch data. Please try again later.');
        console.error('Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [carrierCode, trackingNumber]);

  // Find the purchase that matches the trackingNumber
  const matchedPurchase = purchases.find(purchase => 
    purchase.shipmentDetails?.shipping?.trackingNumber === trackingNumber
  );
  const purchaseId = purchaseIdFromUrl || matchedPurchase?._id;

  const handleRefundSubmit = async (e) => {
    e.preventDefault();
    if (!refundReason.trim()) {
      setRefundError('Please provide a reason for the refund');
      return;
    }
    if (!purchaseId) {
      setRefundError('Purchase ID is missing');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log('Submitting refund with purchaseId:', purchaseId);
      const response = await requestRefund(purchaseId, refundReason);
      setRefundSuccess('Refund request submitted successfully');
      setRefundError(null);
      setRefundReason('');
    } catch (err) {
      setRefundError(`Failed to submit refund request: ${err.message}`);
      setRefundSuccess(null);
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Header */}
        <div className="bg-white">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => window.history.back()}
                  className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                  <span className="font-medium">Back to Profile</span>
                </button>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
                <Package className="w-7 h-7 text-blue-600" />
                <span>Package Tracking</span>
              </h1>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {loading ? (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <LoadingSpinner />
            </div>
          ) : error ? (
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center space-x-3 text-red-600 mb-4">
                <AlertCircle className="w-6 h-6" />
                <h2 className="text-xl font-semibold">Tracking Error</h2>
              </div>
              <p className="text-gray-600 mb-6">{error}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : trackingData ? (
            <div className="space-y-6">
              {/* Status Card */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Tracking #{trackingData.tracking_number}</h2>
                      <p className="text-blue-100">Carrier: {trackingData.carrier_code.toUpperCase()}</p>
                    </div>
                    <StatusIcon status={trackingData.status_description} />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <div>
                          <p className="text-sm text-gray-500">Current Status</p>
                          <p className="font-semibold text-gray-900">{trackingData.status_description}</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                        <div>
                          <p className="text-sm text-gray-500">Carrier Status</p>
                          <p className="font-medium text-gray-700">{trackingData.carrier_status_description}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {trackingData.ship_date && (
                        <div className="flex items-center space-x-3">
                          <Calendar className="w-5 h-5 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-500">Ship Date</p>
                            <p className="font-semibold text-gray-900">{formatDate(trackingData.ship_date)}</p>
                          </div>
                        </div>
                      )}
                      
                      {trackingData.estimated_delivery_date && !trackingData.actual_delivery_date && (
                        <div className="flex items-center space-x-3">
                          <Clock className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="text-sm text-gray-500">Expected Delivery</p>
                            <p className="font-semibold text-blue-600">{formatDate(trackingData.estimated_delivery_date)}</p>
                          </div>
                        </div>
                      )}
                      
                      {trackingData.actual_delivery_date && (
                        <div className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500" />
                          <div>
                            <p className="text-sm text-gray-500">Delivered On</p>
                            <p className="font-semibold text-green-600">{formatDate(trackingData.actual_delivery_date)}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {trackingData.tracking_url && (
                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <a
                        href={trackingData.tracking_url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>View on Carrier's Website</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>

              {/* Refund Request Form */}
              {trackingData.status_description.toLowerCase().includes('delivered') && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Request a Refund</h3>
                  <form onSubmit={handleRefundSubmit}>
                    <div className="mb-4">
                      <label htmlFor="refundReason" className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Refund
                      </label>
                      <textarea
                        id="refundReason"
                        value={refundReason}
                        onChange={(e) => setRefundReason(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        rows="4"
                        placeholder="Please explain why you are requesting a refund..."
                        maxLength="500"
                      />
                    </div>
                    {refundError && (
                      <p className="text-red-600 mb-4">{refundError}</p>
                    )}
                    {refundSuccess && (
                      <p className="text-green-600 mb-4">{refundSuccess}</p>
                    )}
                    <button
                      type="submit"
                      disabled={isSubmitting || !purchaseId}
                      className={`px-6 py-2 rounded-lg text-white font-medium ${
                        isSubmitting || !purchaseId
                          ? 'bg-gray-400 cursor-not-allowed'
                          : 'bg-blue-600 hover:bg-blue-700'
                      } transition-colors`}
                    >
                      {isSubmitting ? 'Submitting...' : 'Submit Refund Request'}
                    </button>
                  </form>
                </div>
              )}

              {/* Tracking Timeline */}
              {trackingData.events?.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                    <MapPin className="w-5 h-5 text-blue-600" />
                    <span>Tracking Timeline</span>
                  </h3>
                  
                  <div className="space-y-4">
                    {trackingData.events.map((event, index) => (
                      <div key={index} className="relative flex items-start space-x-4 pb-4">
                        {/* Timeline line */}
                        {index !== trackingData.events.length - 1 && (
                          <div className="absolute left-6 top-8 w-0.5 h-16 bg-gray-200"></div>
                        )}
                        
                        {/* Timeline dot */}
                        <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
                          index === 0 
                            ? 'bg-blue-100 border-2 border-blue-500' 
                            : 'bg-gray-100 border-2 border-gray-300'
                        }`}>
                          <MapPin className={`w-5 h-5 ${
                            index === 0 ? 'text-blue-600' : 'text-gray-500'
                          }`} />
                        </div>
                        
                        {/* Event details */}
                        <div className="flex-1 min-w-0">
                          <div className="bg-gray-50 rounded-xl p-4 hover:bg-gray-100 transition-colors">
                            <div className="flex items-start justify-between mb-2">
                              <h4 className="font-semibold text-gray-900">{event.description}</h4>
                              <span className={`text-sm px-2 py-1 rounded-full ${
                                index === 0 
                                  ? 'bg-blue-100 text-blue-700' 
                                  : 'bg-gray-200 text-gray-600'
                              }`}>
                                {index === 0 ? 'Latest' : `${trackingData.events.length - index} events ago`}
                              </span>
                            </div>
                            
                            <div className="grid sm:grid-cols-2 gap-2 text-sm text-gray-600">
                              <div className="flex items-center space-x-2">
                                <Clock className="w-4 h-4" />
                                <span>{formatDate(event.occurred_at)} at {formatTime(event.occurred_at)}</span>
                              </div>
                              {(event.city_locality || event.state_province || event.postal_code) && (
                                <div className="flex items-center space-x-2">
                                  <MapPin className="w-4 h-4" />
                                  <span>
                                    {[event.city_locality, event.state_province, event.postal_code]
                                      .filter(Boolean)
                                      .join(', ')
                                    }
                                  </span>
                                </div>
                              )}
                            </div>
                            
                            {event.signer && (
                              <div className="mt-2 text-sm text-gray-600">
                                <strong>Signed by:</strong> {event.signer}
                              </div>
                            )}
                            
                            {event.latitude && event.longitude && (
                              <div className="mt-2 text-sm text-gray-600">
                                <strong>Coordinates:</strong> {event.latitude}, {event.longitude}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
              <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-900 mb-2">No Tracking Information</h2>
              <p className="text-gray-600">We couldn't find any tracking information for this package.</p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default TrackingDetail;