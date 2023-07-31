import { useState } from "react"
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

function EditReviewForm({ review }) {
    const [ stars, setStars ] = useState(review.stars)
    const [ content, setContent ] = useState(review.content)
    const [errorList, setErrorList] = useState([]);

    const handleStarsChange = e => {
        setStars(e.target.value)
    }

    const handleContentChange = e => {
        setContent(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        
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
  )
}

export default EditReviewForm