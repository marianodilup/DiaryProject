import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
   <header>
    <nav>
     <Link to="/"> Login </Link>
     <Link to="/ListPost"> Mi diario</Link>
     <Link to="/CreatePost"> Crear nueva entrada</Link>
     <Link to="/register"> Registro</Link>
    </nav>
   </header>
  )
}

export default Header