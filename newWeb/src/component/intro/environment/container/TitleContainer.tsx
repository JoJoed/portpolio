import React, { ReactNode } from "react";

interface titleType {
  title: string;
  children?: ReactNode | ReactNode[];
}

const TitleContainer = ({ title, children }: titleType) => {
  return (
    <div className="title_container">
      <div className="title">
        <span>{title}</span>
      </div>
      {children}
    </div>
  );
};

export default TitleContainer;
