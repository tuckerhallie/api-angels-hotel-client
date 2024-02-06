import { clientCredentials } from '../utils/client';

const getRooms = () => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms`, {
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

const updateRooms = (payload) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms/${payload.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

const deleteSingleRoom = (id) => new Promise((resolve, reject) => {
  fetch(`${clientCredentials.databaseURL}/rooms`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export { getRooms, updateRooms, deleteSingleRoom };
