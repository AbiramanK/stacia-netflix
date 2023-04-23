import React from "react";
import { Navigate, useLocation } from "react-router-dom";

import { AuthenticationOutput, UserType } from "src/@types/api";
import { USER_DETAILS_KEY } from "src/constants/keys";
import { AuthContext } from "src/contexts";
import { getData, removeAll, storeData } from "src/utilities/storage";

function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<AuthenticationOutput | null>(null);

  const localUser = getData(USER_DETAILS_KEY)! ?? "";

  if (localUser.trim() !== "" && user === null) {
    const userObj: AuthenticationOutput = JSON.parse(localUser);
    setUser(userObj);
  }

  const login = (newUser: AuthenticationOutput, callback: VoidFunction) => {
    setUser(newUser);

    storeData(USER_DETAILS_KEY, JSON.stringify(newUser));
    callback();
  };

  const logout = (callback: VoidFunction) => {
    setUser(null);
    removeAll();
    callback();
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

function useAuth() {
  return React.useContext(AuthContext);
}

function RequireAuth({
  roles,
  children,
}: {
  roles: Array<UserType>;
  children: JSX.Element;
}) {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!roles?.includes(auth?.user?.type!)) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
}

function CheckAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  if (auth.user) {
    return <Navigate to="/home" state={{ from: location }} replace />;
  }

  return children;
}

export { AuthProvider, RequireAuth, CheckAuth, useAuth };
