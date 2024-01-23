import logo from './logo.svg';
import React from 'react';
import './App.css';
import Profile from './componentes/Profile';
import Data  from './componentes/Data';
import Contact from './componentes/Contact';
import Portfolio from './componentes/Portfolio';
import Proyects from './componentes/Proyects';
import Metas from "./componentes/Metas"

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Profile/>
      <Data/>
      <Contact/>
      <Portfolio/>
      <Router>
      <Proyects/>
          <Routes>
              <Route path="/Metas" element={<Metas/>}>
            </Route>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
