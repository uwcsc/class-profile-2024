import { PropsWithChildren } from "react";

export default function WindowPanel({ dark = false, blank = false, children }: PropsWithChildren<{ dark?: boolean; blank?: boolean }>) {
  if (blank) return <div className="p-4 md:p-8 w-[calc(min(80%,1200px))]">{children}</div>;

  return (
    <div className="flex flex-col items-center">
      <div
        className={`${dark ? "bg-window-panel-title-dark" : "bg-window-panel-title-light"} px-5 py-3 rounded-t-xl flex gap-3 w-[calc(min(80%,1200px))] backdrop-blur-sm`}>
        <div className={`${dark ? "bg-window-panel-title-dark-dot-1" : "bg-window-panel-title-light-dot-1"} h-3 w-3 rounded-full`} />
        <div className={`${dark ? "bg-window-panel-title-dark-dot-2" : "bg-window-panel-title-light-dot-2"} h-3 w-3 rounded-full`} />
        <div className={`${dark ? "bg-window-panel-title-dark-dot-3" : "bg-window-panel-title-light-dot-3"} h-3 w-3 rounded-full`} />
      </div>
      <div className="bg-window-panel-background p-4 md:p-8 rounded-b-xl w-[calc(min(80%,1200px))] backdrop-blur-sm">{children}</div>
    </div>
  );
}
