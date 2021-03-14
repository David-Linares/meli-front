import { Route, Redirect, Switch, Router } from "react-router-dom";
import { routes } from "./routes-list";
import { createBrowserHistory } from "history";

export function AppRoutes() {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {routes.map((routeProps) => (
          <Route key={routeProps.path} {...routeProps} />
        ))}
        <Redirect exact to="/" />
      </Switch>
    </Router>
  );
}
