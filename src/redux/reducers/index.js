import { combineReducers } from "redux";
import { sessionReducer } from "redux-react-session";
import { reducer as toastrReducer } from "react-redux-toastr";

import { LOGOUT } from "../actionConstants";

import user from "./userReducer";
import search from "./searchReducer";

const appReducer = combineReducers({
  user,
  search,
  session: sessionReducer,
  toastr: toastrReducer
});

const rootReducer = (state, action) => {
  let newState = state;

  if (action.type === LOGOUT) {
    newState = {};
  }

  return appReducer(newState, action);
};

/** export this module */
export default rootReducer;
