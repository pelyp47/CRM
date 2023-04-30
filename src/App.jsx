import React from "react";
import routes from "./routes.jsx"
import { BrowserRouter} from "react-router-dom";

const App = function(props) {
    return (
        <BrowserRouter>
            {routes}
        </BrowserRouter>
    )
}

export default App