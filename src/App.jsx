import React from "react";
import { useRoutes } from "react-router-dom";

import Router from "./routes/Router.jsx";

const App = () => {
  const routing = useRoutes(Router);

  return <>{routing}</>;
};

export default App;
