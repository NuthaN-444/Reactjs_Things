import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/Reactjs_Things/Random_Number_Generator">
    <Routes>
          <Route path='/Random_Number_Generator' element={<App />}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>
)