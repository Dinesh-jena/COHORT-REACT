import React, { useContext, useEffect } from 'react'
import { UserProductData } from '../Context/UserProduct'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const Data=useContext(UserProductData);

    const navigate = useNavigate();

    function SubmitHandler(){
      
      navigate("/Products");
    }

  

  return (
    <div className='h-screen flex flex-col justify-center items-center font-sans animate-pluse gap-2'>

        <h1 className="text-5xl font-bold whitespace-nowrap">
          Welcome to Design Product
        </h1>


        <p className="text-lg mt-2">
          Innovative solutions crafted for modern needs.
        </p>


        <button
          className="group relative w-40 h-12 bg-black text-white rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:-translate-y-1"

          onClick={()=>{SubmitHandler()}}
        >

            <span
              className="absolute inset-0 flex items-center justify-center
              transition-all duration-300
              group-hover:opacity-0"
            >
              Please Hurry Up
            </span>

            <span
              className="absolute inset-0 flex items-center justify-center
              opacity-0 transition-all duration-300
              group-hover:opacity-100"
            >
              Get Started
            </span>
        </button>


    </div>
  )
}

export default Home