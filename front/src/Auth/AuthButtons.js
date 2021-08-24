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
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  FormHelperText,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { login, logout, createAccount } from "../Auth/Auth";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  textfield: {
    marginBottom: "10px",
  },
}));

function Login({ setAuthUser }) {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);

  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setPassword("");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
              className={classes.textfield}
              label="Email"
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <FormControl required fullWidth className={classes.textfield}>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      colour="secondary"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
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
  const [showPassword, setShowPassword] = React.useState(false);

  const classes = useStyles();

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

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  React.useEffect(() => {
    if (password === cpassword) {
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
              className={classes.textfield}
              required
              label="Email"
              type="email"
              value={email}
              onInput={(e) => setEmail(e.target.value)}
              fullWidth
            />
            <TextField
              className={classes.textfield}
              required
              label="First Name"
              type="text"
              onInput={(e) => setFName(e.target.value)}
              fullWidth
            />
            <TextField
              className={classes.textfield}
              required
              label="Last Name"
              value={lname}
              onInput={(e) => setLName(e.target.value)}
              fullWidth
            />
            <TextField
              className={classes.textfield}
              required
              label="Phone Number"
              value={phone}
              onInput={(e) => setPhone(e.target.value)}
              fullWidth
            />
            <FormControl
              required
              fullWidth
              error={error}
              className={classes.textfield}
            >
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      colour="secondary"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <FormControl
              required
              fullWidth
              error={error}
              className={classes.textfield}
            >
              <InputLabel htmlFor="Confrim-Password">
                Confrim Password
              </InputLabel>
              <Input
                id="Confrim-Password"
                type={showPassword ? "text" : "password"}
                value={cpassword}
                onChange={(e) => setCPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      colour="secondary"
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {error ? <FormHelperText>{errorText}</FormHelperText> : null}
            </FormControl>
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
