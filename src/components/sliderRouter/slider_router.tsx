import { Route, Routes } from "react-router-dom"
import Contaent from "../../pages/sliderPages/contaent"
import Design from "../../pages/sliderPages/design"
import Share from "../../pages/sliderPages/share"
import Replies from "../../pages/sliderPages/replies"
import EmailPage from "../../pages/emailPage/emailPage"


const SliderRouter = () => {
  return (
    <div>
        <Routes>
        <Route path="/"  element={<Contaent/>} />
        
        <Route path="/contaent"  element={<Contaent/>} >
        <Route path="email" element={<EmailPage />} />
        </Route>
        <Route path="/design"  element={<Design/>} />
        <Route path="/share"  element={<Share/>} />
        <Route path="/replies"  element={<Replies/>} />
        </Routes>
    </div>
  )
}

export default SliderRouter