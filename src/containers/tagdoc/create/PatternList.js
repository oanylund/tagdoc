import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { TAGS, DOCUMENTS } from "../../../constants";
import { getPatternTypeIds } from "../../../selectors/patternSelectors";

import PatternItem from "./PatternItem";

class PatternList extends Component {
  constructor(props) {
    super(props);
    this.renderList = this.renderList.bind(this);
  }
  shouldComponentUpdate(nextProps) {
    return nextProps.listOfIds !== this.props.listOfIds;
  }
  renderList() {
    const { listOfIds, type } = this.props;
    return listOfIds.map((id, i) => (
      <PatternItem
        key={id}
        id={id}
        type={type}
        listOfIds={listOfIds}
        index={i}
      />
    ));
  }
  render() {
    return this.renderList();
  }
}

PatternList.propTypes = {
  type: PropTypes.oneOf([TAGS, DOCUMENTS]).isRequired
};

const mapStateToProps = (state, props) => ({
  listOfIds: getPatternTypeIds(state, props)
});

export default connect(mapStateToProps)(PatternList);
