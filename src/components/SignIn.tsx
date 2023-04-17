import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Card, Checkbox, Grid, Link } from "@mui/material";

import PageTitle from "./PageTitle";
import InputTextField from "./InputTextField";
import { Colors } from "src/constants/Colors";
import PageDisplay1 from "./PageDisplay1";
import PageSubtitle1 from "./PageSubtitle1";

export interface ISignInProps {}

export function SignIn(props: ISignInProps) {
  const { t } = useTranslation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function onEmailChange(event: React.ChangeEvent<HTMLInputElement>) {
    const email = event?.target?.value;

    setEmail(email);
  }
  function onPasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    const password = event?.target?.value;

    setPassword(password);
  }

  function onSignInClick() {}

  return (
    <Card
      sx={{
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: "60px 68px 40px",
      }}
    >
      <Grid container rowGap={8}>
        <Grid item xs={12}>
          <Grid container rowGap={4}>
            <Grid item xs={12}>
              <PageTitle
                titleStyle={{
                  fontSize: 32,
                  fontWeight: 500,
                }}
              >
                {t("common.buttons.sign-in")}
              </PageTitle>
            </Grid>
            <Grid item xs={12}>
              <Grid container rowGap={2}>
                <Grid item xs={12}>
                  <InputTextField
                    fullWidth
                    variant="outlined"
                    name="email"
                    id="email"
                    label={t("common.inputs.email")}
                    type={"email"}
                    onTextChange={onEmailChange}
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <InputTextField
                    fullWidth
                    variant="outlined"
                    name="password"
                    label={t("common.inputs.password")}
                    type={"password"}
                    onTextChange={onPasswordChange}
                    required
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container rowGap={1.5}>
                <Grid item xs={12}>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    disabled={email?.trim() === "" || password?.trim() === ""}
                    sx={{
                      ":disabled": {
                        backgroundColor: Colors?.common?.lightGray,
                      },
                    }}
                    onClick={onSignInClick}
                  >
                    {t("common.buttons.sign-in")}
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  <Grid container alignItems={"center"}>
                    <Grid item xs={6}>
                      <Grid container alignItems={"center"} columnGap={0.5}>
                        <Checkbox sx={{ p: 0, color: Colors?.primary }} />
                        <PageDisplay1>
                          {t("common.texts.remember-me")}
                        </PageDisplay1>
                      </Grid>
                    </Grid>
                    <Grid item xs={6} sx={{ textAlign: "right" }}>
                      <PageDisplay1>{t("common.texts.need-help")}</PageDisplay1>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container rowGap={1}>
            <Grid item xs={12}>
              <PageSubtitle1 style={{ color: "#737373" }}>
                {t("common.texts.new-to-netflix")}
                <Link sx={{ ml: 0.5, color: Colors?.common?.white }} href="/">
                  {t("common.texts.sign-up-now")}
                </Link>
              </PageSubtitle1>
            </Grid>
            <Grid item xs={12}>
              <PageDisplay1 style={{ color: "#737373" }}>
                {t("common.texts.re-captcha")}
                <Link href="#" sx={{ ml: 0.5 }}>
                  {t("common.texts.learn-more")}
                </Link>
              </PageDisplay1>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
}

export default SignIn;
