import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllOrders = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    }).catch(reject);
});

const getSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const deleteSingleOrder = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}`, {
    method: 'Delete',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((data) => resolve(data))
    .catch(reject);
});

const createOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const closeOrder = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${payload.id}/close-order`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getOrderTotal = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/orders/${id}/order-total`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((r) => r.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getAllOrders, getSingleOrder, deleteSingleOrder, createOrder, updateOrder, closeOrder, getOrderTotal,
};
