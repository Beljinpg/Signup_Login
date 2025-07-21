import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";

const SignUp = () => {

  const [data, setData] = useState({
    name:"",
    email:"",
    password:""
  })
  const handleChange=(event)=>{
    const {name, value}= event.target;
    setData((prevData)=>({
      ...prevData,
      [name]:value,
    }))
  }

  const navigate=useNavigate();

  const handleSignup=(event)=>{
    event.preventDefault();~
    localStorage.setItem("user", JSON.stringify(data))
    toast("signup successful!")

    navigate("/")

  }

  return (
    <div className="min-h-screen bg-gray-400 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
          Signup
        </h1>
        <form onSubmit={handleSignup}>
          <div className="my-4">
            <label className="block text-gray-600 font-bold mb-1">Username</label>
            <input
              onChange={handleChange}
              value={data.name}
              name="name"
              type="text"
              className=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="my-4">
            <label className="block text-gray-600 font-bold mb-1">Email</label>
            <input
              onChange={handleChange}
              value={data.email}
              name="email"
              type="email"
              className=" w-full py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="my-4">
            <label className="block text-gray-600 font-bold mb-1">
              Password
            </label>
            <input
              onChange={handleChange}
              value={data.password}
              name="password"
              type="password"
              className=" w-full py-2 px-3  border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              maxLength={4}
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-500 text-white w-full py-2 rounded font-bold hover:bg-blue-600 transition duration-200"
          >
            Register
          </button>
        </form>
        <p className="text-center mt-4 pt-2 font-bold text-gray-800">Already have an account? <span className="text-blue-500"><Link to="/">Login</Link></span> </p>
      </div>
    </div>
  );
};

export default SignUp;
