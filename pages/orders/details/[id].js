/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getSingleOrder } from '../../../api/ordersApi';
import { getOrderItemsForASingleOrder } from '../../../api/itemsApi';
import OrderItemCard from '../../../components/cards/orderItemCard';

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
        <Link href={`../edit/${id}`} passHref>
          <Button>Edit Order</Button>
        </Link>
        <Link href={`../add/${id}`} passHref>
          <Button>
            Add Item to Order
          </Button>
        </Link>
        <Button>Go to Payment</Button>
      </div>
      <div>
        {items?.map((orderItem) => (
          <OrderItemCard key={orderItem.id} orderItemObj={orderItem} onUpdate={getOrdersItems} />
        ))}
      </div>
    </div>
  );
}

export default ViewSingleOrder;
