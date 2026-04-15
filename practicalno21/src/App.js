import React from "react";

function App() {

  // Array of items
  const fruits = ["Apple", "Banana", "Mango", "Orange"];

  return (
    <div style={{ padding: "30px" }}>
      <h2>Render List using map() in React</h2>

      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
