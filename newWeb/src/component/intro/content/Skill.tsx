import React from "react";
import TitleContainer from "@src/component/intro/environment/container/TitleContainer";
import { skillData } from "@src/data/projectData";

const Skill = () => {
  return (
    <TitleContainer title="SKILL">
      <div className="skill_container">
        {skillData.map((r, index: number) => (
          <div className="skill_item">
            <img alt="error_image" src={r.src} />
            <span>{r.name}</span>
          </div>
        ))}
      </div>
    </TitleContainer>
  );
};

export default Skill;
