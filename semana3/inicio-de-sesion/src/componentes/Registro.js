import React from "react";
import "../styles/Registro.css";

function Registro(){
    return(
        <div className="padre">
                <label className="etiqueta">Nombre:</label>
                <input placeholder="Ingresar Nombre"></input>

                <label className="etiqueta">Apellido:</label>
                <input placeholder="Ingresar Apellido"></input>

                <label className="eitqueta">Contraseña:</label>
                <input placeholder="Ingresar Contraseña"></input>

                <div className="botones-registro">
                <button className="boton-registrar">Registrar</button>
                </div>
        </div>
    );
}
export default Registro;