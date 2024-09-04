import React from 'react';

function ItemList({ items, deleteItem, editItem }) {
  return (
    <ul className='todo-list' >
      {items.map((item) => (
        <li key={item.id} style={{display:'flex',justifyContent:'space-between',alignItems:'center', margin:'15px'}}>
          {item.name}
          <div id='liBtn'>
              <button onClick={() => editItem(item)}>Edit</button>
              <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;
