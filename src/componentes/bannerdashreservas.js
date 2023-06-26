import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function BannerdashReservas() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastroreserva/:id"}>
    <input className="buttonMain" type="button" value="Nova Reserva" />
    </Link>
     
    
    </div>
  );
}

export default BannerdashReservas;