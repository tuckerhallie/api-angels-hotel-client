import { clientCredentials } from '../utils/client';

const getHotels = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/hotels`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(Object.values(data)))
    .catch(reject);
});

const getSingleHotel = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/hotels/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getHotels, getSingleHotel };
