import logo from './logo.svg';
import './App.css';
import Boton from './Components/Boton';
import Contador from './Components/Contador';
import { useState } from 'react';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
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
  return (
    <div className='App'>
      <div className='Contemedor-principal'>
        <Contador nroClicks={nroClicks} />
        <div className='padre-botones'>
        <div className='contenedor-botones'>
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
