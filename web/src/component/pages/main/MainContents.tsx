import React from "react";
import Intro from "../../block/Intro";
import Skill from "../../block/Skill";
import Project from "../../block/Project";
import Footer from "../../block/Footer";
import TopInfo from "../../block/TopInfo";

const MainContents = () => {
  return (
    <>
      <TopInfo />
      <Intro />
      <Skill />
      <Project />
      <Footer />
    </>
  );
};
export default MainContents;
