import { combineReducers } from "redux";

import patterns from "./pattern";
import appState from "./appState";
import playground from "./playground";

const rootReducer = combineReducers({
  appState,
  playground,
  patterns
});

export default rootReducer;
