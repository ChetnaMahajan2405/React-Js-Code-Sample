/**
 *  Imports
 */
import {
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
    SEARCH_CLEAR,
  } from "../actionConstants";
  
  /** Initial State  */
  const INITIAL_STATE = {
    data: [],
    error: {}
  };
  
  
  export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
      case SEARCH_SUCCESS:
        return { error: {}, data: [ ...action.data ] };
  
      case SEARCH_FAILURE:
        return { error: action.error, data: [] };

      case SEARCH_CLEAR:
        return { ...INITIAL_STATE };    

      default:
        return state;
    }
  }
  