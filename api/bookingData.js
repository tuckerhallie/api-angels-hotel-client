import { clientCredentials } from '../utils/client';

const getBookings = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const createNewBooking = (booking) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getBookingsByUser = (userId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const updateBooking = (booking) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings/${booking.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(booking),
  })
    .then(resolve)
    .catch(reject);
});

const deleteSingleBooking = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const getSingleBooking = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

export {
  getBookings,
  deleteSingleBooking,
  updateBooking,
  createNewBooking,
  getBookingsByUser,
  getSingleBooking,
};
