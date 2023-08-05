import React, { useState } from 'react'
import Restaurant from './Restaurant'
import { Button } from '@mui/material'
import AddRestaurantForm from './AddRestaurantForm'

function Restaurants({ restaurants, setRestaurants }) {

  const [ toggleForm, setToggleForm ] = useState(false)
    const restaurantList = restaurants.map((restaurant)=>{
        return (
        <div style={{ marginBottom: '10px' }} key={restaurant.id} className='restaurant-item'>
          <Restaurant  restaurant={restaurant}/>
        </div>
        ) 
    })
    
  return (
    <div >
      <div className='centered restaurant-container' >{restaurantList}</div>
      <br/>
      <div className='centered'>
        <Button onClick={() => setToggleForm(!toggleForm)}>Add New Restaurant</Button>
        
      </div>
      <br/>
      <div className='centered'>
        {toggleForm ? <AddRestaurantForm restaurants={restaurants} setToggleForm={setToggleForm} toggleForm={toggleForm} setRestaurants={setRestaurants}/> : null }
        
      </div>
    </div>
  )
}

export default Restaurants