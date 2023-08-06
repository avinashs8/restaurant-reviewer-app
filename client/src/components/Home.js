import React, { useContext } from 'react'
import { UserContext } from '../context/User'

function Home() {

    const { user } = useContext(UserContext)

    

    if(!user || user.error){
        return (<h1 className='centered'>Please Login or Signup to Use App!</h1>)
    }

  return (
    <div >
      <h1 className='centered'>Hi {user.username}!</h1>
      <div >
        <p className='paragraph-container'>Welcome to the Restaurant Reviewer App! This app can be used to keep track of all of the restaurants on your list! </p>
        <p className='paragraph-container'>With this app, you can easily add new restaurants. Once you go to the restaurant, you can leave a review and let others know about your experience there! You can leave a rating out of 5 stars and let others know how you felt by leaving a few words. You can also give others a heads up about the pricing, so they know to come prepared!</p>
      </div>
    </div>
  )
}

export default Home