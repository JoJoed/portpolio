import React, { useEffect } from "react";
import TitleContainer from "@src/component/environment/container/TitleContainer";
import { projectData } from "@src/data/data";

const LinkSlider = () => {
  const moveAnimation = () => {
    const item = document.querySelector(".slider") as HTMLElement;
    const childItem = item.firstChild;
    if (childItem) {
      item.append(childItem);
    }
  };
  useEffect(() => {
    document.addEventListener("animationiteration", moveAnimation);
    return () =>
      document.removeEventListener("animationiteration", moveAnimation);
  }, []);
  return (
    <TitleContainer title={"PROJECT LINK"}>
      <div className="slider_container">
        <div className="slider-gradient-top" />
        <div className="slider">
          {projectData.map(
            (r, index: number) =>
              r.link && (
                <a
                  key={`linkIndex${index}`}
                  className="slider_item_box"
                  href={r.link}
                  target="_blank"
                >
                  <span className="slider_text">{r.projectName}</span>
                </a>
              )
          )}
        </div>
        <div className="slider-gradient-bottom" />
      </div>
    </TitleContainer>
  );
};

export default LinkSlider;
