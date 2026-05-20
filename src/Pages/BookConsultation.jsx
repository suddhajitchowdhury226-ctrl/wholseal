// import React, { useState, useEffect } from 'react';
// import { Calendar, User } from 'lucide-react';
// import axios from 'axios';
// import { useLocation, useNavigate } from 'react-router-dom';

// const ConsultationBooking = () => {
//   const { state } = useLocation();
//   const navigate = useNavigate();
//   const defaultFormData = {
//     paymentMethod: 'local',
//     category: 'Nutrition',
//     service: 'Nutrition Consultation',
//     consultant: 'webserviceusa90 ($10.00)',
//     selectedTime: '',
//     date: new Date(),
//     fullName: '',
//     phone: '',
//     email: '',
//     notes: '',
//     bookingId: ''
//   };

//   const [currentStep, setCurrentStep] = useState(state?.step || 1);
//   const [formData, setFormData] = useState(state?.formData || defaultFormData);
//   const [timeSlots, setTimeSlots] = useState([]);
//   const [bookedSlots, setBookedSlots] = useState([]);
//   const [currentMonth, setCurrentMonth] = useState(new Date());

//   const steps = [
//     { number: 1, title: 'Service', color: 'bg-orange-500' },
//     { number: 2, title: 'Time', color: 'bg-orange-500' },
//     { number: 3, title: 'Details', color: 'bg-orange-500' },
//     { number: 4, title: 'Payment', color: 'bg-orange-500' },
//     { number: 5, title: 'Done', color: 'bg-gray-400' }
//   ];

//   const categories = ['Nutrition'];
//   const services = {
//     Nutrition: ['Nutrition Consultation', 'Nutrition for Weight Loss Consultation', 'Other Services'],
//     Fitness: ['Personal Training Session', 'Fitness Assessment'],
//     'Mental Health': ['Therapy Session', 'Stress Management Consultation']
//   };
//   const consultants = ['webserviceusa90 ($10.00)', 'healthpro123 ($15.00)', 'Any'];

//   useEffect(() => {
//     fetchTimeSlots(formData.date);
//   }, [formData.date, formData.consultant, formData.service]);

//   useEffect(() => {
//     window.scrollTo({
//       top: document.documentElement.scrollHeight,
//       behavior: 'smooth'
//     });
//   }, [currentStep]);


//   const fetchTimeSlots = async (date) => {
//   try {
//     const timeSlotsResponse = await axios.get('http://localhost:5555/api/bookings/timeslots', {
//       params: { date: date.toISOString(), consultant: formData.consultant, service: formData.service }
//     });
//     const slots = timeSlotsResponse.data.timeSlots || [];
//     setTimeSlots(slots.map(slot => slot.time));
//     setBookedSlots(slots.filter(slot => slot.booked).map(slot => slot.time));
//   } catch (error) {
//     console.error('Error fetching time slots or bookings:', error);
//     setTimeSlots([]);
//     setBookedSlots([]);
//   }
// };
//   const handleNext = async () => {
//     if (currentStep === 4) {
//       if (formData.paymentMethod === 'paypal') {
//         try {
//           const response = await axios.post('http://localhost:5555/api/payments/create-and-confirm-payment', {
//             action: 'create',
//             bookingData: {
//               ...formData,
//               date: formData.date
//             }
//           });
//           localStorage.setItem('pendingBookingId', response.data.bookingId);
//           window.location.href = response.data.approvalUrl;
//           return;
//         } catch (error) {
//           console.error('Error initiating PayPal payment:', error);
//           return;
//         }
//       } else {
//         try {
//           const response = await axios.post('http://localhost:5555/api/bookings/create-booking', {
//             ...formData,
//             date: formData.date,
//             paymentStatus: 'Completed'
//           });
//           setFormData(prev => ({ ...prev, bookingId: response.data.booking._id }));
//           setCurrentStep(5);
//         } catch (error) {
//           console.error('Error creating booking:', error);
//           return;
//         }
//       }
//     } else if (currentStep < 5) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const handleBack = () => {
//     if (currentStep > 1) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleInputChange = (field, value) => {
//     setFormData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const handleMonthChange = (direction) => {
//     setCurrentMonth(prev => {
//       const newMonth = new Date(prev);
//       newMonth.setMonth(prev.getMonth() + direction);
//       return newMonth;
//     });
//   };

//   const handleDateChange = (date) => {
//     handleInputChange('date', date);
//     setFormData(prev => ({ ...prev, selectedTime: '' }));
//   };

//   const renderCalendar = () => {
//     const year = currentMonth.getFullYear();
//     const month = currentMonth.getMonth();
//     const firstDay = new Date(year, month, 1).getDay();
//     const daysInMonth = new Date(year, month + 1, 0).getDate();
    
//     const days = [];
//     for (let i = 0; i < firstDay; i++) {
//       days.push(<div key={`empty-${i}`} className="p-2" />);
//     }
//     for (let day = 1; day <= daysInMonth; day++) {
//       const date = new Date(year, month, day);
//       days.push(
//         <button
//           key={day}
//           className={`p-2 text-sm rounded hover:bg-orange-100 ${
//             formData.date.getDate() === day && formData.date.getMonth() === month
//               ? 'bg-orange-500 text-white'
//               : 'bg-white border-gray-300'
//           }`}
//           onClick={() => handleDateChange(date)}
//         >
//           {day}
//         </button>
//       );
//     }

//     return (
//       <div className="mb-4">
//         <div className="flex justify-between items-center mb-2">
//           <button onClick={() => handleMonthChange(-1)} className="text-orange-500">←</button>
//           <span className="text-sm font-medium">
//             {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
//           </span>
//           <button onClick={() => handleMonthChange(1)} className="text-orange-500">→</button>
//         </div>
//         <div className="grid grid-cols-7 gap-1">
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//             <div key={day} className="text-center text-xs font-medium">{day}</div>
//           ))}
//           {days}
//         </div>
//       </div>
//     );
//   };

//   const renderStep = () => {
//     switch (currentStep) {
//       case 1:
//         return (
//           <div className="space-y-6">
//             <p className="text-sm">Please select service:</p>
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-orange-500 mb-2">Category</label>
//                 <select 
//                   className="w-full p-2 border border-gray-300 rounded"
//                   value={formData.category}
//                   onChange={(e) => handleInputChange('category', e.target.value)}
//                 >
//                   <option>Select Category</option>
//                   {categories.map(cat => (
//                     <option key={cat}>{cat}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-orange-500 mb-2">Service</label>
//                 <select 
//                   className="w-full p-2 border border-gray-300 rounded"
//                   value={formData.service}
//                   onChange={(e) => handleInputChange('service', e.target.value)}
//                 >
//                   <option>Select Service</option>
//                   {services[formData.category]?.map(svc => (
//                     <option key={svc}>{svc}</option>
//                   ))}
//                 </select>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-orange-500 mb-2">Consultant</label>
//                 <select 
//                   className="w-full p-2 border border-gray-300 rounded"
//                   value={formData.consultant}
//                   onChange={(e) => handleInputChange('consultant', e.target.value)}
//                 >
//                   {consultants.map(con => (
//                     <option key={con}>{con}</option>
//                   ))}
//                 </select>
//               </div>
//             </div>
//             <p className="text-sm">{formData.service}</p>
//           </div>
//         );

//       case 2:
//         return (
//           <div className="space-y-4">
//             <div>
//               <p className="text-sm mb-4">
//                 Below is a list of all time slots for <strong>{formData.service}</strong> by <strong>{formData.consultant}</strong> on <strong>{formData.date.toLocaleDateString()}</strong>.
//               </p>
//               <p className="text-sm mb-6">Click on an available time slot to proceed with booking. Booked slots are highlighted in orange and cannot be selected.</p>
//             </div>
//             {renderCalendar()}
//             <div className="grid grid-cols-5 gap-2">
//               {timeSlots.length > 0 ? (
//                 timeSlots.map((time, index) => (
//                   <button
//                     key={index}
//                     className={`w-full p-2 mb-1 text-xs border rounded ${
//                       bookedSlots.includes(time)
//                         ? 'bg-orange-300 text-white cursor-not-allowed opacity-75'
//                         : formData.selectedTime === time
//                         ? 'bg-orange-500 text-white hover:bg-orange-600'
//                         : 'bg-white border-gray-300 hover:bg-orange-100'
//                     }`}
//                     onClick={() => !bookedSlots.includes(time) && handleInputChange('selectedTime', time)}
//                     disabled={bookedSlots.includes(time)}
//                     title={bookedSlots.includes(time) ? 'This slot is booked' : ''}
//                   >
//                     {time}
//                   </button>
//                 ))
//               ) : (
//                 <p className="text-sm text-gray-600">No time slots available for this date.</p>
//               )}
//             </div>
//           </div>
//         );

//       case 3:
//         return (
//           <div className="space-y-4">
//             <div className="text-sm mb-4">
//               <p>You selected a booking for <strong>{formData.service}</strong> by <strong>{formData.consultant}</strong> at <strong>{formData.selectedTime}</strong> on <strong>{formData.date.toLocaleDateString()}</strong>. The price for the service is <strong>$10.00</strong>.</p>
//               <p className="mt-2">Please provide your details in the form below to proceed with booking.</p>
//             </div>
//             <div className="grid grid-cols-3 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-orange-500 mb-1">Full name</label>
//                 <input
//                   type="text"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   value={formData.fullName}
//                   onChange={(e) => handleInputChange('fullName', e.target.value)}
//                 />
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-orange-500 mb-1">Phone</label>
//                 <div className="flex">
//                   <div className="flex items-center px-2 border border-r-0 border-gray-300 rounded-l bg-gray-50">
//                     <span className="text-xs">🇮🇳</span>
//                   </div>
//                   <input
//                     type="text"
//                     className="w-full p-2 border border-gray-300 rounded-r"
//                     placeholder="08123456789"
//                     value={formData.phone}
//                     onChange={(e) => handleInputChange('phone', e.target.value)}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-orange-500 mb-1">Email</label>
//                 <input
//                   type="email"
//                   className="w-full p-2 border border-gray-300 rounded"
//                   value={formData.email}
//                   onChange={(e) => handleInputChange('email', e.target.value)}
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block text-sm font-medium text-orange-500 mb-1">Notes</label>
//               <textarea
//                 className="w-full p-2 border border-gray-300 rounded h-20"
//                 value={formData.notes}
//                 onChange={(e) => handleInputChange('notes', e.target.value)}
//               />
//             </div>
//           </div>
//         );

//       case 4:
//         return (
//           <div className="space-y-4">
//             <p className="text-sm">Please tell us how you would like to pay:</p>
//             <div className="space-y-2">
//               {/* <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="local"
//                   checked={formData.paymentMethod === 'local'}
//                   onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
//                   className="text-blue-500"
//                 />
//                 <span className="text-sm">I will pay locally</span>
//               </label> */}
//               <label className="flex items-center space-x-2">
//                 <input
//                   type="radio"
//                   name="payment"
//                   value="paypal"
//                   checked={formData.paymentMethod === 'paypal'}
//                   onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
//                 />
//                 <span className="text-sm">I will pay now with PayPal</span>
//                 <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI0IiBmaWxsPSIjMDA5Y2RlIi8+CiAgPHRleHQgeD0iNSIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiPgogICAgUGF5UGFsCiAgPC90ZXh0Pgo8L3N2Zz4K" alt="PayPal" className="h-4" />
//               </label>
//             </div>
//           </div>
//         );

//       case 5:
//         return (
//           <div className="text-center space-y-4">
//             <div className="text-green-600 text-6xl">✓</div>
//             <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
//             <p className="text-sm text-gray-600">
//               Your {formData.service} has been successfully booked for {formData.selectedTime} on {formData.date.toLocaleDateString()}.
//             </p>
//             <button
//               onClick={() => {
//                 setCurrentStep(1);
//                 setFormData(defaultFormData);
//                 navigate('/counseling', { state: { step: 1, formData: defaultFormData } });
//               }}
//               className="mt-4 px-6 py-2 bg-orange-500 text-white rounded font-medium hover:bg-orange-600"
//             >
//               Book Another Appointment
//             </button>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 min-h-screen mt-[4rem]" style={{zoom:.9}}>
//       <div className="bg-green-600 text-white p-3 rounded-t-lg flex items-center justify-center space-x-2">
//         <User className="w-5 h-5" />
//         <span className="font-medium">Consultation</span>
//       </div>
//       <div className="bg-white p-6 rounded-b-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4">Questions?</h2>
//         <div className="mb-6">
//           <p className="text-sm mb-2">
//             Still not sure if nutrition counseling is right for you? Call us at <span className="text-blue-600">651-699-3438</span> for more information.
//           </p>
//           <p className="text-sm text-gray-600 italic">
//             *Because everyone is unique, individual results vary.
//           </p>
//         </div>
//         <div className="flex items-center mb-8">
//           {steps.map((step, index) => (
//             <React.Fragment key={step.number}>
//               <div className="flex flex-col items-center">
//                 <div
//                   className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
//                     currentStep >= step.number ? step.color : 'bg-gray-300'
//                   }`}
//                 >
//                   {step.number}
//                 </div>
//                 <span className={`text-xs mt-1 ${
//                   currentStep >= step.number ? 'text-orange-500 font-medium' : 'text-gray-400'
//                 }`}>
//                   {step.title}
//                 </span>
//               </div>
//               {index < steps.length - 1 && (
//                 <div className={`flex-1 h-0.5 mx-2 ${
//                   currentStep > step.number ? 'bg-orange-500' : 'bg-gray-300'
//                 }`} />
//               )}
//             </React.Fragment>
//           ))}
//         </div>
//         <div className="mb-8 min-h-96">
//           {renderStep()}
//         </div>
//         <div className="flex justify-between">
//           <button
//             onClick={handleBack}
//             disabled={currentStep === 1}
//             className={`px-6 py-2 rounded font-medium ${
//               currentStep === 1
//                 ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 : 'bg-orange-500 text-white hover:bg-orange-600'
//             }`}
//           >
//             BACK
//           </button>
//           <button
//             onClick={handleNext}
//             disabled={currentStep === 5 || (currentStep === 2 && !formData.selectedTime) || (currentStep === 3 && (!formData.fullName || !formData.email))}
//             className={`px-6 py-2 rounded font-medium ${
//               currentStep === 5 || (currentStep === 2 && !formData.selectedTime) || (currentStep === 3 && (!formData.fullName || !formData.email))
//                 ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                 : 'bg-orange-500 text-white hover:bg-orange-600'
//             }`}
//           >
//             {currentStep === 2 ? '>' : currentStep === 5 ? 'DONE' : 'NEXT'}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ConsultationBooking;


import React, { useState, useEffect } from 'react';
import { Calendar, User } from 'lucide-react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const ConsultationBooking = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const defaultFormData = {
    paymentMethod: 'local',
    category: 'Nutrition',
    service: 'Nutrition Consultation',
    consultant: 'webserviceusa90 ($10.00)',
    selectedTime: '',
    date: new Date(),
    fullName: '',
    phone: '',
    email: '',
    notes: '',
    bookingId: ''
  };

  const [currentStep, setCurrentStep] = useState(state?.step || 1);
  const [formData, setFormData] = useState(state?.formData || defaultFormData);
  const [timeSlots, setTimeSlots] = useState([]);
  const [bookedSlots, setBookedSlots] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const steps = [
    { number: 1, title: 'Service', color: 'bg-orange-500' },
    { number: 2, title: 'Time', color: 'bg-orange-500' },
    { number: 3, title: 'Details', color: 'bg-orange-500' },
    { number: 4, title: 'Payment', color: 'bg-orange-500' },
    { number: 5, title: 'Done', color: 'bg-gray-400' }
  ];

  const categories = ['Nutrition'];
  const services = {
    Nutrition: ['Nutrition Consultation', 'Nutrition for Weight Loss Consultation', 'Other Services'],
    Fitness: ['Personal Training Session', 'Fitness Assessment'],
    'Mental Health': ['Therapy Session', 'Stress Management Consultation']
  };
  const consultants = ['webserviceusa90 ($10.00)', 'healthpro123 ($15.00)', 'Any'];

  useEffect(() => {
    fetchTimeSlots(formData.date);
  }, [formData.date, formData.consultant, formData.service]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    });
  }, [currentStep]);

  const validateField = (field, value) => {
    const newErrors = { ...errors };

    if (field === 'fullName') {
      if (!value.trim()) {
        newErrors.fullName = 'Full name is required';
      } else if (value.length < 2) {
        newErrors.fullName = 'Full name must be at least 2 characters';
      } else {
        delete newErrors.fullName;
      }
    }

    if (field === 'email') {
      if (!value.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        delete newErrors.email;
      }
    }

    if (field === 'phone') {
      if (!value.trim()) {
        newErrors.phone = 'Phone number is required';
      } else if (!/^\+?\d{10,14}$/.test(value.replace(/\D/g, ''))) {
        newErrors.phone = 'Please enter a valid phone number (10-14 digits)';
      } else {
        delete newErrors.phone;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?\d{10,14}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number (10-14 digits)';
    }

    setErrors(newErrors);
    setTouched({ fullName: true, email: true, phone: true });
    return Object.keys(newErrors).length === 0;
  };

  const fetchTimeSlots = async (date) => {
    try {
      const timeSlotsResponse = await axios.get('https://api.rayonewholesale.com/api/bookings/timeslots', {
        params: { date: date.toISOString(), consultant: formData.consultant, service: formData.service }
      });
      const slots = timeSlotsResponse.data.timeSlots || [];
      setTimeSlots(slots.map(slot => slot.time));
      setBookedSlots(slots.filter(slot => slot.booked).map(slot => slot.time));
    } catch (error) {
      console.error('Error fetching time slots or bookings:', error);
      setTimeSlots([]);
      setBookedSlots([]);
    }
  };

  const handleNext = async () => {
    if (currentStep === 3) {
      if (!validateForm()) {
        return;
      }
    }
    
    if (currentStep === 4) {
      if (formData.paymentMethod === 'paypal') {
        try {
          const response = await axios.post('https://api.rayonewholesale.com/api/payments/create-and-confirm-payment', {
            action: 'create',
            bookingData: {
              ...formData,
              date: formData.date
            }
          });
          localStorage.setItem('pendingBookingId', response.data.bookingId);
          window.location.href = response.data.approvalUrl;
          return;
        } catch (error) {
          console.error('Error initiating PayPal payment:', error);
          return;
        }
      } else {
        try {
          const response = await axios.post('https://api.rayonewholesale.com/api/bookings/create-booking', {
            ...formData,
            date: formData.date,
            paymentStatus: 'Completed'
          });
          setFormData(prev => ({ ...prev, bookingId: response.data.booking._id }));
          setCurrentStep(5);
        } catch (error) {
          console.error('Error creating booking:', error);
          return;
        }
      }
    } else if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
      setTouched({});
    }
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    setTouched(prev => ({ ...prev, [field]: true }));
    validateField(field, value);
  };

  const handleMonthChange = (direction) => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      newMonth.setMonth(prev.getMonth() + direction);
      return newMonth;
    });
  };

  const handleDateChange = (date) => {
    handleInputChange('date', date);
    setFormData(prev => ({ ...prev, selectedTime: '' }));
  };

  const getNextButtonTooltip = () => {
    if (currentStep === 2 && !formData.selectedTime) {
      return 'Please select a time slot to proceed';
    }
    if (currentStep === 3 && Object.keys(errors).length > 0) {
      return 'Please fix the form errors to proceed';
    }
    return '';
  };

  const renderCalendar = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2" />);
    }
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, month, day);
      days.push(
        <button
          key={day}
          className={`p-2 text-sm rounded hover:bg-orange-100 ${
            formData.date.getDate() === day && formData.date.getMonth() === month
              ? 'bg-orange-500 text-white'
              : 'bg-white border-gray-300'
          }`}
          onClick={() => handleDateChange(date)}
        >
          {day}
        </button>
      );
    }

    return (
      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <button onClick={() => handleMonthChange(-1)} className="text-orange-500">←</button>
          <span className="text-sm font-medium">
            {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
          </span>
          <button onClick={() => handleMonthChange(1)} className="text-orange-500">→</button>
        </div>
        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="text-center text-xs font-medium">{day}</div>
          ))}
          {days}
        </div>
      </div>
    );
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <p className="text-sm">Please select service:</p>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-orange-500 mb-2">Category</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                >
                  <option>Select Category</option>
                  {categories.map(cat => (
                    <option key={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-orange-500 mb-2">Service</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.service}
                  onChange={(e) => handleInputChange('service', e.target.value)}
                >
                  <option>Select Service</option>
                  {services[formData.category]?.map(svc => (
                    <option key={svc}>{svc}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-orange-500 mb-2">Consultant</label>
                <select 
                  className="w-full p-2 border border-gray-300 rounded"
                  value={formData.consultant}
                  onChange={(e) => handleInputChange('consultant', e.target.value)}
                >
                  {consultants.map(con => (
                    <option key={con}>{con}</option>
                  ))}
                </select>
              </div>
            </div>
            <p className="text-sm">{formData.service}</p>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div>
              <p className="text-sm mb-4">
                Below is a list of all time slots for <strong>{formData.service}</strong> by <strong>{formData.consultant}</strong> on <strong>{formData.date.toLocaleDateString()}</strong>.
              </p>
              <p className="text-sm mb-6">Click on an available time slot to proceed with booking. Booked slots are highlighted in orange and cannot be selected.</p>
            </div>
            {renderCalendar()}
            <div className="grid grid-cols-5 gap-2">
              {timeSlots.length > 0 ? (
                timeSlots.map((time, index) => (
                  <button
                    key={index}
                    className={`w-full p-2 mb-1 text-xs border rounded ${
                      bookedSlots.includes(time)
                        ? 'bg-orange-300 text-white cursor-not-allowed opacity-75'
                        : formData.selectedTime === time
                        ? 'bg-orange-500 text-white hover:bg-orange-600'
                        : 'bg-white border-gray-300 hover:bg-orange-100'
                    }`}
                    onClick={() => !bookedSlots.includes(time) && handleInputChange('selectedTime', time)}
                    disabled={bookedSlots.includes(time)}
                    title={bookedSlots.includes(time) ? 'This slot is booked' : ''}
                  >
                    {time}
                  </button>
                ))
              ) : (
                <p className="text-sm text-gray-600">No time slots available for this date.</p>
              )}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-sm mb-4">
              <p>You selected a booking for <strong>{formData.service}</strong> by <strong>{formData.consultant}</strong> at <strong>{formData.selectedTime}</strong> on <strong>{formData.date.toLocaleDateString()}</strong>. The price for the service is <strong>$10.00</strong>.</p>
              <p className="mt-2">Please provide your details below to proceed with booking. All fields are required.</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-orange-500 mb-1">Full Name</label>
                <input
                  type="text"
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.fullName && touched.fullName
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="e.g., John Doe"
                  value={formData.fullName}
                  onChange={(e) => handleInputChange('fullName', e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, fullName: true }))}
                />
                {errors.fullName && touched.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-orange-500 mb-1">Phone</label>
                <div className="flex">
                  <div className="flex items-center px-2 border border-r-0 rounded-l bg-gray-50">
                    <span className="text-xs">🇮🇳</span>
                  </div>
                  <input
                    type="text"
                    className={`w-full p-2 border rounded-r focus:outline-none focus:ring-2 ${
                      errors.phone && touched.phone
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300 focus:ring-orange-500'
                    }`}
                    placeholder="e.g., +918123456789"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    onBlur={() => setTouched(prev => ({ ...prev, phone: true }))}
                  />
                </div>
                {errors.phone && touched.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-orange-500 mb-1">Email</label>
                <input
                  type="email"
                  className={`w-full p-2 border rounded focus:outline-none focus:ring-2 ${
                    errors.email && touched.email
                      ? 'border-red-500 focus:ring-red-500'
                      : 'border-gray-300 focus:ring-orange-500'
                  }`}
                  placeholder="e.g., john.doe@example.com"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  onBlur={() => setTouched(prev => ({ ...prev, email: true }))}
                />
                {errors.email && touched.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-orange-500 mb-1">Notes (Optional)</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded h-20 focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="Any additional information or special requests"
                value={formData.notes}
                onChange={(e) => handleInputChange('notes', e.target.value)}
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-4">
            <p className="text-sm">Please tell us how you would like to pay:</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="payment"
                  value="paypal"
                  checked={formData.paymentMethod === 'paypal'}
                  onChange={(e) => handleInputChange('paymentMethod', e.target.value)}
                />
                <span className="text-sm">I will pay now with PayPal</span>
                <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCA4MCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iMjQiIHJ4PSI4IiBmaWxsPSIjMDA5Y2RlIi8+CiAgPHRleHQgeD0iNSIgeT0iMTYiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMCIgZmlsbD0id2hpdGUiPgogICAgUGF5UGFsCiAgPC90ZXh0Pgo8L3N2Zz4K" alt="PayPal" className="h-4" />
              </label>
            </div>
          </div>
        );

      case 5:
        return (
          <div className="text-center space-y-4">
            <div className="text-green-600 text-6xl">✓</div>
            <h3 className="text-xl font-semibold">Booking Confirmed!</h3>
            <p className="text-sm text-gray-600">
              Your {formData.service} has been successfully booked for {formData.selectedTime} on {formData.date.toLocaleDateString()}.
            </p>
            <button
              onClick={() => {
                setCurrentStep(1);
                setFormData(defaultFormData);
                navigate('/counseling', { state: { step: 1, formData: defaultFormData } });
              }}
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded font-medium hover:bg-orange-600"
            >
              Book Another Appointment
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 min-h-screen mt-[4rem]" style={{zoom:.9}}>
      <div className="bg-green-600 text-white p-3 rounded-t-lg flex items-center justify-center space-x-2">
        <User className="w-5 h-5" />
        <span className="font-medium">Consultation</span>
      </div>
      <div className="bg-white p-6 rounded-b-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Questions?</h2>
        <div className="mb-6">
          <p className="text-sm mb-2">
            Still not sure if nutrition counseling is right for you? Call us at <span className="text-blue-600">+1(443) 432-3295</span> for more information.
          </p>
          <p className="text-sm text-gray-600 italic">
            *Because everyone is unique, individual results vary.
          </p>
        </div>
        <div className="flex items-center mb-8">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className="flex flex-col items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                    currentStep >= step.number ? step.color : 'bg-gray-300'
                  }`}
                >
                  {step.number}
                </div>
                <span className={`text-xs mt-1 ${
                  currentStep >= step.number ? 'text-orange-500 font-medium' : 'text-gray-400'
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${
                  currentStep > step.number ? 'bg-orange-500' : 'bg-gray-300'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mb-8 min-h-96">
          {renderStep()}
        </div>
        <div className="flex justify-between">
          <button
            onClick={handleBack}
            disabled={currentStep === 1}
            className={`px-6 py-2 rounded font-medium ${
              currentStep === 1
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-orange-500 text-white hover:bg-orange-600'
            }`}
          >
            BACK
          </button>
          <div className="relative">
            <button
              onClick={handleNext}
              disabled={currentStep === 5 || (currentStep === 2 && !formData.selectedTime) || (currentStep === 3 && Object.keys(errors).length > 0)}
              className={`px-6 py-2 rounded font-medium ${
                currentStep === 5 || (currentStep === 2 && !formData.selectedTime) || (currentStep === 3 && Object.keys(errors).length > 0)
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
              title={getNextButtonTooltip()}
            >
              {currentStep === 2 ? '>' : currentStep === 5 ? 'DONE' : 'NEXT'}
            </button>
            {currentStep === 3 && Object.keys(errors).length > 0 && (
              <p className="text-red-500 text-xs mt-2">Please fix the errors above to proceed</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;