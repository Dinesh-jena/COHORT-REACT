import React from 'react'
import Course from './Course'

const Allcourse = (props) => {
    console.log(props.CourseData)
  return (
    <div>
        Allcourse
        <Course/>
        <Course/>
        <Course/>
        <Course/>
    </div>
  )
}

export default Allcourse