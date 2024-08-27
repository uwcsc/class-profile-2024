import { ReactNode } from "react";

export interface TextboxProps {
  children: ReactNode;
}

export function Panel({ children }: TextboxProps) {
  return <section className="flex flex-col w-[80%] p-[calc(80rem/16)] bg-dark-blue rounded-[calc(20rem/16)] self-center">{children}</section>;
}
