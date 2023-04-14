import React from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  Grid,
  TextField,
  ThemeProvider,
  Typography,
  useTheme,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { deepmerge } from "@mui/utils";
import { useTranslation } from "react-i18next";

import LandingPageImage from "src/assets/images/netflix_landing_page.jpg";
import TV from "src/assets/images/tv.png";
import VideoTvIn from "src/assets/videos/video-tv-in-0819.m4v";
import Mobile from "src/assets/images/mobile-0819.jpg";
import Boxshot from "src/assets/images/boxshot.png";
import DownloadIcon from "src/assets/gifs/download-icon.gif";
import DevicePileIn from "src/assets/images/device-pile-in.png";
import VideoDevicesIn from "src/assets/videos/video-devices-in.m4v";
import ChildrenWithRabbit from "src/assets/images/children-with-rabbit.png";

import {
  FrequentlyAskedQuestions,
  PageDescription1,
  PageDescription2,
  PageHeader,
  PageSection,
  PageSectionDivider,
  PageSectionGridContainer,
  PageTitle,
  PageVideoImagePileIn,
} from "src/components";
import { Colors } from "src/constants/Colors";
import { QuestionAnswerInterface } from "src/components/FrequentlyAskedQuetions";

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

  const frequentlyAskedQuestions: QuestionAnswerInterface[] = [
    {
      question: t("pages.landing-page.frequently-asked-questions.q1.question"),
      answer: [
        t("pages.landing-page.frequently-asked-questions.q1.answer.a1"),
        t("pages.landing-page.frequently-asked-questions.q1.answer.a2"),
      ],
    },
    {
      question: t("pages.landing-page.frequently-asked-questions.q2.question"),
      answer: [t("pages.landing-page.frequently-asked-questions.q2.answer.a1")],
    },
    {
      question: t("pages.landing-page.frequently-asked-questions.q3.question"),
      answer: [
        t("pages.landing-page.frequently-asked-questions.q3.answer.a1"),
        t("pages.landing-page.frequently-asked-questions.q3.answer.a2"),
      ],
    },
    {
      question: t("pages.landing-page.frequently-asked-questions.q4.question"),
      answer: [t("pages.landing-page.frequently-asked-questions.q4.answer.a1")],
    },
    {
      question: t("pages.landing-page.frequently-asked-questions.q5.question"),
      answer: [t("pages.landing-page.frequently-asked-questions.q5.answer.a1")],
    },
    {
      question: t("pages.landing-page.frequently-asked-questions.q6.question"),
      answer: [
        t("pages.landing-page.frequently-asked-questions.q6.answer.a1"),
        t("pages.landing-page.frequently-asked-questions.q6.answer.a2"),
      ],
    },
  ];

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
      <PageSectionDivider />
      <PageSection
        pageTitle={t("pages.landing-page.section2.title")}
        pageDescription={t("pages.landing-page.section2.description1")}
      >
        <PageVideoImagePileIn
          imageSrc={TV}
          imageAlt={"tv"}
          videoSrc={VideoTvIn}
          videoTop={100}
          videoLeft={79}
          videoMaxWidth={475}
          videoMaxHeight={262}
        />
      </PageSection>
      <PageSectionDivider />
      <PageSection
        pageTitle={t("pages.landing-page.section3.title")}
        pageDescription={t("pages.landing-page.section3.description1")}
        flexDirection={"row-reverse"}
      >
        <Box position={"relative"}>
          <img src={Mobile} alt={"mobile"} />
          <Grid
            container
            alignItems={"center"}
            sx={{
              padding: "0.5rem 0.75rem",
              border: `2px solid rgba(152, 251, 152, 0.2)`,
              boxShadow: "0 0 2em 0 rgb(0 0 0)",
              borderRadius: "0.75rem",
              minWidth: "15rem",
              width: 410,
              position: "absolute",
              bottom: 35,
              left: 120,
              backgroundColor: Colors?.common?.black,
            }}
          >
            <Grid item xs={10}>
              <Grid container alignItems={"center"} columnGap={2}>
                <Grid item>
                  <img
                    src={Boxshot}
                    alt="Boxshot"
                    style={{ height: "4.5rem" }}
                  />
                </Grid>
                <Grid item>
                  <Typography
                    variant="h4"
                    sx={{
                      fontSize: "1rem",
                      fontWeight: "500",
                      color: Colors?.common?.white,
                    }}
                  >
                    {t("pages.landing-page.section3.stranger-things")}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "0.875rem",
                      fontWeight: "400",
                      color: "#0071eb",
                    }}
                  >
                    {t("pages.landing-page.section3.downloading")}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2}>
              <img
                src={DownloadIcon}
                alt="Download Icon"
                style={{ height: "3.75rem" }}
              />
            </Grid>
          </Grid>
        </Box>
      </PageSection>
      <PageSectionDivider />
      <PageSection
        pageTitle={t("pages.landing-page.section4.title")}
        pageDescription={t("pages.landing-page.section4.description1")}
      >
        <PageVideoImagePileIn
          imageSrc={DevicePileIn}
          imageAlt={"Device Pile In"}
          videoSrc={VideoDevicesIn}
          videoTop={45}
          videoLeft={120}
          videoMaxWidth={400}
          videoMaxHeight={250}
        />
      </PageSection>
      <PageSectionDivider />
      <PageSection
        pageTitle={t("pages.landing-page.section5.title")}
        pageDescription={t("pages.landing-page.section5.description1")}
        flexDirection={"row-reverse"}
      >
        <img src={ChildrenWithRabbit} alt={"Children With Rabbit"} />
      </PageSection>
      <PageSectionDivider />
      <PageSectionGridContainer
        containerStyle={{ sx: { paddingInline: "3rem" } }}
      >
        <FrequentlyAskedQuestions questionAnswer={frequentlyAskedQuestions} />
      </PageSectionGridContainer>
    </React.Fragment>
  );
}

export default LandingPage;
