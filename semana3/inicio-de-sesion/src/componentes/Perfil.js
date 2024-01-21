import React from "react";
import Boton from "./Boton";

function Perfil(){
    const click =() =>{
        console.log(Text);
      }
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
            <Boton className="boton-editar" funClick={()=>click()} Text={"Editar"}>{Text="Editar"}</Boton>
            </div>
            
    </div>
    );
}
export default Perfil;