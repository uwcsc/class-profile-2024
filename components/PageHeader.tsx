"use client";

import { useWindowDimensions } from "@/utils/getWindowDimensions";
import Image from "next/image";

export default function PageHeader({ name, alt }: { name: string; alt: string }) {
  const pageWidth = useWindowDimensions().width;
  return <Image src={`/images/headers/${name}${pageWidth < 768 ? "-small" : ""}.png`} alt={alt} width={pageWidth} height={300} className="pb-16" />;
}
