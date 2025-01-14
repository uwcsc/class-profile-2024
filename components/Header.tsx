"use client";

import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useWindowScroll } from "@uidotdev/usehooks";
import Link from "next/link";
import { useState } from "react";

const links: [`/${string}`, string][] = [
  ["/", "Home"],
  ["/demographics", "Demographics"],
  ["/academics", "Academics"],
  ["/cs-experience", "CS Experience"],
  ["/coop", "Co-op"],
  ["/lifestyle-and-interests", "Lifestyle and Interests"],
  ["/intimacy-and-drugs", "Intimacy and Drugs"],
  ["/postgrad-and-full-time", "Postgrad + Full-Time"],
  ["/mental-health", "Mental Health"],
  ["/personal", "Personal"],
  ["/contributors", "Contributors"],
];

export function Header() {
  const pageWidth = useWindowDimensions().width;
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [state] = useWindowScroll();

  return (
    <>
      <div className="h-16 md:h-0" />
      <div
        className={`bg-black transition-opacity z-40 fixed inset-0 ${isShowingMenu ? "opacity-40" : "opacity-0 pointer-events-none"}`}
        onClick={() => {
          setIsShowingMenu(false);
        }}
      />
      <div
        className="flex justify-between items-center fixed w-full top-0 left-0 z-50 box-border px-[1rem] md:px-[3rem] lg:px-[6.25rem]"
        style={{ backgroundColor: `rgb(var(--navbar-background-rgb), ${pageWidth >= 768 ? (state.y ?? 0) / 200 : 1})` }}>
        <div className="relative">
          <h1 className="my-4" style={{ fontSize: `calc(min(${8 - Math.min(1, (state.y ?? 0) / 200)}vw,${2 - Math.min(0.25, (state.y ?? 0) / 800)}rem))` }}>
            <button
              className="text-yellow"
              style={{ textShadow: "-1px 0 black, 1px 0 black, 0 -1px black, 0 1px black" }}
              onClick={() => setIsShowingMenu(true)}>
              CS '24
            </button>
          </h1>
          <div
            className={`bg-dark-blue border border-light-blue rounded-xl mt-4 p-4 transition-opacity absolute ${isShowingMenu ? "" : "opacity-0 pointer-events-none"}`}>
            <h3 className="text-xl md:text-2xl m-0">Directory</h3>
            <ul>
              {links.map(([url, text]) => (
                <li key={url}>
                  <Link href={url} className="text-light-blue whitespace-nowrap">
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
