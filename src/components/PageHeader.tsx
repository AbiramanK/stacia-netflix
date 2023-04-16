import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Grid, Link } from "@mui/material";

import { ReactComponent as NetflixIcon } from "src/assets/images/netflix-logo.svg";
import LanguageSwitchButton from "./LanguageSwitchButton";

export interface IPageHeaderProps {
  showLanguageSwitch?: boolean;
  showSignInButton?: boolean;
  showAppLogo?: boolean;
}

export function PageHeader(props: IPageHeaderProps) {
  const { t } = useTranslation();

  return (
    <Grid container alignItems={"center"} justifyContent={"space-between"}>
      <Grid item>
        {props?.showAppLogo && (
          <Link href="/">
            <NetflixIcon />
          </Link>
        )}
      </Grid>
      <Grid item>
        <Grid container alignItems={"center"} columnSpacing={3}>
          <Grid item>
            {props?.showLanguageSwitch && <LanguageSwitchButton />}
          </Grid>
          <Grid item>
            {props?.showSignInButton && (
              <Button variant="contained">{t("common.buttons.sign-in")}</Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageHeader;

PageHeader.defaultProps = {
  showAppLogo: true,
  showLanguageSwitch: true,
  showSignInButton: true,
};
