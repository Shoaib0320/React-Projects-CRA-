import React, { useState, useEffect } from 'react';

function ItemForm({ addItem, currentItem, isEditing, updateItem }) {
  const [item, setItem] = useState(currentItem);

  useEffect(() => {
    setItem(currentItem);
  }, [currentItem]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      updateItem(item);
    } else {
      addItem(item);
    }
    setItem({ id: null, name: '' });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        name="name" 
        value={item.name} 
        onChange={handleInputChange} 
        placeholder="Enter item name" 
        required 
      />
      <button type="submit">{isEditing ? 'Update' : 'Add'} Item</button>
    </form>
  );
}

export default ItemForm;
