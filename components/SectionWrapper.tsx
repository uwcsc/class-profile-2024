import React from "react";

import styles from "./SectionWrapper.module.css";

type SectionWrapperProps = {
  title: string;
};

export function SectionWrapper({ title }: SectionWrapperProps) {
  return (
    <div className={styles.sectionWrapper}>
      <h2>{title}</h2>
    </div>
  );
}
