import React from "react";
import logo from "./logo.svg";
import SkullReact from "./SkullReact";
import {
  Container,
  Typography,
  Link,
  Box,
  Button,
  FormGroup,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ThemeSlider from "./Components/ThemeSlider";
import AuthButtons from "./Auth/AuthButtons";
import { SessionManager } from "./Auth/SesssionManager";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Skulldorom/Template
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
}));

function App() {
  const classes = useStyles();
  const { isLoggedIn, setLoggedin } = React.useContext(SessionManager);
  return (
    <>
      <Container maxWidth="lg" className={classes.container}>
        <Typography variant="body1" color="primary" align="center">
          <img src={logo} style={{ height: "300px" }} alt="logo" />
        </Typography>
        <FormGroup row>
          <ThemeSlider />
          <AuthButtons isLoggedIn={isLoggedIn} setAuthUser={setLoggedin} />
        </FormGroup>

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
      </Container>
      <Box pt={4}>
        <Copyright />
      </Box>
    </>
  );
}

export default App;
