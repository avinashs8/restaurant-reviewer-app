import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';



function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorList, setErrorList] = useState([]);
  const { login } = useContext(UserContext);
  const navigate = useNavigate()

  const handleUserNameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };


  const handleSubmit = e => {
    e.preventDefault();
    fetch('/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password
      })
    })
    .then(resp => resp.json())
    .then(data => {
      if(!data.error){ 
        login(data) 
        navigate('/')
      }
      else{
        setErrorList(data.error)
      }
    });
  };
  

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <h2>Login Form:</h2>
        <form onSubmit={handleSubmit}>
          <h5>Username:</h5>
          <TextField id="outlined-basic" label="Username" variant="outlined" autoFocus={true} value={username} onChange={handleUserNameChange}/>
          <h5>Password:</h5>
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={handlePasswordChange}/>
          <div></div>
          <Button variant="contained" style={{ marginTop: '10px' }} type='submit'>Submit</Button>
        </form>
        <ul>{errorList}</ul>
      </div>
    </div>
  );
}

export default Login;