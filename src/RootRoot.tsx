import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { LandingPage } from "./screens";

export const RootRouter = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
]);

export default RootRouter;
