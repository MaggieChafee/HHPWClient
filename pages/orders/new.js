import React from 'react';
import OrderForm from '../../components/forms/orderForm';

export default function CreateOrder() {
  return (
    <div className="page-container">
      <h1>Start an Order</h1>
      <div>
        <OrderForm />
      </div>
    </div>
  );
}
