"use client";

import { links } from "@/data/routes";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useWindowScroll } from "@uidotdev/usehooks";
import Link from "next/link";
import { useState } from "react";

export function Header({ transparent = false }: { transparent?: boolean }) {
  const pageWidth = useWindowDimensions().width;
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [state] = useWindowScroll();

  return (
    <>
      {transparent ? null : <div className="h-16 md:h-0" />}
      <div
        className={`bg-black transition-opacity z-40 fixed inset-0 ${isShowingMenu ? "opacity-40" : "opacity-0 pointer-events-none"}`}
        onClick={() => {
          setIsShowingMenu(false);
        }}
      />
      <div
        className="flex justify-between items-center fixed w-full top-0 left-0 z-50 box-border px-[1rem] md:px-[3rem] lg:px-[6.25rem]"
        style={{ backgroundColor: `rgb(var(--navbar-background-rgb), ${pageWidth >= 768 || transparent ? (state.y ?? 0) / 200 : 1})` }}>
        <div className="relative">
          <h1 className="my-4" style={{ fontSize: `calc(min(${8 - Math.min(1, (state.y ?? 0) / 200)}vw,${2 - Math.min(0.25, (state.y ?? 0) / 800)}rem))` }}>
            <button className="text-yellow" style={{ textShadow: "-1px 0 #777, 1px 0 #777, 0 -1px #777, 0 1px #777" }} onClick={() => setIsShowingMenu(true)}>
              <span className="flex items-center gap-2">
                <span className="-mt-1">&#9776;</span> <span>CS '24</span>
              </span>
            </button>
          </h1>
          <div
            className={`bg-dark-blue border border-light-blue rounded-xl mt-4 p-4 transition-opacity absolute ${isShowingMenu ? "" : "opacity-0 pointer-events-none"}`}>
            <h3 className="text-xl md:text-2xl m-0">Directory</h3>
            <ul>
              {[["/", "Home"], ...links].map(([url, text]) => (
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
