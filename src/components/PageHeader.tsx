import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Grid, Link } from "@mui/material";

import { ReactComponent as NetflixIcon } from "src/assets/images/netflix-logo.svg";
import LanguageSwitchButton from "./LanguageSwitchButton";

export interface IPageHeaderProps {}

export function PageHeader(props: IPageHeaderProps) {
  const { t } = useTranslation();

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
            <LanguageSwitchButton />
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
