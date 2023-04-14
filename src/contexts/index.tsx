import React from "react";
import { LanguageSwitchContextInterface } from "src/@types/context";

const LanguageSwitchContext: React.Context<LanguageSwitchContextInterface> =
  React.createContext<LanguageSwitchContextInterface>({
    language: "en",
    updateLanguage(language) {},
  });

export { LanguageSwitchContext };
