/**
 *  Imports
 */
import React from "react";
import { Switch } from "react-router";

import {
  Forgot,
  Home,
  Login
} from "../components";
import PublicRoutes from "./publicRoutes";
import PrivateRoutes from "./privateRoutes";

/**
 *  Defining all app routes
 */
const Routes = (authenticated, checked) => {
  if (checked) {
    return (
      <Switch>
        <PublicRoutes
          path="/"
          exact
          component={Login}
          authenticated={authenticated}
        />
        <PublicRoutes
          exact
          path="/login"
          component={Login}
          authenticated={authenticated}
        />
        <PublicRoutes
          exact
          path="/forgot"
          component={Forgot}
          authenticated={authenticated}
        />
        <PrivateRoutes
          exact
          path="/home"
          component={Home}
          authenticated={authenticated}
        />
      </Switch>
    );
  } 
  
  return null;

};

export default Routes;
