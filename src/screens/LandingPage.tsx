import React from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  Paper,
  TextField,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { deepmerge } from "@mui/utils";
import { useTranslation } from "react-i18next";

import LandingPageImage from "src/assets/images/netflix_landing_page.jpg";

import {
  PageDescription1,
  PageDescription2,
  PageHeader,
  PageTitle,
} from "src/components";
import { Colors } from "src/constants/Colors";

export interface ILandingPageProps {}

export function LandingPage(props: ILandingPageProps) {
  const { t } = useTranslation();

  const outerTheme = useTheme();
  const innerTheme = createTheme({
    components: {
      MuiSelect: {
        styleOverrides: {
          outlined: {
            color: Colors?.primary,
          },
          iconOutlined: {
            color: Colors?.primary,
          },
        },
      },
      MuiInputAdornment: {
        styleOverrides: {
          root: {
            color: Colors?.primary,
          },
        },
      },
    },
  });

  const theme = createTheme(deepmerge(innerTheme, outerTheme));
  return (
    <React.Fragment>
      <Container
        maxWidth={"xl"}
        sx={{
          backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0.8) 0, rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.8) 100%), url(${LandingPageImage})`,
          minHeight: "43.75rem",
          pt: 3,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <ThemeProvider theme={theme}>
          <PageHeader />
        </ThemeProvider>
        <Box
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            rowGap: "1rem",
          }}
        >
          <PageTitle>{t("pages.landing-page.section1.title")}</PageTitle>
          <PageDescription1>
            {t("pages.landing-page.section1.description1")}
          </PageDescription1>
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
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default LandingPage;
