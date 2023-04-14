import React from "react";
import { Box, List, ListItem } from "@mui/material";
import { useTranslation } from "react-i18next";

import PageTitle from "./PageTitle";
import QuestionAnswerAccordion from "./QuestionAnswerAccordion";

export interface QuestionAnswerInterface {
  question: string;
  answer: Array<string>;
}
export interface IFrequentlyAskedQuestionsProps {
  questionAnswer: QuestionAnswerInterface[];
}

export function FrequentlyAskedQuestions(
  props: IFrequentlyAskedQuestionsProps
) {
  const { t } = useTranslation();

  return (
    <Box>
      <PageTitle>
        {t("pages.landing-page.texts.frequently-asked-questions")}
      </PageTitle>
      <List>
        {props?.questionAnswer?.map((qa, index) => (
          <ListItem sx={{ pl: 0, pr: 0 }} key={index}>
            <QuestionAnswerAccordion
              question={qa.question}
              answer={qa.answer}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default FrequentlyAskedQuestions;
