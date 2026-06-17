import React, { useEffect, useState } from 'react'
import apiFetch from '../../Api/api';
import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router-dom';

const FeatchRQ = () => {

    // const [posts, setPosts] = useState([]);

    // const getPostData = async () =>{
    //     try {
    //         // const res = await apiFetch();
    //         // console.log(res)
    //         // res.status === 200 ? setPosts(res.data) : [];
    //         // return res.status === 200 ? res.data : [];
    //          return await apiFetch();
    //     } catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // };

    // useEffect(()=>{getPostData();},[])

    const [pageNumber, setPageNumber] = useState(0)

   const {data,isLoading,isError,error} =  useQuery({
        queryKey:['posts',pageNumber], //usestate ka kamm kar raha hai 
        queryFn:()=>apiFetch(pageNumber), 
        // gcTime:1000,
        // staleTime:10000, //useEffact ka 
    })

    if(isLoading) return <p>Loading...</p>;
    if(isError) return <p>Error: {error.message || "Somthing went wrong!"}</p>;

  return (
    <div>
        <ul className='section-accordion'>
            {data?.map((curElem)=>{
                const {id,title,body} = curElem;
                return (
                    <li key={id}>
                        <NavLink to={`/rq/${id}`}>
                            <p>{id}</p>
                            <p>{title}</p>
                        <p>{body}</p>
                        </NavLink>
                    </li>
                )
            })}
        </ul>

        <div >
            <button disabled={pageNumber === 0?true:false}onClick={()=>{setPageNumber((prev)=>prev-3)}}>prev</button>
            <h2>{(pageNumber/3)+1}</h2>
            <button onClick={()=>{setPageNumber((prev)=>prev+3)}}>Next</button>
        </div>
     
    </div>
  )
}

export default FeatchRQ