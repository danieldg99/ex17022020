import React from 'react';
import './css/styleDelgomdan.css';
import {Link, Router} from '@reach/router';
import Distribucion1delgomdan from './Distribucion1delgomdan';
import Distribucion2delgomdan from './Distribucion2delgomdan';
import Distribucion3delgomdan from './Distribucion3delgomdan';
import Pruebas from './Pruebas';

function App() {
  return (
    <div className="App">
      <header>
        <nav className="delgomdan__Menu">
          <Link to="/Distribucion1">Distribución 1</Link>
          <Link to="/Distribucion2">Distribución 2</Link>
          <Link to="/Distribucion3">Distribución 3</Link>
          <Link to="/Pruebas">Pruebas</Link>
        </nav>
      </header>
      <main>
        <Router>
          <Distribucion1delgomdan path="/Distribucion1" />
          <Distribucion2delgomdan path="/Distribucion2" />
          <Distribucion3delgomdan path="/Distribucion3" />
          <Pruebas path="/Pruebas" />
        </Router>
      </main>
    </div>
  );
}

export default App;
