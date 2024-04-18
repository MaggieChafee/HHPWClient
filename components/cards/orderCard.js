/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { deleteSingleOrder } from '../../api/ordersApi';

function OrderCard({ orderObj, onUpdate }) {
  const deleteThisOrder = () => {
    if (window.confirm(`Do you want to delete this order for ${orderObj.name}?`)) {
      deleteSingleOrder(orderObj.id).then(() => onUpdate());
    }
  };

  const deleteBtn = orderObj.orderOpen ? <FontAwesomeIcon icon={faTrash} style={{ color: '#ffffff' }} /> : '';
  const editBtn = orderObj.orderOpen ? <FontAwesomeIcon icon={faPen} style={{ color: '#ffffff' }} /> : '';

  const openOrClosed = orderObj.orderOpen ? 'open' : 'closed';
  return (
    <Card className={openOrClosed} bg="dark" text="white" style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{orderObj.name}</Card.Title>
        <Card.Subtitle text="white">{orderObj.orderOpen ? 'OPEN' : 'CLOSED'}</Card.Subtitle>
        <br />
        <Card.Text>
          {orderObj.orderType}<br />
          {orderObj.phoneNumber}<br />
          {orderObj.email}<br />
        </Card.Text>
        <div className="btn-display">
          <Link href={`/orders/details/${orderObj.id}`} passHref>
            <Button variant="dark">View</Button>
          </Link>
          <div width="100" />
          <Card.Link href={`/orders/edit/${orderObj.id}`}>{editBtn}</Card.Link>
          <Card.Link onClick={deleteThisOrder}>{deleteBtn}</Card.Link>
        </div>
      </Card.Body>
    </Card>
  );
}

OrderCard.propTypes = {
  orderObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    phoneNumber: PropTypes.string,
    email: PropTypes.string,
    orderType: PropTypes.string,
    orderOpen: PropTypes.bool,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderCard;
