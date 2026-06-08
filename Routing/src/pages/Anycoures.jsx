import React from 'react'
import { useParams } from 'react-router-dom';

const Anycoures = () => {
    const Result = useParams();
    console.log(Result);
  return (
    <div className='whitespace-nowrap capitalize Bold underline text-5xl font-semibold absolute top-1/2 left-1/2 -translate-1/2'
    >{Result.id}Coures is there</div>
  )
}

export default Anycoures