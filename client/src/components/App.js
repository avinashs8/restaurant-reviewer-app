import '../App.css';
import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/User';
import NavBar from './NavBar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Restaurants from './Restaurants';
import Reviews from './Reviews';
import MyReviews from './MyReviews';
import { Routes, Route } from 'react-router-dom';


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
      <Routes>
        <Route  path='/' element={<Home/>}/>
        <Route  path='/signup' element={<Signup />}/>
        <Route  path='/login' element={<Login />}/>
        <Route  path='/restaurants' element={<Restaurants restaurants={restaurants} setRestaurants={setRestaurants}/>} />
        <Route  path='/restaurants/:id/reviews'element={<Reviews restaurants={restaurants} setRestaurants={setRestaurants}/>} />
        <Route  path='/myreviews' element={<MyReviews restaurants={restaurants} />}/>
      </Routes>
    </div>
  );
}

export default App;
