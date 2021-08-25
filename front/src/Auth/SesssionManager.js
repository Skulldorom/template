import React from "react";
import SkullReact from "../SkullReact";
import axios from "axios";
import { checkLoggedIn } from "./Auth";

export const SessionManager = React.createContext({
  isLoggedIn: false,
  header: "",
  setHeader: null,
  setLoggedin: null,
});

const SessionManagerProvider = (props) => {
  // eslint-disable-next-line react/prop-types
  const { children } = props;

  // State to hold the selected header name
  const [current, setCurrent] = React.useState("");

  if (!localStorage.getItem("X-CSRFToken"))
    SkullReact.Set().then((data) => {
      setCurrent(data);
      localStorage.setItem("X-CSRFToken", current);
    });

  axios.defaults.headers.common["X-CSRFToken"] = current;
  localStorage.setItem("X-CSRFToken", current);

  // Wrap setHeader to store new header names in localStorage
  const setHeader = (header) => {
    setCurrent(header);
  };

  const [currentLoggin, setCurrentLoggedIn] = React.useState(false);

  React.useEffect(() => {
    checkLoggedIn().then((data) => {
      if (localStorage.getItem("Remember") === "true")
        setCurrentLoggedIn(data.status);
      if (!data.sess) {
        SkullReact.Set().then((data) => {
          setCurrent(data);
        });
      }
    });
  });

  const setLoggedin = (status) => {
    setCurrentLoggedIn(status);
  };

  const contextValue = {
    isLoggedIn: currentLoggin,
    header: current,
    setHeader: setHeader,
    setLoggedin: setLoggedin,
  };

  axios.interceptors.response.use(
    (res) => res,
    (err) => {
      if (err.response.status === 400) {
        SkullReact.Set().then((data) => {
          setCurrent(data);
        });
        throw new Error(`${err.config.url} not found`);
      }
      throw err;
    }
  );

  return (
    <SessionManager.Provider value={contextValue}>
      {children}
    </SessionManager.Provider>
  );
};

export default SessionManagerProvider;
