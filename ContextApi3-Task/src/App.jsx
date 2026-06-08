import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Products from './Pages/Products'
import Product from './Pages/Product'
import Navbar from './Pages/Navbar'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/Products' element={<Products/>}></Route>
        <Route path='/Product' element={<Product/>}></Route>
      </Routes>
    </div>
  )
}

export default App