import React, { useState } from "react";
import { userAPIjsx } from "../services/userapi.jsx";

const INITIAL_STATE = {
  username: "",
  password: "",
};

function Login({ setUserData }) {
  const [user, setUser] = useState(INITIAL_STATE);

  const handleInput = (ev) => {
    setUser({ ...user, [ev.target.id]: ev.target.value });
  };

  const handleForm = (ev) => {
    ev.preventDefault();
    console.log(user);
    userAPIjsx(user).then((data) => {
      localStorage.setItem("user", JSON.stringify(data));
      setUserData(data);
    });
  };

  return (
    <div>
      <form onChange={handleInput} onSubmit={handleForm}>
        <label htmlFor="username">Nombre de usuario</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
