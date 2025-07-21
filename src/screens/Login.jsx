import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {  toast } from "react-toastify";


const Login = () => {

  const [data, setData]= useState({
    email:"",
    password:""

  })

  const handleChange=(event)=>{
    const {name, value}=event.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }
   const navigate=useNavigate();
  const handleLogin=(event)=>{
    event.preventDefault();

    const storedData= JSON.parse(localStorage.getItem("user"));

    if(!storedData){
      toast.warning("no user found. please signup")
    }
    if(data.email===storedData.email && data.password===storedData.password){
      localStorage.setItem("LoggedIn","true");
      toast("Login Successful")
      navigate("/home");
    }
    else{
      toast.warning("invalid credentials")
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-400">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block text-gray-700 font-medium mb-1">Email</label>
            <input
              onChange={handleChange}
              name='email'
              value={data.email}
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <input
              onChange={handleChange}
              name='password'
              value={data.password}
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 font-bold text-white py-2 rounded hover:bg-blue-600 transition duration-200"
          >
            Login
          </button>
        </form>
            <p className="text-center mt-4 pt-2 font-bold text-gray-800">Don't have an account? <span className="text-blue-500"><Link to="/signup">signup</Link></span> </p>
      </div>
    </div>
  );
};

export default Login;
