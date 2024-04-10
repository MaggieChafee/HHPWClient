import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getRevenue = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/revenue`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getRevenue;
