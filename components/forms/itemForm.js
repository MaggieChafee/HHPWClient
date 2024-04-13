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
      <div>
        <h1>Add an Item</h1>
      </div>
      <div>
        {items.map((item) => (
          <ItemCard key={item.id} itemObj={item} />
        ))}
      </div>
      <div>
        <h1>Selected Items</h1>
      </div>
    </>
  );
}

export default ItemForm;
