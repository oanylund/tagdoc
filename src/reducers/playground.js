import {
  PARSE_TEST_PATTERN,
  TEST_PATTERN_CHANGE,
  EMPTY_TEST_LIST
} from "../constants";
import { simpleParse } from "../utils/parse";

const initialState = {
  testPatternValue: "",
  testList: [],
  error: ""
};

const playground = (state = initialState, action) => {
  switch (action.type) {
    case TEST_PATTERN_CHANGE:
      return {
        ...state,
        testPatternValue: action.meta.value
      };

    case PARSE_TEST_PATTERN:
      return {
        ...state,
        ...simpleParse(state.testPatternValue)
      };

    case EMPTY_TEST_LIST:
      return {
        ...state,
        testList: []
      };

    default:
      return state;
  }
};

export default playground;
