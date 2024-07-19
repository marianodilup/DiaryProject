import React, { useState } from "react";
import "./Login.scss";
import { getDataFromApiUser } from "../Services/UserApi";
import { useNavigate } from "react-router-dom";

function Login({ setUserData, userData }) {
  const [user, setUser] = useState({ email: "", password: "" });

  const navigate = useNavigate();

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
      const data = await getDataFromApiUser(user);
      localStorage.setItem("user", JSON.stringify(data));
      setUserData(data);
      if(userData.email === user.email && userData.password === user.password){ 
return navigate("/ListPost");
      }
      
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
