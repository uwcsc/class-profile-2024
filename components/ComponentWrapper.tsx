import React from "react";

import styles from "./ComponentWrapper.module.css";

type AlignOption = "left" | "center" | "right";

type ComponentWrapperProps = {
  children: React.ReactNode;
  heading: string;
  bodyText?: React.ReactNode;
  align?: AlignOption;
  noBackground?: boolean;
  wordCloud?: boolean;
};

export function ComponentWrapper({ heading, bodyText, children, align = "left", noBackground = false, wordCloud = false }: ComponentWrapperProps) {
  const alignClasses: { [key in AlignOption]: string } = {
    left: styles.wrapperLeft,
    center: styles.wrapperCenter,
    right: styles.wrapperRight,
  };

  return (
    <div
      className={`
      ${alignClasses[align]} 
      ${noBackground ? (wordCloud ? styles.noBackgroundCloud : styles.noBackground) : wordCloud ? styles.withBackgroundCloud : styles.withBackground}
      ${bodyText ? "" : styles.wrapperNoBodyText}
      `}>
      <div className={`${styles.internalWrapper} ${styles.textWrapper}`}>
        <h3>{heading}</h3>
        {bodyText ? typeof bodyText === "string" ? <p>{bodyText}</p> : bodyText : null}
      </div>
      <div className={`${styles.internalWrapper} ${styles.horizontalScrollOnMobile}`}>{children}</div>
    </div>
  );
}
