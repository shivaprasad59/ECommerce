import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Landing from './Frontend/Landing/Landing'
import Navbar from './Frontend/Navbar/Navbar.tsx'
import Fashion from './Frontend/Fashion/Fashion'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path='/home/fashion' element={<Fashion/>}/>
      </Routes>
    </div>
  )
}

export default App