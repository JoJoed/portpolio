import React from "react";
import styled, { css, keyframes } from "styled-components";
import { getPositionY } from "../util/Util";
import { Font } from "../util/GlobalStyle";

const data = [
  { text: "INTRO", moveHeight: () => getPositionY("intro") },
  { text: "SKILL", moveHeight: () => getPositionY("skill") },
  { text: "PROJECT", moveHeight: () => getPositionY("project") },
];

const listAnimtation = keyframes`
    from{
        height:0px;
    }to{
        height:${data?.length * 100}px;
    }  
`;

const Container = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 10;
`;

const MenuIcon = styled.div`
  width: 50px;
  height: 50px;
  ${(e) =>
    e.menuState
      ? css`
          background: url(${require("../../assets/image/exit.svg").default})
            no-repeat center transparent;
        `
      : css`
          background: url(${require("../../assets/image/menu.svg").default})
            no-repeat center transparent;
        `}

  background-blend-mode: multiply;
  border-radius: 100px;
  cursor: pointer;
`;

const MenuList = styled.div`
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  /* animation: ${listAnimtation} 1s 1 ease forwards; */
  overflow: hidden;
  height: ${(e) => (e.menuState ? data?.length * 75 : 0)}px;
  box-shadow: ${(e) => (e.menuState ? "0 1px 10px gray" : "none")};
  @media screen and (min-width: 500px) {
    transition: all 1s ease;
  }
`;

const MenuItem = styled.div`
  /* width: 1200px; */
  margin: 1em auto;
  cursor: pointer;
  &:hover > div > div {
    width: 100%;
  }
`;

const AlignBorder = styled.div`
  display: flex;
  justify-content: center;
`;

const MenuItemBorderLine = styled.div`
  transition: all 0.5s ease;
  background: black;
  height: 2px;
  width: 0%;
`;

const IconAlign = styled.div`
  position: absolute;
  right: 0;
  top: 15px;
  right: 2%;
  z-index: 10;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Menu = ({ menuState, setMenuState }) => {
  const clickEvent = (e) => {
    setMenuState(!menuState);
    e();
  };
  return (
    <Container>
      <MenuList menuState={menuState ? "true" : ""}>
        {data?.map((r, index) => (
          <MenuItem
            key={`menuindex${index}`}
            onClick={() => clickEvent(r.moveHeight())}
          >
            <Font bold="bold">{r.text}</Font>
            <AlignBorder>
              <MenuItemBorderLine />
            </AlignBorder>
          </MenuItem>
        ))}
      </MenuList>
      <IconAlign>
        <MenuIcon
          menuState={menuState ? "true" : ""}
          onClick={() => setMenuState(!menuState)}
        />
      </IconAlign>
    </Container>
  );
};
export default Menu;
