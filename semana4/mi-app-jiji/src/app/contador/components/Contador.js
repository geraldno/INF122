import React from "react";
import style from "./Contador.module.css";

function Contador({ nroClicks, mostrar }) {
    return (
        mostrar ? <div className={style.Contador}>{nroClicks}</div> : null
    );
}

export default Contador;