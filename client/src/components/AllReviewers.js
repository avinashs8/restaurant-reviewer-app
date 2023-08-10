import React from 'react'
import { useParams } from 'react-router-dom'
import UserReviewCard from './UserReviewCard'

function AllReviewers({ restaurants }) {

    const { id } = useParams()

    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id))

    if (!restaurant){
        return <h1>Loading...</h1>
    }
    
    const restaurantReviewers = restaurant.users.map(user =>{
        return <UserReviewCard user={user} restaurants={restaurants} id={id} />
    })

  return (
    <div>
        <h1 className='centered'>{restaurant.name}</h1>
        <div className='centered'>
            <div >{restaurantReviewers}</div>
        </div>
    </div>
  )
}

export default AllReviewers