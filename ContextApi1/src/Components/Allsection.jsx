import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'

const Allsection = (props) => {

    console.log(props.CourseData);
  return (
    <div>
        Allsection
        <Section1/>
        <Section2 />
    </div>
  )
}

export default Allsection