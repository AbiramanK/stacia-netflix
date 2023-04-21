import React from "react";
import { Typography, TypographyStyle } from "@mui/material";
import { Colors } from "src/constants/colors";

export interface IPageTitleProps {
  children: string;
  titleStyle?: TypographyStyle;
}

export function PageTitle(props: IPageTitleProps) {
  return (
    <Typography
      variant={"h1"}
      fontSize={"3rem"}
      fontWeight={"900"}
      color={Colors?.common?.white}
      sx={{ ...props?.titleStyle }}
    >
      {props?.children}
    </Typography>
  );
}

export default PageTitle;
