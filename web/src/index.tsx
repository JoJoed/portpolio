import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RecoilRoot } from "recoil";
import { RouterProvider } from "react-router-dom";
import navigation from "./navigation/navigation";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={navigation} />
    </RecoilRoot>
  </React.StrictMode>
);
