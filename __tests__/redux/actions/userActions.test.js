import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';

// Actions to be tested
import { logout, login } from '../../../src/redux/actions';

const mockStore = configureStore([ReduxThunk]);
const store = mockStore();

describe('selectAvatar', () => {
  it('Dispatches the correct action and payload', () => {
    const expectedActions = [
      {
        type: 'LOGOUT',
        data: null
      }
    ];
    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('should handle LOGIN_SUCCESS', async () => {
    const initialState = {
      login: {
        data: {},
        error: {}
      }
    };
    const store = mockStore(initialState);
    const response = '{"statusCode": "200", "results": [{"name": "Luke SkyWalker", "birth_year": "19BBY" }]}';
    await fetch.mockResponseSuccess(response)

    store.dispatch(login('Luke SkyWalker', '19BBY'));
    expect(store.getActions()).toMatchSnapshot();
        

  });


  it('should handle LOGIN_FAILURE', async () => {
    const initialState = {
      login: {
        data: {},
        error: {}
      }
    };
    const store = mockStore(initialState);
    const response = '{"statusCode": "400"}';
    await fetch.mockResponseFailure(response)
    store.dispatch(login('Luke SkyWalker', '19BBY'));
    expect(store.getActions()).toMatchSnapshot();


  });
});
