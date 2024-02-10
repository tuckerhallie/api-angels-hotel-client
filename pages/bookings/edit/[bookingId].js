import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import BookingForm from '../../../components/forms/addBookingForm';
import { getSingleBooking } from '../../../api/bookingData';

const UpdateBooking = () => {
  const [editBooking, setEditBooking] = useState({});
  const router = useRouter();
  const { bookingId } = router.query;

  useEffect(() => {
    getSingleBooking(bookingId).then(setEditBooking);
  }, [bookingId]);

  return (
    <div>
      <h2>Update Booking</h2>
      <BookingForm bookingObj={editBooking} />
    </div>
  );
};

export default UpdateBooking;
