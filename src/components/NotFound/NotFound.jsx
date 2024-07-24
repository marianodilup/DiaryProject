import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.scss";

function NotFound({ userData }) {
  const navigate = useNavigate();
  const handleClick = () => {
    if (userData) {
      navigate("/ListPost");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="not-found-wrapper">
      <div className="not-found-container">
        <h2>¡La página que buscas no existe!</h2>
        <button onClick={handleClick}>Volver a la página principal</button>
        <img
          src="https://img.freepik.com/vector-gratis/fondo-error-404-estilo-plano_23-2147769559.jpg?t=st=1720548109~exp=1720551709~hmac=9e24f20b5f53e5a59bf923855678c81cc9cd61c94d8315e64bf16411971a0cfe&w=1380"
          alt="Página no encontrada"
        />
      </div>
    </div>
  );
}

export default NotFound;
