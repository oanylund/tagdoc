import { createSelector } from "reselect";
import { TAGS, DOCUMENTS } from "../constants";

export const getPatterns = state => state.patterns.byId;

const getPatternObject = (state, props) => state.patterns.byId[props.id];

const getPatternTypeSelection = (state, props) => {
  switch (props.type) {
    case TAGS:
      return state.patterns.tagSelectionMeta;

    case DOCUMENTS:
      return state.patterns.documentSelectionMeta;

    default:
      return {};
  }
};

export const getPatternById = createSelector(
  [getPatternObject, getPatternTypeSelection],
  (patternObject, selectionData) => ({
    selected: selectionData.selectionIds.includes(patternObject.id),
    prevIndex: selectionData.previousKey,
    ...patternObject
  })
);

export const makeGetPatternById = () => getPatternById;

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
