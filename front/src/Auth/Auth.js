import axios from "axios";
import { toast } from "react-toastify";
import SkullReact from "../SkullReact";

const backend = SkullReact.Check();

export function login(data, setAuthUser) {
  return axios
    .post(backend + `/api/auth/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      toast.success("You have been logged in, " + res.data.name);
      setAuthUser(true);
      localStorage.setItem("isLoggedin", true);
    })
    .catch((err) => {
      toast.error("Ohh no something went wrong");
      console.log(err);
    });
}

export function logout(setAuthUser) {
  return axios
    .get(backend + `/api/auth/logout`, {
      withCredentials: true,
    })
    .then((res) => {
      toast.success(res.data.message);
      setAuthUser(false);
      localStorage.clear();
      return res;
    })
    .catch((err) => {
      toast.error("Ohh no something went wrong");
      console.log(err);
    });
}
export function createAccount(data) {
  return axios
    .post(backend + `/api/auth/create`, data, {
      withCredentials: true,
    })
    .then((res) => {
      toast.success(res.data.message);
      return res;
    })
    .catch((err) => {
      toast.error("Ohh no something went wrong");
      console.log(err);
    });
}
export function checkLoggedIn() {
  return axios
    .get(backend + "/api/check", {
      withCredentials: true,
    })
    .then((res) => {
      return res.data.status;
    })
    .catch((err) => {
      toast.error("Ohh no something went wrong");
      console.log(err);
    });
}
