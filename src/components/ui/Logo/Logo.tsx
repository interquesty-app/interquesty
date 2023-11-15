import filterStore from "@/stores/filterStore.ts";
import summaryStore from "@/stores/summaryStore.ts";
import {Icon} from "@iconify-icon/react";
import {useNavigate} from "react-router-dom";
import styles from './logo.module.scss';

export const Logo = () => {
  const navigate = useNavigate();


  const onLogoClick = () => {
    navigate('/');
    filterStore.search.clear();
    filterStore.tags.clear();
    summaryStore.questions.clear();
  };

  return (
    <div onClick={onLogoClick} className={styles.logo}>
      <Icon icon="fluent-emoji:hatching-chick" />
      <Icon icon="fluent-emoji:front-facing-baby-chick" />
      <Icon icon="fluent-emoji:dodo" />
    </div>
  );
};
