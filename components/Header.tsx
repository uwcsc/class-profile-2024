"use client";

import { pageRoutes } from "@/data/routes";
import { basePath } from "@/utils/getBasePath";
import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";
import { Sections } from "./Sections";

export function Header() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [state] = useWindowScroll();
  const verticalPadding = `${0.75 - Math.min(0.5, (state.y ?? 0) / 400)}rem`;

  return (
    <>
      <div className={styles.headerSpacer} />
      <div
        className={isShowingMenu ? styles.backgroundTintShow : styles.backgroundTintHidden}
        onClick={() => {
          setIsShowingMenu(false);
        }}
      />
      <div
        className={styles.headerWrapper}
        style={{
          backgroundColor: `rgb(var(--navbar-background-rgb), ${(state.y ?? 0) / 200})`,
          paddingTop: verticalPadding,
          paddingBottom: verticalPadding,
        }}>
        <h1 className={styles.titleHeader} style={{ fontSize: `${3 - Math.min(0.5, (state.y ?? 0) / 400)}rem` }}>
          <Link href="/">CS 2023</Link>
        </h1>
        <button
          onClick={() => {
            setIsShowingMenu(true);
          }}
          className={styles.menuIcon}>
          <svg className={styles.menuIconSvg} width="50" height="100" viewBox="0 0 144 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="139" y1="5" x2="5.00003" y2="4.99999" />
            <line x1="139" y1="50" x2="5.00003" y2="50" />
            <line x1="139" y1="95" x2="5.00003" y2="95" />
          </svg>
        </button>
      </div>

      <div className={isShowingMenu ? styles.sideBarShown : styles.sideBarHidden}>
        <h1 className={styles.menuHeader}>Sections</h1>
        <div className={styles.lineWrapper}>
          <button
            className={styles.closeMenuButton}
            onClick={() => {
              setIsShowingMenu(false);
            }}>
            <Image src={basePath + "/images/rightArrow.svg"} alt="Right Arrow" className={styles.arrowIcon} width="50" height="50" draggable="false" />
          </button>
        </div>
        <div className={styles.sectionsWrapper}>
          <Sections data={pageRoutes} showHeader={false} />
        </div>
      </div>
    </>
  );
}
