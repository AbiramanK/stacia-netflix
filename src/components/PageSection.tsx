import React from "react";
import { Grid } from "@mui/material";

import PageTitle from "./PageTitle";
import PageDescription1 from "./PageDescription1";
import PageSectionGridContainer, {
  PageSectionFlexDirectionType,
} from "./PageSectionGridContainer";

export interface IPageSectionProps {
  flexDirection?: PageSectionFlexDirectionType;
  pageTitle: string;
  pageDescription: string;
  children: React.ReactNode;
}

export function PageSection(props: IPageSectionProps) {
  return (
    <PageSectionGridContainer flexDirection={props?.flexDirection}>
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
    </PageSectionGridContainer>
  );
}
export default PageSection;
