import React, { use, useState } from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from './components/Card';

const App = () => {

  const [userName,setuserName]=useState('');
  const [userRole, setuserRole] = useState('');
  const [imageURL, setimageURL] = useState('');
  const [userDesc, setuserDesc] = useState('');

  const [alluser,setAllUser] =useState([])

  const submitHandler = (e) =>{
    e.preventDefault();
    toast.success('User Created Success Fully');

    const olduser = [...alluser];
    olduser.push({userName,userRole,imageURL,userDesc});
    console.log(olduser)
    setAllUser(olduser);  

    setuserName('');
    setuserRole('');
    setuserDesc('');
    setimageURL('');
  }

  const deleteHandler = (idx)=>{
    const copydelte = [...alluser];
    copydelte.splice(idx,1);

    setAllUser(copydelte);
  }

  
  return (
    <div className='h-screen bg-black text-white'>
      <form 
      onSubmit={submitHandler}
      className='flex flex-wrap justify-cenetr p-2'>
      <input 
      value={userName}
      onChange={(e)=>{
        setuserName(e.target.value);
      }}

      className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]' type="text" placeholder='Enter Your Name' />
      <input 
      value={imageURL}
      onChange={(e)=>{
         setimageURL(e.target.value);
       
      }}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'type="text" placeholder='Profile url' />
      <input 
      value={userRole}
      onChange={(e)=>{
        setuserRole(e.target.value);
      }}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'type="text" placeholder='Enetr Role' />
      <input 
      value={userDesc}
      onChange={(e)=>{
        setuserDesc(e.target.value);
      }}
      className='border-2 text-xl font-semibold px-5 py-2 rounded m-2 w-[45%]'type="text" placeholder='Enter Description' /> 
      <button className='bg-emerald-700 px-5 py-2 rounded m-2 w-[90%]'>Creaate user </button>
      </form>


      <div className='px-2 py-10 gap-5 flex flex-wrap '>  
     {
      alluser.map(function(elem,idx){
        return  <div key={idx} className='w-[24vw] rounded-xl p-5 flex items-center flex-col text-center h-80 bg-white text-black'>
        <img className="h-20 w-20 rounded-full  " src={elem.imageURL} alt="" />
        <h1 className='text-xl mt-5 font-semibold'>{elem.userName}</h1>
        <h5 className='text-base text-blue-500 font-semigold my-2 '>{elem.userRole}</h5>
        <p className='text-sm font-medium leading-tight'> {elem.userDesc}</p>
        <button 
         onClick={() => deleteHandler(idx)} 
        className='px-4 py-2 rounded cursor-pointer scale-95 bg-red-600 text-white font-semibold'>Remove</button>
    </div>
      })
     }
      </div>


      <ToastContainer/>
    </div>
  )
}

export default App