import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSingleOrder } from '../../../api/ordersApi';
import OrderForm from '../../../components/forms/orderForm';

function EditOrderDetails() {
  const [editOrder, setEditOrder] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleOrder(id).then(setEditOrder);
  }, [id]);

  return (
    <>
      <div>
        <h1>Edit Order</h1>
        <OrderForm orderObj={editOrder} />
      </div>
    </>
  );
}

export default EditOrderDetails;
