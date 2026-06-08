import React from 'react'
import {useState} from 'react'
import { nanoid } from 'nanoid';
import Create from './components/Create';
import Read from './components/Read';

 

const App = () => {

  const [todos,setTodos] = useState([
    
  ])
              

  return (
   
    <div  className='text-white flex p-10 w-screen h-screen bg-gray-800'>
      <Create todos={todos} setTodos={setTodos} />
      <Read todos={todos} setTodos={setTodos} />
    </div>

  )
}

export default App
