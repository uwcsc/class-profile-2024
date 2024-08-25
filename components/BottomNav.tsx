import Link from "next/link";

import styles from "./BottomNav.module.css";

interface PagesInfo {
  leftPage?: {
    url: string;
    name: string;
  };
  rightPage?: {
    url: string;
    name: string;
  };
}

export function BottomNav(props: PagesInfo) {
  const onlyRightArrow = props.rightPage && !props.leftPage;
  const onlyLeftArrow = !props.rightPage && props.leftPage;
  return (
    <div
      className={`${styles.container} 
        ${onlyRightArrow ? styles.containerOnlyRightArrow : ""} 
        ${onlyLeftArrow ? styles.containerOnlyLeftArrow : ""}`}>
      {props.leftPage ? (
        <div className={styles.subBox + " " + styles.subBoxLeft}>
          <Link href={props.leftPage.url} scroll>
            <Arrow />
          </Link>
          <Link href={props.leftPage.url} scroll className={styles.item + " " + styles.leftItem}>
            {props.leftPage.name}
          </Link>
        </div>
      ) : null}
      {props.rightPage ? (
        <div className={styles.subBox}>
          <Link href={props.rightPage.url} scroll className={styles.item}>
            {props.rightPage.name}
          </Link>
          <Link href={props.rightPage.url} scroll>
            <Arrow isPointingRight />
          </Link>
        </div>
      ) : null}
    </div>
  );
}

interface ArrowProps {
  isPointingRight?: boolean;
}

function Arrow({ isPointingRight }: ArrowProps) {
  return (
    <svg className={(isPointingRight ? styles.right : "") + " " + styles.arrow}>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path d="M0,0 L0,6 L9,3 z" className={styles.arrowPath} />
        </marker>
      </defs>

      <line
        x1="250"
        y1="10"
        x2="100"
        y2="10" // half of svg height
        strokeWidth="3"
        markerEnd="url(#arrow)"
        className={styles.linePath}
      />
    </svg>
  );
}
