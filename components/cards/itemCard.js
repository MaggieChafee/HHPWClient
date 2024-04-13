import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ItemCard({ itemObj }) {
  return (
    <Card style={{ width: '400px' }}>
      <Card.Body>
        <Card.Title>{itemObj.itemName}</Card.Title>
        <Card.Text>
          {itemObj.itemPrice}
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
  }).isRequired,
};
export default ItemCard;
