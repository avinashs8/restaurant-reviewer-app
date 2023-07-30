import React, { useState, useContext } from 'react'
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { UserContext } from '../context/User';

function AddReviewForm({ restaurants, setRestaurants, toggleForm, setToggleForm }) {
  const [ stars, setStars ] = useState(null)
  const [ content, setContent ] = useState(null)
  const [errorList, setErrorList] = useState([]);
  const { id } = useParams()
  const { user } = useContext(UserContext)
  

  const handleStarsChange = e => {
    setStars(e.target.value)
  }

  const handleContentChange = e => {
    setContent(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    fetch(`/restaurants/${id}/reviews`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: user.id,
        restaurant_id: id,
        stars: stars, 
        content: content
    })})
    .then(resp => resp.json())
    .then(data => {
      if(data.errors) {
        setContent('')
        setStars('')
        const errorLis = data.errors.map((e, index) => {
          return <li key={index}>{e}</li>;
        });
        setErrorList(errorLis);
      } else {
        setContent('')
        setStars('')
        setToggleForm(!toggleForm)
        const updatedReviews = restaurants.map(r => {
          if(r.id === parseInt(id)){
            r.reviews.push(data)
            return r
          } else {
            return r
          }
        })
        setRestaurants(updatedReviews)
        
      }
    })
  }

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div style={{ width: '300px' }}>
        <h2>New Review:</h2>
        <form onSubmit={handleSubmit}>
          <h5>Stars:</h5>
          <TextField id="outlined-basic" label="Number of Stars" variant="outlined" autoFocus={true} value={stars} onChange={handleStarsChange}/>
          <h5>Leave Your Review:</h5>
          <TextField id="outlined-basic" label="Review" variant="outlined" value={content} onChange={handleContentChange}/>
          <div></div>
          <Button variant="contained" style={{ marginTop: '10px' }} type='submit'>Submit</Button>
        </form>
        <ul>{errorList}</ul>
      </div>
    </div>
  );
}

export default AddReviewForm