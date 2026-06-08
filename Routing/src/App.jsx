import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Routes,Route } from 'react-router-dom'
import Product from './pages/Product'
import Navbar from './Components/Navbar'
import Coures from './pages/Coures'
import Anycoures from './pages/Anycoures'
import NotFound from './pages/NotFound'
import MainProduct from './pages/MainProduct'

const App = () => {
  return (
    <div>
    <Navbar/>
    <Routes>

      {/* NOramal Routes */}
    <Route path='/' element={<Home/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/product' element={<Product/>}/>
     <Route path='/coures' element={<Coures/>}/>

     {/* Nested Routes */}
           <Route path='/coures/:id' element={<Anycoures/>}/>

     {/* Dynamic Routes */}
      <Route path='/product/main' element={<MainProduct/>}/>

      {/* Not Found */}
      <Route path='/*' element={<NotFound/>} />




    
    </Routes>

    </div>
  )
}

export default App