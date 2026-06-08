import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Coures from './Pages/Coures'


const App = () => {
  return (
    <div className='bg-zinc-700 h-[100vw]'>
      
      <Navbar/>

      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/coures' element={<Coures/>}/>
      </Routes>
    </div>
  )
}

export default App