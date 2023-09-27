import React from "react";
import PageParent from "./PageParent";
import styled from "styled-components";
import { FontSize, Font } from "../util/GlobalStyle";
import intro from "../../data/intro";

const ProfileGroup = styled.div`
  display: flex;
  flex-direction: row;
  /* @media screen and (max-width: 980px) {
    flex-direction: column;
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  } */
`;

const CareerGroup = styled.div`
  display: flex;
  width: 100%;
`;

const CareerInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  line-height: 32px;
`;

const RowContents = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const RightTextColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const Intro = () => {
  return (
    <PageParent title="- INTRO -" id="intro">
      <ProfileGroup>
        <CareerGroup>
          <CareerInfo>
            {intro.map((r, index) => (
              <RowContents>
                <Font
                  size={FontSize.intro}
                  key={`introLeftText${index}`}
                  margin="0 0 5px 0"
                  color="white"
                >
                  {r.leftText}&nbsp;-&nbsp;
                </Font>
                <RightTextColumn>
                  {r.text.map((r, index) => (
                    <Font
                      size={FontSize.intro}
                      key={`introRightText${index}`}
                      margin="0 0 5px 0"
                      color="white"
                    >
                      {r.text}
                    </Font>
                  ))}
                </RightTextColumn>
              </RowContents>
            ))}
          </CareerInfo>
        </CareerGroup>
      </ProfileGroup>
    </PageParent>
  );
};
export default Intro;
