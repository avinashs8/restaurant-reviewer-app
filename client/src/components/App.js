import '../App.css';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/User';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Restaurants from './Restaurants';
import Reviews from './Reviews';
import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  
  const [ restaurants, setRestaurants ] = useState([])

  useEffect(() => {
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setRestaurants(data))
  }, [])
 
  
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/restaurants'>
          <Restaurants restaurants={restaurants} setRestaurants={setRestaurants}/>
        </Route>
        <Route exact path='/restaurants/:id/reviews'>
          <Reviews restaurants={restaurants} setRestaurants={setRestaurants}/>
        </Route>
        <Route exact path='/myreviews'/>
      </Switch>
    </div>
  );
}

export default App;
