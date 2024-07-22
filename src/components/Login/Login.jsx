import React, { useState } from "react";
import "./Login.scss";
import { getDataFromApiUser } from "../Services/UserApi";
import { useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  email: "", 
  password: ""
};

function Login({ setUserData }) {

  const [user, setUser] = useState(INITIAL_STATE);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (ev) => {
    setUser({...user, [ev.target.id]: ev.target.value});
  };

    const handleForm = (ev) => {
      ev.preventDefault();
      getDataFromApiUser(user).then((data) => {
        console.log(data);      
        if (data.success) {
          localStorage.setItem("user", JSON.stringify(data.token));
          setUserData(data.token);
          navigate("/ListPost");
        } else {
          setError(data.message);
        }    
      });
    };

  return (
    <div className="login-container">
      <form onSubmit={handleForm}>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={user.email}
          onChange={handleInput}
        />
        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          id="password"
          value={user.password}
          onChange={handleInput}
        />
        <p className={error ? "error-message" : "no-error"}>{error}</p>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
