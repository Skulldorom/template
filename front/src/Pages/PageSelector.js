import { Switch, Route, Link } from "react-router-dom";
import Main from "./Main";

export default function PageSelector() {
  return (
    <>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/test">Test</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/test">Test</Route>
      </Switch>
    </>
  );
}
