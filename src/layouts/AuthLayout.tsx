import { useOutlet } from "react-router-dom";

import { AuthProvider } from "src/providers/AuthProvider";

export interface IAuthLayoutProps {}

export function AuthLayout(props: IAuthLayoutProps) {
  const outlet = useOutlet();
  return <AuthProvider>{outlet}</AuthProvider>;
}

export default AuthLayout;
