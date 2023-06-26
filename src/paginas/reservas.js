import React from "react";
import Navbar from "../componentes/navbar";
import BannerdashReservas from "../componentes/bannerdashreservas";
import Buttons from "../componentes/button";
import DashboardReservas from "../componentes/dashboardreservas";



function Reservas(){
return(

<div>
<Navbar/>
<br></br>
<BannerdashReservas/>
<br></br>
<br></br>
<Buttons/>
<DashboardReservas/>

</div>

)

}

export default Reservas