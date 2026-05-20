import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from 'axios';

const SuccessPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const paypalOrderId = searchParams.get('paymentId');
  const payerId = searchParams.get('PayerID');
  const bookingId = localStorage.getItem('pendingBookingId');
  const [isProcessed, setIsProcessed] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const confirmPayment = async () => {
      if (isProcessed || !isMounted) {
        console.log('Payment already processed or component unmounted, skipping.');
        return;
      }

      try {
        if (!paypalOrderId || !payerId || !bookingId) {
          console.error('Missing payment or booking data:', { paypalOrderId, payerId, bookingId });
          localStorage.removeItem('pendingBookingId');
          navigate('/counseling', { state: { step: 1 } });
          return;
        }

        const response = await axios.post('https://api.rayonewholesale.com/api/payments/create-and-confirm-payment', {
          action: 'confirm',
          paypalOrderId,
          payerId,
          bookingId
        });

        if (isMounted) {
          setIsProcessed(true);
          localStorage.removeItem('pendingBookingId');
          navigate('/counseling', { 
            state: { 
              step: 5, 
              bookingId: response.data.booking._id,
              formData: {
                ...response.data.booking,
                date: new Date(response.data.booking.date),
                bookingId: response.data.booking._id
              }
            } 
          });
        }
      } catch (error) {
        console.error('Payment confirmation error:', error);
        if (isMounted) {
          localStorage.removeItem('pendingBookingId');
          navigate('/counseling', { state: { step: 1 } });
        }
      }
    };

    confirmPayment();

    return () => {
      isMounted = false;
    };
  }, [paypalOrderId, payerId, bookingId, navigate, isProcessed]);

  return <div>Processing payment...</div>;
};

export default SuccessPage;