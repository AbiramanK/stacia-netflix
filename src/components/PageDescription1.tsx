import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "src/constants/Colors";

export interface IPageDescription1Props {
  children: string;
}

export function PageDescription1(props: IPageDescription1Props) {
  return (
    <Typography
      variant="h2"
      fontSize={"1.5rem"}
      fontWeight={400}
      color={Colors?.common?.white}
    >
      {props?.children}
    </Typography>
  );
}

export default PageDescription1;
