import React from 'react'
import { useEffect, useState } from 'react'

const UserContext = React.createContext()


function UserProvider({ children }) {
const [ restaurants, setRestaurants ] = useState([])
  
  useEffect(() =>{
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setRestaurants(data))
  }, [])

  return (
    <UserContext.Provider value={restaurants}>{children}</UserContext.Provider>
  )
}

export { UserContext, UserProvider }