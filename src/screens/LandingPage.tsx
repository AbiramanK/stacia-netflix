import React from "react";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { Language as LanguageIcon } from "@mui/icons-material";

import { ReactComponent as NetflixIcon } from "src/assets/images/netflix-logo.svg";
import { PageHeader } from "src/components";

export interface ILandingPageProps {}

export function LandingPage(props: ILandingPageProps) {
  function onLanguageChange(
    event: SelectChangeEvent<string>,
    child: React.ReactNode
  ) {}

  return (
    <React.Fragment>
      <Container>
        <Box sx={{ backgroundColor: "white" }}>
          <PageHeader />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default LandingPage;
