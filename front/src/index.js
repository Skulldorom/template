import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// styling

import CssBaseline from "@material-ui/core/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CustomThemeProvider from "./Components/CustomThemeProvider";
import SessionManagerProvider from "./Auth/SesssionManager";
import { BrowserRouter as Router } from "react-router-dom";

document.title = "Flask React";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SessionManagerProvider>
        <CustomThemeProvider>
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <CssBaseline />
          <App />
        </CustomThemeProvider>
      </SessionManagerProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
