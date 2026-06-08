import React, { useState } from 'react'
import { useEffect } from 'react';

const App = () => {




  const [Todos, setTodos] = useState([])
  
  useEffect(()=>{
    async function getQuote(){
      const responce= await fetch('https://dummyjson.com/quotes');
      const data = await responce.json();
    
      console.log(data)
      setTodos(data.quotes);
      
    }

      getQuote();
  },[]);


  return(
    <div>
      {
        Todos.map((item)=>(
          <h3 key={item.id}>
            {item.quote}
          </h3>
        ))
      }
    </div>
  )
}

export default App
