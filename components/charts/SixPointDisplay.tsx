import { getSetTooltip } from "@/utils/context";

export default function SixPointDisplay({ points }: { points: [number, number, number, number, number, number] }) {
  const setTooltip = getSetTooltip();

  const [min, q1, med, q3, max, mean] = points;

  const rx = points.map((point) => ((point - min) / (max - min)) * 100);
  const [rminx, rq1x, rmedx, rq3x, rmaxx, rmeanx] = rx;

  const [minx, q1x, medx, q3x, maxx, meanx] = rx.map((x) => x.toFixed(5));

  return (
    <svg
      viewBox="-1 -5 102 16"
      className="w-[30vw] md:w-[15vw]"
      onMouseEnter={() => setTooltip(`Range: [${min}, ${max}] = ${max - min}\nQ1: ${q1} / M: ${med} / Q3: ${q3}\nMean: ${mean}`)}
      onMouseLeave={() => setTooltip("")}>
      <path d={`M 0 0 L 0 10 M 0 5 L 100 5 M 100 0 L 100 10`} className="text-white stroke-current" />
      <path d={`M ${q1x} 0 H ${q3x} V 10 H ${q1x} Z`} className="text-white stroke-current fill-chart-color-4" />
      <path d={`M ${medx} 0 L ${medx} 10`} className="text-white stroke-current" />
      <path
        d={`M ${(rmeanx - 3).toFixed(5)} -4 L ${(rmeanx + 3).toFixed(5)} -4 L ${meanx} -1 Z`}
        className="text-transparent stroke-current fill-chart-color-5"
      />
    </svg>
  );
}
