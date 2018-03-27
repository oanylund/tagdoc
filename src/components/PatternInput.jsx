import React, { Component } from "react";
import styled from "styled-components";
import {
  Card,
  TextInput,
  Button,
  withSelectableBackground
} from "tagdoc-ui-components";

const MenuBtn = Button.extend`
  padding: 0.3em 0.935em;
`;

const Menu = styled.div`
  display: flex;
  opacity: 0;
  flex-direction: row;
  justify-content: flex-end;

  & > button:not(:last-child) {
    margin-right: 10px;
  }
`;

const PatternCard = Card.extend`
  margin-bottom: 20px;

  &:hover > ${Menu} {
    opacity: 1;
  }
`;

const SelectableCard = withSelectableBackground()(PatternCard);

class PatternInput extends Component {
  render() {
    return (
      <SelectableCard>
        <TextInput
          label="Description"
          placeholder="Write description here..."
          expandOnFocus
        />
        <TextInput
          label="Pattern"
          placeholder="Write pattern here..."
          expandOnFocus
        />
        <Menu>
          <MenuBtn>Delete</MenuBtn>
          <MenuBtn>Open in playground</MenuBtn>
        </Menu>
      </SelectableCard>
    );
  }
}

export default PatternInput;
