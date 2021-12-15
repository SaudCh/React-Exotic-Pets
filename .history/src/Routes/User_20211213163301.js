import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Account from "../components/Account/Account";
import CloseAccount from "../components/CloseAccount/CloseAccount";
import FavAds from "../components/MyAds/FavAds";
import MyAds from "../components/MyAds/MyAds";

export default function Router() {
  const { path } = useRouteMatch();
  //console.log(url);
  return (
    <div>
      <Switch>
        <Route path={path} exact>
          <Account />
        </Route>
        <Route path={`${path}/my-ads`} exact>
          <MyAds />
        </Route>
        <Route path={`${path}/fav-ads`} exact>
          <FavAds />
        </Route>
        <Route path={`${path}/saved-searches`} exact>
          Saved Searches
        </Route>
        <Route path={`${path}/pending-approval`} exact>
          Pending Approval
        </Route>
        <Route path={`${path}/archived-ads`} exact>
          Archived Ads
        </Route>
        <Route path={`${path}/conversion`} exact>
          Conversion
        </Route>
        <Route path={`${path}/close-account`} exact>
          <CloseAccount />
        </Route>

        <Redirect to={path} />
      </Switch>
    </div>
  );
}
