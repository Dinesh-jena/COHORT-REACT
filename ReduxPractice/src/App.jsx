import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment , incrementByAmount } from "../redux/feature/counterSlice";

const App = () => {
  const [number, setnumber] = useState(0);

  const counter = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();
  return <div className="">
    <h1>{counter}</h1>
    <button
    className=" border-2 border-black "
    onClick={()=>{
      dispatch(increment())
    }}>Increment</button>
    
    <button
    className=" border-2 border-black "
    onClick={()=>{
      dispatch(decrement())
    }}>Decrement</button>

    <input 
    className="border-2"
    type="text"
    value={number}
    onChange={(e)=>setnumber(e.target.value)}
     />
    
    <button 
    className="border-2 mt-2"
    onClick={()=>{
      dispatch(incrementByAmount(Number(number)));
        }}>
        IncrementByAmount
    </button>
  </div>;
};

export default App;
