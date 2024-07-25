import React, { useState } from "react";
import { registerUser } from "../Services/UserApi";
import "./Register.scss";
import { Link, Navigate } from "react-router-dom";
import Logo from "../../images/LogoMyDiary.png"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [registerCompleted, setRegisterCompleted] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);

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
        });
      }
    });
  };

  const handleLoginRedirect = () => {
    setRedirectToLogin(true);
  };

  if (redirectToLogin) {
    return <Navigate to="/" />;
  }

  return (
    <div className="register-wrapper">
      <div className="register-container">
        <div className="form-container">
          <h2></h2>
          <img src={Logo} alt="Logo" />
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="register-label">
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="register-label">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <div>
              <label htmlFor="password" className="register-label">
                Contraseña:
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="register-input"
              />
            </div>
            <p className={registerCompleted ? "success-message" : "no-success"}>
              {registerCompleted}
            </p>
            <button type="submit" className="register-btn">
              Registrate
            </button>
            <p className="iniciar-sesion">
              ¿Ya tienes una cuenta? <Link to="/">Inicia sesión</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
