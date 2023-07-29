import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'

function Reviews({ restaurants }) {
    const { id } = useParams()
    const restaurant = restaurants.find(r => r.id === parseInt(id))

  return (

    <div>{restaurant.name} Reviews</div>
  )
}

export default Reviews