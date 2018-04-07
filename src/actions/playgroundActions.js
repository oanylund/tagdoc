import {
  PARSE_TEST_PATTERN,
  TEST_PATTERN_CHANGE,
  COPY_TEST_LIST_TO_CLIPBOARD,
  EMPTY_TEST_LIST
} from "../constants";

import { action } from "./actionCreators";

// Playground actions
export const parseTestPattern = () => action(PARSE_TEST_PATTERN);

export const onTestPatternChange = value =>
  action(TEST_PATTERN_CHANGE, { value });

export const copyTestListToClipboard = () =>
  action(COPY_TEST_LIST_TO_CLIPBOARD);

export const emptyTestList = () => action(EMPTY_TEST_LIST);
