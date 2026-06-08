import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import UserProduct from './Context/UserProduct.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     <UserProduct>
        <App />
    </UserProduct>
    </BrowserRouter>
   
    

)
