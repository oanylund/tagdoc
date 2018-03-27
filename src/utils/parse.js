import { parser, ERROR, COMPLETE } from "left-expand-pattern-parser";

export const simpleParse = txt => {
  const parserResult = parser(txt);

  switch (parserResult.progress) {
    case ERROR:
      return {
        testList: [],
        error: `${parserResult.parse_error.message} Starting at ${
          parserResult.parse_error.location.start
        }, ending at ${parserResult.parse_error.location.end}.`
      };
    case COMPLETE:
      return {
        testList: parserResult.list,
        error: ""
      };
    default:
      return {};
  }
};
