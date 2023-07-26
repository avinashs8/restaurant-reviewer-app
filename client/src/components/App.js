// import './App.css';

import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/User';


function App() {
  
 const restaurants = useContext(UserContext) 

  if(!restaurants){<h1>Please log in</h1>}
  
  return (
    <div className="App">
      <h1>logged in</h1>
    </div>
  );
}

export default App;
