import React, { useState } from 'react'
import Login from '../Authentication/Login/Login'
import Signup from '../Authentication/SignUp/Signup'
import './Landing.css'
const Landing = () => {
    const [login,setLogin]=useState(false);
    const handleChange=(e)=>{
        setLogin(e);
    }
  return (
    <div className='landing'>
        <div className='left-content'>
            lorem
        </div>
        <div>
            
          {
          login===false?<Login setLogin={setLogin}/>:<Signup setLogin={setLogin}/>
          }
        </div>
    </div>
  )
}

export default Landing