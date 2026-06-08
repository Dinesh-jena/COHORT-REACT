import React from 'react'
import { useState } from 'react';
import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";


const App = () => {

  const [count,setCount] = useState(0); 

  function increment() {
      setCount(count+1);
      toast.success("Count Incresed!");
  }

  function decrement(){
    setCount(count-1);
     toast.success("Count Decresed!");
  }

  function Reset(){
    setCount(0);
     toast.success("Count Reset!");
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>increment</button>
       <button onClick={decrement}>Decrement</button>
        <button onClick={Reset}>Reset</button>
         <ToastContainer />
    </div>
  )
}

export default App;