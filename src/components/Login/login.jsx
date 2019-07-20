/**
 *  Imports
 */
import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { toastr } from "react-redux-toastr";

import { login } from '../../redux/actions';
import { Button, CheckBox, TextInput } from '../common';
import '../index.css';
import './login.css';

/**
 *  The Login form
 */
class Login extends PureComponent {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      email: {
        value: '',
        focus: false,
        changed: false
      },
      password: {
        value: '',
        focus: false,
        changed: false
      }
    };
  }

  changeHandler = (key, value) => {
    // Updating value of state with new walue
    this.setState((prevState) => {
      return {
        [key]: {
          value,
          focus: prevState[key].focus,
          changed: true
        }
      }
    });
  };

  focusHandler = (key, focus) => {
    // Handling focus and blur methods for diaplaying labels
    this.setState((prevState) => {
      return {
        [key]: {
          value: prevState[key].value,
          changed: prevState[key].changed,
          focus
        }
      }
    });
  };

  onClick = () => {
    const { email, password } = this.state;
    const { loginAction, history } = this.props;
    // Check for email & password and submit
    if(email.value && password.value) {
      loginAction(email.value, password.value, (err, res) => {
        if (err) toastr.error(err.message);
        if(res && res.email) {
          toastr.success("Successful Login", "", {
            onHideComplete: () => history.push('/home'),
            onCloseButtonClick: () => history.push('/home'),
            timeOut: 1000
          });
        }  
      })
    } else {
      // else show error by changing state of email & password
      this.setState((prevState) => {
        return {
          email: {
            value: prevState.email.value,
            changed: true,
            focus: prevState.email.focus
          },
          password: {
            value: prevState.password.value,
            changed: true,
            focus: prevState.password.focus
          },
        };
      });
    }
  }

  render() {
    const { email, password } = this.state;
    const emailError = email.changed && !email.value;
    const passwordError = password.changed && !password.value;
    return (
      <Fragment>
        <div className="form-box">
          <div className="form-header">Sign In Now</div>
          <div className="form-subHeading"> Unlock Awesome Features!</div>
          <div className="input-container">
            {
              email.focus &&  !emailError && <div className="label">Username</div>
            } 
            {
              emailError && <div className="error">Required Field</div>
            } 
            <TextInput
              type="text"
              className={emailError ? "textInputError" : "textInput"}
              placeholder="Username"
              onChange={({ target: { value } }) =>
                this.changeHandler("email", value.toLowerCase())
              }
              onFocus={() => this.focusHandler("email", true)}
              onBlur={() => this.focusHandler("email", false)}
              value={email.value}
              onKeyDown={this.onClick}
            />

            {
              password.focus && !passwordError && <div className="label">Password</div>
            }
            {
              passwordError && <div className="error">Required Field</div>
            }
            <TextInput
              type="password"
              className={passwordError ? "textInputError" : "textInput"}
              placeholder="Password"
              onChange={({ target: { value } }) =>
                this.changeHandler("password", value.toLowerCase())
              }
              onFocus={() => this.focusHandler("password", true)}
              onBlur={() => this.focusHandler("password", false)}
              value={password.value}
              onKeyDown={this.onClick}
            />

            <div className="checkBoxWrapper">
              <div className="column">
                <CheckBox
                  name="loggedIn"
                  value={false}
                  className="checkBox"
                />{' '}
                Keep me logged in
              </div>
              <div className="column">
                <Link to="/forgot" className="forgot"> Forgot Password? </Link>
              </div>
            </div>
            <Button 
              type="button"
              className="button"
              value="SIGN IN"
              onClick={this.onClick}
            />
          </div>
        </div>
      </Fragment>
    );
  }
}

/**
 *  Accessing user session reducer
 */
function mapStateToProps(state) {
  const {
    session: { user }
  } = state;
  return {
    user
  };
}

/**
 *  Action dispatchers for user login
 */
function mapDispatchToProps(dispatch) {
  return {
    loginAction: bindActionCreators(login, dispatch)
  };
}

/**
 *  Connect method of store along with react router instance
 */
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Login));
