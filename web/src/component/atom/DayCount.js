import React from "react";
import styled from "styled-components";
import { Font } from "../util/GlobalStyle";
import dayjs from "dayjs";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  height: 75px;
  align-items: center;
`;

const Parents = styled.div``;

const DayContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  /* box-shadow: 1px 1px 5px gray; */
  background: white;
  border-radius: 5px;
  margin: 0 10px;
`;

const MarginContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${(e) => e.margins || "0 5px"};
`;

const DayCount = ({ day }) => {
  const returnCount = (n) => {
    const count = dayjs().diff(
      dayjs(n).startOf("month").add(1, "day"),
      "month"
    );
    let array = [];
    if (Math.floor(count / 12) > 0) {
      array = [
        {
          number: Math.floor(count / 12),
          text: "년",
        },
        {
          number: count % 12,
          text: "개월",
        },
      ];
    } else {
      array = [
        {
          number: count % 12,
          text: "개월",
        },
      ];
    }

    return array;
  };

  return (
    <Container>
      {returnCount(day)?.map((r, index) => (
        <Parents key={`daycount${index}`}>
          {/* <DayContent key={`countindex${index}`}>
            <Font size="30px" bold="bold">
              {r.number}
            </Font>
          </DayContent>
          <MarinContent>
            <Font size="20px" bold="bold" color="white">
              {r.text}
            </Font>
          </MarinContent> */}
          <MarginContent>
            <Font size="20px" color="white" bold="bold">
              {r.number}
            </Font>
            <MarginContent margins="0 5px 0 0" />
            <Font size="20px" color="white" bold="bold">
              {r.text}
            </Font>
          </MarginContent>
        </Parents>
      ))}
    </Container>
  );
};
export default DayCount;
