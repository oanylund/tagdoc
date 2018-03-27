import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { Card, TextInput, Button } from "tagdoc-ui-components";
import { parseTestPattern, onTestPatternChange } from "../../actions";

const PlaygroundInputStyle = Card.extend`
  margin-top: 20px;
  display: grid;
  grid-column-gap: 20px;
  grid-template-columns: auto 90px;
  grid-template-rows: auto auto;
  grid-template-areas: "a b" "c c";
`;

const PlaygroundTextInput = styled(TextInput)`
  grid-area: a;
  margin-bottom: 0;
`;

const GenerateButton = Button.extend`
  grid-area: b;
`;

const ErrorTxt = styled.span`
  grid-area: c;
  color: red;
  font-size: 0.7em;
  margin-top: 0.2em;
`;

const PlaygroundInput = ({
  testPatternValue,
  error,
  onTestPatternChange,
  generatePattern
}) => {
  return (
    <PlaygroundInputStyle>
      <PlaygroundTextInput
        label="Test pattern"
        placeholder="Write test pattern here..."
        size="large"
        inputState={error ? "danger" : "default"}
        value={testPatternValue}
        onChange={e => onTestPatternChange(e.target.value)}
      />
      <GenerateButton
        onClick={generatePattern}
        disabled={testPatternValue === ""}
      >
        Generate
      </GenerateButton>
      {error && <ErrorTxt>{error}</ErrorTxt>}
    </PlaygroundInputStyle>
  );
};

const mapStateToProps = ({ playground }) => {
  return {
    testPatternValue: playground.testPatternValue,
    error: playground.error
  };
};

const mapDispatchToProps = dispatch => {
  return {
    generatePattern: () => dispatch(parseTestPattern()),
    onTestPatternChange: val => dispatch(onTestPatternChange(val))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlaygroundInput);
