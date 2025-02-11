import { PropsWithChildren, ReactNode } from "react";

export default function ({
  children,
  title,
  chart,
  vertical = false,
  reverse = false,
  noscroll = false,
}: PropsWithChildren<{ title: string; chart: ReactNode; vertical?: boolean; reverse?: boolean; noscroll?: boolean }>) {
  if (vertical)
    return (
      <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 py-4 md:py-8 xl:py-12">
        <div className="flex flex-col items-center">
          <h3 className="glow">{title}</h3>
          {children}
        </div>
        <div className={`w-[75vw] ${noscroll ? "" : "overflow-scroll"}`}>{chart}</div>
      </div>
    );
  else
    return (
      <div
        className={`flex flex-col-reverse ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 py-4 md:py-8 xl:py-12`}>
        <div className={`w-[75vw] ${noscroll ? "" : "overflow-scroll lg:overflow-visible"}`}>{chart}</div>
        <div className="md:max-w-[32vw] lg:max-w-[100vw] flex flex-col">
          <h3 className="glow">{title}</h3>
          {children}
        </div>
      </div>
    );
}
