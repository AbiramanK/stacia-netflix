import React from "react";
import { Typography, TypographyStyle, TypographyVariant } from "@mui/material";

import { Colors } from "src/constants/colors";

export interface IPageSubtitle1Props {
  children: React.ReactNode;
  variant?: TypographyVariant;
  style?: TypographyStyle;
}

export function PageSubtitle1(props: IPageSubtitle1Props) {
  return (
    <Typography
      variant={props?.variant ?? "subtitle1"}
      fontSize={16}
      fontWeight={"400"}
      color={Colors?.common?.white}
      sx={{ ...props?.style }}
    >
      {props?.children}
    </Typography>
  );
}

export default PageSubtitle1;
