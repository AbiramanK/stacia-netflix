import React from "react";
import { Typography } from "@mui/material";
import { Colors } from "src/constants/Colors";

export interface IPageTitleProps {
  children: string;
}

export function PageTitle(props: IPageTitleProps) {
  return (
    <Typography
      variant={"h1"}
      fontSize={"3rem"}
      fontWeight={"900"}
      color={Colors?.common?.white}
    >
      {props?.children}
    </Typography>
  );
}

export default PageTitle;
