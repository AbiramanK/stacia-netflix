import React from "react";
import { Box } from "@mui/material";

export interface IPageVideoImagePileInProps {
  videoSrc: string;
  imageSrc: string;
  imageAlt: string;
  videoMaxWidth?: number | string;
  videoMaxHeight?: number | string;
  videoTop?: number;
  videoLeft?: number;
  videoBottom?: number;
  videoRight?: number;
}

export function PageVideoImagePileIn(props: IPageVideoImagePileInProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <video
        autoPlay
        playsInline
        muted
        loop
        style={{
          position: "absolute",
          top: props?.videoTop,
          left: props?.videoLeft,
          bottom: props?.videoBottom,
          right: props?.videoRight,
          zIndex: -1,
          overflow: "hidden",
          width: "100%",
          height: "100%",
          maxWidth: props?.videoMaxWidth,
          maxHeight: props?.videoMaxHeight,
        }}
      >
        <source src={props?.videoSrc} type="video/mp4" />
      </video>
      <img src={props?.imageSrc} alt={props?.imageAlt} />
    </Box>
  );
}

export default PageVideoImagePileIn;
