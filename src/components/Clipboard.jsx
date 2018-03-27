import React from "react";
import styled from "styled-components";
import { Portal } from "tagdoc-ui-components";

const ClipboardTextArea = styled.textarea.attrs({
  id: "clipboard"
})`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 1px;
  height: 1px;
  padding: 0;
  border: none;
  outline: none;
  box-shadow: none;
  background: none;
`;

const Clipboard = () => (
  <Portal>
    <ClipboardTextArea />
  </Portal>
);

export default Clipboard;
