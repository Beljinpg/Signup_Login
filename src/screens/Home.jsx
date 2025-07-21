import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {

    const userName=JSON.parse(localStorage.getItem("user"))

    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.clear();
        navigate("/")
        
    }

  return (
    <div className="min-h-screen bg-gray-500 flex justify-center items-center">
      <div className="bg-white p-8 rounded">
        <div>
          <h1 className="font-bold my-4 pb-4">welcome <span className="uppercase font-extrabold">{userName.name}</span> </h1>
          <button className="bg-green-500 w-full rounded py-1 text-white font-bold" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
