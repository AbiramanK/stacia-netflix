import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  Grid,
  GridProps,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListProps,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import PageDescription1 from "./PageDescription1";
import PageBody1 from "./PageBody1";

const scrollNumberOfItems = 4;

export interface IPageCategoryProps {
  category: CategoryInterface;
  list: MovieInterface[];
  containerStyle?: Pick<GridProps, "sx">["sx"];
  titleContainerStyle?: Pick<GridProps, "sx">["sx"];
  categoryContainerStyle?: Pick<GridProps, "sx">["sx"];
  categoryListStyle?: Pick<ListProps, "sx">["sx"];
  categoryGridContainerStyle?: Pick<GridProps, "sx">["sx"];
}

export function PageCategory(props: IPageCategoryProps) {
  const navigate = useNavigate();

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
    navigate(`/title/${movie?.id}`, {
      state: {
        movie,
      },
    });
  }

  return (
    <Grid container rowGap={1} sx={{ ...props?.containerStyle }}>
      <Grid item sx={{ pl: 5 }}>
        <PageDescription1>{props?.category?.name}</PageDescription1>
      </Grid>
      <Grid item xs={12}>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ ...props?.categoryContainerStyle }}
        >
          <Grid item xs={0.3}>
            <Grid container justifyContent={"flex-start"}>
              <Grid item>
                <IconButton sx={{ p: 0 }} onClick={onLeftArrowClick}>
                  <ArrowBackIos />
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
                ...props?.categoryListStyle,
              }}
            >
              {props?.list?.map((movie, index) => (
                <ListItem key={index} sx={{ p: 0 }}>
                  <ListItemButton
                    autoFocus={index === activeIndex}
                    onClick={() => onTitleClick(movie)}
                  >
                    <Grid
                      container
                      flexDirection={"column"}
                      alignItems={"center"}
                      rowGap={1}
                      sx={{ ...props?.categoryGridContainerStyle }}
                    >
                      <Grid item>
                        <Card>
                          <img
                            src={movie?.thumbnail}
                            alt={movie?.name}
                            style={{ verticalAlign: "middle" }}
                          />
                        </Card>
                      </Grid>
                      <Grid item>
                        <PageBody1>{movie?.name}</PageBody1>
                      </Grid>
                    </Grid>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={0.3}>
            <Grid container justifyContent={"flex-end"}>
              <Grid item>
                <IconButton sx={{ p: 0 }} onClick={onRightArrowClick}>
                  <ArrowForwardIos />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PageCategory;
