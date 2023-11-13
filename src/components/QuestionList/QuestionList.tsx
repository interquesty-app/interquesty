import {QuestionItem} from "@/components/QuestionItem";
import type {Question} from "@/types/question.types.ts";
import {clsx} from 'clsx';
import styles from './questionlist.module.scss';

interface QuestionListProperties {
  list: Question[];
  noSummary?: boolean;
  className?: string | string[];
}

export const QuestionList = ({className, list, noSummary}: QuestionListProperties) => {
  return (
    <ul className={clsx(styles.questionlist, className)}>
      {list.map((item) =>
        <li key={item.slug} className={styles.questionlist__item}>
          <QuestionItem noSummary={noSummary} {...item} />
        </li>
      )}
    </ul>
  );
};
