import React from "react";

function Boton({funClick, Text}){
    return(
        <button onClick={funClick}>
            {Text}
        </button>
    );
}

export default Boton;