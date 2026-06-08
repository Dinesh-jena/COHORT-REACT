import React, { useContext, useEffect } from 'react'
import { UserProductData } from '../Context/UserProduct'
import { useNavigate } from 'react-router-dom';

const Products = () => {

  const Data = useContext(UserProductData);
  
    const navigate = useNavigate();
      
    function SubmitHandler(id){
      console.log(id)
     // navigate("/Product");
    }


  return (
  <div className="flex flex-wrap justify-center gap-8 p-8">
          {Data .map((item,index) => (
            <div
              key={item.id}
              className="
              w-64
              bg-zinc-900
              text-white
              rounded-2xl
              overflow-hidden
              shadow-xl
              hover:-translate-y-2
              hover:scale-105
              hover:shadow-2xl
              transition-all
              duration-300
              "
            >
              {/* Product Image */}
              <div className="relative bg-white p-4">
                <img
                  src={item.image}
                  // alt={item.title}
                  className="h-40 w-full object-contain"
                />

                {/* Rating */}
                <div className="absolute top-3 right-3 bg-black text-white px-3 py-1 rounded-full text-xs font-medium">
                  ⭐ {item.rating.rate}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-4">
                <h2 className="text-sm font-semibold line-clamp-2 h-10">
                  {item.title}
                </h2>

                <p className="text-2xl font-bold mt-4">
                  ${item.price}
                </p>

                <button
                  className="
                  mt-4
                  w-full
                  bg-white
                  text-black
                  py-2
                  rounded-lg
                  font-semibold
                  transition-all
                  duration-300
                  hover:scale-105
                  "
                  onClick={SubmitHandler(item.id)}
                >
                  View Product
                </button>
              </div>
            </div>
          ))}
  </div> 
  )
}

export default Products