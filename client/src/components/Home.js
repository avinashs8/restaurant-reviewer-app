import React, { useContext } from 'react'
import { UserContext } from '../context/User'

function Home() {

    const { user } = useContext(UserContext)

    if(!user){
        console.log(user)
        return (<h1>Please login or signup</h1>)
    }

  return (
    <div>Hi {user.username}</div>
  )
}

export default Home