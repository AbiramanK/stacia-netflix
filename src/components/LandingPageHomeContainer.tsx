import React from "react";
import {
  Container,
  Box,
  ContainerProps,
  BoxProps,
  Breakpoint,
  GridProps,
} from "@mui/material";

import PageHeader from "./PageHeader";

export interface ILandingPageHomeContainerProps {
  children: React.ReactNode;
  backgroundImage?: string;
  containerStyle?: Pick<ContainerProps, "sx">["sx"];
  contentStyle?: Pick<BoxProps, "sx">["sx"];
  showLanguageSwitch?: boolean;
  showSignInButton?: boolean;
  showAppLogo?: boolean;
  containerMaxWidth?: Breakpoint;
  pageHeaderContainerStyle?: Pick<GridProps, "sx">["sx"];
}

export function LandingPageHomeContainer(
  props: ILandingPageHomeContainerProps
) {
  return (
    <Container
      maxWidth={props?.containerMaxWidth}
      sx={{
        backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${props?.backgroundImage})`,
        minHeight: "43.75rem",
        pt: 3,
        display: "flex",
        flexDirection: "column",
        ...props?.containerStyle,
      }}
    >
      <PageHeader
        showAppLogo={props?.showAppLogo}
        showLanguageSwitch={props?.showLanguageSwitch}
        showSignInButton={props?.showSignInButton}
        containerStyle={props?.pageHeaderContainerStyle}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          rowGap: "1rem",
          ...props?.contentStyle,
        }}
      >
        {props?.children}
      </Box>
    </Container>
  );
}

export default LandingPageHomeContainer;

LandingPageHomeContainer.defaultProps = {
  showAppLogo: true,
  showLanguageSwitch: true,
  showSignInButton: true,
  containerMaxWidth: "xl",
};
