import {BrowserFilter} from "@/components/BrowserFilter/BrowserFilter.tsx";
import {QuestionList} from "@/components/QuestionList";
import {SummaryFooter} from "@/components/SummaryFooter";
import {Title} from "@/components/ui/Title/Title.tsx";
import filterStore from "@/stores/filterStore.ts";
import summaryStore from "@/stores/summaryStore.ts";
import type {QuestionModule, QuestionSection} from "@/types/question.types.ts";
import {Icon} from "@iconify-icon/react";
import {useStore} from "@nanostores/react";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from './browserpage.module.scss';

export const BrowserPage = () => {
  const path = useLocation();
  const currentCollection = path.pathname.split('/').at(-1);
  const [sections, setSections] = useState<QuestionSection[]>([]);
  const filters = useStore(filterStore.state);
  const summary = useStore(summaryStore.state);

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
        const questionTags = question.tags?.map(item => item.name);
        return question.name.includes(filters.search)
          && filters.tags.every(tag => questionTags?.includes(tag.name));
      });

    return {
      ...section,
      collection
    };
  });

  const questionList = filteredSections.map((section) => (
    section.collection.length > 0 && <div className={styles.questions} key={section.title}>
      <Title className={styles.questions__title}>
        {section.icon && <Icon icon={section?.icon} />}
        {section.title}
      </Title>
      <QuestionList className={styles.browserpage__collection} list={section.collection} />
    </div>
  ));

  return (
    <div className={styles.browserpage}>
      <BrowserFilter />
      {questionList}
      {summary.questions.length > 0 && <SummaryFooter />}
    </div>
  );
};
