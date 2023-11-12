import {QuestionItem} from "@/components/QuestionItem";
import type {Question} from "@/types/question.types.ts";
import {clsx} from 'clsx';
import styles from './questionlist.module.scss';

interface QuestionListProperties {
  list: Question[];
  className?: string | string[];
}

export const QuestionList = ({className, list}: QuestionListProperties) => {
  return (
    <ul className={clsx(styles.questionlist, className)}>
      {list.map((item, index) =>
        <li key={index} className={styles.questionlist__item}>
          <QuestionItem {...item} />
        </li>
      )}
    </ul>
  );
};
