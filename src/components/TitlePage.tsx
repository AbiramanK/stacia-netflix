import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, Button, Divider } from "@mui/material";
import { PlayArrow, Add } from "@mui/icons-material";

import LandingPageHomeContainer, {
  ILandingPageHomeContainerProps,
} from "./LandingPageHomeContainer";
import PageBody1 from "./PageBody1";
import PageTitle from "./PageTitle";
import moment, { DurationInputArg2 } from "moment";

const VDivider = () => (
  <Divider
    orientation="vertical"
    variant="fullWidth"
    sx={{
      borderWidth: 1,
      height: 16,
      borderColor: "rgba(163, 163, 163, 0.7)",
    }}
  />
);

const AdditionalDetails = (props: { title?: string; description?: string }) => (
  <Grid container alignItems={"center"} columnGap={0.5}>
    <Grid item>
      <PageBody1 style={{ color: "#a3a3a3" }}>{props?.title}</PageBody1>
    </Grid>
    <Grid item>
      <PageBody1>{props?.description}</PageBody1>
    </Grid>
  </Grid>
);

function getTimeDurationFormat(
  duration: number,
  durationUnit?: DurationInputArg2
): string {
  const time = moment.duration(duration, durationUnit ?? "minutes");

  const years = time?.years();
  const months = time?.months();
  const weeks = time?.weeks();
  const days = time?.days();
  const hours = time?.hours();
  const minutes = time?.minutes();
  const seconds = time?.seconds();

  const format = `${years !== 0 ? `${years}Y` : ""} 
  ${months !== 0 ? `${months}M` : ""} 
  ${weeks !== 0 ? `${weeks}w` : ""} 
  ${days !== 0 ? `${days}d` : ""} 
  ${hours !== 0 ? `${hours}h` : ""} 
  ${minutes !== 0 ? `${minutes}m` : ""} 
  ${seconds !== 0 ? `${seconds}s` : ""}`;

  return format;
}

export interface ITitlePageProps {
  titleImage?: string;
  titleImageStyle?: React.CSSProperties;
  title: string;
  description: string;
  releaseYear: number;
  certificate: MovieCertificateInterface;
  duration?: number;
  seasons?: number;
  genre: GenreInterface;
  starring: string;
  creators?: string;
  landingPageHomeContainerProps?: ILandingPageHomeContainerProps;
}

export function TitlePage(props: ITitlePageProps) {
  const { t } = useTranslation();

  return (
    <LandingPageHomeContainer
      containerStyle={{
        "@media (min-width: 600px)": {
          pl: 0,
          pr: 0,
        },
        pl: 0,
        pr: 0,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: "inherit",
      }}
      contentStyle={{
        justifyContent: "flex-start",
        alignItems: "flex-start",

        rowGap: 0,
      }}
      pageHeaderProps={{
        showAccountMenu: true,
        showAppMenu: true,
        showSignInButton: false,
        showLanguageSwitch: false,
        appIconStyle: {
          height: 30,
        },
        containerStyle: { paddingInline: 4 },
      }}
      {...props?.landingPageHomeContainerProps}
    >
      <Grid container>
        <Grid
          item
          xs={5.5}
          sx={{
            background:
              "linear-gradient(90deg,#181818 10%,hsla(0,0%,9%,.98) 20%,hsla(0,0%,9%,.97) 25%,hsla(0,0%,9%,.95) 35%,hsla(0,0%,9%,.94) 40%,hsla(0,0%,9%,.92) 45%,hsla(0,0%,9%,.9) 50%,hsla(0,0%,9%,.87) 55%,hsla(0,0%,9%,.82) 60%,hsla(0,0%,9%,.75) 65%,hsla(0,0%,9%,.63) 70%,hsla(0,0%,9%,.45) 75%,hsla(0,0%,9%,.27) 80%,hsla(0,0%,9%,.15) 85%,hsla(0,0%,9%,.08) 90%,hsla(0,0%,9%,.03) 95%,hsla(0,0%,9%,0));",
            paddingBlock: "4rem",
            pl: 8,
            mt: 1,
          }}
        >
          <Grid container rowGap={7}>
            <Grid item>
              <img
                src={props?.titleImage}
                alt={props?.title}
                style={{
                  height: "auto",
                  width: "90%",
                  ...props?.titleImageStyle,
                }}
              />
            </Grid>
            <Grid item>
              <Grid container rowGap={2.5}>
                <Grid item>
                  <PageTitle
                    titleStyle={{
                      fontSize: 25,
                      fontWeight: "500",
                    }}
                  >
                    {props?.title}
                  </PageTitle>
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems={"center"} columnGap={1.2}>
                    <Grid item>
                      <PageBody1 style={{ color: "#a3a3a3" }}>
                        {props?.releaseYear}
                      </PageBody1>
                    </Grid>
                    <Grid item>
                      <VDivider />
                    </Grid>
                    <Grid item>
                      <PageBody1
                        style={{
                          color: "#a3a3a3",
                          borderStyle: "solid",
                          borderWidth: 1,
                          paddingInline: 0.75,
                        }}
                      >
                        {props?.certificate?.name}
                      </PageBody1>
                    </Grid>
                    <Grid item>
                      <VDivider />
                    </Grid>
                    <Grid item>
                      <PageBody1 style={{ color: "#a3a3a3" }}>
                        {props?.duration!
                          ? getTimeDurationFormat(props?.duration)
                          : `${props?.seasons} Seasons`}
                      </PageBody1>
                    </Grid>
                    <Grid item>
                      <VDivider />
                    </Grid>
                    <Grid item>
                      <PageBody1 style={{ color: "#a3a3a3" }}>
                        {props?.genre?.name}
                      </PageBody1>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid container columnGap={2}>
                    <Grid item>
                      <Button variant="contained" startIcon={<PlayArrow />}>
                        {t("common.buttons.play")}
                      </Button>
                    </Grid>
                    <Grid item>
                      <Button
                        variant="outlined"
                        color="warning"
                        startIcon={<Add />}
                      >
                        {t("common.buttons.my-list")}
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item sx={{ paddingBlock: "0.5rem" }}>
                  <PageBody1
                    style={{
                      display: "-webkit-box",
                      overflow: "hidden",
                      WebkitBoxOrient: "vertical",
                      WebkitLineClamp: 4,
                    }}
                  >
                    {props?.description}
                  </PageBody1>
                </Grid>
                <Grid item>
                  <Grid container>
                    <Grid item xs={12}>
                      <AdditionalDetails
                        title={`${t("common.texts.starring")}:`}
                        description={props?.starring}
                      />
                    </Grid>
                    {props?.creators! && (
                      <Grid item>
                        <AdditionalDetails
                          title={`${t("common.texts.creators")}:`}
                          description={props?.creators}
                        />
                      </Grid>
                    )}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </LandingPageHomeContainer>
  );
}

export default TitlePage;
