import React, { useState } from "react";
import { registerUser } from "../Services/UserApi";
import "./Register.scss"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerCompleted, setRegisterCompleted] = useState("");
  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(formData).then((data) => {
      console.log(data);
      
      if (data.data.name && data.data.email && data.data.password) {
        setRegisterCompleted("¡Te has registrado correctamente!");
        setFormData({
          name: "",
          email: "",
          password: "",
        })
      } 
    })
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <p className={registerCompleted ? "success-message" : "no-success"}>{registerCompleted}</p>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
