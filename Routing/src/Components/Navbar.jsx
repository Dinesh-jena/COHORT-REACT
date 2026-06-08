import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
     <div className='flex justify-between px-8 py-4 bg-pink-900 mb-10'>
      <h2 className='text-white'>Navbar</h2>
      <div className='flex gap-6 text-white'>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
        <Link to="/coures">Coures</Link>
      </div>
    </div>
  )
}

export default Navbar