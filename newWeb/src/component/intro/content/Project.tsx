import React from "react";
import TitleContainer from "@src/component/intro/environment/container/TitleContainer";

const Project = () => {
  return (
    <TitleContainer title="PROJECT">
      <div className="align-column">
        <div className="align-row">
          <div className="align-group align-column">
            <div className="circle" />
            <div className="line" />
            <div className="circle" />
          </div>
          <div className="content_margin align-column">
            <span>title</span>
            <span>contents</span>
          </div>
        </div>
      </div>
    </TitleContainer>
  );
};

export default Project;
