/**
 * @function Calls the service and then dispatch action Object as a response to reducer.
 * @param service - Name of the Service that handles all the input parameters required to be pass in service.
 * @param actionTypeStart - type : action start
 * @param actionTypeSuccess - type : action Success
 * @param actionTypeFailure - type : action Failure
 * @returns {function()}
 * @constructor
 */

export default function DispatchActionToReducer(
  service,
  actionTypeStart,
  actionTypeSuccess,
  actionTypeFailure,
  callback
) {
  return dispatch => {
    dispatch({
      type: actionTypeStart
    });
    service
      .then(response => {
        if (response.results) {
          dispatch({
            type: actionTypeSuccess,
            data: response.results
          });
          if (callback) callback(null, response.results);
        } else {
          dispatch({
            type: actionTypeFailure,
            error: response
          });
        }
      })
      .catch(error => {
        dispatch({
          type: actionTypeFailure,
          error
        });
        if (callback) callback(error);
      });
  };
}

export function SimpleDispatchActionToReducer(type, data, callback) {
  return dispatch => {
    dispatch({ type, data });
    if (callback) callback();
  };
}
