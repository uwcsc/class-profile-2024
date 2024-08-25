import { Color } from "@/utils/Color";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { bottomTickLabelProps } from "@visx/axis/lib/axis/AxisBottom";
import { leftTickLabelProps } from "@visx/axis/lib/axis/AxisLeft";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { Bar, BarGroup, BarGroupHorizontal } from "@visx/shape";
import { BarGroupBar as BarGroupBarType } from "@visx/shape/lib/types";
import { withTooltip } from "@visx/tooltip";
import React, { useState } from "react";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

import styles from "./GroupedBarGraph.module.css";

interface GroupedBarGraphProps {
  data: GroupedBarGraphData[];
  /** Colours of bars in each group. */
  barColors: string[];
  /** Object mapping from the possible colours of bars in each group (barColors) to the colour of the bar when hovered. */
  barHoverColorsMap: Record<string, string>;
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
  /** Font size of the value that appears when hovering over a bar, in pixels. */
  hoverLabelSize?: number;
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
  /** Margin for each item in the legend */
  itemMargin?: string;
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
}

// Best format for props
interface GroupedBarGraphData {
  category: string;
  values: {
    [key: string]: number;
  };
}

// Best format for visx
interface BarGroupData {
  category: string;
  [key: string]: string | number;
}

// BAR_PADDING must be in the range [0, 1)
const BAR_PADDING = 0.2;

const DEFAULT_LABEL_SIZE = 16;

type TooltipData = string;

export const GroupedBarGraphVertical = withTooltip<GroupedBarGraphProps, TooltipData>(
  ({
    data: propsData,
    barColors,
    barHoverColorsMap,
    width,
    height,
    margin,
    className,
    minWidth = 500,
    categoryTickLabelSize = DEFAULT_LABEL_SIZE,
    valueTickLabelSize = DEFAULT_LABEL_SIZE,
    hoverLabelSize,
    categoryAxisLabel,
    categoryAxisLabelSize = DEFAULT_LABEL_SIZE,
    categoryAxisLabelOffset = 0,
    valueAxisLabel,
    valueAxisLabelSize = DEFAULT_LABEL_SIZE,
    valueAxisLabelOffset = 0,
    itemMargin = "0 0 0 15px",
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
  }) => {
    width = width < minWidth ? minWidth : width; // Ensuring graph's width >= minWidth
    const alternatingLabel = width <= widthAlternatingLabel;
    const final_margin_bottom = alternatingLabel ? margin.bottom + alternatingLabelSpace : margin.bottom;

    const data: BarGroupData[] = propsData.map((datum: GroupedBarGraphData) => {
      return { category: datum.category, ...datum.values };
    });

    const keys = Object.keys(propsData[0].values);
    propsData.forEach((d: GroupedBarGraphData) => {
      const currentKeys = Object.keys(d.values);
      if (keys.length != currentKeys.length || !keys.every((key: string) => currentKeys.includes(key))) {
        throw new Error("Every category in a GroupedBarGraph must have the same keys. Check the data prop");
      }
    });

    const allValues = propsData.map((d: GroupedBarGraphData) => Object.values(d.values)).flat();

    const categoryMax = width - margin.left - margin.right;
    const valueMax = height - margin.top - final_margin_bottom;

    const getCategory = (d: BarGroupData) => d.category;

    const categoryScale = scaleBand({
      domain: data.map(getCategory),
      padding: BAR_PADDING,
    });

    const keyScale = scaleBand({
      domain: keys,
    });

    const valueScale = scaleLinear<number>({
      domain: [0, Math.max(...allValues)],
    });

    const colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: barColors,
    });

    categoryScale.rangeRound([0, categoryMax]);
    keyScale.rangeRound([0, categoryScale.bandwidth()]);
    valueScale.rangeRound([valueMax, 0]);

    return (
      <div className={className ? `${className} ${styles.wrapper}` : styles.wrapper}>
        <div className={styles.legend}>
          <LegendOrdinal scale={colorScale} direction="row" itemMargin={itemMargin} labelAlign="center" />
        </div>
        <svg width={width} height={height}>
          <defs>
            {Object.keys(barHoverColorsMap).map((color: string) => {
              // remove brackets from colour name to make ids work
              const colorId = removeBrackets(color);
              return (
                <filter key={`glow-${color}`} id={`glow-${colorId}`}>
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={barHoverColorsMap[color]} />
                </filter>
              );
            })}
          </defs>
          <Group top={margin.top} left={margin.left}>
            <Group>
              {data.map((d, idx) => {
                const barName = `${getCategory(d)}-${idx}`;
                const barWidth = categoryScale.bandwidth();
                const backgroundBarWidth = barWidth / (1 - BAR_PADDING);
                return idx % 2 === 0 ? (
                  <Bar
                    className={styles.barBackground}
                    key={`bar-${barName}-background`}
                    x={
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      categoryScale(getCategory(d))! - (backgroundBarWidth - barWidth) / 2
                    }
                    y={0}
                    width={backgroundBarWidth}
                    height={valueMax}
                  />
                ) : null;
              })}
            </Group>
            <GridRows scale={valueScale} width={categoryMax} numTicks={5} stroke={Color.label} strokeWidth={4} strokeDasharray="10" strokeLinecap="round" />
            <BarGroup
              data={data}
              keys={keys}
              height={valueMax}
              x0={getCategory}
              x0Scale={categoryScale}
              x1Scale={keyScale}
              yScale={valueScale}
              color={colorScale}>
              {(barGroups) =>
                barGroups.map((barGroup) => (
                  <Group key={`bar-group-${barGroup.x0}-${barGroup.index}`} left={barGroup.x0}>
                    {barGroup.bars.map((bar) => (
                      <HoverableBar
                        onMouseMove={(e) => {
                          const tooltipPos = getTooltipPosition(e);

                          showTooltip({
                            tooltipData: bar.value.toString(),
                            tooltipTop: tooltipPos.y,
                            tooltipLeft: tooltipPos.x,
                          });
                        }}
                        onMouseOut={hideTooltip}
                        key={`bar-group-bar-${barGroup.x0}-${barGroup.index}-${bar.key}-${bar.index}`}
                        bar={bar}
                        valueMax={valueMax}
                        hoverFillColor={barHoverColorsMap[bar.color]}
                        hoverLabelSize={hoverLabelSize}
                      />
                    ))}
                  </Group>
                ))
              }
            </BarGroup>
            <AxisBottom
              scale={categoryScale}
              top={valueMax}
              hideAxisLine
              hideTicks
              tickLabelProps={(value, index) => {
                const alternatingDy = index % 2 == 0 ? defaultLabelDy : lowerLabelDy;
                return {
                  ...bottomTickLabelProps,
                  className: styles.tickLabel,
                  dy: alternatingLabel ? alternatingDy : defaultLabelDy,
                  fontSize: `${categoryTickLabelSize / 16}rem`,
                  width: categoryScale.bandwidth(),
                  verticalAnchor: "start",
                };
              }}
              label={categoryAxisLabel}
              labelClassName={styles.axisLabel}
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
                  className: styles.tickLabel,
                  dx: "-0.5rem",
                  dy: "0.25rem",
                  fontSize: `${valueTickLabelSize / 16}rem`,
                };
              }}
              label={valueAxisLabel}
              labelClassName={styles.axisLabel}
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

export const GroupedBarGraphHorizontal = withTooltip<GroupedBarGraphProps, TooltipData>(
  ({
    data: propsData,
    barColors,
    barHoverColorsMap,
    width,
    height,
    margin,
    className,
    minWidth = 600,
    categoryTickLabelSize = DEFAULT_LABEL_SIZE,
    valueTickLabelSize = DEFAULT_LABEL_SIZE,
    hoverLabelSize,
    categoryAxisLabel,
    categoryAxisLabelSize = DEFAULT_LABEL_SIZE,
    categoryAxisLabelOffset = 0,
    valueAxisLabel,
    valueAxisLabelSize = DEFAULT_LABEL_SIZE,
    valueAxisLabelOffset = 0,
    itemMargin = "0 0 0 15px",
    defaultLabelDy = "0",
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
  }) => {
    width = width < minWidth ? minWidth : width; // Ensuring graph's width >= minWidth

    const data: BarGroupData[] = propsData.map((datum: GroupedBarGraphData) => {
      return { category: datum.category, ...datum.values };
    });

    const keys = Object.keys(propsData[0].values);
    propsData.forEach((d: GroupedBarGraphData) => {
      const currentKeys = Object.keys(d.values);
      if (keys.length != currentKeys.length || !keys.every((key: string) => currentKeys.includes(key))) {
        throw new Error("Every category in a GroupedBarGraph must have the same keys. Check the data prop");
      }
    });

    const allValues = propsData.map((d: GroupedBarGraphData) => Object.values(d.values)).flat();

    const categoryMax = height - margin.top - margin.bottom;
    const valueMax = width - margin.left - margin.right;

    const getCategory = (d: BarGroupData) => d.category;

    const categoryScale = scaleBand({
      domain: data.map(getCategory),
      padding: BAR_PADDING,
    });

    const keyScale = scaleBand({
      domain: keys,
    });

    const valueScale = scaleLinear<number>({
      domain: [Math.max(...allValues), 0],
    });

    const colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: barColors,
    });

    categoryScale.rangeRound([0, categoryMax]);
    keyScale.rangeRound([0, categoryScale.bandwidth()]);
    valueScale.rangeRound([valueMax, 0]);

    return (
      <div className={className ? `${className} ${styles.wrapper}` : styles.wrapper}>
        <div className={styles.legend}>
          <LegendOrdinal scale={colorScale} direction="row" itemMargin={itemMargin} labelAlign="center" />
        </div>
        <svg width={width} height={height}>
          <defs>
            {Object.keys(barHoverColorsMap).map((color: string) => {
              // remove brackets from colour name to make ids work
              const colorId = removeBrackets(color);
              return (
                <filter key={`glow-${color}`} id={`glow-${colorId}`}>
                  <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor={barHoverColorsMap[color]} />
                </filter>
              );
            })}
          </defs>
          <Group top={margin.top} left={margin.left}>
            <Group>
              {data.map((d, idx) => {
                const barName = `${getCategory(d)}-${idx}`;
                const barWidth = categoryScale.bandwidth();
                const backgroundBarWidth = barWidth / (1 - BAR_PADDING);
                return idx % 2 === 0 ? (
                  <Bar
                    className={styles.barBackground}
                    key={`bar-${barName}-background`}
                    x={0}
                    y={
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      categoryScale(getCategory(d))! - (backgroundBarWidth - barWidth) / 2
                    }
                    width={valueMax}
                    height={backgroundBarWidth}
                  />
                ) : null;
              })}
            </Group>
            <GridColumns scale={valueScale} height={categoryMax} numTicks={5} stroke={Color.label} strokeWidth={4} strokeDasharray="10" strokeLinecap="round" />
            <BarGroupHorizontal
              data={data}
              keys={keys}
              width={valueMax}
              y0={getCategory}
              y0Scale={categoryScale}
              y1Scale={keyScale}
              xScale={valueScale}
              color={colorScale}>
              {(barGroups) =>
                barGroups.map((barGroup) => (
                  <Group key={`bar-group-${barGroup.y0}-${barGroup.index}`} top={barGroup.y0}>
                    {barGroup.bars.map((bar) => (
                      <HoverableBar
                        onMouseMove={(e) => {
                          const tooltipPos = getTooltipPosition(e);
                          showTooltip({
                            tooltipData: bar.value.toString(),
                            tooltipLeft: tooltipPos.x,
                            tooltipTop: tooltipPos.y,
                          });
                        }}
                        onMouseOut={hideTooltip}
                        key={`bar-group-bar-${barGroup.y0}-${barGroup.index}-${bar.key}-${bar.index}`}
                        bar={bar}
                        valueMax={valueMax}
                        hoverFillColor={barHoverColorsMap[bar.color]}
                        hoverLabelSize={hoverLabelSize}
                        isHorizontal
                      />
                    ))}
                  </Group>
                ))
              }
            </BarGroupHorizontal>
            <AxisLeft
              scale={categoryScale}
              hideAxisLine
              hideTicks
              tickLabelProps={() => {
                return {
                  ...leftTickLabelProps,
                  className: styles.tickLabel,
                  dx: "-0.5rem",
                  dy: defaultLabelDy,
                  fontSize: `${valueTickLabelSize / 16}rem`,
                  height: categoryScale.bandwidth(),
                };
              }}
              label={categoryAxisLabel}
              labelClassName={styles.axisLabel}
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
                  className: styles.tickLabel,
                  dy: "-0.25rem",
                  fontSize: `${categoryTickLabelSize / 16}rem`,
                  verticalAnchor: "start",
                };
              }}
              label={valueAxisLabel}
              labelClassName={styles.axisLabel}
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

interface HoverableBarProps {
  bar: BarGroupBarType<string>;
  valueMax: number;
  hoverFillColor?: string;
  hoverLabelSize?: number;
  isHorizontal?: boolean;
  onMouseMove?: (e: React.MouseEvent<SVGPathElement, MouseEvent>) => void;
  onMouseOut?: () => void;
}

function HoverableBar(props: HoverableBarProps) {
  const { bar, hoverFillColor, onMouseMove, onMouseOut } = props;

  const [isHovered, setIsHovered] = useState(false);

  const colorId = removeBrackets(bar.color);

  return (
    <Group
      className={styles.singleBar}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}>
      <Bar
        className={styles.bar}
        onMouseMove={onMouseMove}
        onMouseOut={onMouseOut}
        x={bar.x}
        y={bar.y}
        width={bar.width}
        height={bar.height}
        fill={isHovered && hoverFillColor ? hoverFillColor : bar.color}
        // apply the glow effect when the bar is hovered
        filter={isHovered ? `url(#glow-${colorId})` : undefined}
      />
    </Group>
  );
}

function removeBrackets(str: string) {
  return str.replace(/\(|\)/g, "");
}
