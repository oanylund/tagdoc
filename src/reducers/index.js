import { combineReducers } from "redux";
import { createNamedWrapperReducer } from "./reducerUtils";
import { TAGS, DOCUMENTS } from "../constants";

import pattern from "./pattern";

import appState from "./appState";
import playground from "./playground";

const patternReducers = combineReducers({
  tags: createNamedWrapperReducer(pattern, TAGS),
  documents: createNamedWrapperReducer(pattern, DOCUMENTS)
});

const rootReducer = combineReducers({
  appState,
  playground,
  patterns: patternReducers
});

export default rootReducer;
