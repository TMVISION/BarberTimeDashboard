import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function BannerdashUser() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastrouser"}>
    <input className="buttonMain" type="button" value="Novo Usuario" />
    </Link>
     
    
    </div>
  );
}

export default BannerdashUser;