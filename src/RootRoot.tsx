import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { AuthLayout } from "./layouts";
import { CheckAuth, RequireAuth } from "./providers/AuthProvider";

import {
  Home,
  LandingPage,
  SignInContainer,
  TitlePageContainer,
} from "./screens";

export const RootRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "", element: <LandingPage /> },
      {
        path: "login",
        element: (
          <CheckAuth>
            <SignInContainer />
          </CheckAuth>
        ),
      },
      {
        path: "home",
        element: (
          <RequireAuth roles={["customer", "manager"]}>
            <Home />
          </RequireAuth>
        ),
      },
      {
        path: "title/:id",
        element: (
          <RequireAuth roles={["customer", "manager"]}>
            <TitlePageContainer />
          </RequireAuth>
        ),
      },
    ],
  },
]);

export default RootRouter;
