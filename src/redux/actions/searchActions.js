/**
 *  Imports
 */
import {
  SEARCH_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_START,
  SEARCH_CLEAR
} from '../actionConstants';
import dispatchActionToReducer, {
  SimpleDispatchActionToReducer
} from '../actionDispatcher';
import { search as searchService } from '../services';

/**
 *  Action Creators for planets search
 */
export const search = planet => {
  console.log(planet)
  return dispatchActionToReducer(
    searchService(planet),
    SEARCH_START,
    SEARCH_SUCCESS,
    SEARCH_FAILURE,
  );
};

/**
 *  Action Creators for clearing search results
 */
export const clear = callback => {
  return SimpleDispatchActionToReducer(SEARCH_CLEAR, null, callback);
};

