import React, { createContext, useState } from 'react'

export const ThemeDataConetext = createContext();

const ThemeContext = (props) => {
    
  const [theme, setTheme] = useState('light')
  
  return (
    <ThemeDataConetext.Provider value={[theme,setTheme]}>
       {props.children}
    </ThemeDataConetext.Provider>

  )
}

export default ThemeContext