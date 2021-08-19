import React from "react";
import { SessionManager, StartSession } from "./SessionManager";
import { checkLoggedIn } from "./Auth/Auth";
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
  const [authUser, setAuthUser] = React.useState(false);
  checkLoggedIn().then((data) => setAuthUser(data));

  const classes = useStyles();

  return (
    <SessionManager.Provider
      value={{
        header: StartSession(),
        isLoggedIn: authUser,
      }}
    >
      <SessionManager.Consumer>
        {({ isLoggedIn }) => (
          <Container maxWidth="lg" className={classes.container}>
            <Typography variant="body1" color="primary" align="center">
              <img src={logo} style={{ height: "300px" }} alt="logo" />
            </Typography>
            <FormGroup row>
              <ThemeSlider />
              <AuthButtons isLoggedIn={isLoggedIn} setAuthUser={setAuthUser} />
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
        )}
      </SessionManager.Consumer>
      <Box pt={4}>
        <Copyright />
      </Box>
    </SessionManager.Provider>
  );
}

export default App;
