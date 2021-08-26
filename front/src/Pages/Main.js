import React from "react";
import logo from "../logo.svg";
import SkullReact from "../SkullReact";
import { Typography, Button } from "@material-ui/core";
import { SessionManager } from "../Auth/SesssionManager";

export default function Main(props) {
  const { isLoggedIn } = React.useContext(SessionManager);
  return (
    <>
      <Typography variant="body1" color="primary" align="center">
        <img src={logo} style={{ height: "300px" }} alt="logo" />
      </Typography>
      <Typography variant="body1" color="primary" align="center">
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => SkullReact.Test()}
        >
          Test (Prints in the backend)
        </Button>
      </Typography>
      <br />
      <br />
      <Typography variant="h3" color="primary" align="center">
        Logged in? {String(isLoggedIn)}
      </Typography>
    </>
  );
}
