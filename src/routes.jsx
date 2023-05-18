import React from "react"
import { Routes, Route} from "react-router-dom"
import LogInPage from "./components/pages/LogInPage.jsx"
import LogInForm from "./components/layout/LogInForm.jsx"
import ForgotPasswordForm from "./components/layout/ForgotPasswordForm.jsx"
import { CSSTransition, TransitionGroup } from "react-transition-group"

const routes = 
    <TransitionGroup>
        <Routes>
            <Route exact path="/login" Component ={LogInPage}>
                <Route path="login-form" Component={LogInForm}/>
                <Route path="login-forgot-password" Component={ForgotPasswordForm}/>
            </Route>
        </Routes>
    </TransitionGroup>
    


export default routes
