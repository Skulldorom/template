import axios from "axios";
import { toast } from "react-toastify";
import SkullReact from "../SkullReact";

const backend = SkullReact.Check();

export function login(data, setAuthUser) {
  const r = data.remember;
  return axios
    .post(backend + `/api/auth/login`, data, {
      withCredentials: true,
    })
    .then((res) => {
      if (res.data.status === "success") {
        toast.success(res.data.message);
        localStorage.setItem("Remember", r);
        setAuthUser(true);
      } else {
        toast.warning(res.data.message);
      }
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
      toast.info(res.data.message);
      setAuthUser(false);
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
      return res.data;
    })
    .catch((err) => {
      toast.error("Ohh no something went wrong");
      console.log(err);
    });
}
