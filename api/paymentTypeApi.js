import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getPaymentTypes = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/payment-types`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export default getPaymentTypes;
