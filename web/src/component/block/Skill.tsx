import React from "react";
import styled from "styled-components";
import SkillItem from "../atom/SkillItem";
import { Font } from "../util/GlobalStyle";
import PageParent from "./PageParent";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  /* padding: 0 5%; */
  margin-top: 15px;
  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const TextAlign = styled.div`
  display: flex;
  margin-top: 70px;
  @media screen and (max-width: 600px) {
    justify-content: center;
    align-items: center;
  }
`;

const Skill = () => {
  return (
    <PageParent title="- SKILL -" id="skill">
      <TextAlign>
        <Font size="20px" color="white">
          익숙한
        </Font>
      </TextAlign>
      <Container>
        <SkillItem
          url={require("../../assets/image/html.svg").default}
          text="html"
        />
        <SkillItem
          url={require("../../assets/image/styled.svg").default}
          text="styled-components"
        />
        <SkillItem
          url={require("../../assets/image/sass.svg").default}
          text="sass"
        />
        <SkillItem
          url={require("../../assets/image/css.svg").default}
          text="css"
        />
        <SkillItem
          url={require("../../assets/image/javascript.svg").default}
          text="javascript"
        />
        <SkillItem
          url={require("../../assets/image/typescript.svg").default}
          text="typescript"
        />
        <SkillItem
          url={require("../../assets/image/react.svg").default}
          text="react-native"
        />
        <SkillItem
          url={require("../../assets/image/expo.svg").default}
          text="expo"
        />
        <SkillItem
          url={require("../../assets/image/webpack.svg").default}
          text="webpack"
        />
        <SkillItem
          url={require("../../assets/image/react.svg").default}
          text="react"
        />
        <SkillItem
          url={require("../../assets/image/cesium.svg").default}
          text="cesium"
        />
      </Container>
      <TextAlign>
        <Font size="20px" color="white">
          시도 가능한
        </Font>
      </TextAlign>
      <Container>
        <SkillItem
          url={require("../../assets/image/nextjs.svg").default}
          text="nextjs"
        />
        <SkillItem
          url={require("../../assets/image/spring.svg").default}
          text="spring"
        />
      </Container>
      <TextAlign>
        <Font size="20px" color="white">
          익숙한 협업 도구
        </Font>
      </TextAlign>
      <Container>
        <SkillItem
          url={require("../../assets/image/git.svg").default}
          text="git"
        />
        <SkillItem
          url={require("../../assets/image/notion.svg").default}
          text="notion"
        />
        <SkillItem
          url={require("../../assets/image/jira.svg").default}
          text="jira"
        />
        <SkillItem
          url={require("../../assets/image/slack.svg").default}
          text="slack"
        />
      </Container>
    </PageParent>
  );
};
export default Skill;
