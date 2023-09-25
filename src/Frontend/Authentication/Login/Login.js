import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography } from '@mui/material';
import './Login.css'
export default function FormPropsTextFields(props) {
    const setLogin=props.setLogin;
  return (
    <Box
    className='login-form'
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <div className='login-title'><Typography variant='h5'>LOGIN</Typography></div>
      <div>
      <TextField
          style={{width:"70vh"}}
          id="outlined-password-input"
          label="User Name"
          type="username"
          autoComplete="current-password"
          className='login-username'
        />
       
      </div>
        <div>
        <TextField
         style={{width:"70vh"}}
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        
        </div>
       
      </div>
    
    <div className='button-login'>
     <Button variant="contained" >Login</Button>
     </div>
     <span className='text-login'>Create an Account<button className='alter-login ' onClick={()=>setLogin(true)}>Sign Up</button></span>
      
    </Box>
  );
}