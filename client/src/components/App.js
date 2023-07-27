// import './App.css';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/User';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Restaurants from './Restaurants';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  
 
  
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/restaurants' component={Restaurants}/>
      </Switch>
    </div>
  );
}

export default App;
