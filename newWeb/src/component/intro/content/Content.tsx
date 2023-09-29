import React from "react";
import Intro from "@src/component/intro/content/Intro";
import Project from "@src/component/intro/content/Project";
import SKILL from "@src/component/intro/content/Skill";
import Footer from "@src/component/intro/footer/Footer";

const Content = () => {
  return (
    <div className="content_container base_color">
      <Intro />
      <Project />
      <SKILL />
      <Footer />
    </div>
  );
};

export default Content;
