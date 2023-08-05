import React from 'react'
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function MyReviewCard({ review, restaurants }) {

  const renderMultipleTimes = () => {
    const elements = [];
    for (let i = 0; i < review.stars; i++) {
      elements.push(<StarIcon key={i} sx={{ color: yellow[500] }} />);
    }
    return elements;
  };

  const restaurant = restaurants.find(r => r.id === review.restaurant_id)
  console.log(restaurant)
  if(!restaurant){
    return <h1>Loading...</h1>
  }

  

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
      <Typography variant="h4" component="div">
          {restaurant.name}
        </Typography>
        </div>
        <Typography variant="h5" component="div">
          {renderMultipleTimes()}
        </Typography>
        <Typography variant="body2">
          {review.content}
          <br />
        </Typography>
      </CardContent>
    </Card>
  )
}

export default MyReviewCard