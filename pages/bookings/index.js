import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { deleteSingleBooking } from '../../api/bookingData';

const BookingDetailsPage = ({ bookings }) => {
  const router = useRouter();

  // need to go to bookingform when clicking edit
  const handleEdit = (id) => {
    // is this navigating to bookingform page?
    router.push(`/edit/${id}`);
  };

  const handleDelete = (id) => {
    deleteSingleBooking(id).then(() => {
      router.push('/bookings');
    });
  };

  return (
    <div>
      {bookings.map((booking) => (
        <div key={booking.id} className="booking-details-page">
          <Card style={{ width: '18rem', margin: 'auto' }}>
            <Card.Body>
              <Card.Title>Booking Details</Card.Title>
              <Card.Text>
                {/* details from previous page to render on card */}
                <p>room_type: {booking.roomType}</p>
                <p>check_In: {booking.checkInDate}</p>
                <p>check_out: {booking.checkOutDate}</p>
                <p>no_of_guests: {booking.numOfGuests}</p>
                <p>total_amount: {booking.totalAmount}</p>
                <p>Payment_type: {booking.paymentType}</p>
              </Card.Text>
              <Button variant="primary" onClick={() => handleEdit(booking.id)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(booking.id)}>Delete</Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
};

BookingDetailsPage.propTypes = {
  bookings: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    roomType: PropTypes.string.isRequired,
    checkInDate: PropTypes.string.isRequired,
    checkOutDate: PropTypes.string.isRequired,
    numOfGuests: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    paymentType: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookingDetailsPage;
