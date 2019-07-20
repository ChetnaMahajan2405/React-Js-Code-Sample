/**
 *  Imports
 */
import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

/**
 *  Handling public routes
 */
const PublicRoute = ({ component, exact = false, path, authenticated, componentProps = {} }) => (
  <Route
    exact={exact}
    path={path}
    render={props => (
      !authenticated ? (
        React.createElement(component, {...componentProps, ...props})
      ) : (
        <Redirect to={{
          pathname: '/home',
          state: { from: props.location }
        }}/>
      )
    )}
  />
);

const { bool, string, func } = PropTypes;

/**
 *  Checking for private route inputs along with default values for missing fields
 */
PublicRoute.propTypes = {
  component: func.isRequired,
  exact: bool,
  path: string.isRequired
};


PublicRoute.defaultProps = {
  exact: true
};

export default PublicRoute;
