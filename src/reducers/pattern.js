import { combineReducers } from "redux";
import { createReducer } from "./reducerUtils";
import { CREATE_PATTERN, DELETE_PATTERN, UPDATE_PATTERN } from "../constants";

const getActionId = action => action.meta.id;

// byId slice reducer

const createPattern = (state, action) => {
  const id = getActionId(action);

  return {
    ...state,
    [id]: {
      id,
      description: "",
      pattern: "",
      errorMessage: null
    }
  };
};

const deletePattern = (state, action) => {
  const id = getActionId(action);

  const { [id]: val, ...newState } = state;

  return newState;
};

const updatePattern = (state, action) => {
  const { meta } = action;
  const { id, description, pattern } = meta;

  return {
    ...state,
    [id]: {
      ...state[id],
      description,
      pattern
    }
  };
};

const patternById = createReducer(
  {},
  {
    [CREATE_PATTERN]: createPattern,
    [DELETE_PATTERN]: deletePattern,
    [UPDATE_PATTERN]: updatePattern
  }
);

// allIds slice reducer

const addPatternId = (state, action) => {
  const id = getActionId(action);

  return [id, ...state];
};

const removePatternId = (state, action) => {
  const id = getActionId(action);

  return state.filter(item => item !== id);
};

const allPatternIds = createReducer([], {
  [CREATE_PATTERN]: addPatternId,
  [DELETE_PATTERN]: removePatternId
});

// Exported reducer

const patternReducer = combineReducers({
  byId: patternById,
  allIds: allPatternIds
});

export default patternReducer;
