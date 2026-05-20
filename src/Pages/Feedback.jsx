import React, { useState } from 'react';
import contactLogo from '../assets/images/bg/slider1-banner.jpg'; // Adjust the path as necessary
import Navbar from '../components/common/Navbar/Navbar';

export default function Feedback() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setError(null); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setError(null); // Reset error state
    setIsLoading(true); // Show loading state

    // Client-side validation
    if (!formData.fullName || !formData.email || !formData.message) {
      setError('All fields are required');
      setIsLoading(false);
      return;
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      setIsLoading(false);
      return;
    }

    // Validate message length
    if (formData.message.length < 10) {
      setError('Message must be at least 10 characters long');
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch('https://api.rayonewholesale.com/api/user/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', message: '' }); // Clear form
        setTimeout(() => setIsSubmitted(false), 3000); // Hide success message after 3s
      } else {
        setError(data.error || 'Failed to submit feedback');
      }
    } catch (err) {
      setError('Network error: Unable to reach the server');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen relative overflow-hidden">
        {/* Background with blur effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300">
          <div className="absolute top-10 right-20 w-32 h-32 bg-red-400 rounded-full opacity-60 blur-xl"></div>
          <div className="absolute top-20 right-40 w-24 h-24 bg-blue-500 rounded-full opacity-40 blur-lg"></div>
          <div className="absolute bottom-20 left-10 w-40 h-40 bg-purple-400 rounded-full opacity-30 blur-2xl"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex flex-col">
          {/* Header */}
          <div
            className="pt-16 pb-8 my-1 h-60"
            style={{ backgroundImage: `url(${contactLogo})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="container mx-auto px-6">
              <h1 className="text-5xl font-light text-white mb-4 font-semibold">Contact</h1>
            </div>
          </div>

          {/* Form Container */}
          <div className="flex-1 flex items-center justify-center px-6 pb-16">
            <div className="w-full max-w-4xl">
              {/* Instructions */}
              <div className="text-center mb-8 my-[4rem]">
                <p className="text-gray-800 text-sm leading-relaxed max-w-3xl mx-auto">
                  Fill out the <span className="font-semibold">REQUIRED</span> fields in the response box below. Once all
                  fields are filled, click the 'Send Email' button at the bottom of the page. A thank you note will display
                  on the screen to confirm that the message is successfully sent. (All fields with * are required)
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      placeholder="Full Name *"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 border border-gray-300 bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="8"
                    className="w-full px-4 py-4 border border-gray-300 bg-white/80 backdrop-blur-sm placeholder-gray-500 text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent transition-all duration-200 resize-none"
                  ></textarea>
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                    {error}
                  </div>
                )}

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className={`bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded transition-colors duration-200 text-lg tracking-wide ${
                      isLoading ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {isLoading ? 'Submitting...' : 'SUBMIT'}
                  </button>
                </div>
              </form>

              {/* Success Message */}
              {isSubmitted && (
                <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  Thank you! Your message has been successfully sent.
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-white rounded-full opacity-60"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50"></div>
      </div>
    </>
  );
}