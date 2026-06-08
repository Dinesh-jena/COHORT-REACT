import React, { useState } from 'react'
import "./css/App.css"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const App = () => {

  const [name,setName]=useState('')

  const SubmitHandler =(e) =>{
    e.preventDefault();
    toast.success("Form submitted succesfully!");
  }

  return (
    <div>
      <form onSubmit={SubmitHandler}>
        <input 
        type="text"
         placeholder='Enter name '
         value={name}
         required
         onChange={
          (e)=>{
            setName(e.target.value);
         } 

         }/>
        <button>Submit</button>
      </form> 
      <ToastContainer />
    </div>
  )
}

export default App