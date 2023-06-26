import React from "react";
import Navbar from "../componentes/navbar";
import BannerdashServicos from "../componentes/bannerdashservicos";
import Dashboardservicos from "../componentes/dashbordservicos";
import Buttons from "../componentes/button";


function Serviço(){


    return(

        <div>
            <Navbar/>
            <br></br>
            <BannerdashServicos/>
            <br></br>
            <br></br>
            <Buttons/>
            <Dashboardservicos/>



        </div>
    )
}

export default Serviço