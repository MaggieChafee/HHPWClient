import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PaymentForm from '../../../components/forms/paymentForm';
import { getSingleOrder } from '../../../api/ordersApi';

function CloseOrder() {
  const [closeOrder, setCloseOrder] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    getSingleOrder(id).then(setCloseOrder);
  }, [id]);

  return (
    <>
      <div className="page-container">
        <h1>Close Order</h1>
        <PaymentForm orderObj={closeOrder} />
      </div>
    </>
  );
}

export default CloseOrder;
