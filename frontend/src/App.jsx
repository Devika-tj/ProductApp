import React from 'react'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Home from './components/Home'
import Add from './components/Add'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Loginsuccessful from './components/Loginsuccessful'

const App = () => {
  return (
    <div>
      <Navbar />
       <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='add' element={<Add/>}></Route>
        <Route path='login' element={<Login/>}></Route>
        <Route path='/login-success' element={<Loginsuccessful/>}></Route>
       </Routes>
      
    </div>
  )
}

export default App
