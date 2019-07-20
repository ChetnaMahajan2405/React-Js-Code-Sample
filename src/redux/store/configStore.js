import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import { sessionService } from "redux-react-session";

import ReduxThunk from "redux-thunk";

import rootReducer from "../reducers";
import { __DEV__ } from "../../constants/appConstants";

let middleware = [ReduxThunk];

const logger = createLogger({
  predicate: (getState, action) => __DEV__,
  collapsed: true
});
middleware = [...middleware, logger];

const createRNReduxStore = applyMiddleware(...middleware)(createStore);

const store = createRNReduxStore(rootReducer);

sessionService.initSessionService(store, { redirectPath: "/" });

export default store;
