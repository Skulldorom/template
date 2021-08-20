import React from "react";
import {
  Button,
  FormGroup,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
} from "@material-ui/core";
import { login, logout, createAccount } from "../Auth/Auth";
import { makeStyles } from "@material-ui/core/styles";

function Login({ setAuthUser }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword("");
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    login({ email: email, password: password }, setAuthUser);
  };
  return (
    <>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="Login-Form">
        <DialogTitle id="Login-Form">Login</DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>Sign in here!</DialogContentText>
            <TextField
              required
              label="Email"
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              required
              label="Password"
              type="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleSignIn}
              type="submit"
              color="secondary"
              autoFocus={true}
            >
              Sign In
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

function SignUp() {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [cpassword, setCPassword] = React.useState("");
  const [error, setError] = React.useState(false);
  const [errorText, setEText] = React.useState("");
  const [dis, setDis] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setDis(true);
    setEmail("");
    setFName("");
    setLName("");
    setPhone("");
    setPassword("");
    setCPassword("");
  };

  React.useEffect(() => {
    if (password === cpassword && password !== "") {
      setError(false);
      setEText("");
      setDis(false);
    } else {
      setError(true);
      setEText("Passwords do not match");
      setDis(true);
    }
  }, [password, cpassword]);

  const handleCreateAC = (event) => {
    event.preventDefault();
    createAccount({
      email: email,
      fname: fname,
      lname: lname,
      password: password,
      telephone: phone,
    });
  };
  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleClickOpen}>
        Sign up
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Account</DialogTitle>
        <form>
          <DialogContent>
            <DialogContentText>
              If you dont have an account, you can create one here
            </DialogContentText>
            <TextField
              required
              label="Email"
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              required
              label="First Name"
              type="text"
              onInput={(e) => setFName(e.target.value)}
              fullWidth
            />
            <TextField
              required
              label="Last Name"
              value={lname}
              onInput={(e) => setLName(e.target.value)}
              fullWidth
            />
            <TextField
              required
              label="Phone Number"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              fullWidth
            />
            <TextField
              required
              label="Password"
              type="password"
              value={password}
              onInput={(e) => setPassword(e.target.value)}
              fullWidth
              error={error}
            />
            <TextField
              required
              label="Confrim Password"
              type="password"
              value={cpassword}
              onInput={(e) => setCPassword(e.target.value)}
              fullWidth
              error={error}
              helperText={errorText}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="secondary">
              Cancel
            </Button>
            <Button
              onClick={handleCreateAC}
              type="submit"
              color="secondary"
              autoFocus={true}
              disabled={dis}
            >
              Create Account
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
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
