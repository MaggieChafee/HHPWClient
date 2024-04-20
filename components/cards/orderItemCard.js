/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { Button, Form, Modal } from 'react-bootstrap';
import { deleteItemFromOrder, updateOrderItem } from '../../api/itemsApi';

const initialState = {
  notes: '',
};
function OrderItemCard({ orderItemObj, onUpdate }) {
  const [show, setShow] = useState(false);
  const [formInput, setFormInput] = useState(initialState);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (orderItemObj.id) setFormInput(orderItemObj);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => (
      {
        ...prevState,
        [name]: value,
      }
    ));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const payload = { ...formInput };
    updateOrderItem(payload).then(handleClose).then(() => onUpdate());
  };

  const deleteThisItem = () => {
    if (window.confirm(`Do you want to delete ${orderItemObj.item.itemName} from this order?`)) {
      deleteItemFromOrder(orderItemObj.id).then(() => onUpdate());
    }
  };

  return (
    <>
      <Card className="item" style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{orderItemObj.item.itemName}</Card.Title>
          <Card.Subtitle>${orderItemObj.item.itemPrice}</Card.Subtitle>
          <Card.Text>
            {orderItemObj.notes}
          </Card.Text>
          <div className="btn-order-details">
            <Button variant="dark" className="btn-order-card" onClick={deleteThisItem}>
              Delete
            </Button>
            <Button variant="dark" className="btn-order-card" onClick={handleShow}>
              Edit
            </Button>
          </div>
        </Card.Body>
      </Card>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{orderItemObj.item.itemName} ${orderItemObj.item.itemPrice}</Modal.Title>
        </Modal.Header>
        <div>
          <Form className="modal-form">
            <Form.Label>Add Note</Form.Label>
            <Form.Control type="text-area" name="notes" value={formInput.notes} onChange={handleChange} />
          </Form>
        </div>
        <Modal.Footer>
          <Button variant="dark" className="btn-order-card" onClick={handleSubmit}>Save</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

OrderItemCard.propTypes = {
  orderItemObj: PropTypes.shape({
    notes: PropTypes.string,
    id: PropTypes.number,
    orderId: PropTypes.number,
    item: PropTypes.shape({
      itemName: PropTypes.string,
      itemPrice: PropTypes.number,
    }).isRequired,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default OrderItemCard;
