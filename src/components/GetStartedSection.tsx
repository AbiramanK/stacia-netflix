import React from "react";
import { useTranslation } from "react-i18next";
import { Box, Grid, TextField, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import PageDescription2 from "./PageDescription2";

export interface IGetStartedSectionProps {}

export function GetStartedSection(props: IGetStartedSectionProps) {
  const { t } = useTranslation();

  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={2}>
      <PageDescription2>
        {t("pages.landing-page.section1.description2")}
      </PageDescription2>
      <Grid container alignItems={"center"}>
        <Grid item xs={8}>
          <TextField
            variant="outlined"
            label={t("common.inputs.email")}
            sx={{ width: "stretch" }}
          />
        </Grid>
        <Grid item xs={4} sx={{ textAlign: "right" }}>
          <Button
            size="large"
            variant="contained"
            endIcon={<ArrowForwardIosIcon />}
            sx={{
              height: "auto",
              fontSize: "1.4rem",
              fontWeight: "500",
            }}
          >
            {t("common.buttons.get-started")}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default GetStartedSection;
