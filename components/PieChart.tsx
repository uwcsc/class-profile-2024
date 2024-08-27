import { Group } from "@visx/group";
import Pie, { ProvidedProps } from "@visx/shape/lib/shapes/Pie";
import { Text } from "@visx/text";
import { withTooltip } from "@visx/tooltip";

import { getTooltipPosition, TooltipWrapper } from "./TooltipWrapper";

interface PieChartProps {
  data: PieChartData[];
  /** Width of the entire graph, including labels, in pixels. */
  width: number;
  /** Width of the outer ring of labels, in pixels. Label text may be cut off if specified value is too small. */
  labelWidth: number;
  /** Distance between pie slices, in pixels. */
  padRadius?: number;
  /** Distance of gap in center of pie graph, in pixels. */
  innerRadius?: number;
  /** Font size of labels outside the pie, in pixels. */
  labelTextSize?: number;
  /** X-axis offset of the label text, in pixels. */
  labelTextXOffset?: number;
  /** Y-axis offset of the label text, in pixels. */
  labelTextYOffset?: number;
  /** The radial offset of the label text, in pixels. */
  labelTextRadialOffset?: number;
  /** If set, the minimum width of this graph */
  minWidth?: number;
  /** Accessor function to get value to display as label text from datum. */
  getLabelDisplayValueFromDatum?: (datum: PieChartData) => string;
  className?: string;
  /** Has a Background block or not */
  background?: boolean;
}

interface PieChartData {
  category: string;
  value: number;
}

export const PieChart = withTooltip<PieChartProps>(
  ({
    data,
    width,
    labelWidth,
    padRadius = width * 0.25,
    innerRadius = width * 0,
    labelTextSize = 40,
    labelTextXOffset = 0,
    labelTextYOffset = 0,
    labelTextRadialOffset = -20,
    minWidth = 500,
    getLabelDisplayValueFromDatum = (datum: PieChartData) => `${datum.category}`,
    className,
    tooltipOpen,
    tooltipLeft,
    tooltipTop,
    tooltipData,
    hideTooltip,
    showTooltip,
    background = false,
  }) => {
    if (minWidth) {
      width = width < minWidth ? minWidth : width;
    }

    const pieWidth = width * 0.5 - labelWidth;
    const cornerRadius = 0;
    const padAngle = 0;

    const responsiveLabelTextSize = Math.min(labelTextSize, width / 10);

    const sum = data.map((x) => x.value).reduce((x, y) => x + y);

    return (
      <div>
        <svg className={className} width={width} height={width}>
          <Group top={width * 0.5} left={width * 0.5}>
            <Pie
              data={data}
              pieValue={(d: PieChartData) => d.value}
              cornerRadius={cornerRadius}
              padAngle={padAngle}
              padRadius={padRadius}
              innerRadius={innerRadius}
              outerRadius={pieWidth}>
              {({ arcs, path }) => {
                return arcs.map((arc) => {
                  const pathArc = path(arc) as string;
                  return (
                    <Group key={`arc-${arc.data.category}`}>
                      <path
                        onMouseMove={(e) => {
                          const tooltipPos = getTooltipPosition(e);
                          showTooltip({
                            tooltipData: `${arc.data.category}: ${arc.data.value} (${((arc.data.value / sum) * 100).toFixed(2)}%)`,
                            tooltipLeft: tooltipPos.x,
                            tooltipTop: tooltipPos.y,
                          });
                        }}
                        onMouseOut={hideTooltip}
                        className={`${background ? "chart-blue" : "chart-pink"} stroke-primary stroke-1 transition-colors duration-[500ms]`}
                        style={{ strokeLinecap: "round" }}
                        d={pathArc}
                      />
                    </Group>
                  );
                });
              }}
            </Pie>
            <Pie data={data} pieValue={(d: PieChartData) => d.value} innerRadius={pieWidth} outerRadius={width * 0.5}>
              {(pie) => (
                <PieSliceLabel
                  {...pie}
                  labelTextSize={responsiveLabelTextSize}
                  labelTextXOffset={labelTextXOffset}
                  labelTextYOffset={labelTextYOffset}
                  labelTextRadialOffset={labelTextRadialOffset}
                  getLabelDisplayValueFromDatum={getLabelDisplayValueFromDatum}
                />
              )}
            </Pie>
          </Group>
        </svg>

        {tooltipOpen && <TooltipWrapper top={tooltipTop} left={tooltipLeft} header={tooltipData as string}></TooltipWrapper>}
      </div>
    );
  },
);

type PieSliceLabelProps<PieChartData> = ProvidedProps<PieChartData> & {
  labelTextSize: number;
  labelTextXOffset: number;
  labelTextYOffset: number;
  labelTextRadialOffset: number;
  getLabelDisplayValueFromDatum: (datum: PieChartData) => string;
};

export function PieSliceLabel({
  path,
  arcs,
  labelTextSize,
  labelTextXOffset,
  labelTextYOffset,
  labelTextRadialOffset,
  getLabelDisplayValueFromDatum,
}: PieSliceLabelProps<PieChartData>) {
  return (
    <>
      {arcs.map((arc) => {
        const [centroidX, centroidY] = path.centroid(arc);
        const pathArc = path(arc) as string;

        return (
          <Group key={`arc-${arc.data.category}`}>
            <path className="fill-transparent" d={pathArc} />
            <Text
              className="fill-white"
              x={(labelTextRadialOffset * centroidX) / Math.sqrt(centroidX ** 2 + centroidY ** 2) + centroidX + labelTextXOffset}
              y={(labelTextRadialOffset * centroidY) / Math.sqrt(centroidX ** 2 + centroidY ** 2) + centroidY + labelTextYOffset}
              textAnchor={centroidX > 100 ? "start" : centroidX < -100 ? "end" : "middle"}
              fontSize={labelTextSize}>
              {`${getLabelDisplayValueFromDatum(arc.data)}`}
            </Text>
          </Group>
        );
      })}
    </>
  );
}
