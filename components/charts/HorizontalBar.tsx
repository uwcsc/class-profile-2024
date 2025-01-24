import { getSetTooltip } from "@/utils/context";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { Fragment, ReactNode, useEffect, useState } from "react";

export type GroupedHorizontalBarProps = {
  data: { category: string; value: number[] }[];
  lines?: number[];
  narrow?: boolean;
  supernarrow?: boolean;
  legend?: string[];
  percents?: "none" | "show" | "only";
  textTransform?: (text: string) => ReactNode;
};

const colorMap: Record<number, string> = {
  1: "bg-chart-color-1",
  2: "bg-chart-color-2",
  3: "bg-chart-color-3",
  4: "bg-chart-color-4",
  5: "bg-chart-color-5",
};

export function GroupedHorizontalBar({
  data,
  lines = [],
  narrow,
  supernarrow,
  legend,
  percents = "show",
  textTransform = (x) => x,
}: GroupedHorizontalBarProps) {
  const setTooltip = getSetTooltip();
  const [hover, setHover] = useState<Record<string, boolean>>();
  const pageWidth = useWindowDimensions().width;

  useEffect(() => {
    for (const key in hover) {
      if (hover[key]) {
        const [x, y] = key.split("/").map((x) => parseInt(x));
        const num = data[x].value[y];
        setTooltip(
          `${supernarrow ? `${data[x].category}: ` : ""}${percents === "only" ? "" : num}${percents === "none" ? "" : percents === "only" ? `${((num / total) * 100).toFixed(2)}%` : ` (${((num / total) * 100).toFixed(2)}%)`}`,
        );
        return;
      }
    }

    setTooltip("");
  }, [hover]);

  const colors: string[] = [];
  for (let i = data[0].value.length - 1; i >= 0; i--) colors.push(colorMap[(-i % 5) + 5]);

  const max = Math.max(...lines, ...data.flatMap(({ value }) => value));
  const total = data.flatMap(({ value }) => value).reduce((x, y) => x + y, 0);

  return (
    <div className="flex flex-col items-center gap-4">
      {legend ? (
        <div className="flex items-center gap-4 flex-wrap">
          {legend.map((text, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${colors[i]}`} />
              {textTransform(text)}
            </div>
          ))}
        </div>
      ) : null}
      <div
        className={`relative grid grid-cols-[max-content_50vw] md:grid-cols-[max-content_25vw] items-center gap-x-4 ${supernarrow ? "gap-y-0.5" : narrow ? "gap-y-2" : "gap-y-4"}`}>
        {data.map(({ category, value }, index) => (
          <Fragment key={category}>
            <div className={`justify-self-end leading-none ${supernarrow ? "text-xs" : ""}`}>{textTransform(category)}</div>
            <div className="flex-col">
              {value.map((num, i) => (
                <div
                  key={i}
                  className={`hover:drop-shadow-[0_0_4px_#fff8] transition ${supernarrow ? "h-2" : narrow ? "h-4" : "h-8"} ${colors[i]}`}
                  style={{ width: `calc(max(${(num / max) * (pageWidth >= 768 ? 25 : 50)}vw, 5px))`, opacity: num === 0 ? 0.4 : 1 }}
                  onMouseEnter={() => setHover((hover) => ({ ...hover, [`${index}/${i}`]: true }))}
                  onMouseLeave={() => setHover((hover) => ({ ...hover, [`${index}/${i}`]: false }))}
                />
              ))}
            </div>
          </Fragment>
        ))}
        <div className={`absolute right-0 top-0 bottom-0 pointer-events-none -z-10 w-[50vw] md:w-[25vw]`}>
          {lines.map((pos) => (
            <div
              key={pos}
              className="absolute h-full border border-white border-dashed"
              style={{ right: `calc(${(1 - pos / max) * (pageWidth >= 768 ? 25 : 50)}vw - 1px)` }}>
              <div className="absolute top-full mt-2" style={{ translate: "-50%" }}>
                {pos}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export type HorizontalBarProps = Omit<GroupedHorizontalBarProps, "data"> & {
  data: { category: string; value: number }[];
};

export default function HorizontalBar({ data, ...rest }: HorizontalBarProps) {
  return <GroupedHorizontalBar data={data.map(({ category, value }) => ({ category, value: [value] }))} {...rest} />;
}
