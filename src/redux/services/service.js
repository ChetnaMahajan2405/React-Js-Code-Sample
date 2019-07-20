/**
 *  Imports
 */
import { sessionService } from "redux-react-session";


/**
 *  API call via Promise
 */
const apiCall = ({ method, url, data }) => {
  function apiPromise(token) {
    /*eslint-disable */
    const headers = new Headers(); 
    headers.append('Content-Type', 'application/json');
    if (token) {
      headers.append('Authorization', token);
    }

    const additionalParameters = {
      method,
      headers,
    };

    if(data && method === "POST") {
      additionalParameters.body = JSON.stringify(data);
    }

    return fetch(url, additionalParameters);
    /*eslint-disable */
   
  }

  // loading session from memory
  return sessionService
    .loadSession()
    .then(currentSession => {
      // can use token here for all API calls
      return currentSession.token;
    })
    .catch(() => {
      // escaping session error for not logged in user's
      return null;
    })
    .then(token => {
      // API call with token
      return apiPromise(token);
    })
    .then(res => res.json())
    .catch(err => {
      // API error
      throw err;
    });
};


export default apiCall;
