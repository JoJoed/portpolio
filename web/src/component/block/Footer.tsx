import React from "react";
import styled from "styled-components";
import { Font, FontSize } from "../util/GlobalStyle";

const Container = styled.div`
  display: flex;
  background: #595757;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 35px 0;
  width: 100%;
  & > span {
    @media screen and (max-width: 980px) {
      font-size: 13px;
    }
  }
`;

const MarginContent = styled.div`
  margin: 3px 0;
`;

const Footer = () => {
  return (
    <Container>
      <Font size={FontSize.footer} color="white">
        본 사이트는 포트폴리오를 목적으로 제작된 사이트입니다.
      </Font>
      <MarginContent />
      <Font size={FontSize.footer} color="white">
        © 2024 Jo, Jeong Hyun All Rights Reserved.
      </Font>
    </Container>
  );
};
export default Footer;
