import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function OrderCard({ orderObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{orderObj.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{orderObj.orderOpen ? 'OPEN' : 'CLOSED'}</Card.Subtitle>
        <Card.Text>
          {orderObj.phoneNumber}
          {orderObj.email}
          {orderObj.orderType}
        </Card.Text>
        <Card.Link href={`/orders/details/${orderObj.id}`}>View</Card.Link>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
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
};

export default OrderCard;
