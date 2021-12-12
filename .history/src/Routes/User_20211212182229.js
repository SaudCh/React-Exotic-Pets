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
        <Route path={`${path}/my-ads`} exact>
          My Ads
        </Route>
        <Route path={`${path}/fav-ads`} exact>
          Fav Ads
        </Route>
        <Route path={`${path}/saved-searches`} exact>
          Saved Searches
        </Route>
        <Route path={`${path}/pending-approval`} exact></Route>
        <Route path={`${path}/`} exact></Route>
        <Route path={`${path}/`} exact></Route>
        <Route path={`${path}/close-account`} exact>
          Close Account{" "}
        </Route>

        <Redirect to="/" />
      </Switch>
    </div>
  );
}
