/**
 *  Imports
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

/**
 *  Handling private routes
 */
const PrivateRoute = ({ component, componentProps = {}, exact = false, path, authenticated }) => (
 <Route
   exact={exact}
   path={path}
   render={props => (
     authenticated ? (
       React.createElement(component, {...componentProps, ...props})
     ) : (
       <Redirect to={{
         pathname: '/login',
         state: { from: props.location }
       }}/>
     )
   )}
 />
);

const { bool, string, func, shape } = PropTypes;

/**
 *  Checking for private route inputs along with default values for missing fields
 */

PrivateRoute.propTypes = {
  component: func.isRequired,
  componentProps: shape({}),
  exact: bool,
  path: string.isRequired,
  authenticated: bool.isRequired
};

PrivateRoute.defaultProps = {
  componentProps: {},
  exact: true
};

export default PrivateRoute;
