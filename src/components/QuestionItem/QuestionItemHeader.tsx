import {QuestionItemTags} from "@/components/QuestionItem/QuestionItemTags.tsx";
import type {Question} from "@/types/question.types.ts";
import styles from './question-item.module.scss';
import {Text} from '@/components/ui';

type QuestionItemHeaderProperties = Pick<Question, 'tags' | 'name'>;

export const QuestionItemHeader = ({name, tags}: QuestionItemHeaderProperties) => {
  return (
    <div className={styles.questionItem__header}>
      <Text className={styles.questionItem__name}>{name}</Text>
      <div className={styles.tags}>
        <QuestionItemTags tags={tags} />
      </div>
    </div>
  );
};
