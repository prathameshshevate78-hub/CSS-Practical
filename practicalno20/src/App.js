import React, { useState } from "react";

function App() {

  const [items, setItems] = useState(["Apple", "Banana", "Mango"]);

  // Add item
  const addItem = () => {
    const newItem = "Item " + (items.length + 1);
    setItems([...items, newItem]);
  };

  // Remove item
  const removeItem = (index) => {
    const updated = items.filter((_, i) => i !== index);
    setItems(updated);
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>React List Manipulation</h2>

      <button onClick={addItem}>Add Item</button>

      <hr />

      {/* Without Key */}
      <h3>List Without Key (Not Recommended)</h3>
      <ul>
        {items.map((item, index) => (
          <li>
            {item}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <hr />

      {/* With Key */}
      <h3>List With Key (Recommended)</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;