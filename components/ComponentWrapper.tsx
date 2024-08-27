import React from "react";

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
    left: "self-start ml-0 my-[calc(65rem/16)] lg:rounded-tr-[calc(200rem/16)] lg:rounded-br-[calc(200rem/16)] lg:pl-[calc(50rem/16)]",
    center: "self-center text-center gap-[calc(25rem/16)] mb-[calc(45rem/16)] flex-col",
    right: "self-end mr-0 my-[calc(65rem/16)] lg:rounded-tl-[calc(200rem/16)] lg:rounded-bl-[calc(200rem/16)] lg:pr-[calc(50rem/16)] flex-row-reverse",
  };

  const headerColorClass = noBackground
    ? wordCloud
      ? "text-chart-yellow-heavy"
      : "text-chart-pink-heavy"
    : wordCloud
      ? "text-chart-green-heavy"
      : "text-chart-blue-heavy";

  return (
    <div
      className={`flex flex-col lg:flex-row px-[calc(50rem/16)] py-[calc(40rem/16)] w-full lg:w-[88%] ${alignClasses[align]} ${noBackground ? "" : "bg-dark-blue"} ${bodyText ? "" : "flex-col text-center"}`}>
      <div className="m-auto shrink-[1000] min-w-[200px]">
        <h3 className={headerColorClass}>{heading}</h3>
        {bodyText ? typeof bodyText === "string" ? <p>{bodyText}</p> : bodyText : null}
      </div>
      <div className="m-auto overflow-x-scroll">{children}</div>
    </div>
  );
}
