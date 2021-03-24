import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./tailwind.output.css";
import { BrowserRouter as Router } from "react-router-dom";

import Store from "components/Store";

ReactDOM.render(
   <React.StrictMode>
      <Store>
         <Router>
            <App />
         </Router>
      </Store>
   </React.StrictMode>,
   document.getElementById("root")
);

if (import.meta.hot) import.meta.hot.accept();
