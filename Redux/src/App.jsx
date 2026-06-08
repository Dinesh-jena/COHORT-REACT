import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,IncrementByAmount} from '../redux/features/counterSlice'

const App = () => {

  const  [number, setnumber] = useState(5);

  
  const dispatch = useDispatch()

  const count = useSelector((state)=>state.counter.value)
  
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() =>{
        dispatch(increment())
      }}>
        Increment
        </button>
      <button onClick={()=>{
        dispatch(decrement())
      }}>
        Decrement
      </button>
      <input 
      type="text"
      value={number}
      onChange={(e)=>{setnumber(e.target.value)}} />

      <button onClick={()=>{
        dispatch(IncrementByAmount(Number(number)));
      }}>
        IncrementByAmount
      </button>

    </div>
  )
}

export default App