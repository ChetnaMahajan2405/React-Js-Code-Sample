/**
 *  Imports
 */
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sessionService } from 'redux-react-session';
import _ from 'lodash';

import { clear, logout, search } from '../../redux/actions';
import { Button, Image, TextInput } from '../common';
import '../index.css';
import './home.css';

/**
 *  Home component
 *  with search & logout functionality
 */
class Home extends PureComponent {
  constructor(props) {
    super(props);
    // Initial state
    this.state = {
      text: ''
    };
  }

  componentDidUpdate() {
    const { searchAction, session } = this.props;

    if (!this._throttlingSearch) {
      this._throttlingSearch = _.throttle(
        value => searchAction(value),
        session.user.name.toLowerCase() === 'luke skywalker'
          ? 1000 * 5
          : 1000 * 15
      );
    }
  }

  componentWillUnmount() {
    if (this._throttlingSearch) this._throttlingSearch.cancel();
  }

  changeHandler = ({ target: { value } }) => {
    // Updating value of state with new walue
    const { clearAction } = this.props;
    if (!value) clearAction();
    this.setState({ text: value }, () => {
      if (value) this._throttlingSearch(value);
    });
  };

  search = () => {
    // search state on click
    const { text } = this.state;
    const { clearAction } = this.props;
    if (text) {
      this._throttlingSearch(text);
    } else clearAction();
  };

  onClick = () => {
    // clear reducer via action
    // then clear session from memory
    // then redirect to login
    const {
      history: { push },
      logoutAction
    } = this.props;
    logoutAction(() => {
      sessionService
        .deleteSession()
        .then(() => sessionService.deleteUser())
        .then(() => push('/login'));
    });
  };

  renderListView = () => {
    const { data } = this.props;
    return _.sortBy(data, [o => -parseInt(o.population, 10)]).map((d, key) => {
      return (
        <div key={d.url} className="input-container">
          <div
            style={{
              borderColor: '#04549f',
              borderStyle: d.population === 'unknown' ? 'dashed' : 'solid',
              borderWidth:
                d.population === 'unknown' ? '1px' : data.length - key
            }}
          >
            <div> Planet Name: {d.name}</div>
            <div> Planet Population: {d.population}</div>
          </div>
        </div>
      );
    });
  };

  render() {
    const { text } = this.state;
    return (
      <div className="form-box">
        <div className="form-header">Home</div>
        <div className="form-subHeading"> Welcome to search planets</div>

        <div className="search-logo-parent">
          <TextInput
            className="search-input"
            onChange={this.changeHandler}
            value={text}
          />
          <button
            type="button"
            className="search search-open"
            onClick={this.search}
          >
            <Image
              src="assets/icons/search.png"
              alt="logo"
              className="search-icon"
            />
          </button>
        </div>
        {this.renderListView()}
        <div className="input-container">
          <Button
            type="button"
            className="button"
            value="LOGOUT"
            onClick={this.onClick}
          />
        </div>
      </div>
    );
  }
}

/**
 *  Accessing search & session reducer
 */
function mapStateToProps({ search: { data }, session }) {
  return {
    data,
    session
  };
}

/**
 *  Action dispatchers for user logout & search
 */
function mapDispatchToProps(dispatch) {
  return {
    logoutAction: bindActionCreators(logout, dispatch),
    searchAction: bindActionCreators(search, dispatch),
    clearAction: bindActionCreators(clear, dispatch)
  };
}

/**
 *  Connect method of store along with react router instance
 */
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
