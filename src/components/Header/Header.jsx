import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/ListPost"> Mi diario</Link>
        <Link to="/CreatePost"> Crear nueva entrada</Link>
        <Link to="/logout"> Cerrar sesión</Link>
      </nav>
    </header>
  );
}

export default Header;
