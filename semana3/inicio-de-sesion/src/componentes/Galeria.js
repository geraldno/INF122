import React from "react";
import taza from "../images/taza.jpg"
import "../styles/Galeria.css"
import usuario from "../images/usuario.svg"

function Galeria(){
    return(
        <div className="padre">
            <div className="">
            <div className="usuario">
                <img className="foto-perfil" src={usuario}></img>
                <p>pepito</p>
            </div>
            <div className="galeria">
                <img src={taza}></img>
                <img src={taza}></img>
                <img src={taza}></img>
                <img src={taza}></img>
                <img src={taza}></img>
                <img src={taza}></img>
                <img src={taza}></img>
                <img src={taza}></img>
            </div>
            </div>
        </div>
    );
}

export default Galeria;