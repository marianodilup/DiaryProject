import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <header>
      <nav>
        <Link to="/ListPost"><img className="logo" src="../../src/images/LogoMyDiary.png" alt="" /></Link>
        <div className={`menu ${menuOpen ? "active" : ""}`}>
          <Link to="/ListPost"> Mi diario</Link>
          <Link to="/CreatePost"> Crear nueva entrada</Link>
          <Link to="/logout"> Cerrar sesión</Link>
        </div>
        <div className="hamburguer" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
      </nav>
    </header>
  );
}

export default Header;
