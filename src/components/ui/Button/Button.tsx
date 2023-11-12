import type {Size} from "@/types/theme.types";
import {clsx} from "clsx";
import type {PropsWithChildren} from "react";
import styles from './button.module.scss';

interface ButtonProperties {
  className?: string | string[];
  size?: Size;
}
export const Button = ({className, children, size = 'md'}: PropsWithChildren<ButtonProperties>) => {
  return (
    <button className={clsx(className, styles.button, styles[`button_${size}`])}>
      {children}
    </button>
  );
};
