import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteItemFromOrder } from '../../api/itemsApi';

function OrderItemCard({ orderItemObj, onUpdate }) {
  const router = useRouter();
  const { id } = router.query;

  const deleteThisItem = () => {
    const itemId = orderItemObj.id;
    if (window.confirm(`Do you want to delete ${orderItemObj.item.itemName} from this order?`)) {
      deleteItemFromOrder(itemId, id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{orderItemObj.item.itemName}</Card.Title>
        <Card.Subtitle>{orderItemObj.item.itemPrice}</Card.Subtitle>
        <Card.Text>
          {orderItemObj.notes}
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link onClick={deleteThisItem}>Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

OrderItemCard.propTypes = {
  orderItemObj: PropTypes.shape({
    notes: PropTypes.string,
    id: PropTypes.number,
    item: PropTypes.shape({
      itemName: PropTypes.string,
      itemPrice: PropTypes.number,
    }).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default OrderItemCard;
