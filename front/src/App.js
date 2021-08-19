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
  AppBar,
  IconButton,
  Toolbar,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
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
  title: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  box: {
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    float: "right",
  },
}));

function App() {
  const classes = useStyles();
  const { isLoggedIn, setLoggedin } = React.useContext(SessionManager);
  return (
    <>
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Template
          </Typography>
          <FormGroup row className={classes.right}>
            <ThemeSlider />
            <AuthButtons isLoggedIn={isLoggedIn} setAuthUser={setLoggedin} />
          </FormGroup>
        </Toolbar>
      </AppBar>
      <Container className={classes.container}>
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
      </Container>
      <Box pt={4}>
        <Copyright />
      </Box>
    </>
  );
}

export default App;
