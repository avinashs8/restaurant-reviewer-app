import { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom'
import ReviewCard from './ReviewCard'
import { Button } from '@mui/material'
import AddReviewForm from './AddReviewForm'


function Reviews({ restaurants, setRestaurants }) {
    const [toggleForm, setToggleForm] = useState(false);
    const { id } = useParams();
    const restaurant = restaurants.find(r => r.id === parseInt(id));
    
    if (!restaurant) {
      return <div>Loading...</div>;

    }
  
    const reviewsList = restaurant.reviews.map(review => {
      return <ReviewCard key={review.id} review={review} restaurant={restaurant} restaurants={restaurants} setRestaurants={setRestaurants}/>;
    });
  
    return (
      <div className='centered'>
        <div style={{ display: 'block' }}>
          <h1>{restaurant.name} Reviews</h1>
          <div>{reviewsList}</div>
          <br />
          <Button variant="outlined" onClick={() => setToggleForm(!toggleForm)}>
            Add New Review
          </Button>
          {toggleForm ? (
            <AddReviewForm
              restaurants={restaurants}
              setRestaurants={setRestaurants}
              toggleForm={toggleForm}
              setToggleForm={setToggleForm}
            />
          ) : null}
        </div>
      </div>
    );
  }
  
  export default Reviews;
  