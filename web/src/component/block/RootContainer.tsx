import React, { ReactElement, ReactNode } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import MenuBar from "./MenuBar";

const Container = styled.div`
  width: 100%;
  height: 100%;
  background: black;
`;

const RootContainer = () => {
  return (
    <Container>
      <MenuBar />
      <Outlet />
    </Container>
  );
};

export default RootContainer;
