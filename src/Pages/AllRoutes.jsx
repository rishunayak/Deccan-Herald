import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Bengaluru from "./Bengaluru"
import Karnataka from "./Karnataka"
import National from "./National"
import Sports from "./Sports"
import Business from "./Business"



function AllRoutes()
{
  return (<Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/bengaluru" element={<Bengaluru/>}></Route>
    <Route path="/karnataka" element={<Karnataka/>}></Route>
    <Route path="/national" element={<National/>}></Route>
    <Route path="/sports" element={<Sports/>}></Route>
    <Route path="/business" element={<Business/>}></Route>
  </Routes>)
}

export default AllRoutes