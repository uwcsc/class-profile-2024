import { Navbar } from "@/components/navbar";
import { generateMetadata } from "@/utils/metadata";
import { Lexend } from "next/font/google";
import React from "react";
import "./globals.css";

export const metadata = generateMetadata({});
const lexend = Lexend({ subsets: ["latin"] });

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" className={`bg-background text-foreground ${lexend.className}`}>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
