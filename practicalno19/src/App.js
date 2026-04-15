import React, { useState } from "react";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Validation function
  const validate = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }

    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Form Submitted Successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h2>React Form Validation</h2>

      <form onSubmit={handleSubmit}>

        {/* Name */}
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errors.name}</span>
        <br />

        {/* Email */}
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errors.email}</span>
        <br />

        {/* Password */}
        Password:
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <br />
        <span style={{ color: "red" }}>{errors.password}</span>
        <br /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;