import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./pages/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...Object.fromEntries(
          [
            "pink",
            "dark-pink",
            "light-pink",
            "lighter-pink",
            "dark-blue",
            "light-blue",
            "light-navy",
            "primary",
            "yellow",
            "scroll-bar-background",
            "chart-color-pie-base",
            "chart-color-pie-hover",
            "chart-color-1",
            "chart-color-2",
            "chart-color-3",
            "chart-color-4",
            "chart-color-5",
            "page-background-start",
            "page-backgroud-end",
            "window-panel-background",
            "window-panel-title-dark",
            "window-panel-title-dark-dot-1",
            "window-panel-title-dark-dot-2",
            "window-panel-title-dark-dot-3",
            "window-panel-title-light",
            "window-panel-title-light-dot-1",
            "window-panel-title-light-dot-2",
            "window-panel-title-light-dot-3",
          ].map((color) => [color, `var(--${color})`]),
        ),
      },
    },
  },
  plugins: [],
};

export default config;
