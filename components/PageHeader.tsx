"use client";

import { basePath } from "@/utils/getBasePath";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import Image from "next/image";

export default function PageHeader({ name, alt }: { name: string; alt: string }) {
  const pageWidth = useWindowDimensions().width;
  return <Image src={basePath + `/images/headers/${name}${pageWidth < 768 ? "-small" : ""}.png`} alt={alt} width={pageWidth} height={300} />;
}
