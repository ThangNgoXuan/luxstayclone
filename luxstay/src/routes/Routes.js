import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Place from "../pages/Place"
import Travel from "../pages/Travel"


const RoutesClient = () => {
    return (
        <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='/place' exact element={<Place/>}/>
            <Route path='/travel' exact element={<Travel/>}/>
        </Routes>
    )
}

export default RoutesClient