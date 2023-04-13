import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  FormControl,
  Grid,
  InputAdornment,
  Link,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";

import { ReactComponent as NetflixIcon } from "src/assets/images/netflix-logo.svg";

export interface IPageHeaderProps {}

export function PageHeader(props: IPageHeaderProps) {
  const { t, i18n } = useTranslation();

  const [language, setLanguage] = useState<string>("en");

  function onLanguageChange(
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) {
    const lang = event?.target?.value;

    i18n.changeLanguage(lang);
    setLanguage(lang);
  }

  return (
    <Grid container alignItems={"center"} justifyContent={"space-between"}>
      <Grid item>
        <Link href="/">
          <NetflixIcon />
        </Link>
      </Grid>
      <Grid item>
        <Grid container alignItems={"center"} columnSpacing={3}>
          <Grid item>
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
          </Grid>
          <Grid item>
            <Button variant="contained">{t("common.buttons.sign-in")}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageHeader;
