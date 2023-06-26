import React from "react";
import Navbar from "../componentes/navbar";
import BannerdashUser from "../componentes/bannerdashuser";
import Buttons from "../componentes/button";
import DashboardUser from "../componentes/dashboarduser";



function User(){


    return(

        <div>
            <Navbar/>
            <br></br>
            <BannerdashUser/>
            <br></br>
            <br></br>
            <Buttons/>
            <DashboardUser/>


        </div>
    )



}

export default User