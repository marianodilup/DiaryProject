import React, { useState } from "react";
import "./Login.scss";
import { getDataFromApiUser } from "../Services/UserApi";
import { Link, useNavigate } from "react-router-dom";

const INITIAL_STATE = {
  email: "",
  password: "",
};

function Login({ setUserData }) {
  const [user, setUser] = useState(INITIAL_STATE);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleInput = (ev) => {
    setUser({ ...user, [ev.target.id]: ev.target.value });
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
    <>
      <div className="login-container">
        <figure className="logo-landing">
          <img className="logo" src="../../src/images/LogoMyDiary.png" />
        </figure>
        <form className="form-container" onSubmit={handleForm}>
          <label className="login-label" htmlFor="email">
            Email
          </label>
          <input
            className="login-input"
            type="text"
            id="email"
            value={user.email}
            onChange={handleInput}
          />
          <label className="login-label" htmlFor="password">
            Contraseña
          </label>
          <input
            className="login-input"
            type="password"
            id="password"
            value={user.password}
            onChange={handleInput}
          />
          <p className={error ? "error-message" : "no-error"}>{error}</p>
          <button className="login-btn" type="submit">
            Iniciar sesión
          </button>
          <p className="register-info">
            {" "}
            ¿Todavía no tienes cuenta?<Link to="/register"> Regístrate </Link>
          </p>
        </form>
      </div>
    </>
  );
}

export default Login;
