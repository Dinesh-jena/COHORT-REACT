import React from 'react'
import { Link } from 'react-router-dom'
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
  <div className='flex justify-between items-center
        text-white bg-black h-14
        w-[80%] mx-auto
        px-6
        transition-all duration-500 ease-in-out
        hover:w-full
        rounded-full'>
  <div className='flex gap-4'>
    <h1>Logo</h1>
    <h1>Design Product</h1>
  </div>

  

  <div className='flex gap-4'>
    {/* <Link to="/">
         <button className='px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1'>
         Home
        </button>
    </Link>

    <Link to="/Products">
        <button className='px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1'>
         Products
        </button>
    </Link> */}


    <NavLink
            to="/"
            className={({ isActive }) =>
                `px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1 ${
                isActive ? "bg-white text-black rounded-lg" : "text-white"
                }`
            }
            >
            Home
    </NavLink>

    <NavLink
            to="/Products"
            className={({ isActive }) =>
                `px-4 py-2 transition-all duration-300 ease-out hover:-translate-y-1 ${
                isActive ? "bg-white text-black rounded-lg" : "text-white"
                }`
            }
            >
            Products
    </NavLink>
  </div>
</div>
  )
}

export default Navbar