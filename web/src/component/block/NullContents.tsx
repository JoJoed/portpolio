import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Font } from "../util/GlobalStyle";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Link = styled(NavLink)`
  text-decoration: none;
  outline: none;
  cursor: pointer;
  margin: 1em 0;
  border-bottom: 0.5px solid white;
`;

const NullContents = () => {
  return (
    <Container>
      <Font color="white">페이지를 찾을 수 없습니다.</Font>
      <Link to="/">
        <Font cursor="pointer" color="white">
          메인으로
        </Font>
      </Link>
    </Container>
  );
};

export default NullContents;
