import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (


    <nav className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        w-[70%]
        h-14
        bg-pink-200
        rounded-2xl
        shadow-lg
        backdrop-blur-md
        flex
        items-center
        justify-between
        px-8
        ">
        <div className=" text-purple-600 flex gap-2">

            <div className="h-10 w-10 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">⌘</span>
            </div>

            <h1 className="text-3xl font-black tracking-wider bg-gradient-to-r from-pink-500 to-purple-700 bg-clip-text text-transparent">
            Studora
            </h1>
        </div>

        <div className="flex gap-6">
            <NavLink to="/"
                className={({ isActive }) =>
                    `px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1 ${
                    isActive ? "bg-white text-black rounded-lg" : "text-black"
                    }`
                }
                >
                Home
            </NavLink>


            <NavLink to="/student"
                className={({ isActive }) =>
                    `px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1 ${
                    isActive ? "bg-white text-black rounded-lg" : "text-black"
                    }`
                }
                >
                Student
            </NavLink>
           
           
        </div>
    </nav>
  )
}

export default Navbar