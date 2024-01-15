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
      title="Py Café 02 - CV Review"
      image="evento1"
      dateLiteral="28 de Octubre de 2023"
      placeLiteral="La Paz, Bolivia"
      description="¡Hola Pythonista! ¿Conoces la importancia de tener un CV? ¿Te gustaría obtener la opinión de un Senior sobre tu CV y como podrías mejorarlo?
                  ¡Anímate a ser parte de esta actividad!"
      icon0="twitter"
      icon1="youtube"
      icon2="facebook"
      />
    </div>
  );
}

export default App;
