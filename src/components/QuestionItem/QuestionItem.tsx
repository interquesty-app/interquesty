import {QuestionReference} from "@/components/QuestionReference";
import {QuestionTag} from "@/components/QuestionTag";
import {Text, } from "@/components/ui";
import filterStore from "@/stores/filterStore.ts";
import type {Question, QuestionTag as IQuestionTag} from "@/types/question.types.ts";
import {clsx} from "clsx";
import {useCallback, useState} from "react";
import styles from './questionitem.module.scss';

interface QuestionItemProperties extends Question {
  className?: string | string[];
}

export const QuestionItem = ({className, name, tags, answer, references}: QuestionItemProperties) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const onTagClick = useCallback((tag: IQuestionTag) => {
    filterStore.tags.toggle(tag);
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
