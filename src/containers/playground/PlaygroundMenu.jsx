import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Button } from "tagdoc-ui-components";
import { copyTestListToClipboard, emptyTestList } from "../../actions";

const PlaygroundMenuStyle = styled.div`
  margin-top: 20px;
  & > button:not(:first-of-type) {
    margin-left: 20px;
  }
`;

const PlaygroundMenu = ({
  emptyTestList,
  copyTestListToClipboard,
  emptyList
}) => {
  return (
    <PlaygroundMenuStyle>
      <Button
        disabled={emptyList}
        onClick={copyTestListToClipboard}
        btnStyle="filled"
      >
        Copy to clipboard
      </Button>
      <Button disabled={emptyList} onClick={emptyTestList} btnStyle="filled">
        Empty list
      </Button>
    </PlaygroundMenuStyle>
  );
};

const mapStateToProps = ({ playground }) => {
  return {
    emptyList: playground.testList.length === 0
  };
};

const mapDispatchToProps = dispatch => {
  return {
    copyTestListToClipboard: () => dispatch(copyTestListToClipboard()),
    emptyTestList: () => dispatch(emptyTestList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundMenu);
