import React, { useState } from "react";
import styled, { css } from "styled-components";
import Menu from "../atom/Menu";

interface menuBarType {
  menuState: boolean;
}

const Container = styled.div<menuBarType>`
  display: flex;
  ${(e) =>
    !e.menuState &&
    css`
      justify-content: flex-end;
    `};
  position: relative;
  height: 60px;
`;

const MenuBar = () => {
  const [menuState, setMenuState] = useState(false);
  return (
    <Container menuState={menuState}>
      <Menu menuState={menuState} setMenuState={setMenuState} />
    </Container>
  );
};
export default MenuBar;
