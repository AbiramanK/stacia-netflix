import React, { useContext, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  FormControl,
  Select,
  OutlinedInput,
  InputAdornment,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import { LanguageSwitchContext } from "src/contexts";

export interface ILanguageSwitchButtonProps {}

export function LanguageSwitchButton(props: ILanguageSwitchButtonProps) {
  const { t } = useTranslation();

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
  );
}

export default LanguageSwitchButton;
