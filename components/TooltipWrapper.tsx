import localPoint from "@visx/event/lib/localPoint";
import { Point } from "@visx/point";
import { Tooltip } from "@visx/tooltip";
import React from "react";

import { lexend } from "@/utils/fonts";

type TooltipWrapperProps = {
  top?: number;
  left?: number;
  className?: string;
  header?: string;
  children?: React.ReactNode;
};

// Finds the SVG Element which is the outmost from element (highest parent of element which is svg)

function getOutmostSVG(element: Element): SVGElement | undefined {
  let rootSVG: HTMLElement | Element | null = element;
  let current: HTMLElement | Element | null = element;

  while (current) {
    console.log(current);
    if (current.tagName == "svg") {
      rootSVG = current;
    }
    current = current.parentElement;
  }

  return rootSVG as SVGElement;
}

const TooltipWrapper = ({ top, left, className, header, children }: TooltipWrapperProps) => {
  return (
    <Tooltip
      top={top}
      left={left}
      className={`${lexend} top-0 left-0 absolute bg-white pointer-events-none p-[calc(10rem/16)] rounded-[calc(10rem/16)] text-sm ${className ?? ""}`}
      unstyled
      applyPositionStyle>
      {header ? <span className="m-0 text-lg font-bold text-black">{header}</span> : null}
      {children ? <div className="text-black mt-[calc(5rem/16)] text-md">{children}</div> : null}
    </Tooltip>
  );
};

function getTooltipPosition(e: React.MouseEvent<SVGTextElement | SVGPathElement | SVGLineElement, MouseEvent>) {
  // ownerSVGElement is given by visx docs but not recognized by typescript
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const eventElement = e.target.ownerSVGElement as Element;
  const eventSvgCoords = localPoint(eventElement, e) as Point;
  const rootSVG: SVGElement | undefined = getOutmostSVG(eventElement);

  if (!rootSVG) {
    console.error("Failed to find parent SVG for tooltip!");
    return { x: 0, y: 0 };
  }
  const rootSVGLeft = rootSVG.getBoundingClientRect().left ?? 0;
  const parentDivLeft = rootSVG.parentElement?.getBoundingClientRect().left ?? 0;

  // visx localPoint does not account for the horizontal shift due to centering of the parent element,
  // so manually add any shift from that
  const alignmentOffset = rootSVGLeft - parentDivLeft;

  return {
    x: eventSvgCoords.x + alignmentOffset,
    y: eventSvgCoords.y,
  };
}

export { getTooltipPosition, TooltipWrapper };
