import { Viewport } from "next";
import { Lexend } from "next/font/google";
import { title } from "../utils/title";
import "./globals.css";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata = title("Home");

export const viewport: Viewport = {
  colorScheme: "dark",
  themeColor: "#5caff9",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`min-h-screen ${lexend.className}`}
      style={{ backgroundImage: "linear-gradient(var(--page-background-start), var(--page-background-end))" }}>
      <body>{children}</body>
    </html>
  );
}
