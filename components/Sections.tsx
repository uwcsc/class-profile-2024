import { PageRoutes } from "@/data/routes";
import Link from "next/link";
import React from "react";

import styles from "./Sections.module.css";

interface SectionsProps {
  /* Whether to display the "Sections" title and separator that appears on the left. */
  showHeader?: boolean;
  /* Width of the entire Sections, in px. */
  width?: number;
  data: PageRoutes;
  className?: string;
}

export function Sections({ data, showHeader = true, className }: SectionsProps) {
  return (
    <section className={className ? `${className} ${styles.sections}` : `${styles.sections}`}>
      {showHeader ? (
        <>
          <h1>Sections</h1>
          <div className={styles.separator} />
        </>
      ) : (
        ""
      )}
      <nav className={styles.nav}>
        <ul>
          {Object.values(data).map((datum, index) => {
            return (
              <li key={`${datum.name}-${index}`}>
                <span className={styles.linkNumber}>{String(index).padStart(2, "0")} </span>
                <span className={styles.linkName}>
                  <Link className={styles.linkName} href={datum.url}>
                    {datum.name}
                  </Link>
                </span>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
