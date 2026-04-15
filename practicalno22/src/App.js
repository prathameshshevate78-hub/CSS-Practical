import React from "react";
import "./App.css";              // CSS Stylesheet
import styles from "./style.module.css"; // CSS Module

function App() {
  return (
    <div style={{ padding: "20px" }}>

      <h2>React CSS Approaches</h2>

      {/* 1. Inline Styling */}
      <h3 style={{ color: "blue" }}>
        This is Inline Styling
      </h3>

      {/* 2. External CSS */}
      <p className="external">
        This is External CSS Stylesheet
      </p>

      {/* 3. CSS Module */}
      <p className={styles.moduleText}>
        This is CSS Module Styling
      </p>

    </div>
  );
}

export default App;