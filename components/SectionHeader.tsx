import { GooseAndMoon } from "./GooseAndMoon";
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <>
      <GooseAndMoon />
      <div className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        {subtitle && <h5 className={styles.subTitle}>{subtitle}</h5>}
      </div>
    </>
  );
}
