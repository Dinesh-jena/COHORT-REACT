import React from 'react'
import axios from 'axios'
import Allsection from './Components/Allsection'
import Footer from './Components/Footer'
import Navbar from './Components/Navbar'
import { useState } from 'react'


const App = () => {

  const [theme, setTheme] = useState('light')
  
  function ChangeTheme(e){
    setTheme(e);
  }
  
  return (
    <div className='flex justify-center items-center h-screen bg-[#63F8F3] w-full'>
     <Navbar theme={theme} ChangeTheme={ChangeTheme}/>
    
  
   </div>
  )
}

export default App