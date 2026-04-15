import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  // Handle input change (real-time update)
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>Real-Time React Form</h2>

      <form>

        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /><br />

        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br /><br />

        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br /><br />

      </form>

      <hr />

      {/* Real-time display */}
      <h3>Live Preview</h3>
      <p><b>Name:</b> {formData.name}</p>
      <p><b>Email:</b> {formData.email}</p>
      <p><b>Password:</b> {formData.password}</p>

    </div>
  );
}

export default App;
