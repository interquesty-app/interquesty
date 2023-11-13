import {QuestionTag} from "@/components/QuestionTag";
import {Text} from "@/components/ui";
import internalTags from "@/data/tags";
import filterStore from "@/stores/filterStore.ts";
import styles from './browserfilter.module.scss';

export const BrowserFilterSuggestions = () => {

  const suggestionList = Object.values(internalTags).map(tag =>
    <li key={`suggestion-tag-${tag.name}`}>
      <QuestionTag
        onClick={tag => filterStore.tags.toggle(tag)}
        {...tag}
      />
    </li>
  );

  return (
    <div className={styles.suggestions}>
      <Text size="sm" className={styles.suggestions__text}>
        Попробуйте следующие теги:
      </Text>
      <ul className={styles.suggestions__list}>
        {suggestionList}
      </ul>
    </div>
  );
};
