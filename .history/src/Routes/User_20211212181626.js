import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";

export default function Router() {
  let { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          home
        </Route>

        {/* <Redirect to="/" /> */}
      </Switch>
    </div>
  );
}
