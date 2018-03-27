import React, { Component } from "react";
import styled from "styled-components";

import PlaygroundInput from "../containers/playground/PlaygroundInput";
import PlaygroundList from "../containers/playground/PlaygroundList";
import PlaygroundMenu from "../containers/playground/PlaygroundMenu";

const Container = styled.div`
  min-height: 100%;
  display: grid;
  grid-template-columns: 15% 1fr 15%;
  grid-template-areas: "a b c";
`;

const Content = styled.div`
  grid-area: b;
`;

class Playground extends Component {
  render() {
    return (
      <Container>
        <Content>
          <PlaygroundInput />
          <PlaygroundMenu />
          <PlaygroundList />
        </Content>
      </Container>
    );
  }
}

export default Playground;
