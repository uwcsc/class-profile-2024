import React, { useEffect, useState } from "react";

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
      <div className="flex items-center gap-2">
        {buttonList.map((buttonName, idx) => (
          // we may also apply style if currently selected button === buttonName
          <button
            key={idx}
            className={`h-[calc(60rem/16)] leading-[calc(30rem/16)] px-[calc(30rem/16)] rounded-full font-semibold whitespace-nowrap border-[calc(3rem/16)] transition-colors ${selectedButton === buttonName ? "bg-dark-pink border-light-pink" : "bg-darker-pink border-pink hover:bg-dark-pink hover:border-light-pink"}`}
            onClick={() => handleSwitch(buttonName)}>
            {buttonName}
          </button>
        ))}
      </div>
    </div>
  );
}
