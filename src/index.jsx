import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.jsx";
import "./tailwind.output.css";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
   <React.StrictMode>
      <Router>
         <App />
      </Router>
   </React.StrictMode>,
   document.getElementById("root")
);

if (import.meta.hot) import.meta.hot.accept();
