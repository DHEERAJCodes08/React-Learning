import React, { useState } from "react";

function ListItemComponent() {
  const [items, updateItems] = useState([]);

  const additem = () => {
    updateItems([...items, `Item${items.length + 1}`]);
  };

  return (
    <div>
      <button onClick={additem}>Add Item </button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
export default ListItemComponent;
