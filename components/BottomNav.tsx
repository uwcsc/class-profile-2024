import Link from "next/link";

interface PagesInfo {
  leftPage: { url: string; name: string };
  rightPage: { url: string; name: string };
}

export function BottomNav(props: PagesInfo) {
  return (
    <div className="w-[calc(min(80vw,1200px))] flex items-center justify-between my-[calc(40rem/16)]">
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
    <svg viewBox="-1 0 31 10" className={`${right ? "rotate-180" : ""} w-8 lg:w-16`}>
      <path d="M 5 0 L 0 5 L 5 10 M 0 5 L 30 5" className="text-primary stroke-current fill-none" />
    </svg>
  );
}
