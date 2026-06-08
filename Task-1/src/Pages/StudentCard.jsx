import React from 'react'
import Card from '../Components/Card';

const StudentCard = (props) => {

 
  return (
    <div className='flex flex-wrap gap-4  '>
    
    

    <Card Student={props.Student} />
  
        
        
           
    </div>
   
  )
}

export default StudentCard  