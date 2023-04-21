import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { useTranslation } from "react-i18next";
import { RouterProvider } from "react-router-dom";

import "src/i18n/config";
import "src/App.css";

import { Colors } from "./constants/colors";
import { LanguageSwitchContext } from "./contexts";
import { getData, storeData } from "./utilities/Storage";
import { APP_LANGUAGE_KEY } from "./constants/keys";
import { APP_DEFAULT_LANGUAGE } from "./constants/configs";
import RootRouter from "./RootRoot";

function App() {
  const { i18n } = useTranslation();

  const theme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: Colors.primary },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: (state) => ({
            color: Colors?.primary,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderColor: Colors?.primary,
            "& input:valid + fieldset": {
              borderColor: Colors?.primary,
              opacity: 0.5,
            },
            "& .MuiOutlinedInput-root": {
              color: Colors?.common?.white,
              "&:hover fieldset": {
                borderColor: state?.ownerState?.error
                  ? Colors?.error
                  : Colors?.primary,
                opacity: 1,
              },
            },
            "& .MuiInputLabel-root": {
              color: state?.ownerState?.error ? Colors?.error : Colors?.primary,
            },
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },

      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: Colors?.primary,
            opacity: 0.5,
          },
        },
      },
    },
  });

  const [language, setLanguage] = useState<string>(APP_DEFAULT_LANGUAGE);

  useEffect(() => {
    initialDataLoad();
    // eslint-disable-next-line
  }, []);

  async function initialDataLoad() {
    const language = await getData(APP_LANGUAGE_KEY);

    if (language!) {
      setLanguage(language);

      if (i18n.language !== language) {
        updateLanguage(language);
      }
    }
  }

  function updateLanguage(language: string) {
    setLanguage(language);
    i18n.changeLanguage(language);

    storeData(APP_LANGUAGE_KEY, language);
  }

  return (
    <LanguageSwitchContext.Provider
      value={{ language: language, updateLanguage }}
    >
      <ThemeProvider theme={theme}>
        <RouterProvider router={RootRouter} />
      </ThemeProvider>
    </LanguageSwitchContext.Provider>
  );
}

export default App;
