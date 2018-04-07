import { createSelector } from "reselect";
import { TAGS, DOCUMENTS } from "../constants";

export const getPatterns = state => state.patterns.byId;

export const getPatternById = (state, props) => state.patterns.byId[props.id];

export const getPatternTypeIds = (state, props) => {
  switch (props.type) {
    case TAGS:
      return state.patterns.allTagIds;

    case DOCUMENTS:
      return state.patterns.allDocumentIds;

    default:
      return [];
  }
};

export const getPatternsOfType = createSelector(
  [getPatterns, getPatternTypeIds],
  (allPatterns, patternTypeIds) => patternTypeIds.map(id => allPatterns[id])
);

export const makeGetPatternsOfType = () => getPatternById;
