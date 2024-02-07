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

const createNewBooking = (newBookingPayload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/bookings.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newBookingPayload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getUserRoom = (userId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms?userId=${userId}`, {
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
  getUserRoom,
};
