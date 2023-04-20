import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import {
  AppBar,
  Dialog,
  Grid,
  GridProps,
  IconButton,
  List,
  ListItem,
  ListProps,
  Toolbar,
  Typography,
  Slide,
  Autocomplete,
  TextField,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import AddIcon from "@mui/icons-material/Add";
import CloseIcon from "@mui/icons-material/Close";

import PageDescription1 from "./PageDescription1";
import MoviesList from "./MoviesList";
import MovieCard from "./MovieCard";
import { categories } from "src/constants/data";

const scrollNumberOfItems = 5;

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export interface IPageCategoryProps {
  category: CategoryInterface;
  list: MovieInterface[];
  containerStyle?: Pick<GridProps, "sx">["sx"];
  titleContainerStyle?: Pick<GridProps, "sx">["sx"];
  categoryContainerStyle?: Pick<GridProps, "sx">["sx"];
  categoryListStyle?: Pick<ListProps, "sx">["sx"];
  categoryGridContainerStyle?: Pick<GridProps, "sx">["sx"];
  onAddClick?: (category: CategoryInterface) => void;
}

export function PageCategory(props: IPageCategoryProps) {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [openOpDialog, setOpenOpDialog] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryInterface>(
    categories[0]
  );

  function onAddClick(category: CategoryInterface) {
    if (props?.onAddClick!) {
      props?.onAddClick(props?.category);
    } else {
      setSelectedCategory(category);
      onOpDialogOpen();
    }
  }

  function onTitleClick(movie: MovieInterface) {
    navigate(`/title/${movie?.id}`, {
      state: {
        movie,
      },
    });
  }

  function onOpDialogOpen() {
    setOpenOpDialog(true);
  }

  function onOpDialogClose() {
    setOpenOpDialog(false);
  }

  return (
    <Grid container rowGap={1} sx={{ ...props?.containerStyle }}>
      <Grid item xs={12} sx={{ paddingInline: 5 }}>
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <PageDescription1>{props?.category?.name}</PageDescription1>
          </Grid>
          <Grid item>
            <IconButton onClick={() => onAddClick(props?.category)}>
              <AddIcon sx={{ fontSize: 28 }} />
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <MoviesList
          containerStyle={props?.categoryContainerStyle}
          listStyle={props?.categoryListStyle}
          gridContainerStyle={props?.categoryGridContainerStyle}
          scrollNumberOfItems={scrollNumberOfItems}
          list={props?.list}
          onTitleClick={onTitleClick}
        />
      </Grid>
      <Dialog
        fullScreen
        open={openOpDialog}
        onClose={onOpDialogClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Movies
            </Typography>

            <IconButton
              edge="end"
              color="inherit"
              onClick={onOpDialogClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Toolbar>
        </AppBar>
        <Autocomplete
          disablePortal
          id="search-box"
          options={categories}
          getOptionLabel={(option) => option?.name}
          value={selectedCategory}
          sx={{
            width: 300,
            mt: 3,
            ml: 6,
          }}
          size={"medium"}
          renderInput={(params) => (
            <TextField {...params} label={t("common.inputs.category")} />
          )}
        />
        <List
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            rowGap: 2,
            mt: 2,
          }}
        >
          {props?.list?.map((movie, index) => (
            <ListItem key={index} sx={{ p: 0, width: 285 }}>
              <MovieCard
                image={movie?.thumbnail}
                title={movie?.name}
                selectable
                selected
              />
            </ListItem>
          ))}
        </List>
      </Dialog>
    </Grid>
  );
}

export default PageCategory;
