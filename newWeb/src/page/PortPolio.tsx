import React from "react";
import "@src/assets/style.css";
import TopBar from "@src/component/intro/topbar/TopBar";
import Content from "@src/component/intro/content/Content";
const FirstPage = () => {
  return (
    <div className="container">
      <div className="inner_container">
        <TopBar />
        <Content />
      </div>
    </div>
  );
};
export default FirstPage;
