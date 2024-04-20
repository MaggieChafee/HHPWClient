/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import getOrderTypes from '../../api/orderTypeApi';
import { createOrder, updateOrder } from '../../api/ordersApi';

const initialState = {
  name: '',
  phoneNumber: '',
  email: '',
  orderType: '',
  orderOpen: true,
};

function OrderForm({ orderObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [types, setTypes] = useState([]);
  const router = useRouter();

  const getTypes = () => {
    getOrderTypes().then(setTypes);
  };

  useEffect(() => {
    if (orderObj.id) setFormInput(orderObj);
    getTypes();
  }, [orderObj.id]);

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
    if (orderObj.id) {
      updateOrder(formInput).then(() => router.push('/orders/all'));
    } else {
      const payload = { ...formInput };
      createOrder(payload).then(() => router.push('/orders/all'));
    }
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
      <Button variant="dark" className="btn-order-card" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

OrderForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    orderType: PropTypes.string,
    orderOpen: PropTypes.bool,
  }),
};

OrderForm.defaultProps = {
  orderObj: initialState,
};

export default OrderForm;
