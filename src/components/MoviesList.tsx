import React, { useState } from "react";
import {
  Grid,
  GridProps,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListProps,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import MovieCard from "./MovieCard";

export interface IMoviesListProps {
  containerStyle?: Pick<GridProps, "sx">["sx"];
  listStyle?: Pick<ListProps, "sx">["sx"];
  gridContainerStyle?: Pick<GridProps, "sx">["sx"];
  scrollNumberOfItems?: number;
  list: MovieInterface[];
  onTitleClick?: (movie: MovieInterface) => void;
}

export function MoviesList(props: IMoviesListProps) {
  const scrollNumberOfItems = props?.scrollNumberOfItems ?? 5;

  const [activeIndex, setActiveIndex] = useState<number>();

  function onLeftArrowClick() {
    setActiveIndex((state) =>
      (state ?? 0) < scrollNumberOfItems
        ? 0
        : (state ?? scrollNumberOfItems) - scrollNumberOfItems
    );
  }
  function onRightArrowClick() {
    const listLength = props?.list?.length;

    setActiveIndex((state) =>
      (state ?? 0) + scrollNumberOfItems > listLength - 1
        ? listLength - 1
        : (state ?? 0) + scrollNumberOfItems
    );
  }
  function onTitleClick(movie: MovieInterface) {
    if (props?.onTitleClick!) {
      props?.onTitleClick(movie);
    }
  }

  return (
    <Grid
      container
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ ...props?.containerStyle }}
    >
      <Grid item xs={0.3}>
        <Grid container justifyContent={"flex-start"}>
          <Grid item>
            <IconButton sx={{ p: 0 }} onClick={onLeftArrowClick}>
              <ArrowBackIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={11.2}>
        <List
          id="category-list-container"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            flexWrap: "nowrap",
            overflowX: "scroll",
            scrollBehavior: "smooth",
            ...props?.listStyle,
          }}
        >
          {props?.list?.map((movie, index) => (
            <ListItem key={index} sx={{ p: 0 }}>
              <ListItemButton
                autoFocus={index === activeIndex}
                onClick={() => onTitleClick(movie)}
                sx={{ p: 1 }}
              >
                <MovieCard image={movie?.thumbnail} title={movie?.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item xs={0.3}>
        <Grid container justifyContent={"flex-end"}>
          <Grid item>
            <IconButton sx={{ p: 0 }} onClick={onRightArrowClick}>
              <ArrowForwardIosIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default MoviesList;
