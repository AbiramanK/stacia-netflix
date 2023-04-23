import { AuthenticationOutput } from "./api";

export interface LanguageSwitchContextInterface {
  language: string;
  updateLanguage: (language: string) => void;
}

export interface AuthContextType {
  user: AuthenticationOutput | null;
  login: (user: AuthenticationOutput, callback: VoidFunction) => void;
  logout: (callback: VoidFunction) => void;
}
