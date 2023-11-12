import {QuestionList} from "@/components/QuestionList/QuestionList.tsx";
import {Title} from "@/components/ui/Title/Title.tsx";
import type {QuestionModule, QuestionSection} from "@/types/question.types.ts";
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from './browserpage.module.scss';

export const BrowserPage = () => {
  const path = useLocation();
  const currentCollection = path.pathname.split('/').at(-1);
  const [sections, setSections] = useState<QuestionSection[]>([]);

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

  const questionList = sections.map((section, index) =>
    <div className={styles.browserpage__questions} key={index}>
      <Title>{section.title}</Title>
      <QuestionList className={styles.browserpage__collection} list={section.collection} />
    </div>
  );

  return (
    <div className={styles.browserpage}>
      {questionList}
    </div>
  );
};
