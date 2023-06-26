import React from "react";

import './stylesdash.css';
import { Link } from "react-router-dom";



function Bannerdash() {
  return (
    <div className="main">
      <h1 className="titleMain">BarberTime Dashboard</h1>
    <Link to={"/cadastrofunci/:id"}>
    <input className="buttonMain" type="button" value="Novo Funcionário" />
    </Link>
     
    
    </div>
  );
}

export default Bannerdash;

