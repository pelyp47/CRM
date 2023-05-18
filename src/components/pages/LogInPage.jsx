import React from "react"
import Logo from "../common/Logo.jsx"
import "../../assets/styles/components/LogInPage.scss"
import Bgi from "../../assets/images/LogInPage/bgi_log_in.svg"
import { Outlet } from "react-router"

const LogInPage = function(props) {
    
    return (
        <>
        <main className="log-in">
            <div className="log-in__wrapper log-in__wrapper_left">
                <Logo/>
                <Outlet/>
            </div>
            <div className="log-in__wrapper log-in__wrapper_right">
                <img src={Bgi} alt="" />
            </div>
        </main>
        </>
    )
}

export default LogInPage