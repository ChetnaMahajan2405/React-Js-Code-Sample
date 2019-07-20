/**
 *  Imports
 */
import { apiCall } from "../index";
import API from "../serviceList";

/**
 *  API call for user login
 */
function login(email) {
  return apiCall({
    method: "GET",
    url: `${API.login}${email}`
  });
}

export default login;