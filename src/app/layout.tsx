import { title } from "@/utils/title";
import React from "react";
import "./globals.css";

export const metadata = title("Home");

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
