import React from 'react'
import Restaurant from './Restaurant'

function Restaurants({ restaurants }) {

    const restaurantList = restaurants.map((restaurant)=>{
        return <Restaurant key={restaurant.id} restaurant={restaurant}/>
    })
    console.log(restaurantList)
  return (
    <div>{restaurantList}</div>
  )
}

export default Restaurants