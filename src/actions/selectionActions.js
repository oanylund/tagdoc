import {
  ADD_TO_SELECTION,
  REMOVE_FROM_SELECTION,
  RESET_TAGDOC_SELECTION
} from "../constants";
import { action, namedAction } from "./actionCreators";

export const addToSelection = (name, { prevKey, ids }) =>
  namedAction(name)(ADD_TO_SELECTION, { prevKey, ids });

export const removeFromSelection = (name, { prevKey, ids }) =>
  namedAction(name)(REMOVE_FROM_SELECTION, { prevKey, ids });

export const resetTagDocSelection = action(RESET_TAGDOC_SELECTION);
