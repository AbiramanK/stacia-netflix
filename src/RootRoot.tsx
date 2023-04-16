import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { LandingPage, SignInContainer } from "./screens";

export const RootRouter = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <SignInContainer /> },
]);

export default RootRouter;
