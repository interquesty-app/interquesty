import {SectionList} from "@/components/SectionList/SectionList.tsx";
import {clsx} from "clsx";
import styles from './homepage.module.scss';
import sections from "@/data/sections.ts";

export const HomePage = () => {
  return (
    <div className={styles.homepage}>
      <div className={styles.homepage__title}>
        <span className={clsx(styles.homepage__text, styles.homepage__text_gradient)}>Inter</span>
        <span className={clsx(styles.homepage__text, styles.homepage__text_invisible)}>view</span>
        &nbsp;
        <span className={clsx(styles.homepage__text, styles.homepage__text_gradient)}>Quest</span>
        <span className={clsx(styles.homepage__text, styles.homepage__text_invisible)}>ion</span>
      </div>
      <SectionList className={styles.homepage__sections} list={sections} />

      <div className={styles.homepage__description}>
        Interquest предоставляет собеседующему огромный выбор вопросов для интервью. После того как собеседование будет окончено -
        собеседующий может отправить кандидату список вопросов, который ему ранее задавали для дальнейшего изучение/анализов
        ответа.
      </div>
    </div>
  );
};
