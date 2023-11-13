import {BrowserFilter} from "@/components/BrowserFilter/BrowserFilter.tsx";
import {QuestionList} from "@/components/QuestionList/QuestionList.tsx";
import {Title} from "@/components/ui/Title/Title.tsx";
import filterStore from "@/stores/filterStore.ts";
import type {QuestionModule, QuestionSection} from "@/types/question.types.ts";
import {useStore} from "@nanostores/react";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from './browserpage.module.scss';

export const BrowserPage = () => {
  const path = useLocation();
  const currentCollection = path.pathname.split('/').at(-1);
  const [sections, setSections] = useState<QuestionSection[]>([]);
  const filters = useStore(filterStore.state);

  useEffect(() => {
    const fetchSections = async () =>
      import(`../../data/questions/${currentCollection}/index.ts`);

    const transformSectionModule = async (module: QuestionModule) => {
      return module.default;
    };

    fetchSections()
      .then(transformSectionModule)
      .then(collection => {
        setSections(collection);
      });
  }, []);

  const filteredSections = sections.map(section => {
    const collection = section.collection
      .filter(question => {
        const questionTags = question.tags?.map(item => item.slug);
        return question.name.includes(filters.search)
          && filters.tags.every(tag => questionTags?.includes(tag.slug));
      });

    return {
      ...section,
      collection
    };
  });

  const questionList = filteredSections.map((section, index) => (
    section.collection.length > 0 && <div className={styles.browserpage__questions} key={index}>
      <Title>{section.title}</Title>
      <QuestionList className={styles.browserpage__collection} list={section.collection} />
    </div>
  ));

  return (
    <div className={styles.browserpage}>
      <BrowserFilter />
      {questionList}
    </div>
  );
};
