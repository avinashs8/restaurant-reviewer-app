import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';

function Signup() {

  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ passwordConfirm, setPasswordConfirm ] = useState('')

  const handleUserNameChange = e => {
    setUsername(e.target.value)
  }

  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const handlePasswordConfirm = e => {
    setPasswordConfirm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()

  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <h2>Signup Form:</h2>
        <form onSubmit={handleSubmit}>
          <h5>Username:</h5>
          <TextField id="outlined-basic" label="Username" variant="outlined" autoFocus={true} value={username} onChange={handleUserNameChange}/>
          <h5>Password:</h5>
          <TextField id="outlined-basic" label="Password" variant="outlined" value={password} onChange={handlePasswordChange}/>
          <h5>Confirm Password:</h5>
          <TextField id="outlined-basic" label="Password Confirmation" variant="outlined" value={passwordConfirm} onChange={handlePasswordConfirm}/>
          <Button variant="contained" style={{ marginTop: '10px' }}>Contained</Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
