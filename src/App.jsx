import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import routes from "./routes.jsx"
import { BrowserRouter} from "react-router-dom";
import "./assets/styles/global/reset.scss"
import "./assets/styles/global/style.scss"

const InitialRedirect = (props) => {
    const navigate = useNavigate();
    useEffect(() => {
      navigate(props.to);
    }, []);
  
    return null;
};

const App = function(props) {
    return (
        <BrowserRouter>
            <InitialRedirect to="/login/login-form" />
            {routes}
        </BrowserRouter>
    )
}

export default App