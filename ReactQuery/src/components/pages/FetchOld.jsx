import React, { useEffect, useState } from 'react'
import apiFetch from '../../Api/api';

const FetchOld = () => {

    // const [posts, setPosts] = useState([]);

    // const getPostData = async () =>{
    //     try {
    //         const res = await apiFetch();
    //         console.log(res)
    //         res.status === 200 ? setPosts(res.data) : [];
    //     } catch (error) {
    //         console.log(error);
    //         return [];
    //     }
    // };

    // useEffect(()=>{getPostData();},[])


  return (
    // <div>
    //     <ul className='section-accordion'>
    //         {posts.map((curElem)=>{
    //             const {id,title,body} = curElem;
    //             return (
    //                 <li key={id}>
    //                     <p>{title}</p>
    //                     <p>{body}</p>
    //                 </li>
    //             )
    //         })}
    //     </ul>
     
    // </div>
    <div>
        <p>FeactchOld</p>
    </div>
  )
}

export default FetchOld