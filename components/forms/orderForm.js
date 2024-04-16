/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import getOrderTypes from '../../api/orderTypeApi';
import { createOrder } from '../../api/ordersApi';

const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  orderType: '',
  orderOpen: true,
};

function OrderForm() {
  const [formInput, setFormInput] = useState(initialState);
  const [types, setTypes] = useState([]);
  const router = useRouter();

  const getTypes = () => {
    getOrderTypes().then(setTypes);
  };

  useEffect(() => {
    getTypes();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...formInput };
    createOrder(payload).then(() => router.push('/orders/all'));
  };

  return (
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control type="text" name="name" value={formInput.name} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Customer Phone Number</Form.Label>
        <Form.Control type="text" name="phoneNumber" value={formInput.phoneNumber} onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" name="email" value={formInput.email} onChange={handleChange} />
      </Form.Group>
      <Form.Label>Category</Form.Label>
      <Form.Select
        aria-label="OrderType"
        name="orderType"
        className="mb-3"
        onChange={handleChange}
        value={formInput.orderType}
        required
      >
        <option>Select an Order Type</option>
        {
            types.map((ot) => (
              <option
                key={ot.id}
                value={ot.name}
              >
                {ot.name}
              </option>
            ))
          }
      </Form.Select>
      <Button variant="primary" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default OrderForm;
