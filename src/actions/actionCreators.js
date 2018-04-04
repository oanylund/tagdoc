import { compose } from "redux";

export const action = (type, meta = {}) => ({
  type,
  meta
});

export const namedAction = name =>
  compose(actionObject => ({ name, ...actionObject }), action);
