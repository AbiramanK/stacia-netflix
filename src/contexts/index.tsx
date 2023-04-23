import React from "react";

import {
  AuthContextType,
  LanguageSwitchContextInterface,
} from "src/@types/context";

const LanguageSwitchContext: React.Context<LanguageSwitchContextInterface> =
  React.createContext<LanguageSwitchContextInterface>({
    language: "en",
    updateLanguage(language) {},
  });

const AuthContext = React.createContext<AuthContextType>(null!);

export { LanguageSwitchContext, AuthContext };
