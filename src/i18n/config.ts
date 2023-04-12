import i18next from "i18next";
import { initReactI18next } from "react-i18next";

import en_translation from "src/locales/en/translation.json";

export const fallbackLng = ["en"];
export const availableLanguages = ["en", "ta"];
export const resources = {
  en: { translation: en_translation },
};

i18next.use(initReactI18next).init({
  resources,
  fallbackLng,
  interpolation: {
    escapeValue: false,
  },
});
