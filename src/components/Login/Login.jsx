import React, { useState } from "react";
//import { userAPIjsx } from "../services/userapi.jsx";
import "./Login.scss";

function Login({ setUserData }) {
  const [user, setUser] = useState({ username: "", password: "" });

  const handleInput = (ev) => {
    const { id, value } = ev.target;
    setUser((prevUser) => ({
      ...prevUser,
      [id]: value,
    }));
  };

  const handleForm = async (ev) => {
    ev.preventDefault();
    try {
      const data = await userAPIjsx(user);
      localStorage.setItem("user", JSON.stringify(data));
      setUserData(data);
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleForm}>
        <label htmlFor="username">Nombre de usuario</label>
        <input
          type="text"
          id="username"
          value={user.username}
          onChange={handleInput}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={handleInput}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
