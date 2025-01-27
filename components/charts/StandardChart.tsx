import { PropsWithChildren, ReactNode } from "react";
import WindowPanel from "../WindowPanel";
import ChartContainer from "./ChartContainer";

export default function StandardChart({
  variant,
  vertical,
  title,
  chart,
  children,
}: PropsWithChildren<{ variant: "dark" | "light" | "blank"; vertical?: boolean; title: string; chart: ReactNode }>) {
  return (
    <WindowPanel blank={variant === "blank"} dark={variant === "dark"}>
      <ChartContainer reverse={variant === "blank"} vertical={vertical} title={title} chart={chart}>
        {children}
      </ChartContainer>
    </WindowPanel>
  );
}
