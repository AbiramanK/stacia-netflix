import React from "react";
import { useTranslation } from "react-i18next";
import { Button, Grid, GridProps, Link } from "@mui/material";

import { ReactComponent as NetflixIcon } from "src/assets/images/netflix-logo.svg";
import LanguageSwitchButton from "./LanguageSwitchButton";

export interface IPageHeaderProps {
  showLanguageSwitch?: boolean;
  showSignInButton?: boolean;
  showAppLogo?: boolean;
  onClickSignIn?: () => void;
  containerStyle?: Pick<GridProps, "sx">["sx"];
}

export function PageHeader(props: IPageHeaderProps) {
  const { t } = useTranslation();

  function onClickSignIn() {
    if (props?.onClickSignIn!) {
      props?.onClickSignIn();
    }
  }

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"space-between"}
      sx={{ ...props?.containerStyle }}
    >
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
              <Button variant="contained" onClick={onClickSignIn}>
                {t("common.buttons.sign-in")}
              </Button>
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
