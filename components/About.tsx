import React from "react";

import styles from "./About.module.css";

export function About() {
  return (
    <div className={styles.aboutWrapper} id="about">
      <AngleDecoration isBottom={false} />
      <section className={styles.about}>
        <aside>
          <h1>About the Programs</h1>
          <h4>Getting an overview of the CS programs in UW</h4>
        </aside>
        <article>
          <h4>Computer Science</h4>
          <p>
            Computer Science (CS) is commonly offered by the Faculty of Mathematics as a co-op program, with students usually attending 8 school and 6 co-op
            terms in their degree. However, CS is more flexible than the other two programs because of the ability to choose from a wider range and number of
            electives, to take terms off, and to change their academic schedules to fit their needs.
          </p>
          <h4>Computing and Financial Management</h4>
          <p>
            Computing and Financial Management (CFM) combines the core CS courses with electives from areas such as accounting, economics, and financial
            management. This is a joint offering by the Faculty of Mathematics and the School of Accounting and Finance. The program is offered only as a co-op
            program with 6 co-op terms.{" "}
          </p>
          <h4>Computer Science/Business Administration</h4>
          <p>
            Joint with Wilfrid Laurier University, the Business Administration and Computer Science Double Degree (CS/BBA) is an exclusive offering that allows
            students to gain experience in CS as well as many subfields of business. There are 10 school terms and either 4 or 5 co-op terms in the usual
            schedule, so it&apos;s a longer degree with more academic terms than CS or CFM.
          </p>
        </article>
      </section>
      <AngleDecoration isBottom />
    </div>
  );
}

interface AngleDecorationProps {
  isBottom: boolean;
}

function AngleDecoration({ isBottom }: AngleDecorationProps) {
  return (
    <svg viewBox="0 0 100 100" className={isBottom ? `${styles.left} ${styles.angle}` : styles.angle}>
      <path d="M100,2 L2,2 L2,100" fill="none" strokeWidth="10" className={styles.anglePath} />
    </svg>
  );
}
