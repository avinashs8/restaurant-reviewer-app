import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import ReviewCard from './ReviewCard'


function Reviews({ restaurants }) {
    const { id } = useParams()
    const restaurant = restaurants.find(r => r.id === parseInt(id))
    console.log(restaurant)

    const reviewsList = restaurant.reviews.map(review => {
        return <ReviewCard key={review.id} review={review} restaurant={restaurant}/>
    })

    console.log(reviewsList)
    return (
        <div className='centered' >
            <div style={{ display: 'block' }}>
                <h1>{restaurant.name} Reviews</h1>
                <div>{reviewsList}</div>
            </div>
        </div>
      );
      
}

export default Reviews