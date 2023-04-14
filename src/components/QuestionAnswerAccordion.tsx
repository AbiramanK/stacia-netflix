import React, { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  createTheme,
  ThemeProvider,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import PageDescription1 from "./PageDescription1";
import { Colors } from "src/constants/Colors";
import { deepmerge } from "@mui/utils";

export interface IQuestionAnswerAccordionProps {
  question: string;
  answer: Array<string>;
}

export function QuestionAnswerAccordion(props: IQuestionAnswerAccordionProps) {
  const outerTheme = useTheme();
  const innerTheme = createTheme({
    components: {
      MuiAccordion: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              margin: 0,
            },
          },
        },
      },
      MuiAccordionSummary: {
        styleOverrides: {
          root: {
            "&.Mui-expanded": {
              borderBottom: "1px solid",
            },
          },
          expandIconWrapper: {
            "&.Mui-expanded": {
              transform: "rotate(45deg)",
            },
          },
        },
      },
    },
  });

  const theme = deepmerge(innerTheme, outerTheme);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function onExpandToggle(
    event: React.SyntheticEvent<Element, Event>,
    expanded: boolean
  ) {
    setIsExpanded((expand) => !expand);
  }

  return (
    <ThemeProvider theme={theme}>
      <Accordion
        expanded={isExpanded}
        sx={{
          backgroundColor: "rgba(19, 33, 68, 1)",
          padding: "1rem",
        }}
        onChange={onExpandToggle}
      >
        <AccordionSummary
          expandIcon={
            <AddIcon
              sx={{
                color: Colors?.common?.white,
                fontSize: 54,
              }}
            />
          }
        >
          <PageDescription1>{props?.question}</PageDescription1>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            paddingBlock: "1.5rem",
            rowGap: 3,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {props?.answer?.map((ans, index) => (
            <PageDescription1 key={index}>{ans}</PageDescription1>
          ))}
        </AccordionDetails>
      </Accordion>
    </ThemeProvider>
  );
}

export default QuestionAnswerAccordion;
