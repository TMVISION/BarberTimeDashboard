import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function BannerdashGaleria() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastrogaleria/:id"}>
    <input className="buttonMain" type="button" value="Nova Imagem" />
    </Link>
     
    
    </div>
  );
}

export default BannerdashGaleria;