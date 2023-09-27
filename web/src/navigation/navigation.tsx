import { createBrowserRouter } from "react-router-dom";
import NullContents from "../component/block/NullContents";
import { Main, MainContents } from "../component/pages";
import RootContainer from "../component/block/RootContainer";

const Router = createBrowserRouter([
  {
    element: <RootContainer />,
    path: "",
    children: [
      {
        element: <Main />,
        path: "/",
        children: [
          {
            index: true,
            path: "/",
            element: <MainContents />,
          },
          {
            path: "*",
            element: <NullContents />,
          },
        ],
      },
    ],
  },
]);

export default Router;
