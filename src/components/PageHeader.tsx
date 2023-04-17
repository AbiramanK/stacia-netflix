import React from "react";
import { useTranslation } from "react-i18next";
import {
  Button,
  createTheme,
  Grid,
  GridProps,
  Link,
  ListItemButton,
  ThemeProvider,
} from "@mui/material";

import { ReactComponent as NetflixIcon } from "src/assets/images/netflix-logo.svg";
import LanguageSwitchButton from "./LanguageSwitchButton";
import PageBody1 from "./PageBody1";
import { useTheme } from "@emotion/react";
import { deepmerge } from "@mui/utils";
import { appMenu } from "src/constants/data";
import AccountMenu, { IAccountMenuProps } from "./AccountMenu";

export interface IPageHeaderProps {
  showLanguageSwitch?: boolean;
  showSignInButton?: boolean;
  showAppLogo?: boolean;
  onClickSignIn?: () => void;
  containerStyle?: Pick<GridProps, "sx">["sx"];
  appIconStyle?: React.CSSProperties;
  showAppMenu?: boolean;
  showAccountMenu?: boolean;
  accountMenuProps?: IAccountMenuProps;
}

export function PageHeader(props: IPageHeaderProps) {
  const outerTheme = useTheme();
  const innerTheme = createTheme({
    components: {
      MuiButtonBase: {
        styleOverrides: {
          root: {
            "&.MuiListItemButton-root": {
              "&:hover": {
                backgroundColor: "rgb(152, 251, 152, 0.15)",
              },
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "rgb(152, 251, 152, 0.15)",
            },
          },
        },
      },
    },
  });

  const theme = deepmerge(innerTheme, outerTheme);

  const { t } = useTranslation();

  function onClickSignIn() {
    if (props?.onClickSignIn!) {
      props?.onClickSignIn();
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        sx={{ ...props?.containerStyle }}
      >
        <Grid item>
          <Grid container columnGap={4} alignItems={"center"}>
            <Grid item>
              {props?.showAppLogo && (
                <Link href="/">
                  <NetflixIcon
                    style={{
                      ...props?.appIconStyle,
                    }}
                  />
                </Link>
              )}
            </Grid>
            {props?.showAppMenu && (
              <Grid item>
                <Grid container>
                  {appMenu?.map((menu, index) => (
                    <ListItemButton key={index} href={menu?.link}>
                      <PageBody1>{menu?.title}</PageBody1>
                    </ListItemButton>
                  ))}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
        {props?.showAccountMenu && (
          <Grid item>
            <AccountMenu {...props?.accountMenuProps} />
          </Grid>
        )}
        {(props?.showLanguageSwitch || props?.showSignInButton) && (
          <Grid item>
            <Grid container alignItems={"center"} columnSpacing={3}>
              {props?.showLanguageSwitch && (
                <Grid item>
                  <LanguageSwitchButton />
                </Grid>
              )}
              {props?.showSignInButton && (
                <Grid item>
                  <Button variant="contained" onClick={onClickSignIn}>
                    {t("common.buttons.sign-in")}
                  </Button>
                </Grid>
              )}
            </Grid>
          </Grid>
        )}
      </Grid>
    </ThemeProvider>
  );
}

export default PageHeader;

PageHeader.defaultProps = {
  showAppLogo: true,
  showLanguageSwitch: true,
  showSignInButton: true,
  showAppMenu: false,
  showAccountMenu: false,
};
