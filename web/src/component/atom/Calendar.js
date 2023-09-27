import React from "react";
import styled from "styled-components";
import { Font } from "../util/GlobalStyle";

const Container = styled.div`
  position: relative;
  background: url(${require("../../assets/image/calendar.svg").default})
    no-repeat center;
  background-size: cover;
  width: 75px;
  height: 75px;
`;

const Title = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  top: 5px;
  justify-content: center;
  align-items: center;
`;

const Content = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Calendar = ({ date, day }) => {
  return (
    <Container>
      <Title>
        <Font size="11px" color="white" bold="bold">
          {date}
        </Font>
      </Title>
      <Content>
        <Font size="26px" bold="bold">
          {day}
        </Font>
      </Content>
    </Container>
  );
};
export default Calendar;
