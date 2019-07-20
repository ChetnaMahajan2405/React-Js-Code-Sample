/**
 *  Imports
 */
import { apiCall } from "../index";
import API from "../serviceList";

/**
 *  API call for planets search
 */
function search(planet) {
  return apiCall({
    method: "GET",
    url: `${API.search}${planet}`
  });
}

export default search;