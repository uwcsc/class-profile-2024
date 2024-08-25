import React, { useState, useEffect } from "react";

import styles from "./ComponentSwitcher.module.css";

type ComponentSwitcherProps = {
  buttonList: string[];
  graphList: React.ReactNode[];
};

export function ComponentSwitcher({ buttonList, graphList }: ComponentSwitcherProps) {
  const [selectedButton, setSelectedButton] = useState(buttonList[0]);
  const [currentGraph, setCurrentGraph] = useState(graphList[0]);
  const [currentGraphNumber, setCurrentGraphNumber] = useState(0);

  const handleSwitch = (buttonName: string) => {
    const graphIndex = buttonList.indexOf(buttonName);
    setSelectedButton(buttonName);
    setCurrentGraph(graphList[graphIndex]);
    setCurrentGraphNumber(graphIndex);
  };

  useEffect(() => {
    setCurrentGraph(graphList[currentGraphNumber]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [graphList]);

  return (
    <div>
      <div>{currentGraph}</div>
      <div className={styles.btnContainer}>
        {buttonList.map((buttonName, idx) => (
          // we may also apply style if currently selected button === buttonName
          <button key={idx} className={`${styles.btn} ${selectedButton === buttonName ? styles.selectedBtn : ""}`} onClick={() => handleSwitch(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
}
