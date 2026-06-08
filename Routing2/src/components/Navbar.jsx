import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='nav'>
        <Link to="/">Home</Link>
        <Link to="/about">about</Link>
        <Link to="/coures">Coures</Link>
    </div>
  )
}
export default Navbar