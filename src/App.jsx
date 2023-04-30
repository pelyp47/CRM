import React from "react";
import routes from "./routes.jsx"
import { BrowserRouter} from "react-router-dom";
import "./assets/styles/global/reset.scss"
import "./assets/styles/global/style.scss"

const App = function(props) {
    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    )
}

export default App