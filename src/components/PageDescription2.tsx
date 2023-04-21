import { Typography } from "@mui/material";
import React from "react";
import { Colors } from "src/constants/colors";

export interface IPageDescription2Props {
  children: string;
}

export function PageDescription2(props: IPageDescription2Props) {
  return (
    <Typography
      variant="h3"
      fontSize={"1.25rem"}
      fontWeight={400}
      lineHeight={"1.875rem"}
      color={Colors?.common?.white}
    >
      {props?.children}
    </Typography>
  );
}

export default PageDescription2;
