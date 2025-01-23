import { PropsWithChildren, ReactNode } from "react";

export default function ({
  children,
  title,
  chart,
  vertical = false,
  reverse = false,
}: PropsWithChildren<{ title: string; chart: ReactNode; vertical?: boolean; reverse?: boolean }>) {
  if (vertical)
    return (
      <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-8 xl:gap-12 py-4 md:py-8 xl:py-12">
        <div className="flex flex-col items-center">
          <h3 className="glow">{title}</h3>
          {children}
        </div>
        {chart}
      </div>
    );
  else
    return (
      <div
        className={`flex flex-col-reverse ${reverse ? "md:flex-row-reverse" : "md:flex-row"} items-center gap-4 md:gap-8 lg:gap-12 xl:gap-16 py-4 md:py-8 xl:py-12`}>
        <div className="max-w-[80vw]">{chart}</div>
        <div className="flex flex-col">
          <h3 className="glow">{title}</h3>
          {children}
        </div>
      </div>
    );
}
