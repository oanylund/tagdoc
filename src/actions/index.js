import shortid from "shortid";

import {
  PARSE_TEST_PATTERN,
  TEST_PATTERN_CHANGE,
  COPY_TEST_LIST_TO_CLIPBOARD,
  EMPTY_TEST_LIST,
  CREATE_PATTERN,
  DELETE_PATTERN,
  UPDATE_PATTERN,
  TAGS,
  DOCUMENTS
} from "../constants";

import { action, namedAction } from "./actionCreators";

// Playground actions
export const parseTestPattern = () => action(PARSE_TEST_PATTERN);

export const onTestPatternChange = value =>
  action(TEST_PATTERN_CHANGE, { value });

export const copyTestListToClipboard = () =>
  action(COPY_TEST_LIST_TO_CLIPBOARD);

export const emptyTestList = () => action(EMPTY_TEST_LIST);

// Pattern actions
const tagNamedAction = namedAction(TAGS);
const documentNamedAction = namedAction(DOCUMENTS);

export const createTagPattern = () =>
  tagNamedAction(CREATE_PATTERN, { id: shortid.generate() });

export const deleteTagPattern = id => tagNamedAction(DELETE_PATTERN, { id });

export const createDocumentPattern = () =>
  documentNamedAction(CREATE_PATTERN, { id: shortid.generate() });

export const deleteDocumentPattern = id =>
  documentNamedAction(DELETE_PATTERN, { id });

export const createNamedPattern = name =>
  namedAction(name)(CREATE_PATTERN, { id: shortid.generate() });

export const deleteNamedPattern = (name, id) =>
  namedAction(name)(DELETE_PATTERN, { id });

export const updatePattern = (id, { description, pattern, errorMessage }) =>
  action(UPDATE_PATTERN, {
    id,
    description,
    pattern,
    errorMessage
  });
