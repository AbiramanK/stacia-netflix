import React from "react";
import { Box, BoxProps, Grid, GridProps } from "@mui/material";

import { Colors } from "src/constants/Colors";

export type PageSectionFlexDirectionType = "row" | "row-reverse";

export interface IPageSectionGridContainerProps {
  flexDirection?: PageSectionFlexDirectionType;
  children: React.ReactNode;
  containerStyle?: Pick<BoxProps, "sx">;
  gridStyle?: Pick<GridProps, "sx">;
}

export function PageSectionGridContainer(
  props: IPageSectionGridContainerProps
) {
  return (
    <Box
      padding={"4.5rem 0"}
      sx={{
        backgroundColor: Colors?.common?.black,
        ...props?.containerStyle?.sx,
      }}
    >
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={props?.flexDirection}
        sx={{
          margin: "auto",
          maxWidth: "calc(100% - 4rem)",
          ...props?.gridStyle?.sx,
        }}
      >
        {props?.children}
      </Grid>
    </Box>
  );
}

export default PageSectionGridContainer;
