import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
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
  constructor(props) {
    super(props);

    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPatternChange = this.onPatternChange.bind(this);
    this.handleCardClick = this.handleCardClick.bind(this);
  }
  onDescriptionChange(event) {
    const { pattern, onInputChange } = this.props;

    onInputChange({
      description: event.target.value,
      pattern
    });
  }
  onPatternChange(event) {
    const { description, onInputChange } = this.props;

    onInputChange({
      description,
      pattern: event.target.value
    });
  }
  handleCardClick(event) {
    // Prevent bubbling. only click events by whitelisted nodes
    if (event.target !== this.cardRef && event.target !== this.menuRef) return;

    this.props.onCardClick({
      selected: this.props.selected,
      shiftClicked: event.shiftKey
    });
  }
  render() {
    const {
      description,
      pattern,
      onDelete,
      onOpenInPlayground,
      selected
    } = this.props;
    return (
      <SelectableCard
        innerRef={ref => (this.cardRef = ref)}
        onClick={this.handleCardClick}
        selected={selected}
      >
        <TextInput
          label="Description"
          placeholder="Write description here..."
          value={description}
          onChange={this.onDescriptionChange}
        />
        <TextInput
          label="Pattern"
          placeholder="Write pattern here..."
          value={pattern}
          onChange={this.onPatternChange}
        />
        <Menu innerRef={ref => (this.menuRef = ref)}>
          <MenuBtn onClick={onDelete}>Delete</MenuBtn>
          <MenuBtn onClick={onOpenInPlayground}>Open in playground</MenuBtn>
        </Menu>
      </SelectableCard>
    );
  }
}

PatternInput.propTypes = {
  description: PropTypes.string.isRequired,
  pattern: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
  onOpenInPlayground: PropTypes.func,
  onCardClick: PropTypes.func,
  selected: PropTypes.bool
};

PatternInput.defaultProps = {
  onDelete: () => {},
  onOpenInPlayground: () => {},
  onCardClick: () => {},
  selected: false
};

export default PatternInput;
