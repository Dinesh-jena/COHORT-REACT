import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import StudentList from './Pages/StudentList'


const App = () => {
  return (
    <div >
     
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/student" element={<StudentList/>}></Route>
      </Routes>
    </div>
  )
}

export default App