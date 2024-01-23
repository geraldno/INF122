import React from "react";
import './App.css';
import Login from './componentes/Login';
import Register from './componentes/Registro';
import Navbar from './componentes/Navbar';
import Perfil from './componentes/Perfil';
import Galeria from "./componentes/Galeria";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
              <Route path="/" element={<Navbar />}>
              <Route path="/Login" element={<Login/>} />
              <Route path="/Registro" element={<Register />} />
              <Route path="/Perfil" element={<Perfil />} />
              <Route path="/Galeria" element={<Galeria/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
