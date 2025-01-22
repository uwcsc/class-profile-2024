"use client";

import { useEffect, useState } from "react";

export default function Tooltip({ text }: { text: string }) {
  const [[x, y], setCoords] = useState([-1, -1]);

  useEffect(() => {
    const listener = (event: MouseEvent) => setCoords([event.clientX, event.clientY]);
    window.addEventListener("mousemove", listener);
    return () => window.removeEventListener("mousemove", listener);
  });

  return (
    <div
      className={`fixed bg-white rounded-lg text-fg-blue px-3 py-1 pointer-events-none ${text ? "" : "hidden"}`}
      style={{ left: `${x}px`, bottom: `${y == -1 ? -1 : window.innerHeight - y}px`, zIndex: 100 }}>
      {text}
    </div>
  );
}
