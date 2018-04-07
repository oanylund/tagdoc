import React, { Component } from "react";
import { connect } from "react-redux";
import { Title, Button } from "tagdoc-ui-components";
import PropTypes from "prop-types";
import { createNamedPattern } from "../../../actions";
import { TAGS, DOCUMENTS } from "../../../constants";

import PatternList from "./PatternList";

const TagDocTitle = Title.extend`
  margin-bottom: 15px;
  padding-left: 10px;
`;

class PatternContainer extends Component {
  constructor(props) {
    super(props);
    this.onCreatePattern = this.onCreatePattern.bind(this);
  }
  onCreatePattern() {
    const { dispatch, type } = this.props;
    dispatch(createNamedPattern(type));
  }
  render() {
    const { title, type } = this.props;
    return [
      <TagDocTitle key={1}>{title}</TagDocTitle>,
      <PatternList key={2} type={type} />,
      <Button key={3} btnStyle="filled" onClick={this.onCreatePattern}>
        +
      </Button>
    ];
  }
}

PatternList.propTypes = {
  title: PropTypes.string,
  type: PropTypes.oneOf([TAGS, DOCUMENTS]).isRequired
};

export default connect()(PatternContainer);
