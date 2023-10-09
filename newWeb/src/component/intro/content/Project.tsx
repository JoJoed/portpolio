import React from "react";
import TitleContainer from "@src/component/intro/environment/container/TitleContainer";
import { projectData } from "@src/data/projectData";

const Project = () => {
  return (
    <TitleContainer title="PROJECT">
      {projectData.map((r, index: number) => (
        <div className="align-column">
          <div className="align-row">
            <div className="align-group align-column">
              <div className="circle" />
              <div className="line" />
              {projectData.length === index + 1 && <div className="circle" />}
            </div>
            <div className="content_margin align-column">
              <span className="project_title">{r.projectName}</span>
              <span className="project_text">
                {r.start}&nbsp;~&nbsp;{r.end}
              </span>
              <span className="project_text project_link">
                <a target="_blank" href={r.link}>
                  {r.link}
                </a>
              </span>
            </div>
          </div>
        </div>
      ))}
    </TitleContainer>
  );
};

export default Project;
