import { PropsWithChildren, ReactNode } from "react";

export default function ({ children, title, chart, vertical = false }: PropsWithChildren<{ title: string; chart: ReactNode; vertical?: boolean }>) {
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
      <div className="flex flex-col-reverse md:flex-row items-center gap-4 md:gap-12 lg:gap-20 xl:gap-32 py-4 md:py-8 xl:py-12">
        {chart}
        <div className="flex flex-col">
          <h3 className="glow">{title}</h3>
          {children}
        </div>
      </div>
    );
}
