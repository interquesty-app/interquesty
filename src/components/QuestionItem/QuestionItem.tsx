import {QuestionReference} from "@/components/QuestionReference";
import {QuestionTag} from "@/components/QuestionTag";
import {Button, Text,} from "@/components/ui";
import filterStore from "@/stores/filterStore.ts";
import summaryStore from "@/stores/summaryStore.ts";
import type {Question, QuestionTag as IQuestionTag} from "@/types/question.types.ts";
import {Icon} from "@iconify-icon/react";
import {useStore} from "@nanostores/react";
import {clsx} from "clsx";
import {type MouseEventHandler, useCallback, useState} from "react";
import styles from './questionitem.module.scss';

interface QuestionItemProperties extends Question {
  className?: string | string[];
  noSummary?: boolean;
}

export const QuestionItem = ({className, name, tags, answer, references, slug, similars, noSummary}: QuestionItemProperties) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const summary = useStore(summaryStore.state);
  const isQuestionInSummary = summary.questions.findIndex(question => question.slug === slug) !== -1;

  const onTagClick = useCallback((tag: IQuestionTag) => {
    filterStore.tags.toggle(tag);
  }, []);

  const onSummaryButtonClick = useCallback<MouseEventHandler<HTMLButtonElement>>((event) => {
    event.stopPropagation();

    summaryStore.questions.toggle({
      slug,
      tags,
      answer,
      name,
      references,
      similars,
    });
  }, []);

  const tagsList = tags?.map((tag, index) =>
    <QuestionTag onClick={onTagClick} key={index} {...tag} />
  );

  const answerDescription = isExpanded && (
    <div className={styles.answer}>
      <Text className={styles.answer__title}>
        Краткое описание:
      </Text>
      {answer.map((text, index) =>
        <div key={index} className={styles.answer__line}>{text}</div>
      )}
    </div>
  );

  const referenceList = references?.map((item, index) =>
    <QuestionReference key={index} link={item.link} title={item.name} />
  );

  return (
    <div onClick={() => setIsExpanded(!isExpanded)} className={clsx(styles.questionitem, className)}>
      {
        !noSummary &&
          <div className={clsx(styles.checkbox, {[styles.checkbox_active]: isQuestionInSummary})}>
            <Button
              onClick={onSummaryButtonClick}
              className={clsx(styles.checkbox__button, {[styles.checkbox__button_active]: isQuestionInSummary})}
            >
              <Icon icon="mdi:checkbox-marked-circle-outline" />
            </Button>
          </div>
      }
      <div className={styles.questionitem__header}>
        <Text className={styles.questionitem__name}>{name}</Text>
        <div className={styles.tags}>
          {tagsList}
        </div>
      </div>

      {/* Answer */}
      {answerDescription}

      <div className={clsx(styles.references, {[styles.references_active]: isExpanded})}>
        {referenceList}
      </div>
    </div>
  );
};
