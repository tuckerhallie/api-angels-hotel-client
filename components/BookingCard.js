// // import PropTypes from 'prop-types';
// // import { useRouter } from 'next/router';

// // function BookingCard({ booking, onDelete }) {
// //   const {
// //     hotelName,
// //     roomType,
// //     checkInDate,
// //     checkOutDate,
// //     numOfGuests,
// //     totalAmount,
// //     paymentType,
// //   } = booking;

// //   const router = useRouter();

// //   return (
// //     <div className="booking-card">
// //       <h2>{hotelName}</h2>
// //       <p>room_type: {roomType}</p>
// //       <p>check_in: {checkInDate}</p>
// //       <p>check_out: {checkOutDate}</p>
// //       <p>no_of_guests: {numOfGuests}</p>
// //       <p>total_amount: {totalAmount}</p>
// //       <p>payment_type: {paymentType}</p>

// //       {/* <div className="booking-card-buttons">
// //         <button type="button" onClick={handleEdit}>Edit</button>
// //         <button type="button" onClick={handleDelete}>Delete</button>
// //       </div> */}
// //     </div>
// //   );
// // }

// // BookingCard.propTypes = {
// //   bookingObj: PropTypes.shape({
// //     id: PropTypes.string.isRequired,
// //     roomId: PropTypes.string.isRequired,
// //     hotelName: PropTypes.string.isRequired,
// //     roomType: PropTypes.string.isRequired,
// //     checkInDate: PropTypes.string.isRequired,
// //     checkOutDate: PropTypes.string.isRequired,
// //     numOfGuests: PropTypes.number.isRequired,
// //     totalAmount: PropTypes.number.isRequired,
// //     paymentType: PropTypes.string.isRequired,
// //   }).isRequired,
// //   onUpdate: PropTypes.func.isRequired,
// // };

// // export default BookingCard;

// import React from 'react';
// import PropTypes from 'prop-types';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Link from 'next/link';
// import { deleteSingleBooking } from '../api/bookingData';

// function BookingCard({ bookingObj, onUpdate }) {
//   const deleteThisBooking = () => {
//     if (window.confirm(`Delete ${bookingObj.roomId}?`)) {
//       deleteSingleBooking(bookingObj.id).then(() => onUpdate());
//     }
//   };

//   return (
//     <Card style={{ width: '18rem', margin: '10px' }}>
//       <div className="booking-card">
//         <Card.Body>
//           <h2>{hotelName}</h2>
//           <p>room_type: {roomType}</p>
//           <p>check_in: {checkInDate}</p>
//           <p>check_out: {checkOutDate}</p>
//           <p>no_of_guests: {numOfGuests}</p>
//           <p>total_amount: {totalAmount}</p>
//           <p>payment_type: {paymentType}</p>

//           <Link href={`/bookings/new/${bookingObj.id}`} passHref>
//             <Button variant="info">EDIT</Button>
//           </Link>
//           <Button variant="danger" onClick={deleteThisBooking} className="m-2">
//             DELETE
//           </Button>
//         </Card.Body>
//       </div>
//     </Card>
//   );
// }

// BookingCard.propTypes = {
//   bookingObj: PropTypes.shape({
//     id: PropTypes.string.isRequired,
//     roomId: PropTypes.string.isRequired,
//     hotelName: PropTypes.string.isRequired,
//     roomType: PropTypes.string.isRequired,
//     checkInDate: PropTypes.string.isRequired,
//     checkOutDate: PropTypes.string.isRequired,
//     numOfGuests: PropTypes.number.isRequired,
//     totalAmount: PropTypes.number.isRequired,
//     paymentType: PropTypes.string.isRequired,
//   }).isRequired,
//   onUpdate: PropTypes.func.isRequired,
// };

// export default BookingCard;
