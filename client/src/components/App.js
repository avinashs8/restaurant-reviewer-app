// import './App.css';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/User';
import NavBar from './NavBar';
import Home from './Home';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  
 
  
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
