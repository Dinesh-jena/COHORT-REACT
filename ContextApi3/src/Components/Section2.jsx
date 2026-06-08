import React, { useContext } from 'react'
import { ThemeDataConetext } from '../Context/ThemeContext'

const Section2 = () => {

  const Data = useContext(ThemeDataConetext);

  return (
    <div>
      <h1>Section2</h1>
       {Data}
    </div>
  
  )
}

export default Section2