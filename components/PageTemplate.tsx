import { TooltipContext } from "@/utils/context";
import { PropsWithChildren, useState } from "react";
import { Header } from "./Header";
import PageHeader from "./PageHeader";
import Tooltip from "./charts/Tooltip";

export default function PageTemplate({ name, alt, children }: PropsWithChildren<{ name: string; alt: string }>) {
  const [tooltip, setTooltip] = useState("");

  return (
    <div className="flex flex-col items-center mb-16">
      <Header />
      <PageHeader name={name} alt={alt} />

      <Tooltip text={tooltip} />

      <TooltipContext.Provider value={setTooltip}>
        <div className="w-full flex flex-col items-center gap-8">{children}</div>
      </TooltipContext.Provider>
    </div>
  );
}
