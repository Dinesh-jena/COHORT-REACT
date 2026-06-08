import React, { Fragment } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const Read = (props) => {

     const todos = props.todos;
     const setTodos = props.setTodos;

      const DeleteHandler = (id) =>{
        const copytodos = [...todos];
        const filtertodos = copytodos.filter(todo => todo.id !== id);//iska mtlb hai ki jiska id match nahi karega usko hi wapas dega
        setTodos(filtertodos);
         toast.success("Todo Delete Sucessfully");

      }

     const rendertodos = todos.map(todo =>{
        return <li 
          className="text-white bg-gray-900 p-5 mt-2 w-[100%] h-[50%] "
          key={todo.id}
        >
          {todo.title} 
          <span
          className='pl-20 text-red-300'
          onClick={() => DeleteHandler(todo.id)}>|| Delete</span> 
        </li>
      })

  return (
    <div className='p-5 '> 
        <h1 className="text-orange-300 text-xl ">Pending <span className='text-white'>Todos </span>  
        <button
         className=' mt-4 px-5 py-2 border border-teal-400 text-teal-400 rounded-md hover:bg-teal-400 hover:text-black transition duration-300' 
         onClick={() => setTodos([])}>Delete All
         </button>
         </h1>
       
        <ol className=" pl-6 p-5 mt-5  ">{rendertodos}</ol>
      </div>
  )
}

export default Read