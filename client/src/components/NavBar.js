import React, { useContext} from 'react'
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const {user, logout} = useContext(UserContext)
  const navigate = useNavigate()
  
  const logoutUser = () => {
    fetch('/logout')
    .then( () => {
      logout()
      navigate('/')
    })
  }
  
  if(user && !user?.error){
    return(
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined button group" size='large'>
        <NavLink to="/" exact>
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/restaurants" exact>
          <Button>All Restaurants</Button>
        </NavLink>
        <NavLink to="/myreviews" exact>
          <Button>My Reviews</Button>
        </NavLink>
        <NavLink to="/logout">
          <Button onClick={logoutUser}>Logout</Button>
        </NavLink>
      </ButtonGroup>
    </Box>
  )}

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="contained" aria-label="outlined button group" size='large'>
        <NavLink
          to="/"
          exact
        >
          <Button>Home</Button>
        </NavLink>
        <NavLink to="/signup">
          <Button>Signup</Button>
        </NavLink>
        <NavLink to="/login">
          <Button>Login</Button>
        </NavLink>
      </ButtonGroup>
    </Box>
  )
}

export default NavBar