import React from "react";
import Boton from "./Boton";
import "../styles/Registro.css";

function Registro(){
    const click =() =>{
        console.log(Text);
      }
    return(
        <div className="padre">
                <label className="etiqueta">Nombre:</label>
                <input placeholder="Ingresar Nombre"></input>

                <label className="etiqueta">Apellido:</label>
                <input placeholder="Ingresar Apellido"></input>

                <label className="eitqueta">Contraseña:</label>
                <input placeholder="Ingresar Contraseña"></input>

                <div className="botones-registro">
                <Boton className="boton-registrar" funClick={()=>click()} Text={"Registrar"}>{Text="Registrar"}</Boton>
                </div>
        </div>
    );
}
export default Registro;