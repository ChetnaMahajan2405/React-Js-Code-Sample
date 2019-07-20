import reducer from '../../../src/redux/reducers/userReducer';
import {
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../../src/redux/actionConstants';

/** Initial State  */
const INITIAL_STATE = {
  login: {
    data: {},
    error: {}
  }
};

describe('user reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({ ...INITIAL_STATE });
  });

  it('should handle LOGIN_SUCCESS', () => {
    expect(
      reducer(undefined, {
        type: LOGIN_SUCCESS,
        data: {
          name: 'Luke Skywalker'
        }
      })
    ).toEqual({
      login: {
        data: {
          name: 'Luke Skywalker'
        },
        error: {}
      }
    });
  });

  it('should handle LOGIN_FAILURE', () => {
    expect(
      reducer(
        { ...INITIAL_STATE },
        {
          type: LOGIN_FAILURE,
          error: {
            message: 'An error occured'
          }
        }
      )
    ).toEqual({
      login: {
        data: {},
        error: {
          message: 'An error occured'
        }
      }
    });
  });
});
