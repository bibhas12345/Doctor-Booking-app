
import React from 'react';
import { useNavigate } from 'react-router-dom';
import img1 from './login.png'
import { FaPlusCircle } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";



const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform authentication logic if needed

    // Navigate to the Welcome component
    navigate('/welcome');
  };

  return (
    <div className='bg-gray-200 h-[900px] '>
      <p className=' bg-emerald-600 pt-5 px-3'><FaPlusCircle className='text-red-700 h-10 w-9'/></p>
      <div className='bg-emerald-600 h-[560px] rounded-bl-full flex  justify-center items-center'>
        <img className='ml-4' style={{ height: 300, width: 400 }} src={img1} alt='/' />
      </div>
      <div className='flex flex-col justify-center items-center w-full h-[100px]'>
        <p className='text-3xl font-bold text-gray-700' l>How Do You Feel Today</p>
        <p className='m-10 w-2/3 bottom-3 font-semibold text-gray-700'>choose the desire Doctor according to the problem to your door stop</p>
        <button className='flex justify-center items-center w-1/2 bg-emerald-700 px-9 p-4 rounded-full font-bold text-gray-300  ' onClick={handleLogin}>Get Started<CiLocationArrow1 className='ml-6 text-white text-2xl'/> </button>
      </div>
    </div>
  );
};

export default Login;
