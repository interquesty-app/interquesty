import {QuestionList} from "@/components/QuestionList/QuestionList.tsx";
import summaryStore from "@/stores/summaryStore.ts";
import {Question, QuestionModule} from "@/types/question.types.ts";
import {useStore} from "@nanostores/react";
import {useCallback, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import styles from './summary-page.module.scss';

export const SummaryPage = () => {
  const summary = useStore(summaryStore.state);
  const location = useLocation();
  const [questions, setQuestions] = useState<Question[]>([]);
  const parametersGetter = new URLSearchParams(location.search);
  const parameters = {
    section: parametersGetter.get('section'),
    slugs: parametersGetter.get('slugs'),
  };


  const fetchQuestions = useCallback(async () => {
    if (summary.questions.length > 0) {
      return [];
    }

    const fetchSections = async () =>
      import(`../../data/questions/${parameters.section}/index.ts`);

    const transformSectionModule = async (module: QuestionModule) => {
      return module.default;
    };

    return fetchSections()
      .then(transformSectionModule)
      .then((sections) => {
        const questions: Question[] = [];

        for (const section of sections) {
          questions.push(...section.collection);
        }

        return questions.filter(question => parameters.slugs?.includes(question.slug));
      });
  }, []);

  useEffect(() => {
    fetchQuestions().then(collection => {
      setQuestions(collection || []);
    });
  }, []);
  return (
    <div className={styles.summaryPage}>
      <QuestionList noSummary className={styles.browserpage__collection} list={summary.questions.length > 0 ? summary.questions : questions} />
    </div>
  );
};