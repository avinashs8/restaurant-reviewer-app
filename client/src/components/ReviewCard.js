import React, { useContext, useState } from 'react'
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';
import { UserContext } from '../context/User';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import EditReviewForm from './EditReviewForm';

function ReviewCard({ review, restaurant, restaurants, setRestaurants }) {
  const { user } = useContext(UserContext)
  const { id } = useParams()
  const [ toggleEditForm, setToggleEditForm ] = useState(false)
  
  

  const renderMultipleTimes = () => {
    const elements = [];
    for (let i = 0; i < review.stars; i++) {
      elements.push(<StarIcon key={i} sx={{ color: yellow[500] }} />);
    }
    return elements;
  };


  const restaurantWithId = restaurants.find(r => r.id === parseInt(id))
  const reviewer = restaurantWithId.users.find(u => u.id === review.user_id)
   
  
  
  
  if (!restaurantWithId || !user || !reviewer) {
    debugger
    return <h1>Loading...</h1>;
  }


  const handleDelete = () => {
    fetch(`/restaurants/${id}/reviews/${review.id}`, {
      method: 'DELETE'})
    .then(() => {
      const reviewsAfterDelete = restaurants.map(r => {
        if (r.id === parseInt(id)){
          const updatedReviews = r.reviews.filter(rev => rev.id !== review.id)
          return {...r, reviews: updatedReviews}
        } else{
          return r
        }
      })
      setRestaurants(reviewsAfterDelete)
      }
      )
    }
  
  

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {renderMultipleTimes()}
        </Typography>
        <Typography variant="body2">
          {review.content}
          <br />
        </Typography>
        {reviewer ? <Typography variant="body2">- {reviewer.username}</Typography> : <Typography variant="body2">- Unknown User</Typography>}
      </CardContent>
      <CardActions>
        {reviewer.id === user.id ? <><Button size="small" onClick={() => setToggleEditForm(!toggleEditForm)}>Edit Review</Button> <Button onClick={handleDelete}>Delete Review</Button> </>
        : null}
      </CardActions>
      {toggleEditForm ? <EditReviewForm review={review} toggleEditForm={toggleEditForm} setToggleEditForm={setToggleEditForm} restaurants={restaurants} setRestaurants={setRestaurants}/> : null}
    </Card>
  )
}


export default ReviewCard