import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function BannerdashServicos() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastroservicos/:id"}>
    <input className="buttonMain" type="button" value="Novo Serviço" />
    </Link>
     
    
    </div>
  );
}

export default BannerdashServicos;