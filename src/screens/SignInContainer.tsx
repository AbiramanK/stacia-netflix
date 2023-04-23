import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Grid } from "@mui/material";

import LandingPageImage from "src/assets/images/netflix_landing_page.jpg";

import {
  LandingPageHomeContainer,
  SignIn,
  PageFooter,
  PageSectionGridContainer,
} from "src/components";
import { loginResponses } from "src/constants/data";
import { useAuth } from "src/providers/AuthProvider";
import { notify } from "src/utilities";

export interface ISignInContainerProps {}

export function SignInContainer(props: ISignInContainerProps) {
  const { t } = useTranslation();
  const auth = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState<boolean>(false);

  function onSignInClick(email: string, password: string) {
    setLoading(true);

    if (password === "12345678") {
      const user = loginResponses?.find((login) => login?.email === email);

      if (user!) {
        switch (user?.type) {
          case "customer":
            auth.login(user, () => navigate("/home"));
            break;

          case "manager":
            auth.login(user, () => navigate("/home"));
            break;

          case "admin":
            auth.login(user, () => navigate("/dashboard"));
            break;

          default:
            notify(t("common.responses.email-password-incorrect"), "error");
            break;
        }
      } else {
        notify(t("common.responses.email-password-incorrect"), "error");
      }
    } else {
      notify(t("common.responses.email-password-incorrect"), "error");
    }

    setLoading(false);
  }

  return (
    <LandingPageHomeContainer
      backgroundImage={LandingPageImage}
      containerStyle={{
        pl: 0,
        pr: 0,
        "@media (min-width: 600px)": {
          paddingInline: 0,
        },
      }}
      pageHeaderProps={{
        showLanguageSwitch: false,
        showSignInButton: false,
        containerStyle: {
          paddingInline: 3,
        },
      }}
    >
      <Grid container rowGap={18} justifyContent={"center"} sx={{ pt: 4 }}>
        <Grid item xs={4.75}>
          <SignIn onSignInClick={onSignInClick} loading={loading} />
        </Grid>
        <Grid item xs={12}>
          <PageSectionGridContainer
            containerStyle={{
              backgroundColor: "rgba(0, 0, 0, 0.75)",
            }}
          >
            <PageFooter />
          </PageSectionGridContainer>
        </Grid>
      </Grid>
    </LandingPageHomeContainer>
  );
}

export default SignInContainer;
