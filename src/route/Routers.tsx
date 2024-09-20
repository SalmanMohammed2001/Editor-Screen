import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from '../pages/welcomePage/welcomePage';
import EmailPage from '../pages/emailPage/emailPage';


export const Routers = () => {
  return (
    <Routes>
       <Route path="/"  element={<WelcomePage/>} />
             <Route path="/contaent"  element={<WelcomePage/>} />
             <Route path="/design"  element={<WelcomePage/>} />
             <Route path="/share"  element={<WelcomePage/>} />
             <Route path="/contaent/email"  element={<EmailPage/>} />
         
    </Routes>

  )
}

export default Routers;