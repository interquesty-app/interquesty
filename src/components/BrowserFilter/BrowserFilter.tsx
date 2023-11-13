import {QuestionTag} from "@/components/QuestionTag";
import {Input, Text} from "@/components/ui";
import filterStore from "@/stores/filterStore.ts";
import {useStore} from "@nanostores/react";
import type {FormEventHandler} from "react";
import styles from './browserfilter.module.scss';
import * as internalTags from '@/data/tags';

export const BrowserFilter = () => {
  const filters = useStore(filterStore.state);

  const onSearchInput: FormEventHandler<HTMLInputElement> = (event) => {
    const input = event.target as HTMLInputElement;
    filterStore.search.update(input.value);
  }

  const tags = <div className={styles.tags}>
    {filters.tags.map(tag =>
      <QuestionTag
        onClick={tag => filterStore.tags.toggle(tag)}
        {...tag}
        key={tag.slug}
        className={styles.tags__item}
      />)}
  </div>;

  const suggestion = <div className={styles.suggestions}>
    <Text size="sm" className={styles.suggestions__text}>
      Попробуйте следующие теги:
    </Text>
    <ul className={styles.suggestions__list}>
      {
        Object.values(internalTags).map(tags => {
          return Object.values(tags).map(tag => <li><QuestionTag onClick={tag => filterStore.tags.toggle(tag)} key={tag.slug} {...tag} /></li>)
        })
      }
    </ul>
  </div>

  return (
    <div className={styles.browserFilter}>
      <Input placeholder={'Поиск'} value={filters.search} onInput={onSearchInput}  />
      {filters.tags.length > 0 ? tags : suggestion}
    </div>
  );
};
