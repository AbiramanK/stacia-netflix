import React from "react";
import { Box, Grid } from "@mui/material";

import { Colors } from "src/constants/Colors";

export type PageSectionFlexDirectionType = "row" | "row-reverse";

export interface IPageSectionGridContainerProps {
  flexDirection?: PageSectionFlexDirectionType;
  children: React.ReactNode;
}

export function PageSectionGridContainer(
  props: IPageSectionGridContainerProps
) {
  return (
    <Box padding={"4.5rem 0"} sx={{ backgroundColor: Colors?.common?.black }}>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={props?.flexDirection}
        sx={{
          margin: "auto",
          maxWidth: "calc(100% - 4rem)",
        }}
      >
        {props?.children}
      </Grid>
    </Box>
  );
}

export default PageSectionGridContainer;
