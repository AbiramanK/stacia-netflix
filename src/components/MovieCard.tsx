import React, { useState } from "react";
import {
  Grid,
  Card,
  GridProps,
  CardProps,
  ButtonBase,
  Tooltip,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import PageBody1 from "./PageBody1";

export interface IMovieCardProps {
  image: string;
  title?: string;
  gridContainerStyle?: Pick<GridProps, "sx">["sx"];
  imageGridStyle?: Pick<GridProps, "sx">["sx"];
  imageCardStyle?: Pick<CardProps, "sx">["sx"];
  imageStyle?: React.CSSProperties;
  selectable?: boolean;
  selected?: boolean;
}

export function MovieCard(props: IMovieCardProps) {
  const [selected, setSelected] = useState<boolean>(props?.selected! ?? false);

  function OnToggleCard() {
    setSelected((state) => !state);
  }

  return (
    <ButtonBase onClick={OnToggleCard}>
      <Grid
        container
        flexDirection={"column"}
        alignItems={"center"}
        rowGap={1}
        sx={{
          p: 1,
          ...props?.gridContainerStyle,
        }}
      >
        <Grid
          item
          sx={{
            position: "relative",
            ...props?.imageGridStyle,
          }}
          xs={12}
        >
          <Card sx={{ ...props?.imageCardStyle }}>
            <img
              src={props?.image}
              alt={props?.title}
              style={{
                verticalAlign: "middle",
                width: 250,
                ...props?.imageStyle,
              }}
            />
            {props?.selectable && selected && (
              <CheckBoxIcon
                color="primary"
                sx={{
                  position: "absolute",
                  right: -10,
                  top: -8,
                }}
              />
            )}
          </Card>
        </Grid>
        {props?.title! && (
          <Tooltip title={props?.title} placement="top">
            <Grid item>
              <PageBody1 numberOfLines={1}>{props?.title}</PageBody1>
            </Grid>
          </Tooltip>
        )}
      </Grid>
    </ButtonBase>
  );
}

export default MovieCard;
