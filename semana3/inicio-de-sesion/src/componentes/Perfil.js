import React from "react";

function Perfil(){
    return(
        <div className="padre">

            <div className="Nombre">
            <label>Nombre:</label>
            <input className="input-usuario" placeholder="Ingresar Nombre"></input>
            </div>

            <div className="Apellido">
            <label>Apellido:</label>
            <input className="input-contraseña" placeholder="Ingresar Apellido"></input>
            </div>

            <div className="comtraseña">
            <label>Contraseña:</label>
            <input className="input-contraseña" placeholder="Ingresar Contraseña"></input>
            </div>

            <div className="">
            <button className="boton-editar">Editar</button>
            </div>
            
    </div>
    );
}
export default Perfil;