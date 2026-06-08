import React from 'react'

const Card = () => {
  return (
    <div className='w-[24vw] rounded-xl p-5 flex items-center flex-col text-center h-80 bg-white text-black'>
        <img className="h-20 w-20 rounded-full  "src="https://r.bing.com/rp/BDHHcKC9KPQ0YQAkxyFjqkhf2Pk.png" alt="" />
        <h1 className='text-xl mt-5 font-semibold'>Dinesh jena</h1>
        <h5 className='text-base text-blue-500 font-semigold my-2 '>Devloper</h5>
        <p className='text-sm font-medium leading-tight'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero distinctio v..</p>
        <button className='px-4 py-2 rounded cursor-pointer scale-95 bg-red-600 text-white font-semibold'>Remove</button>
    </div>
  )
}

export default Card