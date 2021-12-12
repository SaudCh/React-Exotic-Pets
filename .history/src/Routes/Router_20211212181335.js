import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../components/Home/home";
import Login from "../components/Login/login.jsx";
import Register from "../components/Register/register.jsx";

import Error from "../components/Error/Error";
import BirdDetail from "../components/BirdDetail/BirdDetail";
import AddBird from "../components/AddBird/AddBird";
import Search from "../components/Search/Search";
import AddImages from "../components/AddImages/addImages";
import User from "../components/User/User";

export default function Router() {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/search" exact>
          <Search />
        </Route>
        <Route path="/bird/add/" exact>
          <AddBird />
        </Route>
        <Route path="/bird/add/photos" exact>
          <AddImages />
        </Route>
        <Route path="/bird/:id/:name" exact>
          <BirdDetail />
        </Route>
        <Route path="/u/">
          <User />
        </Route>
        <Route path="/error" exact>
          <Error />
        </Route>

        <Redirect to="/error" />
      </Switch>
    </div>
  );
}
