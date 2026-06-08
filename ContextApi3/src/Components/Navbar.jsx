import { useContext } from "react"
import { ThemeDataConetext } from "../Context/ThemeContext"

const Navbar = () => {

  
  const [theme,setTheme] = useContext(ThemeDataConetext);

  return (
    <div className='nav'>
        <h1>Navbar</h1>
        <h2>{theme}</h2>
        <button onClick={()=>{
          if(theme == 'light'){
            setTheme('Dark')
          }else {
            setTheme('light') 
          }
        }}>change Theme</button>
    </div>
  )
}

export default Navbar