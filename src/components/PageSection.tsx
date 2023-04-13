import React from "react";
import { Box, Grid } from "@mui/material";

import { Colors } from "src/constants/Colors";
import PageTitle from "./PageTitle";
import PageDescription1 from "./PageDescription1";

export interface IPageSectionProps {
  flexDirection?: "row" | "row-reverse";
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
}

export function PageSection(props: IPageSectionProps) {
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
        <Grid item xs={5.5} sx={{ zIndex: 2 }}>
          <Grid container rowGap={3}>
            <Grid item xs={12}>
              <PageTitle>{props?.pageTitle}</PageTitle>
            </Grid>
            <Grid item xs={12}>
              <PageDescription1>{props?.pageDescription}</PageDescription1>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={6.5} sx={{ zIndex: 1 }}>
          {props?.children}
        </Grid>
      </Grid>
    </Box>
  );
}
export default PageSection;
