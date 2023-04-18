import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";

import { PageCategory, TitlePage } from "src/components";
import { categories, popularOnNetflix } from "src/constants/data";
import { shuffleArray } from "src/utilities";

export interface IHomeProps {}

export function Home(props: IHomeProps) {
  const [titlePage, setTitlePage] = useState<MovieInterface>();

  useEffect(() => {
    const random = Math.floor(Math.random() * 13);
    setTitlePage(popularOnNetflix[random]);
  }, []);

  return (
    <React.Fragment>
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

      <Paper sx={{ pt: 5 }}>
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
