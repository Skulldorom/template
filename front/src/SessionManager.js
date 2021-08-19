import React from "react";
import SkullReact from "./SkullReact";
import axios from "axios";

function StartSession() {
  if (localStorage.getItem("X-CSRFToken")) {
    const token = localStorage.getItem("X-CSRFToken");
    axios.defaults.headers.common["X-CSRFToken"] = token;
    return { "X-CSRFToken": token };
  } else {
    return SkullReact.Set().then((data) => {
      localStorage.setItem("X-CSRFToken", data);
      axios.defaults.headers.common["X-CSRFToken"] = data;
      return { "X-CSRFToken": data };
    });
  }
}

const SessionManager = React.createContext({
  isLoggedIn: false,
  header: "",
});

export { SessionManager, StartSession };
