import React from "react";
import { Grid } from "@mui/material";

import LandingPageImage from "src/assets/images/netflix_landing_page.jpg";

import {
  LandingPageHomeContainer,
  SignIn,
  PageFooter,
  PageSectionGridContainer,
} from "src/components";

export interface ISignInContainerProps {}

export function SignInContainer(props: ISignInContainerProps) {
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
          <SignIn />
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
