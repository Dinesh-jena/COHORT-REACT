import React, { createContext, useEffect, useState } from 'react'

export const UserProductData = createContext();

const UserProduct = (props) => {

    const [Product, setProduct] = useState([])

    const GetData = async() =>{
        const Response = await fetch('https://fakestoreapi.com/products');
        const Data = await Response.json();
        setProduct(Data);
    }

    useEffect(function(){GetData()},[]);

  return (
    <div>
        <UserProductData.Provider value={Product}>
            {props.children}
        </UserProductData.Provider>
    </div>
  )
}

export default UserProduct