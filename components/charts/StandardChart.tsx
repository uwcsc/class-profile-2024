import { PropsWithChildren, ReactNode } from "react";
import WindowPanel from "../WindowPanel";
import ChartContainer from "./ChartContainer";

export default function StandardChart({
  variant,
  vertical,
  title,
  chart,
  children,
  noscroll = false,
}: PropsWithChildren<{ variant: "dark" | "light" | "blank"; vertical?: boolean; title: string; chart: ReactNode; noscroll?: boolean }>) {
  return (
    <div className="w-full">
      <WindowPanel blank={variant === "blank"} dark={variant === "dark"}>
        <ChartContainer reverse={variant === "blank"} vertical={vertical} title={title} chart={chart} noscroll={noscroll}>
          {children}
        </ChartContainer>
      </WindowPanel>
    </div>
  );
}
