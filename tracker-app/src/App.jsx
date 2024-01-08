import { useState } from 'react'
import React from 'react'
import './App.css'
import Register from './Compononts/Register'
import Login from './Compononts/Login'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  

  return (
    <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/register' element={<Register/>}/>
  </Routes>
</BrowserRouter>
    {/* <Router> */}
      
    {/* </Router> */}
    {/* <Login/>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        </Router> */}
    </>
  )
}

export default App
