import React, { useEffect, useState } from 'react'
import StudentCard from './StudentCard';

const StudentList = () => {

   const Student = [
    {
      name:"Diensh Jena",
      Enrollment_No:202303103510146,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com",
      img:"https://media.licdn.com/dms/image/v2/D4D03AQHQTcxeBJAwKg/profile-displayphoto-crop_800_800/B4DZvEqf3PKYAI-/0/1768531034971?e=1781740800&v=beta&t=fUycTqQ8WI6YzOxOWHbRhouS7zQUZVC2sVAu1tWYvkg"
    },
    {
      name:"Dikshit Pawar",
      Enrollment_No:202303103510019,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com" 
    },
    {
      name:"Piysuh Chaudhri",
      Enrollment_No:202303103510019,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com",
      img:"https://media.licdn.com/dms/image/v2/D4D03AQHQTcxeBJAwKg/profile-displayphoto-crop_800_800/B4DZvEqf3PKYAI-/0/1768531034971?e=1781740800&v=beta&t=fUycTqQ8WI6YzOxOWHbRhouS7zQUZVC2sVAu1tWYvkg"
    },
    {
      name:"Dikshit Pawar",
      Enrollment_No:202303103510019,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com" 
    },
    {
      name:"Dikshit Pawar",
      Enrollment_No:202303103510019,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com",
      img:"https://media.licdn.com/dms/image/v2/D4D03AQHQTcxeBJAwKg/profile-displayphoto-crop_800_800/B4DZvEqf3PKYAI-/0/1768531034971?e=1781740800&v=beta&t=fUycTqQ8WI6YzOxOWHbRhouS7zQUZVC2sVAu1tWYvkg"
    },
    {
      name:"Dikshit Pawar",
      Enrollment_No:202303103510019,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com"
    },
    {
      name:"Dikshit Pawar",
      Enrollment_No:202303103510019,
      Phone_No:9879167692,
      Email_Id:"dineshakhay736@gmail.com",
      img:"https://media.licdn.com/dms/image/v2/D4D03AQHQTcxeBJAwKg/profile-displayphoto-crop_800_800/B4DZvEqf3PKYAI-/0/1768531034971?e=1781740800&v=beta&t=fUycTqQ8WI6YzOxOWHbRhouS7zQUZVC2sVAu1tWYvkg"
    }
   ] 
  
    

  return (
    <div >
        <StudentCard 
        Student={Student}
        //  defaultImage="https://cdn-icons-png.flaticon.com/512/149/149071.png"
         
        />

        
    </div>
  )
}

export default StudentList