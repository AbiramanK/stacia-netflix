import React from "react";
import { Typography, TypographyStyle, TypographyVariant } from "@mui/material";

import { Colors } from "src/constants/colors";

export interface IPageDisplay1Props {
  children: React.ReactNode;
  variant?: TypographyVariant;
  style?: TypographyStyle;
}

export function PageDisplay1(props: IPageDisplay1Props) {
  return (
    <Typography
      variant={props?.variant ?? "body1"}
      fontSize={13}
      fontWeight={"400"}
      color={Colors?.common?.white}
      sx={{ ...props?.style }}
    >
      {props?.children}
    </Typography>
  );
}

export default PageDisplay1;
