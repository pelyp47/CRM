import React, {useState} from "react"
import Logo from "../common/Logo.jsx"
import "../../assets/styles/components/LogInPage.scss"
import EmailSign from "../../assets/images/LogInPage/email_sign.svg"
import PasswordOn from "../../assets/images/LogInPage/password_on.svg"
import PasswordOff from "../../assets/images/LogInPage/password_off.svg"
import Bgi from "../../assets/images/LogInPage/bgi_log_in.svg"

const LogInPage = function(props) {
    let {passwordVisibility, setPasswordVisibility} = useState(true)
    let {password, setPassword} = useState("")
    return (
        <>
        <main className="log-in">
            <div className="log-in__wrapper log-in__wrapper_left">
                <Logo/>
                <form action="" className="log-in__form">
                    <label htmlFor="" className="log-in__input log-in__input_gmail">
                        <input type="text" name="" id="" placeholder="Email"/>
                        <img src={EmailSign}/>
                    </label>
                    <label htmlFor="" className="log-in__input log-in__input_password">
                        <input type="text" name="" id="" placeholder="Password"/>
                        {passwordVisibility? <img src={PasswordOn} alt=""/> : <img src={PasswordOff} alt=""/> }
                    </label>
                    <input type="submit" name="" id="" className="log-in__submit-btn"/>
                </form>
                <div className="log-in__forgot-password">
                    <a href="">Forgot Password?</a>
                    <span></span>
                </div>
            </div>
            <div className="log-in__wrapper log-in__wrapper_right">
                <img src={Bgi} alt="" />
            </div>
        </main>
        </>
    )
}

export default LogInPage