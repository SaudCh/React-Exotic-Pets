import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import Account from "../components/Account/Account";
import CloseAccount from "../components/CloseAccount/CloseAccount";
import ArchievedAds from "../components/MyAds/ArchivedAds";
import FavAds from "../components/MyAds/FavAds";
import MyAds from "../components/MyAds/MyAds";
import PendingAds from "../components/MyAds/PendingApproval";
import SavedSearches from "../components/SavedSearches/SavedSearches";

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
          <SavedSearches />
        </Route>
        <Route path={`${path}/pending-approval`} exact>
          <PendingAds />
        </Route>
        <Route path={`${path}/archived-ads`} exact>
          <ArchievedAds />
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
