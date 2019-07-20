/**
 *  Maintaing all endpoints in a file
 */

import { baseUrl } from '../../constants'; 

const API = {
  login: `${baseUrl}/people/?format=json&search=`,
  search: `${baseUrl}/planets/?format=json&search=`
};

export default API;
