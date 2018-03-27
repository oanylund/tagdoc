import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers";
import * as actionCreators from "../actions";
import clipboard from "../middleware/clipboardMiddleware";

// If Redux DevTools Extension is installed use it, otherwise use Redux compose
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Options: http://zalmoxisus.github.io/redux-devtools-extension/API/Arguments.html
      actionCreators
    })
  : compose;

// Apply Middleware & Compose Enhancers
const enhancer = composeEnhancers(applyMiddleware(clipboard));

const configureStore = () => {
  const store = createStore(rootReducer, enhancer);

  // Hot reload reducers
  if (module.hot) {
    module.hot.accept("../reducers", () =>
      store.replaceReducer(require("../reducers"))
    );
  }

  return store;
};

export default configureStore;
