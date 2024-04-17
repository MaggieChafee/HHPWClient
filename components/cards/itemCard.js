/* eslint-disable @next/next/no-img-element */
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
    addItemsToOrder(payload).then(() => router.push(`/orders/details/${id}`));
  };

  return (
    <Card className="card-with-image" style={{ width: '18rem' }}>
      <img src={itemObj.itemPicture} alt="item" height="125" width="100" />
      <Card.Body className="card-content">
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
