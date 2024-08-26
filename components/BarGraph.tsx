import { Color } from "@/utils/Color";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { bottomTickLabelProps } from "@visx/axis/lib/axis/AxisBottom";
import { leftTickLabelProps } from "@visx/axis/lib/axis/AxisLeft";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Bar } from "@visx/shape";
import { withTooltip } from "@visx/tooltip";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

import { lexend } from "@/utils/fonts";

interface BarGraphProps {
  data: BarGraphData[];
  /** Width of the entire graph, in pixels. */
  width: number;
  /** Height of the entire graph, in pixels. */
  height: number;
  /** Distance between the edge of the graph and the area where the bars are drawn, in pixels. */
  margin: {
    top: number;
    bottom: number;
    left: number;
    right: number;
  };
  className?: string;
  /** Font size of the category axis tick labels, in pixels. Default is 16px. */
  categoryTickLabelSize?: number;
  /** Font size of the value axis tick labels, in pixels. Default is 16px. */
  valueTickLabelSize?: number;
  /** Label text for the category axis. */
  categoryAxisLabel?: string;
  /** Font size of the label for the cateogry axis, in pixels. */
  categoryAxisLabelSize?: number;
  /** Controls the distance between the category axis label and the category axis. */
  categoryAxisLabelOffset?: number;
  /** Label text for the value axis. */
  valueAxisLabel?: string;
  /** Font size of the label for the value axis, in pixels. */
  valueAxisLabelSize?: number;
  /** Controls the distance between the value axis label and the value axis. */
  valueAxisLabelOffset?: number;
  /** Minimum width of the graph. */
  minWidth?: number;
  /** Breakpoint width of graph where alernating labels are displayed. Only for Vertical graphs */
  widthAlternatingLabel?: number;
  /** Space added to the bottom of the graph to show overflowing labels. Only for Vertical graphs */
  alternatingLabelSpace?: number;
  /** Default position of labels in x-axis, in px. */
  defaultLabelDy?: string;
  /** Position of lower labels in x-axis, in px. Only for Vertical graphs */
  lowerLabelDy?: string;
  /** The color of the bars */
  color?: "blue" | "yellow" | "green" | "pink";

  background?: boolean;
}

interface BarGraphData {
  category: string;
  value: number;
}

const DEFAULT_LABEL_SIZE = 16;

type TooltipData = string;

export const BarGraphHorizontal = withTooltip<BarGraphProps, TooltipData>(
  ({
    width,
    height,
    margin,
    data,
    className,
    minWidth = 500,
    categoryTickLabelSize = DEFAULT_LABEL_SIZE,
    valueTickLabelSize = DEFAULT_LABEL_SIZE,
    categoryAxisLabel,
    categoryAxisLabelSize = DEFAULT_LABEL_SIZE,
    categoryAxisLabelOffset = 0,
    valueAxisLabel,
    valueAxisLabelSize = DEFAULT_LABEL_SIZE,
    valueAxisLabelOffset = 0,
    defaultLabelDy = "0",
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    background = false,
    color = background ? "blue" : "pink", // In Block : Blue, Elsewise : Pink
  }) => {
    width = width < minWidth ? minWidth : width; // Ensuring graph's width >= minWidth
    const barPadding = 0.4;

    const categoryMax = height - margin.top - margin.bottom;
    const valueMax = width - margin.left - margin.right;

    const getCategory = (d: BarGraphData) => d.category;
    const getValue = (d: BarGraphData) => d.value;

    const categoryScale = scaleBand({
      range: [0, categoryMax],
      domain: data.map(getCategory),
      padding: barPadding,
    });

    const valueScale = scaleLinear({
      range: [0, valueMax],
      nice: true,
      domain: [0, Math.max(...data.map(getValue))],
    });

    const categoryPoint = (d: BarGraphData) => categoryScale(getCategory(d));
    const valuePoint = (d: BarGraphData) => valueScale(getValue(d));

    return (
      <div>
        <svg className={className} width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <Group>
              {data.map((d, idx) => {
                const barName = `${getCategory(d)}-${idx}`;
                const barWidth = categoryScale.bandwidth();
                const backgroundBarWidth = barWidth / (1 - barPadding);
                return idx % 2 === 0 ? (
                  <Bar
                    className="fill-bar-background"
                    key={`bar-${barName}-background`}
                    x={0}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    y={categoryPoint(d)! - (backgroundBarWidth - barWidth) / 2}
                    width={valueMax}
                    height={backgroundBarWidth}
                  />
                ) : null;
              })}
            </Group>
            <GridColumns scale={valueScale} height={categoryMax} numTicks={5} stroke={Color.label} strokeWidth={4} strokeDasharray="10" strokeLinecap="round" />
            <Group>
              {data.map((d, idx) => {
                const barName = `${getCategory(d)}-${idx}`;
                const barLength = valuePoint(d);
                const barWidth = categoryScale.bandwidth();
                return (
                  <Group key={`bar-${barName}`}>
                    <Bar
                      onMouseMove={(e) => {
                        const tooltipPos = getTooltipPosition(e);
                        showTooltip({
                          tooltipData: getValue(d).toString(),
                          tooltipLeft: tooltipPos.x,
                          tooltipTop: tooltipPos.y,
                        });
                      }}
                      onMouseOut={hideTooltip}
                      className={`chart-${color}`}
                      x={0}
                      y={categoryPoint(d)}
                      width={barLength}
                      height={barWidth}
                    />
                  </Group>
                );
              })}
            </Group>
            <AxisLeft
              scale={categoryScale}
              hideAxisLine
              hideTicks
              tickLabelProps={() => {
                return {
                  ...leftTickLabelProps,
                  className: `fill-primary ${lexend} font-bold`,
                  fontSize: `${categoryTickLabelSize / 16}rem`,
                };
              }}
              label={categoryAxisLabel}
              labelOffset={categoryAxisLabelOffset}
              labelProps={{
                fontSize: `${categoryAxisLabelSize / 16}rem`,
              }}
            />
            <AxisBottom
              scale={valueScale}
              top={categoryMax}
              hideAxisLine
              hideTicks
              numTicks={5}
              tickLabelProps={() => {
                return {
                  ...bottomTickLabelProps,
                  className: `fill-primary ${lexend} font-bold`,
                  dy: defaultLabelDy,
                  fontSize: `${valueTickLabelSize / 16}rem`,
                };
              }}
              label={valueAxisLabel}
              labelOffset={valueAxisLabelOffset}
              labelProps={{
                fontSize: `${valueAxisLabelSize / 16}rem`,
              }}
            />
          </Group>
        </svg>

        {tooltipOpen && <TooltipWrapper top={tooltipTop} left={tooltipLeft} header={tooltipData as string}></TooltipWrapper>}
      </div>
    );
  },
);

export const BarGraphVertical = withTooltip<BarGraphProps, TooltipData>(
  ({
    width,
    height,
    margin,
    data,
    className,
    minWidth = 500,
    categoryTickLabelSize = DEFAULT_LABEL_SIZE,
    valueTickLabelSize = DEFAULT_LABEL_SIZE,
    categoryAxisLabel,
    categoryAxisLabelSize = DEFAULT_LABEL_SIZE,
    categoryAxisLabelOffset = 0,
    valueAxisLabel,
    valueAxisLabelSize = DEFAULT_LABEL_SIZE,
    valueAxisLabelOffset = 0,
    widthAlternatingLabel = 600,
    alternatingLabelSpace = 80,
    defaultLabelDy = `0px`,
    lowerLabelDy = `30px`,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    background = false,
    color = background ? "blue" : "pink",
  }) => {
    width = width < minWidth ? minWidth : width; // Ensuring graph's width >= minWidth
    const barPadding = 0.4;
    const alternatingLabel = width <= widthAlternatingLabel;
    const final_margin_bottom = alternatingLabel ? margin.bottom + alternatingLabelSpace : margin.bottom;

    const categoryMax = width - margin.left - margin.right;
    const valueMax = height - margin.top - final_margin_bottom;

    const getCategory = (d: BarGraphData) => d.category;
    const getValue = (d: BarGraphData) => d.value;

    const categoryScale = scaleBand({
      range: [0, categoryMax],
      domain: data.map(getCategory),
      padding: barPadding,
    });

    const valueScale = scaleLinear({
      range: [valueMax, 0],
      nice: true,
      domain: [0, Math.max(...data.map(getValue))],
    });

    const categoryPoint = (d: BarGraphData) => categoryScale(getCategory(d));
    const valuePoint = (d: BarGraphData) => valueScale(getValue(d));

    return (
      <div>
        <svg className={className} width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <Group>
              {data.map((d, idx) => {
                const barName = `${getCategory(d)}-${idx}`;
                const barWidth = categoryScale.bandwidth();
                const backgroundBarWidth = barWidth / (1 - barPadding);
                return idx % 2 === 0 ? (
                  <Bar
                    className="fill-bar-background"
                    key={`bar-${barName}-background`}
                    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                    x={categoryPoint(d)! - (backgroundBarWidth - barWidth) / 2}
                    y={0}
                    width={backgroundBarWidth}
                    height={valueMax}
                  />
                ) : null;
              })}
            </Group>
            <GridRows scale={valueScale} width={categoryMax} numTicks={5} stroke={Color.label} strokeWidth={4} strokeDasharray="10" strokeLinecap="round" />
            <Group>
              {data.map((d, idx) => {
                const barName = `${getCategory(d)}-${idx}`;
                const barHeight = valueMax - valuePoint(d);
                const barWidth = categoryScale.bandwidth();
                return (
                  <Group key={`bar-${barName}`}>
                    <Bar
                      onMouseMove={(e) => {
                        const tooltipPos = getTooltipPosition(e);
                        showTooltip({
                          tooltipData: getValue(d).toString(),
                          tooltipLeft: tooltipPos.x,
                          tooltipTop: tooltipPos.y,
                        });
                      }}
                      onMouseOut={hideTooltip}
                      className={`chart-${color}`}
                      x={categoryPoint(d)}
                      y={valueMax - barHeight}
                      width={barWidth}
                      height={barHeight}
                    />
                  </Group>
                );
              })}
            </Group>
            <AxisBottom
              scale={categoryScale}
              top={valueMax}
              hideAxisLine
              hideTicks
              tickLabelProps={(value, index) => {
                const alternatingDy = index % 2 == 0 ? defaultLabelDy : lowerLabelDy;
                return {
                  ...bottomTickLabelProps,
                  className: `fill-primary ${lexend} font-bold`,
                  dy: alternatingLabel ? alternatingDy : defaultLabelDy,
                  fontSize: `${categoryTickLabelSize / 16}rem`,
                  width: categoryScale.bandwidth(),
                  verticalAnchor: "start",
                };
              }}
              label={categoryAxisLabel}
              labelOffset={categoryAxisLabelOffset}
              labelProps={{
                fontSize: `${categoryAxisLabelSize / 16}rem`,
              }}
            />
            <AxisLeft
              scale={valueScale}
              hideAxisLine
              hideTicks
              numTicks={5}
              tickLabelProps={() => {
                return {
                  ...leftTickLabelProps,
                  className: `fill-primary ${lexend} font-bold`,
                  dx: "-0.5rem",
                  dy: "0.25rem",
                  fontSize: `${valueTickLabelSize / 16}rem`,
                };
              }}
              label={valueAxisLabel}
              labelOffset={valueAxisLabelOffset}
              labelProps={{
                fontSize: `${valueAxisLabelSize / 16}rem`,
              }}
            />
          </Group>
        </svg>

        {tooltipOpen && <TooltipWrapper top={tooltipTop} left={tooltipLeft} header={tooltipData as string}></TooltipWrapper>}
      </div>
    );
  },
);
