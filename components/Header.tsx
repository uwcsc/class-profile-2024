"use client";

import { pageRoutes } from "@/data/routes";
import { basePath } from "@/utils/getBasePath";
import { useWindowScroll } from "@uidotdev/usehooks";
import Image from "next/legacy/image";
import Link from "next/link";
import { useState } from "react";
import { Sections } from "./Sections";

export function Header() {
  const [isShowingMenu, setIsShowingMenu] = useState(false);
  const [state] = useWindowScroll();
  const verticalPadding = `${0.75 - Math.min(0.5, (state.y ?? 0) / 400)}rem`;

  return (
    <>
      <div className="h-32" />
      <div
        className={`bg-black transition-opacity duration-[500ms] fixed inset-0 z-[99] ${isShowingMenu ? "opacity-60" : "opacity-0 pointer-events-none"}`}
        onClick={() => {
          setIsShowingMenu(false);
        }}
      />
      <div
        className="flex justify-between items-center fixed w-full top-0 left-0 z-[98] box-border px-[6.25rem]"
        style={{
          backgroundColor: `rgb(var(--navbar-background-rgb), ${(state.y ?? 0) / 200})`,
          paddingTop: verticalPadding,
          paddingBottom: verticalPadding,
        }}>
        <h1 className="my-4" style={{ fontSize: `${3 - Math.min(0.5, (state.y ?? 0) / 400)}rem` }}>
          <Link href="/">CS 2023</Link>
        </h1>
        <button
          onClick={() => {
            setIsShowingMenu(true);
          }}
          className="hover:cursor-pointer">
          <svg
            className="stroke-pink hover:stroke-light-pink stroke-[10] transition-colors"
            width="50"
            height="100"
            viewBox="0 0 144 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ strokeLinecap: "round" }}>
            <line x1="139" y1="5" x2="5.00003" y2="4.99999" />
            <line x1="139" y1="50" x2="5.00003" y2="50" />
            <line x1="139" y1="95" x2="5.00003" y2="95" />
          </svg>
        </button>
      </div>

      <div
        className={`fixed right-0 top-0 min-w-[calc(400rem/16)] h-screen bg-dark-blue m-0 z-[100] p-0 pr-[calc(20rem/16)] transition-transform duration-400 overflow-auto ${isShowingMenu ? "" : "translate-x-[100%]"}`}>
        <h1 className="pl-[calc(30rem/16)] text-pink">Sections</h1>
        <div className="w-full flex">
          <div className="m-auto flex-[1_1] border-b-[3px] border-white"></div>
          <button
            className="bg-light-blue hover:bg-light-orange px-[calc(20rem/16)] rounded-[calc(50rem/16)] flex ml-[calc(20rem/16)] cursor-pointer transition-colors duration-[250ms]"
            onClick={() => {
              setIsShowingMenu(false);
            }}>
            <Image src={basePath + "/images/rightArrow.svg"} alt="Right Arrow" width="50" height="50" draggable="false" />
          </button>
        </div>
        <div className="pl-[calc(30rem/16)]">
          <Sections data={pageRoutes} showHeader={false} />
        </div>
      </div>
    </>
  );
}
