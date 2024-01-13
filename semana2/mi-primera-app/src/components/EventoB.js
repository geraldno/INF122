import React from "react";
import '../styles/Evento.css';

function EventoB(props){
    return(
        <div className="card-container">
            <div className="card-image">
                <img  className="card-image" 
                    src={require(`../images/${props.image}.jpg`)}
                    alt="Foto del evento"></img>
            </div>
            <div className="column-text">
            <div className="card-content">
                    <h2 className="card-title">{props.title}</h2>
                    <p className="card-date">{props.dateLiteral}</p>
                    <p className="card-place">{props.placeLiteral}</p>
                    <p className="card-description">{props.description}</p>
            </div>
                <div className="icons">
                    <figure className="fondo-img"><img className="icon-web" src={require(`../images/${props.icon0}.svg`)} alt=""></img></figure>
                    <figure className="fondo-img"><img className="icon-web" src={require(`../images/${props.icon1}.svg`)} alt=""></img></figure>
                    <figure className="fondo-img"><img className="icon-web" src={require(`../images/${props.icon2}.svg`)} alt=""></img></figure>
                </div>
                </div>
        </div>
    );
}

export default EventoB;