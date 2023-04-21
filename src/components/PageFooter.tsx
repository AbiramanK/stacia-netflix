import React from "react";
import { useTranslation } from "react-i18next";
import { Grid, GridProps, Link } from "@mui/material";

import PageBody1 from "./PageBody1";
import { APP_CONTACT_NUMBER } from "src/constants/configs";
import PageMenuList, { PageMenuInterface } from "./PageMenuList";
import LanguageSwitchButton from "./LanguageSwitchButton";
import PageBody2 from "./PageBody2";
import { Colors } from "src/constants/colors";

export interface IPageFooterProps {
  containerStyle?: Pick<GridProps, "sx">["sx"];
}

export function PageFooter(props: IPageFooterProps) {
  const { t } = useTranslation();

  const menu1: PageMenuInterface[] = [
    {
      title: t("pages.landing-page.page-footer.menu1.faq"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu1.media-centre"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu1.ways-to-watch"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu1.cookie-preferences"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu1.speed-test"),
      href: "#",
    },
  ];

  const menu2: PageMenuInterface[] = [
    {
      title: t("pages.landing-page.page-footer.menu2.help-centre"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu2.investor-relations"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu2.terms-of-use"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu2.corporate-information"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu2.legal-notices"),
      href: "#",
    },
  ];

  const menu3: PageMenuInterface[] = [
    {
      title: t("pages.landing-page.page-footer.menu3.account"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu3.jobs"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu3.privacy"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu3.contact-us"),
      href: "#",
    },
    {
      title: t("pages.landing-page.page-footer.menu3.only-on-netflix"),
      href: "#",
    },
  ];

  return (
    <Grid container rowGap={4} sx={{ ...props?.containerStyle }}>
      <Grid item xs={12}>
        <PageBody1>
          <>
            {t("pages.landing-page.texts.questions")}
            {` `}
            <Link
              href={`tel:${APP_CONTACT_NUMBER}`}
              sx={{ color: Colors?.common?.white }}
            >
              {APP_CONTACT_NUMBER}
            </Link>
          </>
        </PageBody1>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4}>
            <PageMenuList menus={menu1} />
          </Grid>
          <Grid item xs={4}>
            <PageMenuList menus={menu2} />
          </Grid>
          <Grid item xs={4}>
            <PageMenuList menus={menu3} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1.5}>
        <LanguageSwitchButton />
      </Grid>
      <Grid item xs={12}>
        <PageBody2>{t("pages.landing-page.texts.netflix-india")}</PageBody2>
      </Grid>
    </Grid>
  );
}

export default PageFooter;
