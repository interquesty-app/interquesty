import {Link} from "react-router-dom";
import styles from './logo.module.scss';

export const Logo = () => {
  return (
    <Link to="/" className={styles.logo}>
      Interquest
    </Link>
  );
};
