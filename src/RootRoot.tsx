import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { Home, LandingPage, SignInContainer } from "./screens";

export const RootRouter = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/login", element: <SignInContainer /> },
  { path: "/home", element: <Home /> },
]);

export default RootRouter;
