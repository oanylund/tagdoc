import React, { Component } from "react";
import PatternInput from "../components/PatternInput";
import styled from "styled-components";
import { Title, Button } from "tagdoc-ui-components";

const Container = styled.div`
  min-height: 100%;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 5% 1fr 1fr 5%;
  grid-template-rows: auto auto;
  grid-template-areas: "h h h h" "w left right e";
`;

const Header = styled.div`
  grid-area: h;
  border-bottom: 1px solid ${({ theme }) => theme.colors.grayVariants.lighter};
  padding: 15px;
  & > *:not(:first-child) {
    margin-left: 10px;
  }
`;

const LeftContent = styled.div`
  grid-area: left;
`;

const RightContent = styled.div`
  grid-area: right;
`;

const TagDocTitle = Title.extend`
  margin-bottom: 15px;
  padding-left: 10px;
`;

class TagDocCreate extends Component {
  render() {
    return (
      <Container>
        <Header>
          <span>Show:</span>
          <Button btnSize="small">Tags</Button>
          <Button btnSize="small">Documents</Button>
        </Header>
        <LeftContent>
          <TagDocTitle>Tags</TagDocTitle>
          <PatternInput />
          <Button btnStyle="filled">+</Button>
        </LeftContent>
        <RightContent>
          <TagDocTitle>Documents</TagDocTitle>
          <PatternInput />
          <Button btnStyle="filled">+</Button>
        </RightContent>
      </Container>
    );
  }
}

export default TagDocCreate;
