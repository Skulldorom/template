import logo from "../logo.svg";
import "../App.css";
import SkullReact from "../SkullReact";
import { login, logout, createAccount } from "../Auth/Auth";
import axios from "axios";

export default function Main(props) {
  console.log(props);
  const header = props.header["X-CSRFToken"];
  axios.defaults.headers.common["X-CSRFToken"] = header;
  const createdata = {
    email: "test",
    password: "test",
    fname: "john",
    lname: "doe",
    telephone: "0723475693",
  };
  return (
    <>
      <img src={logo} style={{ height: "300px" }} alt="logo" />
      <p onClick={() => createAccount(createdata)}>Create AC</p>
      <p onClick={() => login({ email: "test", password: "test" })}>Login</p>
      <p onClick={() => logout()}>Logout</p>
      <p onClick={() => SkullReact.Test()}>Test</p>
      <p>Logged in? {String(props.isLoggedIn)}</p>
    </>
  );
}
