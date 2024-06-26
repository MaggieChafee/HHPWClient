/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { getOrderTotal, getSingleOrder } from '../../../api/ordersApi';
import { getOrderItemsForASingleOrder } from '../../../api/itemsApi';
import OrderItemCard from '../../../components/cards/orderItemCard';

function ViewSingleOrder() {
  const [orderDetails, setOrderDetails] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const router = useRouter();
  const { id } = router.query;

  const getTotal = () => {
    getOrderTotal(id).then(setTotal);
  };

  const getDetails = () => {
    getSingleOrder(id).then(setOrderDetails);
  };

  const getOrdersItems = () => {
    getTotal();
    getOrderItemsForASingleOrder(id).then(setItems);
  };

  useEffect(() => {
    getDetails();
    getOrdersItems();
    // getTotal();
  }, [id]);

  return (
    <div className="page-container-order-details">
      <div className="order-details-container">
        <h1>{orderDetails.name}</h1>
        <br />
        <div>
          <h4>Customer Information</h4>
          <p>Email: {orderDetails.email}</p>
          <p>Phone Number: {orderDetails.phoneNumber}</p>
        </div>
        <div>
          <h4>Order Information: </h4>
          <p>Order Type: {orderDetails.orderType}</p>
          <p>Order Status: {orderDetails.orderOpen ? 'OPEN' : 'CLOSED' }</p>
        </div>
        <div className="btn-order-details"> {orderDetails.orderOpen ? (
          <>
            <Link href={`../edit/${id}`} passHref>
              <Button variant="dark" className="btn-order-card">Edit Order</Button>
            </Link>
          </>
        ) : ''}
        </div>
      </div>
      <div className="order-details-container">
        <h4>Order Total: ${total}</h4>
        <div style={{ height: '15px' }} />
        <div className="btn-order-details"> {orderDetails.orderOpen ? (
          <>
            <Link href={`../add/${id}`} passHref>
              <Button variant="dark" className="btn-order-card" style={{ width: '18rem' }}>
                Add Item to Order
              </Button>
            </Link>
            <Link href={`../closeOrder/${id}`} passHref>
              <Button variant="dark" className="btn-order-card" style={{ width: '18rem' }}>
                Go to Payment
              </Button>
            </Link>
          </>
        ) : ''}
        </div>
        <br />
        <div className="card-container-order-details">
          {items?.map((orderItem) => (
            <OrderItemCard key={orderItem.id} orderItemObj={orderItem} onUpdate={getOrdersItems} />
          ))}
        </div>
      </div>

    </div>
  );
}

export default ViewSingleOrder;
