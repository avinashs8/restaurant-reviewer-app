import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function UserReviewCard({ user }) {


    
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <div>
      <Typography variant="h4" component="div">
          {user.username}
        </Typography>
        </div>
      </CardContent>
    </Card>
  )
}

export default UserReviewCard