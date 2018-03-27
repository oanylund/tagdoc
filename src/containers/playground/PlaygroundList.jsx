import React from "react";
import { connect } from "react-redux";
import { Card } from "tagdoc-ui-components";

const PlaygroundListStyle = Card.withComponent("ul").extend`
  margin-top: 20px;
  list-style-type: none;

  & > li {
    font-size: 0.95em;
    padding-top: 5px;
  }
  
  & > li:not(:last-child) {
    padding-bottom: 5px;
    border-bottom: 1px solid #EEE;
  }
`;

const PlaygroundList = ({ list }) => {
  if (list.length === 0) {
    return (
      <PlaygroundListStyle>
        Nothing to show. Write a pattern and press generate above
      </PlaygroundListStyle>
    );
  }
  return (
    <PlaygroundListStyle>
      {list.map((listVal, i) => <li key={i}>{listVal}</li>)}
    </PlaygroundListStyle>
  );
};

const mapStateToProps = ({ playground }) => {
  return {
    list: playground.testList
  };
};

export default connect(mapStateToProps)(PlaygroundList);
