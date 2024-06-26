import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Routes from "./routes";
import reportWebVitals from "./reportWebVitals";
import Navbar from "./screens/navbar/nav";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
