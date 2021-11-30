import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.rtl.min.css";
import "./custom.scss";
import { BrowserRouter } from "react-router-dom";
import {AuthContextProvider} from './store/auth-context';

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>{" "}
  </AuthContextProvider>,
  document.getElementById("root")
);
