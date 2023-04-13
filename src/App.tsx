import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "src/i18n/config";
import "src/App.css";

import { LandingPage } from "./screens";
import { Colors } from "./constants/Colors";

function App() {
  const theme = createTheme({
    palette: {
      primary: { main: Colors.primary },
    },
    components: {
      MuiTextField: {
        styleOverrides: {
          root: {
            color: Colors?.primary,
            backgroundColor: "rgba(0,0,0,0.5)",
            borderColor: Colors?.primary,
            "& input:valid + fieldset": {
              borderColor: Colors?.primary,
              opacity: 0.5,
            },
            "& .MuiOutlinedInput-root": {
              color: Colors?.common?.white,
              "&:hover fieldset": {
                borderColor: Colors?.primary,
                opacity: 1,
              },
            },
            "& .MuiInputLabel-root": {
              color: Colors?.primary,
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
    </ThemeProvider>
  );
}

export default App;
