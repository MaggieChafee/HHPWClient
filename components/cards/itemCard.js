import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import { addItemsToOrder } from '../../api/itemsApi';

function ItemCard({ itemObj }) {
  const router = useRouter();
  const { id } = router.query;
  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { itemId: itemObj.id, orderId: id };
    addItemsToOrder(payload);
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={itemObj.itemPicture} />
      <Card.Body>
        <Card.Title>{itemObj.itemName}</Card.Title>
        <Card.Subtitle>{itemObj.itemPrice}</Card.Subtitle>
        <Button onClick={handleSubmit}>
          Add To Order
        </Button>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
    itemPicture: PropTypes.string,
  }).isRequired,
};
export default ItemCard;
