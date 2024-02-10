// // AllBookingsPage.js
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
// import { Card } from 'react-bootstrap';
// import BookingCard from '../../components/BookingCard';
// import { getBookings } from '../../api/bookingData';

// function AllBookingsPage() {
//   const [bookings, setBookings] = useState([]);
//   const router = useRouter();

//   useEffect(() => {
//     getBookings().then((data) => {
//       setBookings(data);
//     });
//   }, []);

//   return (
//     <div className="all-bookings-page">
//       <Card style={{ width: '18rem' }} className="card-color">
//         <Card.Body>
//           <h1>My Bookings</h1>
//           {bookings.length > 0 ? (
//             bookings.map((booking) => {
//               const checkInDate = new Date(booking.checkInDate);
//               const checkOutDate = new Date(booking.checkOutDate);
//               const numberOfDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24));
//               return (
//                 <BookingCard
//                   room_type={booking.roomType}
//                   ={booking.checkInDate}
//                   checkOutDate={booking.checkOutDate}
//                   numOfGuests={booking.numOfGuests}
//                   totalAmount={booking.totalAmount}
//                   paymentType={booking.paymentType}
//                   numberOfDays={numberOfDays}
//                 />
//               );
//             })
//           ) : (
//             <p>No bookings yet</p>
//           )}
//         </Card.Body>
//       </Card>
//     </div>
//   );
// }

// export default AllBookingsPage;

// BookingDetailsPage.js
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useRouter } from 'next/router';

const BookingDetailsPage = ({ bookingDetails }) => {
  const router = useRouter();

  // Function to handle navigation to the BookingForm page for editing
  const handleEdit = () => {
    // Navigate to the BookingForm page for editing
    router.push(`/edit/${bookingDetails.id}`);
  };

  return (
    <div className="booking-details-page">
      <Card style={{ width: '18rem', margin: 'auto' }}>
        <Card.Body>
          <Card.Title>Booking Details</Card.Title>
          <Card.Text>
            <p>room_type: {bookingDetails.roomType}</p>
            <p>check_In: {bookingDetails.checkInDate}</p>
            <p>check_out: {bookingDetails.checkOutDate}</p>
            <p>no_of_guests: {bookingDetails.numOfGuests}</p>
            <p>total_amount: {bookingDetails.totalAmount}</p>
            <p>Payment_type: {bookingDetails.paymentType}</p>
          </Card.Text>
          <Button variant="primary" onClick={handleEdit}>Edit</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

BookingDetailsPage.propTypes = {
  bookingDetails: PropTypes.shape({
    id: PropTypes.number.isRequired,
    roomType: PropTypes.string.isRequired,
    checkInDate: PropTypes.string.isRequired,
    checkOutDate: PropTypes.string.isRequired,
    numOfGuests: PropTypes.number.isRequired,
    totalAmount: PropTypes.number.isRequired,
    paymentType: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookingDetailsPage;
