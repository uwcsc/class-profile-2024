import { ReactNode } from "react";

import styles from "./Panel.module.css";

export interface TextboxProps {
  children: ReactNode;
}

export function Panel({ children }: TextboxProps) {
  return <section className={styles.textbox}>{children}</section>;
}
