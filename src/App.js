import React from 'react';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Climas from './components/climas/Climas';
import Logs from './components/logs/Logs';
import Navbar from './components/Navbar';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar/>
        <div className="container">         
          <Switch> 
              <Route exact path="/" component={ Climas } />
              <Route exact path="/climas" component={ Climas } />
              <Route exact path="/home" component={ Home } />
              <Route exact path="/logs" component={ Logs } />
          </Switch>
        </div>
    </Router>    
  );
}

export default App;
