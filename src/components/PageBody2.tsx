import React from "react";
import { Typography, TypographyStyle, TypographyVariant } from "@mui/material";

import { Colors } from "src/constants/Colors";

export interface IPageBody2Props {
  children: string;
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
