import { Color } from "@/utils/Color";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { Point } from "@visx/point";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { BarStack, BarStackHorizontal, Line } from "@visx/shape";
import { SeriesPoint } from "@visx/shape/lib/types";
import { withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

interface StackedBarData {
  category: string;
  [key: string]: number | string;
}

type TooltipData = {
  bar: SeriesPoint<StackedBarData>;
  key: string;
  index: number;
  height: number;
  width: number;
  x: number;
  y: number;
  color: string;
};

export type StackedBarProps = {
  data: StackedBarData[];
  /** Width of the entire graph, in pixels, greater than 10.  */
  width: number;
  /** Height of the entire graph, in pixels. */
  height: number;
  /** Names of the groups appearing in the legend */
  keys: string[];
  /** Colours for each key */
  colorRange: string[];
  /** Distance between the edge of the graph and the area where the bars are drawn, in pixels. */
  margin: { top: number; left: number; right: number; bottom: number };
  /** Number of ticks for the value axis */
  numTicksValueAxis?: number;
  /** Width of the lines in the graph, in px. */
  strokeWidth?: number;
  /** Length of the dashes and the gaps in the graph, in px. */
  strokeDashArray?: string;
  /** Padding between each bar in the stacked bar graph, from 0 to 1 */
  scalePadding?: number;
  /** Margin for each item in the legend */
  itemMargin?: string;
  /** Hide the first data value in tooltip*/
  hideDataValueInTooltip?: boolean;
  //** Top tooltip label */
  tooltipTopLabel?: string;
  //** Bottom tooltip label */
  tooltipBottomLabel?: string;
  //** Display percentage */
  displayPercentage?: boolean;
  /** Minimum width of the graph. */
  minWidth?: number;
};

let tooltipTimeout: number;

export const StackedBarGraphVertical = withTooltip<StackedBarProps, TooltipData>(
  ({
    data,
    width,
    height,
    keys,
    colorRange,
    margin,
    scalePadding = 0.3,
    numTicksValueAxis = 6,
    strokeWidth = 2.5,
    strokeDashArray = "10,4",
    itemMargin = "0 0 0 15px",
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    hideDataValueInTooltip,
    tooltipBottomLabel = "",
    tooltipTopLabel = "",
    displayPercentage,
    minWidth = 500,
  }: StackedBarProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < minWidth) {
      width = minWidth;
    }

    const yTotals = data.reduce((allTotals, currCategory) => {
      const yTotal = keys.reduce((categoryTotal, k) => {
        categoryTotal += currCategory[k] as number;
        return categoryTotal;
      }, 0);
      allTotals.push(yTotal);
      return allTotals;
    }, [] as number[]);

    const TICK_LABEL_FONT_WEIGHT = 800;

    // accessors
    const getCategory = (d: StackedBarData) => d.category;

    // scales
    const categoryScale = scaleBand<string>({
      domain: data.map(getCategory),
      padding: scalePadding,
    });
    const valueScale = scaleLinear<number>({
      domain: [0, Math.max(...yTotals)],
      nice: true,
    });
    const colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: colorRange,
    });

    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    categoryScale.rangeRound([0, xMax]);
    valueScale.range([yMax, 0]);

    return width < 10 ? null : (
      <div className="relative">
        <div className="flex top-0 justify-center">
          <LegendOrdinal scale={colorScale} direction="row" itemMargin={itemMargin} labelAlign="center" />
        </div>

        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <GridRows
              scale={valueScale}
              width={xMax}
              height={yMax}
              numTicks={numTicksValueAxis}
              stroke={Color.lightNavy}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            <GridColumns
              scale={categoryScale}
              height={yMax}
              offset={categoryScale.bandwidth() / 2}
              stroke={Color.lightNavy}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            <BarStack<StackedBarData, string> data={data} keys={keys} x={getCategory} xScale={categoryScale} yScale={valueScale} color={colorScale}>
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar) => (
                    <rect
                      className="hover-shadow"
                      key={`bar-stack-${barStack.index}-${bar.index}`}
                      x={bar.x}
                      y={bar.y}
                      height={bar.height}
                      width={bar.width / 2}
                      fill={bar.color}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      }}
                      onMouseMove={(event) => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        const tooltipPos = getTooltipPosition(event);
                        showTooltip({
                          tooltipData: bar,
                          tooltipLeft: tooltipPos.x,
                          tooltipTop: tooltipPos.y,
                        });
                      }}
                    />
                  )),
                )
              }
            </BarStack>
            <Line
              fill={Color.lightNavy}
              to={new Point({ x: 0, y: 0 })}
              from={new Point({ x: 0, y: yMax })}
              stroke={Color.lightNavy}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            <AxisLeft
              scale={valueScale}
              top={5}
              numTicks={numTicksValueAxis}
              hideAxisLine
              hideTicks
              labelProps={{
                fontSize: `${10 / 16}rem`,
              }}
              tickLabelProps={() => ({
                fill: Color.white,
                fontWeight: TICK_LABEL_FONT_WEIGHT,
                textAnchor: "end",
              })}
            />
          </Group>
          <AxisBottom
            top={yMax + margin.top}
            scale={categoryScale}
            left={margin.left - categoryScale.bandwidth() / 4}
            hideTicks
            hideAxisLine
            labelProps={{
              fontSize: `${10 / 16}rem`,
            }}
            tickLabelProps={() => ({
              fill: Color.white,
              fontWeight: TICK_LABEL_FONT_WEIGHT,
              textAnchor: "middle",
            })}
          />
        </svg>

        {tooltipOpen && tooltipData ? (
          <TooltipWrapper top={tooltipTop} left={tooltipLeft} header={tooltipData.key}>
            {hideDataValueInTooltip ? null : (
              <p>
                {tooltipTopLabel} {tooltipData.bar.data[tooltipData.key]}
                {displayPercentage ? "%" : ""}
              </p>
            )}
            <p>
              {tooltipBottomLabel} {getCategory(tooltipData.bar.data)}
            </p>
          </TooltipWrapper>
        ) : null}
      </div>
    );
  },
);

export const StackedBarGraphHorizontal = withTooltip<StackedBarProps, TooltipData>(
  ({
    data,
    width,
    height,
    keys,
    colorRange,
    margin,
    scalePadding = 0.3,
    numTicksValueAxis = 6,
    strokeWidth = 2.5,
    strokeDashArray = "10,4",
    itemMargin = "0 0 0 15px",
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    hideDataValueInTooltip,
    tooltipBottomLabel = "",
    tooltipTopLabel = "",
    displayPercentage,
    minWidth = 500,
  }: StackedBarProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < minWidth) {
      width = minWidth;
    }

    const yTotals = data.reduce((allTotals, currCategory) => {
      const yTotal = keys.reduce((categoryTotal, k) => {
        categoryTotal += currCategory[k] as number;
        return categoryTotal;
      }, 0);
      allTotals.push(yTotal);
      return allTotals;
    }, [] as number[]);

    const TICK_LABEL_FONT_WEIGHT = 800;

    // accessors
    const getCategory = (d: StackedBarData) => d.category;

    // scales
    const valueScale = scaleLinear<number>({
      domain: [0, Math.max(...yTotals)],
      nice: true,
    });
    const categoryScale = scaleBand<string>({
      domain: data.map(getCategory),
      padding: scalePadding,
    });
    const colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: colorRange,
    });

    // bounds
    const xMax = width - margin.left - margin.right;
    const yMax = height - margin.top - margin.bottom;

    categoryScale.rangeRound([yMax, 0]);
    valueScale.range([0, xMax]);

    return width < 10 ? null : (
      <div className="relative">
        <div className="flex top-0 justify-center">
          <LegendOrdinal scale={colorScale} direction="row" itemMargin={itemMargin} />
        </div>

        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <GridRows
              scale={categoryScale}
              width={xMax}
              height={yMax}
              offset={categoryScale.bandwidth() / 2}
              stroke={Color.lightNavy}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            <GridColumns
              scale={valueScale}
              height={yMax}
              numTicks={numTicksValueAxis}
              stroke={Color.lightNavy}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            <Line
              fill={Color.lightNavy}
              to={new Point({ x: 0, y: 2 })}
              from={new Point({ x: xMax, y: 2 })}
              stroke={Color.lightNavy}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            <BarStackHorizontal<StackedBarData, string> data={data} keys={keys} y={getCategory} xScale={valueScale} yScale={categoryScale} color={colorScale}>
              {(barStacks) =>
                barStacks.map((barStack) =>
                  barStack.bars.map((bar) => (
                    <rect
                      className="hover-shadow"
                      key={`bar-stack-${barStack.index}-${bar.index}`}
                      x={bar.x}
                      y={bar.y}
                      height={bar.height / 2}
                      width={bar.width}
                      fill={bar.color}
                      onMouseLeave={() => {
                        tooltipTimeout = window.setTimeout(() => {
                          hideTooltip();
                        }, 300);
                      }}
                      onMouseMove={(event) => {
                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                        const tooltipPos = getTooltipPosition(event);
                        showTooltip({
                          tooltipData: bar,
                          tooltipLeft: tooltipPos.x,
                          tooltipTop: tooltipPos.y,
                        });
                      }}
                    />
                  )),
                )
              }
            </BarStackHorizontal>
            <AxisBottom
              top={yMax}
              scale={valueScale}
              numTicks={numTicksValueAxis}
              hideAxisLine
              hideTicks
              labelProps={{
                fontSize: `${10 / 16}rem`,
              }}
              tickLabelProps={() => ({
                fill: Color.white,
                fontWeight: TICK_LABEL_FONT_WEIGHT,
                textAnchor: "middle",
              })}
            />
            <AxisLeft
              scale={categoryScale}
              hideAxisLine
              hideTicks
              labelProps={{
                fontSize: `${10 / 16}rem`,
              }}
              tickLabelProps={() => ({
                fill: Color.white,
                fontWeight: TICK_LABEL_FONT_WEIGHT,
                textAnchor: "end",
              })}
            />
          </Group>
        </svg>

        {tooltipOpen && tooltipData ? (
          <TooltipWrapper top={tooltipTop} left={tooltipLeft} header={tooltipData.key}>
            {hideDataValueInTooltip ? null : (
              <p>
                {tooltipTopLabel} {tooltipData.bar.data[tooltipData.key]}
                {displayPercentage ? "%" : ""}
              </p>
            )}
            <p>
              {tooltipBottomLabel} {getCategory(tooltipData.bar.data)}
            </p>
          </TooltipWrapper>
        ) : null}
      </div>
    );
  },
);
