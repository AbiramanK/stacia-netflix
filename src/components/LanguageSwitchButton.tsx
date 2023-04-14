import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  Select,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
  useTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { deepmerge } from "@mui/utils";
import LanguageIcon from "@mui/icons-material/Language";

import { LanguageSwitchContext } from "src/contexts";
import { Colors } from "src/constants/Colors";

export interface ILanguageSwitchButtonProps {}

export function LanguageSwitchButton(props: ILanguageSwitchButtonProps) {
  const { t } = useTranslation();

  const outerTheme = useTheme();
  const innerTheme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          outlined: {
            color: Colors?.primary,
            notchedOutline: {
              borderColor: Colors?.primary,
            },
          },
          iconOutlined: {
            color: Colors?.primary,
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            color: Colors?.primary,
          },
        },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&:hover": {
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: Colors?.primary,
                opacity: 1,
              },
            },
          },
          notchedOutline: {
            borderColor: Colors?.primary,
            opacity: 0.7,
          },
        },
      },
    },
  });

  const theme = createTheme(deepmerge(innerTheme, outerTheme));

  const languageSwitch = useContext(LanguageSwitchContext);

  const [language, setLanguage] = useState<string>(languageSwitch?.language);

  useEffect(() => {
    setLanguage(languageSwitch?.language);
  }, [languageSwitch?.language]);

  function onLanguageChange(
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) {
    const lang = event?.target?.value;

    setLanguage(lang);

    languageSwitch?.updateLanguage(lang);
  }

  return (
    <ThemeProvider theme={theme}>
      <FormControl fullWidth>
        <Select
          displayEmpty
          size="small"
          id="languageSelect"
          value={language}
          onChange={onLanguageChange}
          input={<OutlinedInput />}
          inputProps={{ "aria-label": "Without label" }}
          startAdornment={
            <InputAdornment position="start">
              <LanguageIcon />
            </InputAdornment>
          }
        >
          <MenuItem value={"en"}>{t("languages.english")}</MenuItem>
          <MenuItem value={"ta"}>{t("languages.tamil")}</MenuItem>
        </Select>
      </FormControl>
    </ThemeProvider>
  );
}

export default LanguageSwitchButton;
