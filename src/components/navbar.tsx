"use client";

import { useWindowScroll } from "@uidotdev/usehooks";
import { useState } from "react";

export function Navbar() {
  const [state] = useWindowScroll();
  const [open, setOpen] = useState(false);

  const scroll = state.y ?? 0;
  const padding = Math.min(30, Math.max(15, 30 - scroll / 16));
  const opacity = Math.min(scroll / 240, 1);
  const fontSize = Math.max(36, 48 - scroll / 20);

  return (
    <>
      <nav
        className="fixed top-0 left-0 w-screen px-6 md:px-12 lg:px-24 flex items-center justify-between"
        style={{ paddingTop: padding, paddingBottom: padding, backgroundColor: `rgba(25, 27, 33, ${opacity})` }}>
        <a href="/" className="text-pink font-bold tracking-widest py-0" style={{ fontSize }}>
          CS 2024
        </a>
        <svg
          className="stroke-pink stroke-[10px] cursor-pointer"
          width="50"
          height="100"
          viewBox="0 0 144 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setOpen(true)}>
          <line x1="139" y1="5" x2="5.00003" y2="4.99999" />
          <line x1="139" y1="50" x2="5.00003" y2="50" />
          <line x1="139" y1="95" x2="5.00003" y2="95" />
        </svg>
      </nav>
      <div className="h-64" />
      <div
        className="fixed inset-0 z-1 transition-opacity duration-500 bg-black"
        style={{ opacity: open ? 0.1 : 0, pointerEvents: open ? "auto" : "none" }}
        onClick={() => setOpen(false)}
      />
      <div className="fixed right-0 top-0 bottom-0 transition-all duration-500 bg-background" style={{ translate: open ? "0" : "100%" }}>
        <h1 className="text-pink font-bold tracking-widest text-5xl m-8">Sections</h1>
        <div className="flex items-center gap-2">
          <hr className="border-white border" />
          
        </div>
      </div>
    </>
  );
}
