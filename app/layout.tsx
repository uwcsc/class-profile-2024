import { lexend } from "@/utils/fonts";
import { Viewport } from "next";
import { title } from "../utils/title";
import "./globals.css";

export const metadata = title("Home");

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#5caff9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`min-h-screen ${lexend}`} style={{ backgroundImage: "linear-gradient(var(--page-background-start), var(--page-background-end))" }}>
      <body>{children}</body>
    </html>
  );
}
