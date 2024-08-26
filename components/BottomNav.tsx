import Link from "next/link";

interface PagesInfo {
  leftPage: { url: string; name: string };
  rightPage: { url: string; name: string };
}

export function BottomNav(props: PagesInfo) {
  return (
    <div className="flex items-center justify-between my-[calc(40rem/16)]">
      <Link
        href={props.leftPage.url}
        scroll
        className="animated-underline-box flex flex-col-reverse lg:flex-row items-end lg:items-center gap-2 lg:gap-8 text-xl lg:text-2xl text-primary hover:text-pink text-right">
        <Arrow />
        <span className="animated-underline">{props.leftPage.name}</span>
      </Link>
      <Link
        href={props.rightPage.url}
        scroll
        className="animated-underline-box flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-8 text-xl lg:text-2xl text-primary hover:text-pink">
        <span className="animated-underline">{props.rightPage.name}</span>
        <Arrow right />
      </Link>
    </div>
  );
}

interface ArrowProps {
  right?: boolean;
}

function Arrow({ right }: ArrowProps) {
  return (
    <svg className={`${right ? "rotate-180" : ""} w-[calc(200rem/16)] lg:w-[calc(250rem/16)] h-[calc(20rem/16)]`}>
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="3" orient="auto" markerUnits="strokeWidth">
          <path id="arrow" width="10" height="10" refX="5" refY="3" orient="auto" d="M0,0 L0,6 L9,3 z" className="fill-primary" />
        </marker>
      </defs>
      <line
        x1="250"
        y1="10"
        x2="100"
        y2="10" // half of svg height
        strokeWidth="3"
        markerEnd="url(#arrow)"
        className="stroke-primary"
      />
    </svg>
  );
}
