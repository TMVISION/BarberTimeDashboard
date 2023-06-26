import React from "react";
import Navbar from "../componentes/navbar";
import BannerdashGaleria from "../componentes/bannerdashgaleria";
import Buttons from "../componentes/button";
import DashboardGaleria from '../componentes/dashboardgaleria'



function Galeria(){
return(

<div>
<Navbar/>
<br></br>
<BannerdashGaleria/>
<br></br>
<br></br>
<Buttons/>
<DashboardGaleria/>

</div>

)

}

export default Galeria;