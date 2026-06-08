import React from 'react'
import { useState } from 'react';

const Navbar = (props) => {

    const [newtheme, setnewTheme] = useState('')

    function SubmitHandler(e){
        e.preventDefault();
        props.ChangeTheme(newtheme)
        setnewTheme('');
    }
  
  return (
    <div>
        <h1 className=' whitespace-none text-black underline font-semibold text-5xl'>Theme is {props.theme}</h1>
        <br />
        <button
        className='border-2 text-white ml-25 bg-[#000000] hover:bg-[#F6BBFC] '
        onClick={()=>{props.setTheme('Dark')}}>
        Change Theme</button>

    <br />
    <br />
    <form onSubmit={SubmitHandler}>
      <input className='border border-black bg-gray-400 focus:bg-white p-2 outline-none '
      onChange={(e)=>{setnewTheme(e.target.value)}}
      value={newtheme}
      type="text" placeholder='Enter your new Theme' />
      <button
       className='border-2 text-white ml-5 bg-[#000000] hover:bg-[#F6BBFC] '
      >submit</button>
    </form>
    </div>
  )
}

export default Navbar