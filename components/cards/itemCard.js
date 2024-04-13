import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function ItemCard({ itemObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={itemObj.itemPicture} />
      <Card.Body>
        <Card.Title>{itemObj.itemName}</Card.Title>
        <Card.Subtitle>{itemObj.itemPrice}</Card.Subtitle>
        <Card.Link href="#">Add to Order</Card.Link>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemPicture: PropTypes.string,
  }).isRequired,
};
export default ItemCard;
