import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PageCategory, PageHeader, TitlePage } from "src/components";
import { categories, popularOnNetflix } from "src/constants/data";
import { useAuth } from "src/providers/AuthProvider";
import { shuffleArray } from "src/utilities";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const auth = useAuth();

  const [titlePage, setTitlePage] = useState<MovieInterface>();

  useEffect(() => {
    const random = Math.floor(Math.random() * 13);
    setTitlePage(popularOnNetflix[random]);
  }, []);

  return (
    <React.Fragment>
      {auth?.user?.type === "customer" && (
        <TitlePage
          landingPageHomeContainerProps={{
            backgroundImage: titlePage?.coverPicture?.desktop,
          }}
          title={titlePage?.name!}
          titleImage={titlePage?.titleImage}
          releaseYear={titlePage?.releaseYear!}
          certificate={titlePage?.certificate!}
          duration={titlePage?.duration}
          seasons={titlePage?.numberOfSeasons}
          genre={titlePage?.genre!}
          description={titlePage?.description!}
          starring={titlePage?.starring!}
          creators={titlePage?.creators}
        />
      )}
      {auth?.user?.type === "manager" && (
        <PageHeader
          showAccountMenu={true}
          showAppMenu={true}
          showSignInButton={false}
          showLanguageSwitch={false}
          appIconStyle={{ height: 30 }}
          containerStyle={{
            paddingInline: 4,
            paddingBlock: 1,
            backgroundColor: "rgba(0, 0, 0, 0.8)",
          }}
        />
      )}
      <Paper sx={{ pt: 5, borderRadius: 0 }}>
        {categories?.map((category, index) => (
          <PageCategory
            key={index}
            category={category}
            list={shuffleArray(popularOnNetflix)}
          />
        ))}
      </Paper>
    </React.Fragment>
  );
}

export default Home;
