import React from "react";
import Navbar from "../componentes/navbar";
import BannerdashUnidades from "../componentes/bannerdashunidade";
import Buttons from "../componentes/button";
import DashboardUnidade from "../componentes/dashboardunidade";

function Unidade(){

    return(
        <div>
            <Navbar/>
            <br></br>
            <BannerdashUnidades/>
            <br></br>
            <br></br>
            <Buttons/>
            <DashboardUnidade/>

        </div>
    )
}

export default Unidade;