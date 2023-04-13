import React from "react";
import { Divider } from "@mui/material";

export interface IPageSectionDividerProps {
  orientation?: "horizontal" | "vertical";
  children?: string | React.ReactNode;
}

export function PageSectionDivider(props: IPageSectionDividerProps) {
  return (
    <Divider
      sx={
        props?.children
          ? {
              color: "rgb(255, 255, 255, 0.6)",
              backgroundColor: "rgb(35,35,35)",
              "&::before": {
                borderTopColor: "rgb(255, 255, 255, 0.6)",
              },
              "&::after": {
                borderTopColor: "rgb(255, 255, 255, 0.6)",
              },
            }
          : {
              minHeight: "0.6rem",
              backgroundColor: "rgb(35,35,35)",
            }
      }
      orientation={props?.orientation}
    >
      {props?.children}
    </Divider>
  );
}
export default PageSectionDivider;
