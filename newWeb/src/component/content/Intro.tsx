import React from "react";
import TitleContainer from "@src/component/environment/container/TitleContainer";
import { introData } from "@src/data/data";

const Intro = () => {
  return (
    <TitleContainer title="INTRO">
      <div className="intro_container">
        {Object.entries(introData).map(([key, value], index) => (
          <div className="intro_row_align" key={`introIndex-${index}`}>
            <span>{key}</span>
            <span>&nbsp;-&nbsp;</span>
            <div className="intro_row_right_align">
              <span>{value}</span>
            </div>
          </div>
        ))}
      </div>
    </TitleContainer>
  );
};

export default Intro;
