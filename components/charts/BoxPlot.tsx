import { getSetTooltip } from "@/utils/context";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { PropsWithChildren } from "react";

export type BoxPlotProps = {
  points: [number, number, number, number, number, number];
  min?: number;
  max?: number;
  width?: number;
};

export default function BoxPlot({ points, min, max, width = 5 }: BoxPlotProps) {
  const pageWidth = useWindowDimensions().width;
  const setTooltip = getSetTooltip();

  const [realmin, q1, med, q3, realmax, mean] = points;
  min ??= realmin;
  max ??= realmax;

  const rx = points.map((point) => ((point - min) / (max - min)) * width * 20);
  const [rminx, rq1x, rmedx, rq3x, rmaxx, rmeanx] = rx;

  const [minx, q1x, medx, q3x, maxx, meanx] = rx.map((x) => x.toFixed(5));

  return (
    <svg
      viewBox={`-1 -5 ${width * 20 + 2} 16`}
      style={{ width: `calc(min(${(pageWidth >= 768 ? 3 : 6) * width}vw, 512px))` }}
      onMouseEnter={() =>
        setTooltip(`Range: [${realmin}, ${realmax}] = ${Math.round((realmax - realmin) * 100) / 100}\nQ1: ${q1} / M: ${med} / Q3: ${q3}\nMean: ${mean}`)
      }
      onMouseLeave={() => setTooltip("")}>
      <path d={`M ${minx} 0 L ${minx} 10 M ${minx} 5 L ${maxx} 5 M ${maxx} 0 L ${maxx} 10`} className="text-primary stroke-current" />
      <path d={`M ${q1x} 0 H ${q3x} V 10 H ${q1x} Z`} className="text-primary stroke-current fill-chart-color-4" />
      <path d={`M ${medx} 0 L ${medx} 10`} className="text-primary stroke-current" />
      <path
        d={`M ${(rmeanx - 3).toFixed(5)} -4 L ${(rmeanx + 3).toFixed(5)} -4 L ${meanx} -1 Z`}
        className="text-transparent stroke-current fill-chart-color-5"
      />
    </svg>
  );
}

export function WithBoxPlot({ children, ...props }: PropsWithChildren<BoxPlotProps>) {
  return (
    <div className="flex flex-col items-center gap-12">
      {children}
      <BoxPlot {...props} />
    </div>
  );
}
