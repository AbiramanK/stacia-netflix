import React from "react";
import { Box, Grid, Typography } from "@mui/material";
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
  GetStartedSection,
  LandingPageHomeContainer,
  PageDescription1,
  PageFooter,
  PageSection,
  PageSectionDivider,
  PageSectionGridContainer,
  PageTitle,
  PageVideoImagePileIn,
} from "src/components";
import { Colors } from "src/constants/colors";
import { QuestionAnswerInterface } from "src/components/FrequentlyAskedQuetions";

export interface ILandingPageProps {}

export function LandingPage(props: ILandingPageProps) {
  const { t } = useTranslation();

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
      <LandingPageHomeContainer backgroundImage={LandingPageImage}>
        <PageTitle>{t("pages.landing-page.section1.title")}</PageTitle>
        <PageDescription1>
          {t("pages.landing-page.section1.description1")}
        </PageDescription1>
        <GetStartedSection />
      </LandingPageHomeContainer>
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
        containerStyle={{ paddingInline: "3rem" }}
        gridStyle={{ justifyContent: "flex-start", rowGap: 2.5 }}
      >
        <FrequentlyAskedQuestions questionAnswer={frequentlyAskedQuestions} />
        <GetStartedSection />
      </PageSectionGridContainer>
      <PageSectionDivider />
      <PageSectionGridContainer containerStyle={{ paddingInline: "3rem" }}>
        <PageFooter />
      </PageSectionGridContainer>
    </React.Fragment>
  );
}

export default LandingPage;
