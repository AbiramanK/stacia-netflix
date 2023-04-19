import React from "react";
import { Button, Grid } from "@mui/material";

import PageTitle from "./PageTitle";

export interface IPageNotFoundProps {}

export function PageNotFound(props: IPageNotFoundProps) {
  return (
    <Grid
      container
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      rowGap={4}
      sx={{ height: "100vh", backgroundColor: "#121212" }}
    >
      <Grid item>
        <PageTitle titleStyle={{ fontSize: "6rem" }}>{`(^_^)`}</PageTitle>
      </Grid>
      <Grid item>
        <PageTitle>Page Not Found</PageTitle>
      </Grid>
      <Grid item>
        <Button href="/" variant="contained">
          Go To Home
        </Button>
      </Grid>
    </Grid>
  );
}

export default PageNotFound;
