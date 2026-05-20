// import React, { useState } from 'react';
// import { ChevronDown, ChevronUp, Heart, Activity, Users, Plus, Minus } from 'lucide-react';
// import Navbar from '../components/common/Navbar/Navbar';
// import bgImage from '../assets/images/bg/slider1-banner.jpg'; // adjust path as needed
// import { motion, AnimatePresence } from 'framer-motion'

// const CounselingPage = () => {
//   const [expandedFaq, setExpandedFaq] = useState('is-counseling-right');
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     phone: '',
//     location: '',
//     helpWith: '',
//     contactMethod: 'email',
//     bestTime: 'morning',
//     whereDoYouLive: '',
//     state: ''
//   });

//   const faqItems = [
//     {
//       id: 'is-counseling-right',
//       title: 'IS COUNSELING RIGHT FOR ME?',
//       content: `<strong><span style="font-size: larger;">Nutrition counseling is perfect for you if any of the following are true:</span></strong>

// • You prefer working one-on-one with a nutritionist
// • You have been diagnosed with an autoimmune condition such as Hashimoto's, MS, rheumatoid arthritis, lupus, graves disease or celiac disease
// • You have a chronic health condition and you'd like a better way to manage symptoms (heart disease, diabetes, high cholesterol, osteoporosis, COPD, Parkinson's or Alzheimer's)
// • You've tried everything else to get healthy, but nothing seems to work
// • You struggle with digestive issues or food sensitivities
// • You have back pain, arthritis or other troublesome aches and pains
// • You find yourself feeling overly tired and unmotivated
// • You want to lose weight and decrease food cravings
// • You want better rest at night, more energy, and better moods
// • You have digestive issues such as heartburn, bloating, constipation or diarrhea
// • You want to help your child or spouse get healthier through better nutrition`
//     },
//     {
//       id: 'what-should-expect',
//       title: 'WHAT SHOULD I EXPECT?',
//       content: `<strong><span style="font-size: larger;">What to expect prior to your consultation</span></strong>
// • You will complete a health history and nutrition questionnaire so your nutritionist gains a thorough understanding of your health challenges and goals.

// <strong><span style="font-size: larger;">What to expect during your initial consultation</span></strong>
// • Your nutritionist will explain how foods affect your health and well-being and why certain foods are important to include in your diet.
// • You will receive a personalized eating plan along with recipes and suggestions for meals, snacks and beverages.
// • Your nutritionist will work with you to set goals and develop practical ways for you to implement our real-food approach to eating.
// • Enjoy 10% off supplements the day of your counseling appointment. Depending on your health, supplements may be recommended (but not required) to rebalance your biochemistry, help you adhere to our healthy eating plan, or give you nutritional support.`
//     },
//     {
//       id: 'how-much-cost',
//       title: 'HOW MUCH DOES IT COST?',
//       content: `Our rates differ by nutritionist, length of appointment, package offerings and more. Please see our pricing below and feel free to call+1(443) 432-3295 with any questions. As a special bonus, on the day of your appointment you’ll also receive 10% off any products purchased.

//        <strong><span style="font-size: 24px;">Rates</span></strong>

//        <strong><span style="font-size: large;">Blue Cross Blue Shield of MN Rates*</span></strong>
//        • Initial consultation (2-hours): $365
//        • Follow-up consultation (1-hour): $160
//        • Follow-up consultation (30-minutes): n/a

//        *Your nutrition counseling appointments may be covered if you are a member of Blue Cross Blue Shield of Minnesota insurance. <a href="#" onclick="window.scrollTo(0, 0)" style="color: blue; text-decoration: underline;">Click here to learn more.</a>

//        <strong><span style="font-size: larger;">Standard Consultation Rates:</span></strong>
//         • Initial consultation (2-hours): $265
//         • Follow-up consultation (1-hour): $110
//         • Follow-up consultation (30-minutes): $75

//         <strong><span style="font-size: large;">Darlene Kvist Standard Consultation Rates:</span></strong>
//          • Initial consultation (2-hours): n/a
//          • Follow-up consultation (1-hour): $125
//          • Follow-up consultation (30-minutes): $80

//          <strong><span style="font-size: 24px;">Wellness Package Discounted Rates**</span></strong>
//         • Includes initial consultation (2-hours) plus two follow-up consultations (1-hour each): $412.25 A savings of $72.50/15% off standard rate of $485    

//          <strong><span style="font-size: large;">Support 3-Pack:</span></strong>
//         • Includes three follow-up consultations (1-hour each): $247.50 A savings of $82.50/25% off standard rate of $330

//        <strong><span style="font-size: 16px; font-style: italic;">Wellness Package Discounted Rates are not available for appointments with Darlene Kvist.</span></strong>`
//     },
//     {
//       id: 'insurance-coverage',
//       title: 'DOES INSURANCE COVER NUTRITION COUNSELING?',
//       content: `In some cases nutrition counseling may be covered by insurance. For more information go to Insurance Coverage for Nutrition Counseling.
// `
//     }
//   ];

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = () => {
//     console.log('Form submitted:', formData);
//     // Handle form submission here
//   };

//   const toggleFaq = (id) => {
//     setExpandedFaq(expandedFaq === id ? null : id);
//   };

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen bg-gray-50">
//       {/* Hero Section */}
//       <div className="relative bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
//         <div className="absolute inset-0 bg-black bg-opacity-40" style={{
//           backgroundImage: `url(${bgImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//         }}></div>
//         <div className="relative max-w-7xl mx-auto px-4">
//           <div className="flex items-center justify-between">
//             <div className="flex-1">
//               <h1 className="text-5xl font-bold mb-4">Counseling</h1>
//             </div>
//             <div className="flex-1 flex justify-center items-center">
//               <div className="relative">
//                 <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
//                   <Activity className="w-6 h-6 text-white" />
//                 </div>
//               </div>
//             </div>
//             <div className="flex-1 flex justify-end">
//               <div className="text-right">
//                 <div className="text-sm opacity-75">CVS-100</div>
//                 <div className="text-xs opacity-50 mt-2">System<br />upper injector</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Left Column - Content and FAQ */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Nutrition Counseling Section */}
//             <div>
//               <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition Counseling</h2>
//               <p className="text-gray-700 mb-6">
//                 We're here to help you make the connection between what you eat and how you feel.
//               </p>
//               <p className="text-gray-700 mb-6">
//                 Sign up for an in-person, or by phone and Skype, consultation to tackle your personal health goals. Plus, 
//                 your nutrition counseling appointments may be covered by insurance if you are a member of Blue Cross Blue 
//                 Shield. Our nutritionists will be with you every step of the way to support, motivate and guide you to success.
//               </p>
//               <p className="text-gray-700 mb-6">
//                 Nutrition counseling offers help and hope for every health concern, whether you want to...
//               </p>

//               <ul className="space-y-2 text-gray-700 mb-8">
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Manage a chronic illness
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Have fewer aches and pains in your back and/or joints
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Have better digestion
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Manage anxiety and depression
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Conquer eating issues
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Lose weight* and rev up your metabolism
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
//                   Increase energy and well-being
//                 </li>
//               </ul>

//               <p className="text-gray-700 mb-8">
//                 Nutritional Weight & Wellness nutritionists are experienced, thoughtful and grounded in research. We practice 
//                 Therapeutic Nutritional Counseling—a proven approach to nutrition counseling that will meet your physical, 
//                 mental and emotional needs. We use the latest in scientific research, clinical experience, problem-solving skills, 
//                 and an intuitive approach to help you feel better.
//               </p>
//             </div>

//             {/* FAQ Section */}
//             <div className="space-y-4">
//               {faqItems.map((item) => (
//                 <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
//                   <button
//                     onClick={() => toggleFaq(item.id)}
//                     className="w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-left flex items-center justify-between transition-colors"
//                   >
//                     {/* Icon + Title */}
//                     <span className="flex items-center gap-2">
//                       {expandedFaq === item.id ? (
//                         <Minus className="w-5 h-5 text-white" />
//                       ) : (
//                         <Plus className="w-5 h-5 text-white" />
//                       )}
//                       {item.title}
//                     </span>

//                     {/* Chevron */}
//                     {expandedFaq === item.id ? (
//                       <ChevronUp className="w-5 h-5" />
//                     ) : (
//                       <ChevronDown className="w-5 h-5" />
//                     )}
//                   </button>

//                   {/* Animate expand/collapse */}
//                   <AnimatePresence initial={false}>
//                     {expandedFaq === item.id && (
//                       <motion.div
//                         key="content"
//                         initial={{ height: 0, opacity: 0 }}
//                         animate={{ height: "auto", opacity: 1 }}
//                         exit={{ height: 0, opacity: 0 }}
//                         transition={{ duration: 0.3, ease: "easeInOut" }}
//                         className="overflow-hidden"
//                       >
//                         <div className="px-6 py-4 bg-white">
//                           <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: item.content }} />
//                         </div>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Column - Form */}
//           <div className="lg:col-span-1">
//             <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Name <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Email <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Which location do you want to contact? <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="location"
//                   value={formData.location}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">--Please choose an option--</option>
//                   <option value="main">St Paul</option>
//                   <option value="Wayzata">Wayzata</option>
//                   <option value="North Oaks">North Oaks</option>
//                   <option value="Lakeville">Lakeville</option>
//                   <option value="Maple Grove">Maple Grove</option>
//                   <option value="Mendota Heights">Mendota Heights</option>
//                   <option value="Eden Prairie">Eden Prairie</option>
//                    <option value="Any">Any</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   How can we help you? <span className="text-red-500">*</span>
//                 </label>
//                 <select
//                   name="helpWith"
//                   value={formData.helpWith}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 >
//                   <option value="">--Please choose an option--</option>
//                   <option value="weight-loss">I want to schedule a nutrition consultation.</option>
//                   <option value="chronic-illness">I want to schedule my Nutrition 4 Weight Loss consultation.</option>
//                   <option value="digestive-health">I have a question about nutrition consultations.</option>
//                   <option value="energy-wellness">I have a question about other services.</option>
//                   <option value="other">I have a questions about something else.</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   Please contact me: <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex space-x-4">
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="contactMethod"
//                       value="email"
//                       checked={formData.contactMethod === 'email'}
//                       onChange={handleInputChange}
//                       className="mr-2 text-orange-500 focus:ring-orange-500"
//                     />
//                     By email
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="contactMethod"
//                       value="phone"
//                       checked={formData.contactMethod === 'phone'}
//                       onChange={handleInputChange}
//                       className="mr-2 text-orange-500 focus:ring-orange-500"
//                     />
//                     By phone
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                   The best time to reach me is: <span className="text-red-500">*</span>
//                 </label>
//                 <div className="flex space-x-4">
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="bestTime"
//                       value="morning"
//                       checked={formData.bestTime === 'morning'}
//                       onChange={handleInputChange}
//                       className="mr-2 text-orange-500 focus:ring-orange-500"
//                     />
//                     Morning
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="bestTime"
//                       value="afternoon"
//                       checked={formData.bestTime === 'afternoon'}
//                       onChange={handleInputChange}
//                       className="mr-2 text-orange-500 focus:ring-orange-500"
//                     />
//                     Afternoon
//                   </label>
//                   <label className="flex items-center">
//                     <input
//                       type="radio"
//                       name="bestTime"
//                       value="evening"
//                       checked={formData.bestTime === 'evening'}
//                       onChange={handleInputChange}
//                       className="mr-2 text-orange-500 focus:ring-orange-500"
//                     />
//                     Evening
//                   </label>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">
//                   Where do you live? <span className="text-red-500">*</span>
//                 </label>
//                 <input
//                   type="text"
//                   name="whereDoYouLive"
//                   value={formData.whereDoYouLive}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                   required
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
//                 <input
//                   type="text"
//                   name="state"
//                   value={formData.state}
//                   onChange={handleInputChange}
//                   className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
//                 />
//               </div>

//               <button
//                 type="button"
//                 onClick={handleSubmit}
//                 className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition-colors"
//               >
//                 SUBMIT
//               </button>
//             </div>

//             {/* Insurance Coverage Section */}
//             <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
//               <div className="flex items-center mb-4">
//                 <Users className="w-8 h-8 text-blue-600 mr-3" />
//                 <h3 className="text-xl font-semibold text-gray-900">Insurance Coverage</h3>
//               </div>
//               <p className="text-gray-700 text-sm">
//                 Did you know that we accept Blue Cross Blue Shield? 
//                 Find out if your nutrition appointment is covered by insurance!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     </>
//   );
// };

// export default CounselingPage;



import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Heart, Activity, Users, Plus, Minus } from 'lucide-react';
import Navbar from '../components/common/Navbar/Navbar';
import bgImage from '../assets/images/bg/slider1-banner.jpg'; // adjust path as needed
import { motion, AnimatePresence } from 'framer-motion'
import ConsultationBooking from './BookConsultation';

const CounselingPage = () => {
  const [expandedFaq, setExpandedFaq] = useState('is-counseling-right');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    helpWith: '',
    contactMethod: 'email',
    bestTime: 'morning',
    whereDoYouLive: '',
    state: ''
  });
  // Add state for messages
  const [message, setMessage] = useState({ text: '', type: '' }); // type: 'success' or 'error'

  const faqItems = [
    {
      id: 'is-counseling-right',
      title: 'IS COUNSELING RIGHT FOR ME?',
      content: `<strong><span style="font-size: larger;">Nutrition counseling is perfect for you if any of the following are true:</span></strong>

• You prefer working one-on-one with a nutritionist
• You have been diagnosed with an autoimmune condition such as Hashimoto's, MS, rheumatoid arthritis, lupus, graves disease or celiac disease
• You have a chronic health condition and you'd like a better way to manage symptoms (heart disease, diabetes, high cholesterol, osteoporosis, COPD, Parkinson's or Alzheimer's)
• You've tried everything else to get healthy, but nothing seems to work
• You struggle with digestive issues or food sensitivities
• You have back pain, arthritis or other troublesome aches and pains
• You find yourself feeling overly tired and unmotivated
• You want to lose weight and decrease food cravings
• You want better rest at night, more energy, and better moods
• You have digestive issues such as heartburn, bloating, constipation or diarrhea
• You want to help your child or spouse get healthier through better nutrition`
    },
    {
      id: 'what-should-expect',
      title: 'WHAT SHOULD I EXPECT?',
      content: `<strong><span style="font-size: larger;">What to expect prior to your consultation</span></strong>
• You will complete a health history and nutrition questionnaire so your nutritionist gains a thorough understanding of your health challenges and goals.

<strong><span style="font-size: larger;">What to expect during your initial consultation</span></strong>
• Your nutritionist will explain how foods affect your health and well-being and why certain foods are important to include in your diet.
• You will receive a personalized eating plan along with recipes and suggestions for meals, snacks and beverages.
• Your nutritionist will work with you to set goals and develop practical ways for you to implement our real-food approach to eating.
• Enjoy 10% off supplements the day of your counseling appointment. Depending on your health, supplements may be recommended (but not required) to rebalance your biochemistry, help you adhere to our healthy eating plan, or give you nutritional support.`
    },
    {
      id: 'how-much-cost',
      title: 'HOW MUCH DOES IT COST?',
      content: `Our rates differ by nutritionist, length of appointment, package offerings and more. Please see our pricing below and feel free to call+1(443) 432-3295 with any questions. As a special bonus, on the day of your appointment you’ll also receive 10% off any products purchased.
      
       <strong><span style="font-size: 24px;">Rates</span></strong>

       <strong><span style="font-size: large;">Blue Cross Blue Shield of MN Rates*</span></strong>
       • Initial consultation (2-hours): $365
       • Follow-up consultation (1-hour): $160
       • Follow-up consultation (30-minutes): n/a

       *Your nutrition counseling appointments may be covered if you are a member of Blue Cross Blue Shield of Minnesota insurance. <a href="#" onclick="window.scrollTo(0, 0)" style="color: blue; text-decoration: underline;">Click here to learn more.</a>

       <strong><span style="font-size: larger;">Standard Consultation Rates:</span></strong>
        • Initial consultation (2-hours): $265
        • Follow-up consultation (1-hour): $110
        • Follow-up consultation (30-minutes): $75

        <strong><span style="font-size: large;">Darlene Kvist Standard Consultation Rates:</span></strong>
         • Initial consultation (2-hours): n/a
         • Follow-up consultation (1-hour): $125
         • Follow-up consultation (30-minutes): $80
       
         <strong><span style="font-size: 24px;">Wellness Package Discounted Rates**</span></strong>
        • Includes initial consultation (2-hours) plus two follow-up consultations (1-hour each): $412.25 A savings of $72.50/15% off standard rate of $485    
        
         <strong><span style="font-size: large;">Support 3-Pack:</span></strong>
        • Includes three follow-up consultations (1-hour each): $247.50 A savings of $82.50/25% off standard rate of $330
        
       <strong><span style="font-size: 16px; font-style: italic;">Wellness Package Discounted Rates are not available for appointments with Darlene Kvist.</span></strong>`
    },
    {
      id: 'insurance-coverage',
      title: 'DOES INSURANCE COVER NUTRITION COUNSELING?',
      content: `In some cases nutrition counseling may be covered by insurance. For more information go to Insurance Coverage for Nutrition Counseling.
`
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_BASE_URL}/api/user/counselling`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setMessage({ text: 'Form submitted successfully!', type: 'success' });
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          location: '',
          helpWith: '',
          contactMethod: 'email',
          bestTime: 'morning',
          whereDoYouLive: '',
          state: ''
        });
        // Clear message after 3 seconds
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      } else {
        setMessage({ text: `Error: ${result.error}`, type: 'error' });
        // Clear message after 3 seconds
        setTimeout(() => setMessage({ text: '', type: '' }), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage({ text: 'An error occurred while submitting the form.', type: 'error' });
      // Clear message after 3 seconds
      setTimeout(() => setMessage({ text: '', type: '' }), 3000);
    }
  };

  const toggleFaq = (id) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-gray-800 to-gray-600 text-white py-20">
          <div className="absolute inset-0 bg-black bg-opacity-40" style={{
            backgroundImage: `url(${bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-4">Counseling</h1>
              </div>
              <div className="flex-1 flex justify-center items-center">
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                    <Activity className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <div className="text-right">
                  <div className="text-sm opacity-75">CVS-100</div>
                  <div className="text-xs opacity-50 mt-2">System<br />upper injector</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Content and FAQ */}
            <div className="lg:col-span-2 space-y-8">
              {/* Nutrition Counseling Section */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Nutrition Counseling</h2>
                <p className="text-gray-700 mb-6">
                  We're here to help you make the connection between what you eat and how you feel.
                </p>
                <p className="text-gray-700 mb-6">
                  Sign up for an in-person, or by phone and Skype, consultation to tackle your personal health goals. Plus,
                  your nutrition counseling appointments may be covered by insurance if you are a member of Blue Cross Blue
                  Shield. Our nutritionists will be with you every step of the way to support, motivate and guide you to success.
                </p>
                <p className="text-gray-700 mb-6">
                  Nutrition counseling offers help and hope for every health concern, whether you want to...
                </p>

                <ul className="space-y-2 text-gray-700 mb-8">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Manage a chronic illness
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Have fewer aches and pains in your back and/or joints
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Have better digestion
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Manage anxiety and depression
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Conquer eating issues
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Lose weight* and rev up your metabolism
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-green-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    Increase energy and well-being
                  </li>
                </ul>

                <p className="text-gray-700 mb-8">
                  Nutritional Weight & Wellness nutritionists are experienced, thoughtful and grounded in research. We practice
                  Therapeutic Nutritional Counseling—a proven approach to nutrition counseling that will meet your physical,
                  mental and emotional needs. We use the latest in scientific research, clinical experience, problem-solving skills,
                  and an intuitive approach to help you feel better.
                </p>
              </div>

              {/* FAQ Section */}
              <div className="space-y-4">
                {faqItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(item.id)}
                      className="w-full px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold text-left flex items-center justify-between transition-colors"
                    >
                      {/* Icon + Title */}
                      <span className="flex items-center gap-2">
                        {expandedFaq === item.id ? (
                          <Minus className="w-5 h-5 text-white" />
                        ) : (
                          <Plus className="w-5 h-5 text-white" />
                        )}
                        {item.title}
                      </span>

                      {/* Chevron */}
                      {expandedFaq === item.id ? (
                        <ChevronUp className="w-5 h-5" />
                      ) : (
                        <ChevronDown className="w-5 h-5" />
                      )}
                    </button>

                    {/* Animate expand/collapse */}
                    <AnimatePresence initial={false}>
                      {expandedFaq === item.id && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 py-4 bg-white">
                            <div className="text-gray-700 whitespace-pre-line" dangerouslySetInnerHTML={{ __html: item.content }} />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>


            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Which location do you want to contact? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="St Paul">St Paul</option>
                    <option value="Wayzata">Wayzata</option>
                    <option value="North Oaks">North Oaks</option>
                    <option value="Lakeville">Lakeville</option>
                    <option value="Maple Grove">Maple Grove</option>
                    <option value="Mendota Heights">Mendota Heights</option>
                    <option value="Eden Prairie">Eden Prairie</option>
                    <option value="Any">Any</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    How can we help you? <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="helpWith"
                    value={formData.helpWith}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  >
                    <option value="">--Please choose an option--</option>
                    <option value="I want to schedule a nutrition consultation.">I want to schedule a nutrition consultation.</option>
                    <option value="I want to schedule my Nutrition 4 Weight Loss consultation.">I want to schedule my Nutrition 4 Weight Loss consultation.</option>
                    <option value="I have a question about nutrition consultations.">I have a question about nutrition consultations.</option>
                    <option value="I have a question about other services.">I have a question about other services.</option>
                    <option value="I have a questions about something else.">I have a questions about something else.</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Please contact me: <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="email"
                        checked={formData.contactMethod === 'email'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500 focus:ring-orange-500"
                      />
                      By email
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="contactMethod"
                        value="phone"
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500 focus:ring-orange-500"
                      />
                      By phone
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    The best time to reach me is: <span className="text-red-500">*</span>
                  </label>
                  <div className="flex space-x-4">
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bestTime"
                        value="morning"
                        checked={formData.bestTime === 'morning'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500 focus:ring-orange-500"
                      />
                      Morning
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bestTime"
                        value="afternoon"
                        checked={formData.bestTime === 'afternoon'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500 focus:ring-orange-500"
                      />
                      Afternoon
                    </label>
                    <label className="flex items-center">
                      <input
                        type="radio"
                        name="bestTime"
                        value="evening"
                        checked={formData.bestTime === 'evening'}
                        onChange={handleInputChange}
                        className="mr-2 text-orange-500 focus:ring-orange-500"
                      />
                      Evening
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Where do you live? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="whereDoYouLive"
                    value={formData.whereDoYouLive}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>

                {/* Display success or error message */}
                {message.text && (
                  <div className={`text-sm text-center ${message.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                    {message.text}
                  </div>
                )}

                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-md transition-colors"
                >
                  SUBMIT
                </button>
              </div>

              {/* Insurance Coverage Section */}
              <div className="mt-8 bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <Users className="w-8 h-8 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-900">Insurance Coverage</h3>
                </div>
                <p className="text-gray-700 text-sm">
                  Did you know that we accept Blue Cross Blue Shield?
                  Find out if your nutrition appointment is covered by insurance!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConsultationBooking />
    </>
  );
};

export default CounselingPage;