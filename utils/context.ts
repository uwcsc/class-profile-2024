import { createContext, Dispatch, SetStateAction, useContext } from "react";

export const TooltipContext = createContext<Dispatch<SetStateAction<string>> | null>(null);

export function getSetTooltip() {
  return useContext(TooltipContext)!;
}
