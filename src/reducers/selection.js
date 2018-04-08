import reduceReducers from "reduce-reducers";
import { combineReducers } from "redux";
import { createReducer, createNamedWrapperReducer } from "./reducerUtils";

import { ADD_TO_SELECTION, REMOVE_FROM_SELECTION } from "../constants";

const getIds = action => action.meta.ids;

const addToSelection = (state, action) => {
  const toBeAddedIds = getIds(action);
  return [...state, ...toBeAddedIds.filter(item => !state.includes(item))];
};

const removeFromSelection = (state, action) =>
  state.filter(item => !getIds(action).includes(item));

const selectionArray = createReducer([], {
  [ADD_TO_SELECTION]: addToSelection,
  [REMOVE_FROM_SELECTION]: removeFromSelection
});

const setPrevious = (state, action) => {
  return action.meta.prevKey;
};

const previousReducer = createReducer(null, {
  [ADD_TO_SELECTION]: setPrevious,
  [REMOVE_FROM_SELECTION]: setPrevious
});

export const createSelectionReducer = ({
  globalResetActionType = "RESET_SELECTION",
  scopedResetActionTypes = [],
  actionNameScope
}) => {
  const selectionReducer = createNamedWrapperReducer(
    combineReducers({
      selectionIds: selectionArray,
      previousKey: previousReducer
    }),
    actionNameScope
  );

  const selectionInitialState = {
    selectionIds: [],
    previousKey: null
  };

  const resetSelectionReducer = (state, action) => {
    if (action.type === globalResetActionType) {
      return { ...selectionInitialState };
    }
    if (
      action.name === actionNameScope &&
      scopedResetActionTypes.includes(action.type)
    ) {
      return { ...selectionInitialState };
    }
    return state;
  };

  return reduceReducers(selectionReducer, resetSelectionReducer);
};
