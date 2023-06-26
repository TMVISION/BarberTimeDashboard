import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function BannerdashUnidades() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastrounidade/:id"}>
    <input className="buttonMain" type="button" value="Nova Unidade" />
    </Link>
     
    
    </div>
  );
}

export default BannerdashUnidades;