import React from "react"
import { Routes, Route} from "react-router-dom"
import LogInPage from "./components/pages/LogInPage.jsx"

const routes = 
    <Routes>
        <Route exact path="/" Component ={LogInPage}/>
    </Routes>


export default routes
