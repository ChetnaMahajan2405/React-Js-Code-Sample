// This component handles the App template used on every page.
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReduxToastr from "react-redux-toastr";

import appRoutes from './config/routes';

const App = ({ authenticated, checked }) => {
  return (
    <div>
      <ReduxToastr
        timeOut={4000}
        transitionIn="fadeIn"
        transitionOut="fadeOut" />
      {appRoutes(authenticated, checked)}
    </div>
  );
}

const { bool } = PropTypes;

App.propTypes = {
  authenticated: bool.isRequired,
  checked: bool.isRequired
};

function mapStateToProps({ session }) {
  return {
    checked: session.checked,
    authenticated: session.authenticated,
  }
}

export default connect(mapStateToProps, null)(App);
