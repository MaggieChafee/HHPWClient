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
    <div className="page-container">
      <div className="card-container">
        {orders.map((order) => (
          <OrderCard key={order.id} orderObj={order} onUpdate={getOrders} />
        ))}
      </div>
    </div>
  );
}

export default ViewAllOrders;
