import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom/cjs/react-router-dom';

function Restaurant({ restaurant }) {

    const renderMultipleTimes = () => {
        const elements = [];
        for (let i = 0; i < restaurant.price; i++) {
          elements.push(<AttachMoneyRoundedIcon key={i}/>);
        }
        return elements;
      };
      

  return (
    <div style={{ marginBottom: '20px' }}>
        <Card sx={{ maxWidth: 345 }}>  
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {restaurant.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {restaurant.cuisine}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: {renderMultipleTimes()}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Location: {restaurant.location}
          </Typography>
            <Stack spacing={1}>
              Reviews:
            <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly />
            <NavLink to={`/restaurants/${restaurant.id}`}>
              <Button>All Reviews</Button>
            </NavLink>
            </Stack>
        </CardContent>
    </Card>
    </div>
  )
}

export default Restaurant