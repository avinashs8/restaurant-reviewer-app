import React, { useContext } from 'react'
import { UserContext } from '../context/User'

function Home() {

    const { user } = useContext(UserContext)

    

    if(!user || user.error){
        return (<h1>Please Login or Signup</h1>)
    }

  return (
    <div>Hi {user.username}</div>
  )
}

export default Home