import React from "react";
import "../styles/Login.css"

function Login(){
    const click =() =>{
        console.log();
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
                <button className="boton-registrar" funClick={()=>click("Login")}>Registrar</button>
                <button className="botton-ingresar" >Ingresar</button>
                </div>
        </div>
        </div>
    );
}
export default Login;