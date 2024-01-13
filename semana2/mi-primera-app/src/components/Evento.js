import React from "react";
import '../styles/Evento.css';

function Evento(){
    return(
        <div className="card-container">
            <div className="card-image">
                <img  className="card-image" src={require("../images/evento1.jpg")} alt="Foto del evento"></img>
            </div>
            <div className="card-content">
                    <h2>Py Pizza 03-PyPuzzle</h2>
                    <p className="card-date">09 de Diciemnre de 2023 - 13:30</p>
                    <p className="card-place">Mr Pizza, 20 de Octubre Fren a la Plaza Abaroa</p>
                    <p className="card-description">¡Hola Pythonista!
                        Participa en este Evento Presencial de la comunidad Python La Paz
                        ¿Cuánto conoces de Python?
                        Aprende a trabajar en equipo resolviendo increíbles acertijo
                        ¡Anímate a ser parte de esta actividad!
                        </p>
            </div>
        </div>
    );
}
export default Evento;
