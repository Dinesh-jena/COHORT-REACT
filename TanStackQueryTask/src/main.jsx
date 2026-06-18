import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import UserContext from './context/UserContext.jsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginContext from './context/LoginContext.jsx';
import { Provider } from "react-redux";
import {store} from './redux/store.js'

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
         <BrowserRouter>
      
   
          <App />
     
      </BrowserRouter>
    </Provider>
     
)
