import React, { useEffect, useState } from 'react';
import { getAllOrders } from '../../api/ordersApi';
import OrderCard from '../../components/cards/orderCard';

function ViewAllOrders() {
  const [orders, setOrders] = useState([]);
  const getOrders = () => {
    getAllOrders().then(setOrders);
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div>
      <h1>All Orders</h1>
      <div>
        {orders.map((order) => (
          <OrderCard key={order.id} orderObj={order} />
        ))}
      </div>
    </div>
  );
}

export default ViewAllOrders;
