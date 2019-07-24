import React from 'react';
import {Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Climas from './components/climas/Climas';
import Logs from './components/logs/Logs';
import Navbar from './components/Navbar';


function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>        
          <Route exact path="/" component={ Climas } />
          <Route exact path="/home" component={ Climas } />
          <Route exact path="/logs" component={ Logs } />
      </Switch>
    </Router>    
  );
}

export default App;
