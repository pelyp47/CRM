import React, {useState} from "react"
import { Link } from "react-router-dom"
import EmailSign from "../../assets/images/LogInPage/email_sign.svg"
import PasswordOn from "../../assets/images/LogInPage/password_on.svg"
import PasswordOff from "../../assets/images/LogInPage/password_off.svg"
import "../../assets/styles/components/LogInForm.scss"

const LogInForm = function(props) {
    let [passwordVisibility, setPasswordVisibility] = useState(true)
    let [password, setPassword] = useState("")
    const passwordVisibilityChange = function(visibility) {
        setPasswordVisibility(visibility)
    }
    return (<>
    <form action="" className="log-in__form">
        <label htmlFor="" className="log-in__input log-in__input_gmail">
            <input type="text" name="" id="" placeholder="Email"/>
            <img src={EmailSign}/>
        </label>
        <label htmlFor="" className="log-in__input log-in__input_password">
            <input type={passwordVisibility?"text":"password"}name="" id="" placeholder="Password"/>
            {passwordVisibility?
            <img src={PasswordOn} alt="" onClick={()=>passwordVisibilityChange(false)}/>: 
            <img src={PasswordOff} alt="" onClick={()=>passwordVisibilityChange(true)}/>}
        </label>
        <input type="submit" name="" id="" className="log-in__submit-btn" value="Log In"/>
    </form>
    <div className="log-in__forgot-password">
        <Link to="../login-forgot-password">Forgot Password?</Link>
        <span></span>
    </div>
    </>)
}

export default LogInForm