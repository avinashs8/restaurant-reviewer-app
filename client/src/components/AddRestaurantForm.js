import React, { useState } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function AddRestaurantForm({ restaurants, toggleForm, setToggleForm }) {

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