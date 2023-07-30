import React from 'react'
import { yellow } from '@mui/material/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import StarIcon from '@mui/icons-material/Star';

function ReviewCard({ review, restaurant }) {
  
  const renderMultipleTimes = () => {
    const elements = [];
    for (let i = 0; i < review.stars; i++) {
      elements.push(<StarIcon key={i} sx={{ color: yellow[500] }} />);
    }
    return elements;
  };

  const user = restaurant.users.find(u => u.id === review.user_id)
  

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
        <Typography variant="body2">
          - {user.username}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default ReviewCard