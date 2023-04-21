import React from "react";
import { Typography, TypographyStyle, TypographyVariant } from "@mui/material";

import { Colors } from "src/constants/colors";

export interface IPageBody2Props {
  children: React.ReactNode;
  style?: TypographyStyle;
  variant?: TypographyVariant;
}

export function PageBody2(props: IPageBody2Props) {
  return (
    <Typography
      variant={props?.variant ?? "body2"}
      sx={{
        fontSize: "0.875rem",
        color: Colors?.common?.white,
        ...props?.style,
      }}
    >
      {props?.children}
    </Typography>
  );
}

export default PageBody2;
