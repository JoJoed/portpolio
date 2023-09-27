import React from "react";
import styled, { keyframes } from "styled-components";
import { Font } from "../util/GlobalStyle";
import "dayjs/locale/ko";

const Container = styled.div`
  position: relative;
  width: 90%;
  max-width: 1300px;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  margin-bottom: -5%;
  /* flex-direction: row; */
  flex-direction: column;
  /* justify-content: center;
  align-items: center; */
  /* background: linear-gradient(45deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%); */
  & > * {
    z-index: 1;
  }
  @media screen and (max-width: 980px) {
    flex-direction: column;
    & > div:nth-child(1) {
      margin-bottom: 20px;
    }
  }
`;

const BlurContent = styled.div`
  filter: blur(5px);
  z-index: 0 !important;
  position: absolute;
  width: 100%;
  height: 100%;
  background: url(${require("../../assets/image/careerbackground.png")})
    no-repeat center;
  background-size: cover;
  /* background-attachment: fixed; */
  /* background-position: 0 100%; */
  border-radius: 10px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;

const AlignCalendar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Line = styled.div`
  background: black;
  width: 10px;
  height: 2px;
  margin: 0 10px;
`;

const MarinContentBig = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px 0 35px;
  @media screen and (max-width: 980px) {
    display: none;
  }
`;

const MarinContentMini = styled.div`
  display: flex;
  align-items: center;
  margin: 0 30px 30px 30px;
  @media screen and (min-width: 980px) {
    display: none;
  }
`;

const ProfileImage = styled.div`
  border-radius: 100px;
  width: 160px;
  height: 160px;
  background: url(${require("../../assets/image/profile.jpg")}) no-repeat center;
  background-size: contain;
  background-color: white;
  @media screen and (max-width: 980px) {
    width: 120px;
    height: 120px;
  }
`;

const ArrowAnimation = keyframes`
  0%{
    transform: translateY(0px);
  }
  50%{
    transform: translateY(10px);
  }
  100%{
    transform: translateY(0px);
  }
`;

const FadeAnimation = keyframes`
  from{
    opacity:0
  }
  to{
    opacity:1
  }
`;

const ProfileGroup = styled.div`
  display: flex;
  width: 160px;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const InfoTextGroup = styled.div`
  animation: ${FadeAnimation} 1.5s ease-in-out forwards;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  @media screen and (max-width: 980px) {
    & > span:nth-child(n + 1):nth-child(-n + 2) {
      font-size: 25px;
    }
  }
`;

const Career = () => {
  return (
    <Container>
      {/* <BlurContent /> */}
      <InfoTextGroup>
        <Font size="30px" color="white" bold="bold">
          안녕하세요 FrontEnd 개발자
        </Font>
        <Font size="30px" color="white" bold="bold">
          조정현입니다
          <Font size="70px" color="#00FF38">
            .
          </Font>
        </Font>
      </InfoTextGroup>
      <ProfileGroup>
        <ProfileImage />
        <Font margin="15px 0 0 0" color="white">
          조정현
        </Font>
      </ProfileGroup>
      {/* <AlignCalendar>
        <Calendar
          date={dayjs("2021-08").format("YYYY년 MM월")}
          day={dayjs("2021-08").startOf("month").add(1, "day").format("DD")}
        />
        <Line />
        <Calendar
          date={dayjs().format("YYYY년 MM월")}
          day={dayjs().format("DD")}
        />
        <MarinContentBig>
          <Font size="20px" bold="bold" color="white">
            현재까지의 경력
          </Font>
        </MarinContentBig>
      </AlignCalendar>
      <DayCount day={"2021-08-02"} /> */}
    </Container>
  );
};
export default Career;
