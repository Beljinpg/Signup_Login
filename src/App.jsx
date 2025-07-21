import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './screens/Login'
import SignUp from './screens/SignUp'
import Home from './screens/Home'


const App = () => {
  return (
    <BrowserRouter>
      <ToastContainer position="top-right"/>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App