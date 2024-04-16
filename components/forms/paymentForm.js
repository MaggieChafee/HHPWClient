import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import getPaymentTypes from '../../api/paymentTypeApi';
import { closeOrder } from '../../api/ordersApi';

const initialState = {
  orderOpen: true,
  tipAmount: 0,
  paymentType: '',
  closedOn: '',
};
function PaymentForm({ orderObj }) {
  const [formInput, setFormInput] = useState(initialState);
  const [types, setTypes] = useState([]);
  const router = useRouter();

  const getTypes = () => {
    getPaymentTypes().then(setTypes);
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

    const payload = {
      ...formInput,
      id: orderObj.id,
      closedOn: Date.now(),
      orderOpen: false,
    };
    closeOrder(payload).then(() => router.push('/'));
  };

  return (
    <>
      <Form>
        <Form.Label>Tip Amount</Form.Label>
        <Form.Control
          type="number"
          id="inputPassword5"
          aria-describedby="passwordHelpBlock"
          name="tipAmount"
          value={formInput.tipAmount}
          onChange={handleChange}
        />
        <Form.Group className="mb-3">
          <Form.Label htmlFor="inputPassword5">Payment Type</Form.Label>
          <Form.Select type="select" aria-label="Default select example" name="paymentType" value={formInput.paymentType} onChange={handleChange}>
            <option>Open this select menu</option>
            {types.map((pt) => (
              <option key={pt.id} value={pt.name}>{pt.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </>
  );
}

PaymentForm.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
  }).isRequired,
};

export default PaymentForm;
