import React, { useState } from "react";

function App() {

  // State 1: Counter
  const [count, setCount] = useState(0);

  // State 2: Name
  const [name, setName] = useState("");

  // State 3: Toggle (Show/Hide)
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div style={{ padding: "30px" }}>
      <h2>React Hooks - useState Example</h2>

      {/* Counter */}
      <h3>Counter: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>

      <hr />

      {/* Name Input */}
      <h3>Enter Name:</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name}</p>

      <hr />

      {/* Toggle Visibility */}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Message
      </button>

      {isVisible && <p>I Learn the CSS!!!</p>}

    </div>
  );
}

export default App;