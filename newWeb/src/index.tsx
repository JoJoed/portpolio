import React from "react";
import ReactDOM from "react-dom/client";
import Intro from "@src/page/Intro";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Intro />);
