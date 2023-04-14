import React from "react";
import { Typography, TypographyStyle, TypographyVariant } from "@mui/material";

import { Colors } from "src/constants/Colors";

export interface IPageBody1Props {
  children: React.ReactNode;
  style?: TypographyStyle;
  variant?: TypographyVariant;
}

export function PageBody1(props: IPageBody1Props) {
  return (
    <Typography
      variant={props?.variant ?? "body1"}
      sx={{ fontSize: "1rem", color: Colors?.common?.white, ...props?.style }}
    >
      {props?.children}
    </Typography>
  );
}

export default PageBody1;
