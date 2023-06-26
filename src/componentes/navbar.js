import React from "react";
import "./stylesnav.css";
import Logo from '../imgs/logo preta.png';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navLogo">
        <img className="logoimg" src={Logo} alt="logo" />
        <p className="logoTitulo">BarberTime</p>
      </div>

      <div className="navLinks">
        <ul className="navUl">
          <Link to={"/reservas"}>
          <li className="navLi">
            <button className="linkNav">Reservas</button>
          </li>
          </Link>
        
          <Link to={"/clientes"}>
          <li className="navLi">
            <button className="linkNav">Clientes</button>
          </li>

          </Link>
         
          <Link to={"/home"}>

          <li className="navLi">
            <button className="linkNav">Funcionários</button>
          </li>
          </Link>
         
        </ul>
      </div>
    </div>
  );
}

export default Navbar;








