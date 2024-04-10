import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getItems = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderItemsForASingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}/order-items`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const addItemsToOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/add-to-order/${payload.orderId}/item/${payload.itemId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteItemsToOrder = (orderItemId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/delete-item/${orderItemId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getOrderItemsForASingleOrder, getItems, addItemsToOrder, deleteItemsToOrder,
};
