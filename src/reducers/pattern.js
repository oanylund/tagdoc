import { combineReducers } from "redux";
import { createSelectionReducer } from "./selection";
import {
  createReducer,
  createNamedWrapperReducer,
  getActionId
} from "./reducerUtils";
import {
  CREATE_PATTERN,
  DELETE_PATTERN,
  UPDATE_PATTERN,
  TAGS,
  DOCUMENTS,
  RESET_TAGDOC_SELECTION
} from "../constants";

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

const addPatternIdToType = (state, action) => {
  const id = getActionId(action);

  return [...state, id];
};

const removePatternIdFromType = (state, action) => {
  const id = getActionId(action);

  return state.filter(item => item !== id);
};

const allPatternTypeIds = createReducer([], {
  [CREATE_PATTERN]: addPatternIdToType,
  [DELETE_PATTERN]: removePatternIdFromType
});

const selectionPatternParams = nameScope => ({
  globalResetActionType: RESET_TAGDOC_SELECTION,
  scopedResetActionTypes: [CREATE_PATTERN, DELETE_PATTERN],
  actionNameScope: nameScope
});

// Exported reducer

const patternReducer = combineReducers({
  byId: patternById,
  allTagIds: createNamedWrapperReducer(allPatternTypeIds, TAGS),
  allDocumentIds: createNamedWrapperReducer(allPatternTypeIds, DOCUMENTS),
  tagSelectionMeta: createSelectionReducer(selectionPatternParams(TAGS)),
  documentSelectionMeta: createSelectionReducer(
    selectionPatternParams(DOCUMENTS)
  )
});

export default patternReducer;
