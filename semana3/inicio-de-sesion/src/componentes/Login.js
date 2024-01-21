import React from "react";
import Boton from "../componentes/Boton.js"
import "../styles/Login.css"

function Login(){
    const click =() =>{
        console.log(Text);
      }

    return(
        <div className="main">
        <div className="padre">
                <div className="Usuario">
                <label>Usuario:</label>
                <input className="input-usuario" placeholder="Ingresar Usuario"></input>
                </div>

                <div className="Contraseña">
                <label>Contraseña:</label>
                <input className="input-contraseña" placeholder="Ingresar Contraseña"></input>
                </div>

                <div className="botones-login">
                <Boton className="boton-registrar" funClick={()=>click()} Text={"Registrar"}>{Text="Registrar"}</Boton>
                <Boton className="boton-ingresar" funClick={()=>click()} Text={"Ingresar"}>{Text="Ingresar"}</Boton>
                </div>
        </div>
        </div>
    );
}
export default Login;