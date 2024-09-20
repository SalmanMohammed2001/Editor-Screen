import React from 'react'
import { Route, Routes } from 'react-router-dom'
import WelcomePage from '../pages/welcomePage/welcomePage';


export const Routers = () => {
  return (
    <Routes>
             <Route path="/contaent"  element={<WelcomePage/>} />
             <Route path="/design"  element={<WelcomePage/>} />
             <Route path="/share"  element={<WelcomePage/>} />
             {/* <Route path="/replies"  element={<WelcomePage/>} /> */}
         
    </Routes>

  )
}

export default Routers;