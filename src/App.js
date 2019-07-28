import React from 'react';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Climas from './components/climas/Climas';
import Logs from './components/logs/Logs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Mapas from './components/mapas/Mapas';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
        <div className="container">         
          <Switch> 
              <Route exact path="/" component={ Home } />
              <Route exact path="/climas" component={ Climas } />
              <Route exact path="/home" component={ Home } />
              <Route exact path="/logs" component={ Logs } />
              <Route exact path="/mapa" component={ Mapas } />
          </Switch>
        </div>
    </Router>    
  );
}

export default App;
