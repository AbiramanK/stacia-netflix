import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "src/i18n/config";
import "src/App.css";

import { LandingPage } from "./screens";
import { PRIMARY } from "./constants/Colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: PRIMARY },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
