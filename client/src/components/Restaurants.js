import React from 'react'
import Restaurant from './Restaurant'

function Restaurants({ restaurants }) {

    const restaurantList = restaurants.map((restaurant)=>{
        return (
        <div style={{ marginBottom: '10px' }} key={restaurant.id}>
          <Restaurant  restaurant={restaurant}/>
        </div>
        ) 
    })
    
  return (
    <div className='centered'>{restaurantList}</div>
  )
}

export default Restaurants