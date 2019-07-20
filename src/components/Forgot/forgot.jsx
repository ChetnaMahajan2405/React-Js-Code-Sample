/**
 *  Imports
 */
import React, { Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from '../common';
import '../index.css';

/**
 *  Dummy page for forgot password
 */
const Forgot = ({ history: { goBack } }) => (
  <Fragment>
    <div className="form-box">
      <div className="form-header">Forgot Password</div>
      <div className="input-container">
        <Button
          type="button"
          className="button"
          value="BACK"
          onClick={goBack}
        />
      </div>
    </div>
  </Fragment>
);

/**
 *  Connecting to react router instance
 */
export default withRouter(Forgot);
