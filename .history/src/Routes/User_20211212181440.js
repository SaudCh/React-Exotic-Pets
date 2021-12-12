import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

export default function Router() {
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
