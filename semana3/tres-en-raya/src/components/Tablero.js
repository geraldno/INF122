import React, { useEffect } from "react";
import "../styles/Tablero.css";
import Cuadro from "./Cuadro";
import { useState } from "react";

function Tablero({ cuadros, onClick }) {
    function renderizarCuadro(i) {
        return (
            <CuadroB
                valor={cuadros[i]}
                funcion={() => onClick(i)}
            />
        );
    }

    return (
        <div>
            <div className="tablero">
                {renderizarCuadro(0)}
                {renderizarCuadro(1)}
                {renderizarCuadro(2)}
                {renderizarCuadro(3)}
                {renderizarCuadro(4)}
                {renderizarCuadro(5)}
                {renderizarCuadro(6)}
                {renderizarCuadro(7)}
                {renderizarCuadro(8)}
            </div>
        </div>
    );
}

function Tablero() {
    const [cuadros, setCuadros] = useState(Array(9).fill(null));
    const [jugador, setJugador] = useState ("O");

    const click = (i) => {
        const cuadrosTemp = [...cuadros];
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        if (jugador ==="X"){
            setJugador("O");
        }else{
            setJugador("X")
        } 
    }

    if (cuadrosTemp[i] === null){
        cuadrosTemp[i] = jugador;
        setCuadros(cuadrosTemp);
        setJugador(jugador === "X"? "O":"X");
    }


    //TERNARIO 
    //const click = () =>{setValor(Valor === "X"? "O": "X")}   


   return (
    <div className="juego">
        <h1>Siguiente Jugador:{jugador}</h1>
    <div className="tablero">
        <Cuadro valor={cuadros[i]} funcion={() => click(i)} />
    </div>
    </div>
);
}

export default Tablero;