import React from "react";
import "../styles/Proyects.css";
import Pry from "../images/proyect.png";
import { Link, Outlet} from "react-router-dom";

function Proyects (){
    return(
        <>      
          <div class="galeria">

            <Link to="/Metas"><img src={Pry} class="card"></img></Link>
            </div>
        <Outlet />
        </>
    );
}

export default Proyects;