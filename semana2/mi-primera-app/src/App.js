import logo from './logo.svg';
import './App.css';
import Evento from "./components/Evento.js"
import EventoB from "./components/EventoB.js"

function App() {
  return (
    <div className="App">
      <Evento/>
      <Evento/>
      <EventoB 
      title="hola"
      image="evento1"
      dateLiteral="bolicia"
      placeLiteral="zonas"
      description="asdddddddddddddddddd"
      icon0="twitter"
      icon1="youtube"
      icon2="facebook"
      />
    </div>
  );
}

export default App;
