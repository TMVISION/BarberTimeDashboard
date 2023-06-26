import React from "react";
import Navbar from "../componentes/navbar";
import Bannerdashcliente from "../componentes/bannerdashcliente";
import Buttons from "../componentes/button";
import Dashboardcliente from "../componentes/dashboardcliente";

function Cliente(){

    return(
        <div>
            <Navbar/>
            <br></br>
            <Bannerdashcliente/>
            <br></br>
            <br></br>
            <Buttons/>
            <Dashboardcliente/>

        </div>
    )
}

export default Cliente