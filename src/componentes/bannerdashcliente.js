import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function Bannerdashcliente() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastrocliente/:id"}>
    <input className="buttonMain" type="button" value="Novo Cliente" />
    </Link>
     
    
    </div>
  );
}

export default Bannerdashcliente;