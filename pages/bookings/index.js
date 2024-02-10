import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { deleteSingleBooking, getBookingsByUser } from '../../api/bookingData';

const BookingDetailsPage = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    getBookingsByUser(user.id).then(setBookings);
  }, []);

  // need to go to bookingform when clicking edit
  const handleEdit = (id) => {
    // is this navigating to bookingform page?
    router.push(`/bookings/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm('Delete this Booking?')) {
      deleteSingleBooking(id).then(() => {
        router.push('/');
      });
    }
  };

  return (
    <div className="d-flex flex-wrap">
      {bookings ? bookings.map((booking) => (
        <div key={booking.id}>
          <Card style={{ width: '18rem', margin: '10px' }}>
            <Card.Body>
              <Card.Title>Booking Details</Card.Title>
              {/* details from previous page to render on card */}
              <Card.Text>room_type: {booking.room.room_type}</Card.Text>
              <Card.Text>check_In: {booking.check_in}</Card.Text>
              <Card.Text>check_out: {booking.check_out}</Card.Text>
              <Card.Text>no_of_guests: {booking.no_of_guests}</Card.Text>
              <Card.Text>total_amount: {booking.total_amount}</Card.Text>
              <Card.Text>Payment_type: {booking.payment_type}</Card.Text>
              <Button variant="primary" onClick={() => handleEdit(booking.id)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      )) : <div>No Data</div>}
    </div>
  );
};

export default BookingDetailsPage;
