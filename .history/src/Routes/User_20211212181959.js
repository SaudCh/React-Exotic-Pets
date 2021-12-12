import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

export default function Router() {
  let { path, url } = useRouteMatch();
  console.log(url);
  return (
    <div>
      <Switch>
        <Route path={path} exact>
          home
        </Route>
        <Route path={`${path}/close-account`}

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
