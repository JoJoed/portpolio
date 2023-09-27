import React from "react";
import styled from "styled-components";
import { Font } from "../util/GlobalStyle";

const Container = styled.div`
  margin: 20px;
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ItemGroup = styled.div`
  width: 50px;
  height: 50px;
  background: url(${(e) => e.url}) no-repeat center;
  background-size: contain;
  margin-bottom: 10px;
`;

const SkillItem = ({ url, text }) => {
  return (
    <Container>
      <ItemGroup url={url} />
      <Font size="15px" color="white">
        {text}
      </Font>
    </Container>
  );
};
export default SkillItem;
