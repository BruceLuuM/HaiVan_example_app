import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
//import Example from "./components/Example";

if (document.getElementById("example-app")) {
    ReactDOM.render(<App />, document.getElementById("example-app"));
}
