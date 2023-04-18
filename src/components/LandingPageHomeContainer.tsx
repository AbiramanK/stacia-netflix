import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  ContainerProps,
  BoxProps,
  Breakpoint,
} from "@mui/material";

import PageHeader, { IPageHeaderProps } from "./PageHeader";

export interface ILandingPageHomeContainerProps {
  children?: React.ReactNode;
  backgroundImage?: string;
  containerStyle?: Pick<ContainerProps, "sx">["sx"];
  contentStyle?: Pick<BoxProps, "sx">["sx"];
  containerMaxWidth?: Breakpoint;
  pageHeaderProps?: IPageHeaderProps;
}

export function LandingPageHomeContainer(
  props: ILandingPageHomeContainerProps
) {
  const navigate = useNavigate();

  function onClickSignIn() {
    navigate("/login");
  }

  return (
    <Container
      maxWidth={props?.containerMaxWidth}
      sx={{
        background: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${props?.backgroundImage})`,
        minHeight: "43.75rem",
        pt: 3,
        display: "flex",
        flexDirection: "column",
        ...props?.containerStyle,
      }}
    >
      <PageHeader onClickSignIn={onClickSignIn} {...props?.pageHeaderProps} />
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
  containerMaxWidth: "xl",
};
