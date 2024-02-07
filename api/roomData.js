import { clientCredentials } from '../utils/client';

const getRooms = (hotelId) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms?hotelId=${hotelId} `, {
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

export default getRooms;
