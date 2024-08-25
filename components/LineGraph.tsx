import { AxisBottom, AxisLeft } from "@visx/axis";
import { bottomTickLabelProps } from "@visx/axis/lib/axis/AxisBottom";
import { leftTickLabelProps } from "@visx/axis/lib/axis/AxisLeft";
import { GridColumns, GridRows } from "@visx/grid";
import { Group } from "@visx/group";
import { LegendOrdinal } from "@visx/legend";
import { scaleBand, scaleLinear, scaleOrdinal } from "@visx/scale";
import { LinePath } from "@visx/shape";
import { withTooltip } from "@visx/tooltip";
import React from "react";
import { Color } from "@/utils/Color";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

import styles from "./LineGraph.module.css";

interface LineData {
  label: string;
  yValues: number[];
}

interface PointData {
  x: string;
  y: number;
}

interface LineGraphData {
  xValues: string[];
  lines: LineData[];
}

interface LineGraphProps {
  data: LineGraphData;
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
  /** List of hexademical colours for each line, length of colorRange should match the length of data. */
  colorRange: string[];
  /** Font size of the category tick labels, in pixels. Default is 16px. */
  xTickLabelSize?: number;
  /** Font size of the value tick labels, in pixels. Default is 16px. */
  yTickLabelSize?: number;
  /** Margin for each item in the legend */
  itemMargin?: string;
  /** Minimum width of the graph. */
  minWidth?: number;
}

const DEFAULT_LABEL_SIZE = 16;

type TooltipData = string;

export const LineGraph = withTooltip<LineGraphProps, TooltipData>(
  ({
    width,
    height,
    margin,
    data,
    colorRange,
    xTickLabelSize = DEFAULT_LABEL_SIZE,
    yTickLabelSize = DEFAULT_LABEL_SIZE,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    itemMargin = "0 0 0 15px",
    minWidth = 500,
  }) => {
    if (width < minWidth) {
      width = minWidth;
    }

    const xLength = data.xValues.length;

    if (data.lines.length != colorRange.length) {
      throw new Error("Invalid data with wrong length.");
    }

    data.lines.forEach((line) => {
      if (line.yValues.length != xLength) {
        throw new Error("Invalid data with wrong length.");
      }
    });

    const yMax = height - margin.top - margin.bottom;
    const xMax = width - margin.left - margin.right;

    const actualData = data.lines.map((line) => {
      return line.yValues.map((val, idx) => {
        return { x: data.xValues[idx], y: val };
      });
    });

    const yMaxValue = Math.max(
      ...data.lines.map((line) => {
        return Math.max(...line.yValues);
      }),
    );

    // data accessors
    const getX = (d: PointData) => d.x;
    const getY = (d: PointData) => d.y;

    // scales
    const xScale = scaleBand({
      range: [0, xMax],
      domain: data.xValues,
    });

    const yScale = scaleLinear<number>({
      range: [0, yMax],
      nice: true,
      domain: [yMaxValue, 0],
    });

    const keys = data.lines.map((line) => line.label);

    const colorScale = scaleOrdinal<string, string>({
      domain: keys,
      range: colorRange,
    });

    return (
      <div>
        <div className={styles.legend}>
          <LegendOrdinal scale={colorScale} direction="row" itemMargin={itemMargin} labelAlign="center" />
        </div>
        <svg width={width} height={height}>
          <Group top={margin.top} left={margin.left}>
            <GridColumns
              scale={xScale}
              height={yMax}
              left={margin.left}
              numTicks={5}
              stroke={Color.tertiaryBackground}
              strokeWidth={4}
              strokeDasharray="10"
              strokeLinecap="round"
            />
            <GridRows
              scale={yScale}
              width={xMax}
              left={margin.left * 2.3}
              numTicks={data.xValues.length}
              stroke={Color.tertiaryBackground}
              strokeWidth={4}
              strokeDasharray="10"
              strokeLinecap="round"
            />
            <AxisBottom
              scale={xScale}
              top={margin.top + yMax}
              left={margin.left}
              hideAxisLine
              hideTicks
              tickLabelProps={() => {
                return {
                  ...bottomTickLabelProps,
                  className: styles.tickLabel,
                  dy: "-0.25rem",
                  fontSize: `${xTickLabelSize / 16}rem`,
                  width: xScale.bandwidth(),
                };
              }}
            />
            <AxisLeft
              scale={yScale}
              left={margin.left}
              hideAxisLine
              hideTicks
              numTicks={5}
              tickLabelProps={() => {
                return {
                  ...leftTickLabelProps,
                  className: styles.tickLabel,
                  dx: "1.25rem",
                  dy: "0.25rem",
                  fontSize: `${yTickLabelSize / 16}rem`,
                };
              }}
            />
            <Group left={margin.left + xMax / (data.xValues.length * 2)}>
              {actualData.map((lineData, i) => {
                return (
                  <Group key={`line-${i}`}>
                    <LinePath
                      onMouseMove={(e) => {
                        const tooltipPos = getTooltipPosition(e);
                        showTooltip({
                          tooltipData: data.lines[i].label,
                          tooltipLeft: tooltipPos.x,
                          tooltipTop: tooltipPos.y,
                        });
                      }}
                      onMouseOut={hideTooltip}
                      data={lineData}
                      className={styles.line}
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      x={(d) => xScale(getX(d))!}
                      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                      y={(d) => yScale(getY(d))!}
                      stroke={colorRange[i]}
                      strokeWidth={4}
                      strokeOpacity={2}
                    />
                  </Group>
                );
              })}
            </Group>
          </Group>
        </svg>

        {tooltipOpen && <TooltipWrapper top={tooltipTop} left={tooltipLeft} header={tooltipData as string}></TooltipWrapper>}
      </div>
    );
  },
);
