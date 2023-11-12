import {clsx} from "clsx";
import styles from './questiontag.module.scss';
import {Text} from "@/components/ui";
import type {QuestionTag as IQuestionTag} from "@/types/question.types.ts";

interface QuestionTagProperties extends IQuestionTag {
  className?: string | string[];
}

const getTagStyle = (color: IQuestionTag['color']) => {
  return {
    backgroundColor: color,
  }
};

export const QuestionTag = ({className, name, color}: QuestionTagProperties) => {
  const tagStyle = getTagStyle(color);

  return (
    <div style={tagStyle} className={clsx(styles.questiontag, className)}>
      <Text className={styles.questiontag__text} size='sm'>
        {`#${name}`}
      </Text>
    </div>
  );
};
