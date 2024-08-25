import { Color } from "@/utils/Color";
import { AxisBottom, AxisLeft } from "@visx/axis";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { Stats } from "@visx/mock-data/lib/generators/genStats";
import { Point } from "@visx/point";
import { scaleBand, scaleLinear } from "@visx/scale";
import { Line } from "@visx/shape";
import { BoxPlot as VisxBoxPlot } from "@visx/stats";
import { withTooltip } from "@visx/tooltip";
import { WithTooltipProvidedProps } from "@visx/tooltip/lib/enhancers/withTooltip";
import React from "react";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

import styles from "./Boxplot.module.css";

const DEFAULT_LABEL_SIZE = 16;
const TICK_LABEL_FONT_WEIGHT = 800;

interface BoxPlotData {
  category: string;
  min: number;
  median: number;
  max: number;
  firstQuartile: number;
  thirdQuartile: number;
  outliers?: number[];
}

type TooltipData = Omit<BoxPlotData, "outliers">;

export type StatsPlotProps = {
  data: BoxPlotData[];
  /** Width of the entire graph, in pixels, greater than 10.  */
  width: number;
  /** Height of the entire graph, in pixels. */
  height: number;
  /** Distance between the edge of the graph and the area where the bars are drawn, in pixels. */
  margin: {
    top: number;
    left: number;
  };
  /** Width of the lines in the graph, in px. */
  strokeWidth?: number;
  /** Length of the dashes and the gaps in the graph, in px. */
  strokeDashArray?: string;
  /** Number of ticks for the value (y-)axis */
  numTicksLeftAxis?: number;
  /** Left margin before the start of the graph for the left axis labels, in px. */
  valueAxisLeftMargin?: number;
  /** Distance between the left axis labels and the start of the graph */
  valueAxisLabelOffset?: number;
  /** Distance between the top and the column lines of the grid of the graph, in px. */
  gridColumnTopOffset?: number;
  /** Distance between the top of the point in the boxplot and the start of the tooltip box, in px. */
  toolTipTopOffset?: number;
  /** Distance between the left of the point in the boxplot and the start of the tooltip box, in px. */
  toolTipLeftOffset?: number;
  /** Font size of the category (x-)axis labels */
  categoryAxisLabelSize?: number;
  /** Font size of the value (y-)axis labels */
  valueAxisLabelSize?: number;
  /** Font size of the text in the tool tip box */
  toolTipFontSize?: number;
  /** Factor multiplied with the compressed width to determine the box width, in px. */
  boxPlotWidthFactor?: number;
  /** Factor multiplied with the compressed width to determine the distance between boxes, in px. */
  boxPlotLeftOffset?: number;
  /** Boxplot padding  */
  boxPlotPadding?: number;
  /** Minimum width of the graph. */
  minWidth?: number;
  /** Arithmetic means (if applicable) */
  means?: Record<string, number>;

  background?: boolean;
};

export const BoxPlot = withTooltip<StatsPlotProps, TooltipData>(
  ({
    width,
    height,
    data,
    margin,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    showTooltip,
    hideTooltip,
    strokeWidth = 2.5,
    strokeDashArray = "10,4",
    numTicksLeftAxis = 6,
    valueAxisLeftMargin = 40,
    gridColumnTopOffset = -20,
    valueAxisLabelOffset = -10,
    toolTipTopOffset = 0,
    toolTipLeftOffset = 0,
    categoryAxisLabelSize = DEFAULT_LABEL_SIZE,
    valueAxisLabelSize = DEFAULT_LABEL_SIZE,
    boxPlotWidthFactor = 0.4,
    boxPlotLeftOffset = 0.3,
    boxPlotPadding = 0.3,
    minWidth = 500,
    background = false,
    means,
  }: StatsPlotProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < minWidth) {
      width = minWidth;
    }

    // bounds
    const xMax = width;
    const yMax = height - 120;
    // formatting data
    const plotData: Stats[] = data.map((d) => {
      return {
        boxPlot: {
          ...d,
          x: d.category,
          outliers: [],
        },
        binData: [],
      };
    });

    // accessors
    const getX = (d: Stats) => d.boxPlot.x;
    const getMin = (d: Stats) => d.boxPlot.min;
    const getMax = (d: Stats) => d.boxPlot.max;
    const getMedian = (d: Stats) => d.boxPlot.median;
    const getFirstQuartile = (d: Stats) => d.boxPlot.firstQuartile;
    const getThirdQuartile = (d: Stats) => d.boxPlot.thirdQuartile;

    // scales
    const xScale = scaleBand<string>({
      range: [margin.left, xMax - 2 * margin.left - valueAxisLeftMargin], // scaling is needed due to left margin
      round: true,
      domain: plotData.map(getX),
      padding: boxPlotPadding,
    });

    const values = plotData.reduce((allValues, { boxPlot }) => {
      allValues.push(boxPlot.min, boxPlot.max);
      return allValues;
    }, [] as number[]);
    const maxYValue = Math.max(...values);

    const yScale = scaleLinear<number>({
      range: [yMax - margin.top, 0],
      round: true,
      domain: [0, maxYValue],
    });

    const constrainedWidth = Math.min(200, xScale.bandwidth());

    const mouseOverEventHandler = (d: Stats) => (e: React.MouseEvent<SVGLineElement | SVGRectElement, MouseEvent>) => {
      const pos = getTooltipPosition(e);

      showTooltip({
        tooltipLeft: pos.x + toolTipLeftOffset,
        tooltipTop: pos.y + toolTipTopOffset,
        tooltipData: {
          ...d.boxPlot,
          category: getX(d),
        },
      });
    };

    return width < 10 ? null : (
      <div>
        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <Group left={valueAxisLeftMargin}>
              <GridRows
                scale={yScale}
                width={xMax}
                numTicks={numTicksLeftAxis}
                stroke={Color.tertiaryBackground}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDashArray}
              />
              <GridColumns
                scale={xScale}
                height={yMax - gridColumnTopOffset}
                top={gridColumnTopOffset}
                stroke={Color.tertiaryBackground}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDashArray}
              />
              <AxisBottom
                top={yMax - gridColumnTopOffset}
                scale={xScale}
                hideAxisLine
                hideTicks
                labelProps={{
                  fontSize: `${categoryAxisLabelSize / 16}rem`,
                }}
                tickLabelProps={() => {
                  return {
                    fill: Color.label,
                    fontWeight: TICK_LABEL_FONT_WEIGHT,
                    textAnchor: "middle",
                  };
                }}
              />
              <AxisLeft
                scale={yScale}
                left={valueAxisLabelOffset}
                numTicks={numTicksLeftAxis}
                hideAxisLine
                labelProps={{
                  fontSize: `${valueAxisLabelSize / 16}rem`,
                }}
                tickLabelProps={() => {
                  return {
                    fill: Color.label,
                    fontWeight: TICK_LABEL_FONT_WEIGHT,
                    textAnchor: "end",
                    verticalAnchor: "middle",
                  };
                }}
              />
              <Line
                fill={Color.tertiaryBackground}
                to={new Point({ x: 0, y: gridColumnTopOffset })}
                from={new Point({ x: 0, y: yMax })}
                stroke={Color.tertiaryBackground}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDashArray}
              />
            </Group>
            <Line
              fill={Color.tertiaryBackground}
              to={
                new Point({
                  x: xMax - margin.left - strokeWidth,
                  y: gridColumnTopOffset,
                })
              }
              from={
                new Point({
                  x: xMax - margin.left - strokeWidth,
                  y: yMax,
                })
              }
              stroke={Color.tertiaryBackground}
              strokeWidth={strokeWidth}
              strokeDasharray={strokeDashArray}
            />
            {plotData.map((d: Stats, i) => (
              <Group key={i}>
                <VisxBoxPlot
                  className={background ? styles.blueboxplot : styles.pinkboxplot}
                  min={getMin(d)}
                  max={getMax(d)}
                  left={xScale(getX(d))! + boxPlotLeftOffset * constrainedWidth + valueAxisLeftMargin}
                  firstQuartile={getFirstQuartile(d)}
                  thirdQuartile={getThirdQuartile(d)}
                  median={getMedian(d)}
                  boxWidth={constrainedWidth * boxPlotWidthFactor}
                  rx={0}
                  ry={0}
                  stroke={Color.label}
                  strokeWidth={strokeWidth}
                  valueScale={yScale}
                  minProps={{
                    onMouseMove: mouseOverEventHandler(d),
                    onMouseLeave: hideTooltip,
                  }}
                  maxProps={{
                    onMouseMove: mouseOverEventHandler(d),
                    onMouseLeave: hideTooltip,
                  }}
                  boxProps={{
                    onMouseMove: mouseOverEventHandler(d),
                    strokeWidth: 0,
                    onMouseLeave: hideTooltip,
                  }}
                  medianProps={{
                    style: {
                      stroke: Color.label,
                    },
                    onMouseMove: mouseOverEventHandler(d),
                    onMouseLeave: () => {
                      hideTooltip();
                    },
                  }}
                />
              </Group>
            ))}
          </Group>
        </svg>

        {tooltipOpen && tooltipData && (
          <TooltipWrapper left={tooltipLeft} top={tooltipTop} header={tooltipData.category}>
            <p>max: {tooltipData.max}</p>
            <p>third quartile: {tooltipData.thirdQuartile}</p>
            <p>median: {tooltipData.median}</p>
            <p>first quartile: {tooltipData.firstQuartile}</p>
            <p>min: {tooltipData.min}</p>
            {means?.[tooltipData.category] ? <p>mean: {means[tooltipData.category]}</p> : null}
          </TooltipWrapper>
        )}
      </div>
    );
  },
);
