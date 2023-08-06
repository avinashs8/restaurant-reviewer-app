import React, { useState, useContext } from 'react';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import { UserContext } from '../context/User';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [errorList, setErrorList] = useState([]);
  const { signup } = useContext(UserContext);
  const navigate = useNavigate()

  const handleUserNameChange = e => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = e => {
    setPassword(e.target.value);
  };

  const handlePasswordConfirm = e => {
    setPasswordConfirmation(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username,
        password: password,
        password_confirmation: passwordConfirmation,
      }),
    })
      .then(resp => resp.json())
      .then(data => {
        if (!data.errors) {
          signup(data);
          navigate('/')
        } else {
          setUsername('');
          setPassword('');
          setPasswordConfirmation('');
          const errorLis = data.errors.map((e, index) => {
            return <li key={index}>{e}</li>;
          });
          setErrorList(errorLis);
        }
      });
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <div style={{ width: '300px', textAlign: 'center' }}>
        <h2>Signup Form:</h2>
        <form onSubmit={handleSubmit}>
          <h5>Username:</h5>
          <TextField id="outlined-basic" label="Username" variant="outlined" autoFocus={true} value={username} onChange={handleUserNameChange}/>
          <h5>Password:</h5>
          <TextField id="outlined-basic" label="Password" type="password" variant="outlined" value={password} onChange={handlePasswordChange}/>
          <h5>Confirm Password:</h5>
          <TextField id="outlined-basic" label="Password Confirmation" type="password" variant="outlined" value={passwordConfirmation} onChange={handlePasswordConfirm}/>
          <div></div>
          <Button variant="contained" style={{ marginTop: '10px' }} type='submit'>Submit</Button>
        </form>
        <ul>{errorList}</ul>
      </div>
    </div>
  );
}

export default Signup;

