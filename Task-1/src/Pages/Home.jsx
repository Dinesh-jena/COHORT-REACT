import React from 'react'
import Navbar from '../Components/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation';

const Home = () => {

    const navigate = useNavigate();

    function SubmitHandler(){
        navigate('/student');
    }
  return (
   
 <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-purple-100">
             <Navbar/>
             
                <h1 className="text-6xl font-extrabold text-purple-700 drop-shadow-lg">
                    <TypeAnimation
                    sequence={[
                        'Welcome to Student Academy',
                    ]}
                    speed={50}
                    repeat={0}
                    />
                </h1>

                <p className="mt-4 text-xl text-purple-500">
                    Search • Manage • Track Students
                </p>


                <p className="mt-2 text-lg text-pink-500 animate-pulse">
                    Your Student Management Partner 🚀
                </p>

                <button
                    className="
                    mt-8
                    px-8
                    py-3
                    bg-purple-600
                    text-white
                    rounded-xl
                    shadow-xl
                    hover:scale-110
                    hover:bg-purple-700
                    transition-all
                    duration-300
                    "

                    onClick={SubmitHandler}
                >
                    Search Student
                </button>

</div>
  )
}

export default Home