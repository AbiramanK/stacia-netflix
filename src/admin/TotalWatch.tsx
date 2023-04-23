import React from "react";
import { Link, Typography } from "@mui/material";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Total Watch</Title>
      <Typography component="p" variant="h4">
        2709
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 24 April, 2023
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View Overall
        </Link>
      </div>
    </React.Fragment>
  );
}
