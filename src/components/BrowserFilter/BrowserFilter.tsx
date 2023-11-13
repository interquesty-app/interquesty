import {QuestionTag} from "@/components/QuestionTag";
import filterStore from "@/stores/filterStore.ts";
import {useStore} from "@nanostores/react";
import styles from './browserfilter.module.scss';

export const BrowserFilter = () => {
  const filters = useStore(filterStore.state);

  const tags = <div className={styles.tags}>
    {filters.tags.map(tag =>
      <QuestionTag
        onClick={tag => filterStore.tags.toggle(tag)}
        {...tag}
        key={tag.slug}
        className={styles.tags__item}
      />)}
  </div>;

  return (
    <div className={styles.browserFilter}>
      {tags}
    </div>
  );
};
