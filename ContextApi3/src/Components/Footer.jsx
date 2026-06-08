import React, { useContext } from 'react'
import { ThemeDataConetext } from '../Context/ThemeContext'

const Footer = () => {

  const Result = useContext(ThemeDataConetext);
  return (
    <div className='footer'>
        <h1>Footer</h1>
        {Result}
    </div>
  )
}

export default Footer