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
  fetch(`${clientCredentials.databaseURL}/bookings.json`, {
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

const updateBooking = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleBooking = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings/${id}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getBookings,
  deleteSingleBooking,
  updateBooking,
  createNewBooking,
  getBookingsByUser,
};
