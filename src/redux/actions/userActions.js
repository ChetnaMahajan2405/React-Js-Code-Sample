/**
 *  Imports
 */

import { sessionService } from "redux-react-session";
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_START,
  LOGOUT
} from "../actionConstants";

import 
  dispatchActionToReducer,
  { SimpleDispatchActionToReducer }
from "../actionDispatcher";
import {
  login as loginService,
} from "../services";

/**
 *  Action Creators for user login
 */
export const login = (email, password, callback) => {
  return dispatchActionToReducer(
    loginService(email),
    LOGIN_START,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    (error, res) => {

      if(res && res.length) {
        /**
         *  Creating session and saving user details on success
         */
        res.map(r => {
          if(r.birth_year.toLowerCase() === password && r.name.toLowerCase() === email) {
            return sessionService
              .saveSession({
                token: "token",
              })
              .then(() => {
                return sessionService.saveUser(r)
              })
              .then(() =>  callback(error, r));
          } 
          return callback({
            message: 'Invalid email or password'
          }); 
        })

      } else callback({
        message: 'Invalid email or password'
      }); 
    }
  );
};

/**
 *  Action Creators for user logout
 */
export const logout = callback => {
  return SimpleDispatchActionToReducer(LOGOUT, null, callback);
};

