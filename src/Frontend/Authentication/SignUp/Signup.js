import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import './Signup.css'
export default function FormPropsTextFields(props) {
    const setLogin=props.setLogin;
  return (
    <Box
    className='signup-form'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className='signup-title'><Typography variant='h5'>SIGN UP</Typography></div>
      <div>
      <TextField
          id="outlined-password-input"
          label="First Name"
          type="username"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Last Name"
          type="username"
          autoComplete="current-password"
        />
      </div>
        <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-password-input"
          label="Mobile No"
          type="phone-number"
          autoComplete="current-password"
        />
        </div>
        <TextField
          id="address"
          label="E-mail address"
          type="email"
          autoComplete="current-password"
          style={{width:"96.7%"}}
        />
        
      </div>
    
    <div className='button-signup'>
     <Button variant="contained" >Sign Up</Button>
     </div>
     <span className='text-signup'>Already have an Account?<button className='alter-login ' onClick={()=>setLogin(true)}>Login</button></span>
      
    </Box>
  );
}