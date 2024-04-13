/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { getSingleOrder } from '../../../api/ordersApi';
import { getOrderItemsForASingleOrder } from '../../../api/itemsApi';
import ItemCard from '../../../components/cards/itemCard';

function ViewSingleOrder() {
  const [orderDetails, setOrderDetails] = useState({});
  const [items, setItems] = useState([]);
  const router = useRouter();
  const { id } = router.query;

  const getDetails = () => {
    getSingleOrder(id).then(setOrderDetails);
  };

  const getOrdersItems = () => {
    getOrderItemsForASingleOrder(id).then(setItems);
  };

  useEffect(() => {
    getDetails();
    getOrdersItems();
  }, [id]);

  return (
    <div>
      <h1>{orderDetails.name}</h1>
      <br />
      <div>
        <h4>Customer Information</h4>
        <p>{orderDetails.email}</p>
        <p>{orderDetails.phoneNumber}</p>
      </div>
      <div>
        <h4>Order Information</h4>
        <p>{orderDetails.orderType}</p>
        <p>{orderDetails.orderOpen ? 'OPEN' : 'CLOSED' }</p>
      </div>
      <div>
        <Button>Edit Order</Button>
        <Button>Delete</Button>
        <Button>Go to Payment</Button>
      </div>
      <div>
        {items?.map((orderItem) => (
          <ItemCard key={orderItem.id} itemObj={orderItem} />
        ))}
      </div>
    </div>
  );
}

export default ViewSingleOrder;