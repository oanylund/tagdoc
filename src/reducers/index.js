import { combineReducers } from "redux";
import appState from "./appState";
import playground from "./playground";

const rootReducer = combineReducers({
  appState,
  playground
});

export default rootReducer;
