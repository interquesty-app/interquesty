import {QuestionReference} from "@/components/QuestionReference";
import type {Question} from "@/types/question.types.ts";
import {clsx} from "clsx";
import styles from './question-item.module.scss';

interface QuestionItemReferencesProperties extends Pick<Question, 'references'>{
  isExpanded?: boolean;
}

export const QuestionItemReferences = ({isExpanded, references}: QuestionItemReferencesProperties) => {
  return (
    <div className={clsx(styles.references, {[styles.references_active]: isExpanded})}>
      {
        references?.map((reference, index) =>
          <QuestionReference key={index} {...reference} />
        )
      }
    </div>
  );
};
