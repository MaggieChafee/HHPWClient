import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { deleteItemFromOrder } from '../../api/itemsApi';

function ItemCard({ itemObj, onUpdate }) {
  const router = useRouter();
  const { id } = router.query;
  console.warn(router);
  const deleteThisItem = () => {
    const itemId = itemObj.id;
    if (window.confirm(`Do you want to delete ${itemObj.itemName} from this order?`)) {
      deleteItemFromOrder(itemId, id).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '400px' }}>
      <Card.Body>
        <Card.Title>{itemObj.itemName}</Card.Title>
        <Card.Text>
          {itemObj.itemPrice}
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link onClick={deleteThisItem}>Delete</Card.Link>
      </Card.Body>
    </Card>
  );
}

ItemCard.propTypes = {
  itemObj: PropTypes.shape({
    id: PropTypes.number,
    itemName: PropTypes.string,
    itemPrice: PropTypes.number,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
export default ItemCard;
