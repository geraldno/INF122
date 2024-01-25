"use client";
import style from "./page.module.css";
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const [show, setShow] = useState (true);

  const click=() =>{
    setNumClicks(nroClicks + 1);
    console.log("click");
  }
  const reiniciar = () => {
    setNumClicks(0);
    console.log("reiniciar");
  }

  const menos3=() =>{
    setNumClicks(nroClicks - 3);
    console.log("click");
  }

  const mas3=() =>{
    setNumClicks(nroClicks + 3);
    console.log("click");
  }

  const menos1=() =>{
    setNumClicks(nroClicks - 1);
    console.log("click");
  }

  const mas1=() =>{
    setNumClicks(nroClicks + 1);
    console.log("click");
  }

  const mostrar = () => {
    setShow(!show);
  }
  return (
    <div className={style.App}>
      <div className={style["contenedor-principal"]}>
        <Contador nroClicks={nroClicks} />
        <div className={style["padre-botones"]}>
        <div className={style["contenedor-botones"]}>
          <Boton texto="-3" esBotonClick={true}
            funcionClick={menos3} />
          <Boton texto="+3" esBotonClick={true}
            funcionClick={mas3} />
          <Boton texto="-1" esBotonClick={true}
            funcionClick={menos1} />
          <Boton texto="+1" esBotonClick={true}
            funcionClick={mas1} />
          <Boton texto="Reiniciar" esBotonClick={false}
            funcionClick={reiniciar} />
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
