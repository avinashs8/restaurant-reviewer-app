import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


function AddRestaurantForm({ restaurants, toggleForm, setToggleForm, setRestaurants }) {

    const [ name, setName ] = useState('')
    const [ cuisine, setCuisine ] = useState('')
    const [ price, setPrice ] = useState('')
    const [ location, setLocation ] = useState('')
    const [errorList, setErrorList] = useState([])

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleCuisineChange = e => {
        setCuisine(e.target.value)
    }

    const handlePriceChange = e => {
        setPrice(e.target.value)
    }

    const handleLocationChange = e => {
        setLocation(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        fetch('/restaurants', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              name: name,
              cuisine: cuisine,
              price: price, 
              location: location
          })})
          .then(resp=> resp.json())
          .then(data => {
            if(data.errors){
                setName('')
                setCuisine('')
                setPrice('')
                setLocation('')
                const errorLis = data.errors.map((e, index) => {
                    return <li key={index}>{e}</li>
                  })
                  setErrorList(errorLis)
            } else {
                setName('')
                setCuisine('')
                setPrice('')
                setLocation('')
                setToggleForm(!toggleForm)
                const newRestaurants = [...restaurants, data]
                setRestaurants(newRestaurants)
            }
          })   
    }


  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '300px' }}>
        <h2>New Restaurant:</h2>
        <form onSubmit={handleSubmit}>
          <h5>Name:</h5>
          <TextField id="outlined-basic" label="Name" variant="outlined" autoFocus={true} value={name} onChange={handleNameChange}/>
          <h5>Cuisine:</h5>
          <TextField id="outlined-basic" label="Cuisine" variant="outlined" value={cuisine} onChange={handleCuisineChange}/>
          <h5>Price:</h5>
          <TextField id="outlined-basic" label="Price" variant="outlined" value={price} onChange={handlePriceChange}/>
          <h5>Location:</h5>
          <TextField id="outlined-basic" label="Location" variant="outlined" value={location} onChange={handleLocationChange}/>
          <div></div>
          <Button variant="contained" style={{ marginTop: '10px' }} type='submit'>Submit</Button>
        </form>
        <ul>{errorList}</ul>
      </div>
    </div>
  )
}

export default AddRestaurantForm