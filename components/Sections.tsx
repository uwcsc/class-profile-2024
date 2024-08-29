import { PageRoutes } from "@/data/routes";
import Link from "next/link";

interface SectionsProps {
  /* Whether to display the "Sections" title and separator that appears on the left. */
  showHeader?: boolean;
  /* Width of the entire Sections, in px. */
  width?: number;
  data: PageRoutes;
  className?: string;
}

export function Sections({ data, showHeader = true, className }: SectionsProps) {
  return (
    <section className={`${className || ""} flex flex-col lg:flex-row gap-[calc(15rem/16)]`}>
      {showHeader ? (
        <>
          <h1 className="text-left lg:text-right m-0" style={{ flex: "3" }}>
            Sections
          </h1>
          <div className="h-[calc(1rem/16)] w-full mt-[calc(36rem/16)] bg-white" style={{ flex: "1" }} />
        </>
      ) : (
        ""
      )}
      <nav className="flex flex-col" style={{ flex: "4" }}>
        <ul className="list-none m-0 p-0">
          {Object.values(data).map((datum, index) => {
            return (
              <li key={`${datum.name}-${index}`} className={`m-[calc(20rem/16)] ml-0 ${index === 0 ? "mt-[calc(18rem/16)]" : ""}`}>
                <span className="text-orange m-0 inline">{String(index).padStart(2, "0")} </span>
                <Link className="animated-underline text-2xl text-white" href={datum.url}>
                  {datum.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
