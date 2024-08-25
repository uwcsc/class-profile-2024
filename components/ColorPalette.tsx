import React from "react";
import { Color } from "@/utils/Color";

import styles from "./ColorPalette.module.css";

export function ColorPalette() {
  return (
    <>
      <h2>Color Palette</h2>
      <div className={styles.wrapper}>
        {Object.entries(Color).map(([colorName, colorCSSName]) => (
          <div key={colorName} className={styles.item}>
            <div className={styles.box} style={{ backgroundColor: colorCSSName }} key={colorName} />
            <span>{colorName}</span>
          </div>
        ))}
      </div>
    </>
  );
}
