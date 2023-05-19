import React from "react"
import EmailSign from "../../assets/images/LogInPage/email_sign.svg"
import "../../assets/styles/components/ForgotPasswordForm.scss"

const ForgotPasswordForm = function(props) {
    return(<>
    <form action="" className="log-in__form">
        <label htmlFor="" className="log-in__input log-in__input_gmail">
            <input type="text" name="" id="" placeholder="Email"/>
            <img src={EmailSign}/>
        </label>
        <input type="submit" name="" id="" className="log-in__submit-btn" value="Forgot Password"/>
    </form>
    </>)
}

export default ForgotPasswordForm