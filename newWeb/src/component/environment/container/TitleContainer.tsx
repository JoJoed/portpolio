import React, { ReactNode } from "react";

interface titleType {
  title: string;
  color?: string;
  children?: ReactNode | ReactNode[];
}

const TitleContainer = ({ title, color, children }: titleType) => {
  return (
    <div className="title_container">
      <div
        className="title"
        style={{
          borderBottom: `2px solid ${color ? color : "#0c8ce9"}`,
        }}
      >
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};

export default TitleContainer;
