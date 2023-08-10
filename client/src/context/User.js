import React from 'react'
import { useEffect, useState } from 'react'

const UserContext = React.createContext()


function UserProvider({ children }) {

  const [ user, setUser ] = useState(null)

  useEffect(() => {
    fetch('/me')
    .then(resp => resp.json()) 
    .then(data => setUser(data))
  }, [])

  const login = (user) => {
    setUser(user)
  }

  const logout = () => {
    setUser(null)
  }

  const signup = (user) => {
    setUser(user)
  }



  return (
    <UserContext.Provider value={ {user, login, logout, signup, setUser} }>{children}</UserContext.Provider>
  )
}

export { UserContext, UserProvider }