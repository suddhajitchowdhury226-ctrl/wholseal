import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CancelPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const cancelBooking = async () => {
      const bookingId = localStorage.getItem('pendingBookingId');
      if (bookingId) {
        try {
          await axios.delete(`https://api.rayonewholesale.com/api/bookings/${bookingId}`);
          console.log('Pending booking deleted:', bookingId);
        } catch (error) {
          console.error('Error deleting pending booking:', error);
        }
        localStorage.removeItem('pendingBookingId');
      }
      navigate('/counseling', { state: { step: 1 } });
    };

    cancelBooking();
  }, [navigate]);

  return <div>Redirecting...</div>;
};

export default CancelPage;