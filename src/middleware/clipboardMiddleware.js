import { COPY_TEST_LIST_TO_CLIPBOARD } from "../constants";
import { copyTestListToClipBoard } from "../utils/clipboard";

const clipboardMiddleware = ({ getState, dispatch }) => next => action => {
  const result = next(action);

  switch (action.type) {
    case COPY_TEST_LIST_TO_CLIPBOARD:
      const list = getState().playground.testList;
      if (list.length > 0) copyTestListToClipBoard(list);
      break;

    default:
      break;
  }

  return result;
};

export default clipboardMiddleware;
