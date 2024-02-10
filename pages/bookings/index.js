// // AllBookingsPage.js
// import { useEffect, useState } from 'react';
// import { useRouter } from 'next/router';
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
//       <h1>My Bookings</h1>
//       {bookings.length > 0 ? (
//         <div className="booking-cards">
//           {bookings.map((booking) => {
//             // if errors on checkinDate and checkoutDate- see Abby's code
//             const checkInDate = new Date(booking.checkInDate);
//             const checkOutDate = new Date(booking.checkOutDate);
//             const numberOfDays = Math.ceil((checkOutDate - checkInDate) / (1000 * 60 * 60 * 24)); // Calc number of days stayed??? stackoverflow example
//             const totalAmount = booking.totalAmount * numberOfDays; // Adjust total amount based on number of days stayed

//             return (
//               <BookingCard
//                 booking={{ ...booking, numberOfDays, totalAmount }} // do I need anything else here
//                 // onDelete={handleDelete}
//               />

//             );
//           })}
//         </div>
//       ) : (
//         <p>No bookings yet </p>
//       )}
//     </div>
//   );
// }

// export default AllBookingsPage;
