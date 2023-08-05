import React, { useContext } from 'react'
import MyReviewCard from './MyReviewCard'
import { UserContext } from '../context/User'

function MyReviews({ restaurants }) {
    const { user } = useContext(UserContext)
    
    if(!user){
       return <h1>Loading...</h1>
    }
    
    const myReviews = user.reviews.map(review => {
        return <MyReviewCard key={review.id} review={review} restaurants={restaurants}/>
    })

    
  
  return (
    
    <div >
        <h1 className='centered'>{ user.username }'s Reviews:</h1>
        <div className='centered'>
            <div >{myReviews}</div>
        </div>
    </div>
  )
}

export default MyReviews