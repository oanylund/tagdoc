import {
  PARSE_TEST_PATTERN,
  TEST_PATTERN_CHANGE,
  COPY_TEST_LIST_TO_CLIPBOARD,
  EMPTY_TEST_LIST
} from "../constants";

// Playground actions
export const parseTestPattern = () => ({
  type: PARSE_TEST_PATTERN
});

export const onTestPatternChange = value => ({
  type: TEST_PATTERN_CHANGE,
  meta: {
    value
  }
});

export const copyTestListToClipboard = () => ({
  type: COPY_TEST_LIST_TO_CLIPBOARD
});

export const emptyTestList = () => ({
  type: EMPTY_TEST_LIST
});
