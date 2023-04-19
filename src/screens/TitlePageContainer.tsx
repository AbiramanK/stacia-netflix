import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import { PageNotFound, TitlePage } from "src/components";
import { popularOnNetflix } from "src/constants/data";

export interface ITitlePageContainerProps {}

export function TitlePageContainer(props: ITitlePageContainerProps) {
  const params = useParams();
  const location = useLocation();

  const [movie, setMovie] = useState<MovieInterface>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (location?.state?.movie!) {
      setMovie(location?.state?.movie!);
      setLoading(false);
    } else {
      const movieId = parseInt(params?.id!);
      const movie = getMovieById(movieId!);
      if (movie!) {
        setMovie(movie);
      }
      setLoading(false);
    }
  }, [params, location]);

  function getMovieById(id: number): MovieInterface | undefined {
    const currentMovie = popularOnNetflix?.find(
      (movie, index) => movie?.id === id
    );

    return currentMovie;
  }

  return (
    <React.Fragment>
      {movie! && (
        <TitlePage
          title={movie?.name!}
          titleImage={movie?.titleImage}
          description={movie?.description!}
          releaseYear={movie?.releaseYear!}
          certificate={movie?.certificate!}
          duration={movie?.duration}
          seasons={movie?.numberOfSeasons}
          genre={movie?.genre!}
          starring={movie?.starring!}
          creators={movie?.creators}
          landingPageHomeContainerProps={{
            backgroundImage: movie?.coverPicture?.desktop,
          }}
        />
      )}
      {movie === undefined && !loading && <PageNotFound />}
    </React.Fragment>
  );
}

export default TitlePageContainer;
