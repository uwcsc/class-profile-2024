"use client";

import { getSetTooltip } from "@/utils/context";
import { Fragment, useEffect, useState } from "react";

export type PieProps = {
  data: { category: string; value: number }[];
  radius?: number; // outer radius of the circle
  rounding?: number; // radius of the corner rounding
  anglePad?: number; // angle of spacing between the slices
  separation?: number; // parallel spacing between the slices
  drift?: number; // pixels the slices move out further when hovered
  rotation?: number; // rotate the pie graph clockwise
  whole?: number; // angle of the entire graph
};

export default function Pie({ data, radius = 40, rounding = 1, anglePad = 0.01, separation = 0.5, drift = 3, rotation = 0, whole = Math.PI * 2 }: PieProps) {
  const setTooltip = getSetTooltip();
  const [hover, setHover] = useState<Record<number, boolean>>({});

  const total = data.reduce((x, y) => x + y.value, 0);

  useEffect(() => {
    for (let index = 0; index < data.length; index++) {
      if (hover[index]) {
        setTooltip(`${data[index].category}: ${data[index].value} (${((100 * data[index].value) / total).toFixed(2)}%)`);
        return;
      }
    }

    setTooltip("");
  }, [hover]);

  let angle = rotation;

  const arcs = data.map(({ category, value }) => ({
    category,
    value,
    start: angle + anglePad / 2,
    end: (angle += (whole * value) / total) - anglePad / 2,
  }));

  const roundAngle = 2 * Math.asin(rounding / (2 * radius + 2 * rounding));

  return (
    <svg className="w-64 h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 -mt-4 lg:-mt-5 xl:-mt-6" viewBox="0 0 100 100">
      {arcs.map(({ category, value, start, end }, index) => {
        const mid = (start + end) / 2;
        const [sx, sy] = p2c(drift, mid);

        const lsep = p2c(separation / 2, start + Math.PI / 2);
        const rsep = p2c(separation / 2, end - Math.PI / 2);

        const [ax, ay] = add(p2c(radius - rounding, start), lsep);
        const [bx, by] = add(p2c(radius - rounding / 2, start), lsep);
        const [dx, dy] = add(p2c(radius, start + roundAngle), lsep);
        const [cx, cy] = add([dx, dy], p2c(rounding / 2, start + roundAngle - Math.PI / 2));
        const [ex, ey] = add(p2c(radius, end - roundAngle), rsep);
        const [fx, fy] = add([ex, ey], p2c(rounding / 2, end - roundAngle + Math.PI / 2));
        const [gx, gy] = add(p2c(radius - rounding / 2, end), rsep);
        const [hx, hy] = add(p2c(radius - rounding, end), rsep);
        const [nix, niy] = add(p2c(rounding, end), rsep);
        const [nlx, nly] = add(p2c(rounding, start), lsep);
        const [xx, xy] = intersection(hx, hy, nix, niy, ax, ay, nlx, nly);
        const [ix, iy] = add([xx, xy], p2c(rounding, end));
        const [jx, jy] = add([xx, xy], p2c(rounding / 2, end));
        const [kx, ky] = add([xx, xy], p2c(rounding / 2, start));
        const [lx, ly] = add([xx, xy], p2c(rounding, start));
        const [mx, my] = p2c(radius, start - anglePad);
        const [nx, ny] = p2c(radius, end + anglePad);

        return (
          <Fragment key={category}>
            <path
              d={`M ${tf(ax, ay)} C ${tf(bx, by)} ${tf(cx, cy)} ${tf(dx, dy)} A ${radius} ${radius} 0 ${value * 2 >= total ? 1 : 0} 1 ${tf(ex, ey)} C ${tf(fx, fy)} ${tf(gx, gy)} ${tf(hx, hy)} L ${tf(ix, iy)} C ${tf(jx, jy)} ${tf(kx, ky)} ${tf(lx, ly)} Z`}
              style={{
                translate: hover[index] ? `${sx}px ${-sy}px` : "none",
                filter: hover[index] ? "drop-shadow(0 0 2px var(--light-blue))" : "none",
                transition: "translate 500ms, color 500ms, filter 500ms",
              }}
              onMouseEnter={() => setHover((hover) => ({ ...hover, [index]: true }))}
              onMouseLeave={() => setHover((hover) => ({ ...hover, [index]: false }))}
              className={`${hover[index] ? "text-chart-color-pie-hover" : "text-chart-color-pie-base"} fill-current`}
            />
            <path
              d={`M ${tf(mx, my)} A ${radius} ${radius} 0 ${value * 2 >= total ? 1 : 0} 1 ${tf(nx, ny)} L 50 50 Z`}
              onMouseEnter={() => setHover((hover) => ({ ...hover, [index]: true }))}
              onMouseLeave={() => setHover((hover) => ({ ...hover, [index]: false }))}
              className="opacity-0 z-10"
            />
          </Fragment>
        );
      })}
    </svg>
  );
}

function p2c(r: number, theta: number): [number, number] {
  const realTheta = Math.PI / 2 - theta;
  return [r * Math.cos(realTheta), r * Math.sin(realTheta)];
}

function c2p(x: number, y: number): [number, number] {
  return [Math.hypot(x, y), Math.PI / 2 - Math.atan2(y, x)];
}

function add([x, y]: [number, number], [dx, dy]: [number, number]): [number, number] {
  return [x + dx, y + dy];
}

function tf(x: number, y: number): string {
  return `${(x + 50).toFixed(5)} ${(50 - y).toFixed(5)}`;
}

function intersection(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, x4: number, y4: number): [number, number] {
  const denominator = (y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1);
  const ua = ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) / denominator;
  const ub = ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) / denominator;
  return [x1 + ua * (x2 - x1), y1 + ua * (y2 - y1)];
}
