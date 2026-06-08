import React from 'react'

const Card = ({
  Student = [] ,
  img = "https://cdn-icons-png.flaticon.com/512/149/149071.png"
}) => {

  
  console.log(Student)
  
  return (
       Student.map((elem,index)=>{

         const studentImage = elem.img || img;

        return(
               <div key={index} className='h-60 w-75 border-2 border-black flex flex-col items-center   '>
                  <img className="mt-2 border-2 border-black  w-25 h-25 "
                   src={studentImage } 
                   alt=""   
                   />

                  <h1>name:-{elem.name}</h1>
                  <h1>Enrollment_no:-{elem.Enrollment_No}</h1>
                  <h1>Phone_no:-{elem.Phone_No}</h1>
                  <h1>Email_id:-{elem.Email_Id}</h1>
                </div>
              ) 
          })
         )
}
    
  


export default Card






//  Student = [],
//   defaultImage ="https://cdn-icons-png.flaticon.com/512/149/149071.png"