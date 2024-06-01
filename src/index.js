import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/font.css";
import { GlobalStyle } from "./styles/GloablStyles";
const root = ReactDOM.createRoot(document.getElementById("root")); //id가 div인 root
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
