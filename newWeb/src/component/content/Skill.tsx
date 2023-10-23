import React from "react";
import TitleContainer from "@src/component/environment/container/TitleContainer";
import { skillData } from "@src/data/data";

const Skill = () => {
  return (
    <>
      {skillData.map((r, index: number) => (
        <TitleContainer title={r.title} key={`titleIndex-${index}`}>
          <div className="skill_container">
            {r.data.map((r, index: number) => (
              <div className="skill_item" key={`skillIndex-${index}`}>
                <img alt="error_image" src={r.src} />
                <span>{r.name}</span>
              </div>
            ))}
          </div>
        </TitleContainer>
      ))}
    </>
  );
};

export default Skill;
