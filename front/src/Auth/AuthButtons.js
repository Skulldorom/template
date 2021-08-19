import React from "react";
import { Button, FormGroup } from "@material-ui/core";
import { login, logout, createAccount } from "../Auth/Auth";
import { makeStyles } from "@material-ui/core/styles";

function Login({ setAuthUser }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => login({ email: "test", password: "test" }, setAuthUser)}
    >
      Login
    </Button>
  );
}

function SignUp() {
  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={() => createAccount({})}
    >
      Sign Up
    </Button>
  );
}

function Logout({ setAuthUser }) {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={() => logout(setAuthUser)}
    >
      Logout
    </Button>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function AuthButtons({ isLoggedIn, setAuthUser }) {
  const classes = useStyles();

  return (
    <FormGroup row className={classes.root}>
      {isLoggedIn ? (
        <Logout setAuthUser={setAuthUser} />
      ) : (
        <>
          <SignUp />
          <Login setAuthUser={setAuthUser} />
        </>
      )}
    </FormGroup>
  );
}

export default AuthButtons;
