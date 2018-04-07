export const createNamedWrapperReducer = (reducerFunction, reducerName) => (
  state,
  action
) => {
  const { name } = action;
  const isInitializationCall = state === undefined;
  if (name !== reducerName && !isInitializationCall) return state;
  return reducerFunction(state, action);
};

export const createFilteredReducer = (reducerFunction, reducerPredicate) => (
  state,
  action
) => {
  const isInitializationCall = state === undefined;
  const shouldRunWrappedReducer =
    reducerPredicate(action) || isInitializationCall;
  return shouldRunWrappedReducer ? reducerFunction(state, action) : state;
};

export const createReducer = (initialState, handlers) => (
  state = initialState,
  action
) => {
  if (handlers.hasOwnProperty(action.type)) {
    return handlers[action.type](state, action);
  } else {
    return state;
  }
};

export const getActionId = action => action.meta.id;
