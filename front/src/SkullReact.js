import axios from "axios";

const SkullReact = {
  Check: function DevCheck() {
    var debug = false;

    if (
      window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1"
    )
      debug = true;

    return debug ? "http://localhost:5000" : "";
  },
  Set: function SetCsrf() {
    const csrf = axios
      .get(backend + `/api/csrf`, { withCredentials: true })
      .then((res) => {
        return res.data["X-CSRFToken"];
      })
      .then((final) => {
        return final;
      });
    return csrf;
  },
  Test: function Test() {
    return axios
      .get(backend + `/api/test`, { withCredentials: true })
      .then((res) => {
        return res;
      });
  },
};

const backend = SkullReact.Check();

export default SkullReact;
