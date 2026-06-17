import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
     <header>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          padding: "15px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <NavLink to="/">Home</NavLink>
        <NavLink to="/trad">Traditional Fetch</NavLink>
        <NavLink to="/rq">React Query</NavLink>
      </nav>
    </header>
  )
}

export default Header