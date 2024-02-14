import React from "react";
import Intro from "@src/component/content/Intro";
import Project from "@src/component/content/Project";
import SKILL from "@src/component/content/Skill";
import Footer from "@src/component/footer/Footer";
import LinkSlider from "@src/component/content/LinkSlider";

const Content = () => {
  return (
    <div className="content_container base_color">
      <Intro />
      <Project />
      <SKILL />
      {/*<LinkSlider />*/}
      <Footer />
    </div>
  );
};

export default Content;
