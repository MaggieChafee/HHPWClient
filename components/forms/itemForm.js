import React, { useEffect, useState } from 'react';
import ItemCard from '../cards/itemCard';
import { getItems } from '../../api/itemsApi';

function ItemForm() {
  const [items, setItems] = useState([]);

  const getAllItems = () => {
    getItems().then(setItems);
  };

  useEffect(() => {
    getAllItems();
  }, []);

  return (
    <>
      <div className="card-container">
        {items.map((item) => (
          <ItemCard key={item.id} itemObj={item} />
        ))}
      </div>
    </>
  );
}

export default ItemForm;
