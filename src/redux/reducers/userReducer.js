/**
 *  Imports
 */
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../actionConstants";

/** Initial State  */
const INITIAL_STATE = {
  login: {
    data: {},
    error: {}
  },
};


export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, login: { error: {}, data: { ...action.data } } };

    case LOGIN_FAILURE:
      return { ...state, login: { error: action.error, data: {} } };

    default:
      return state;
  }
}
