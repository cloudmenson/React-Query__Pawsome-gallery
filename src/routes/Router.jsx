import React, { lazy } from "react";

import Loadable from "../layouts/Loadable.jsx";

//screens
const HomePage = Loadable(lazy(() => import("../views/homePage/HomePage.jsx")));
const PreviewPage = Loadable(
  lazy(() => import("../views/preview-page/PreviewPage.jsx"))
);

const Router = [
  {
    path: "/",
    element: <PreviewPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
];

export default Router;
