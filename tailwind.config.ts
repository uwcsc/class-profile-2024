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
            "darker-pink",
            "light-pink",
            "lighter-pink",
            "lightest-pink",
            "dark-blue",
            "light-blue",
            "navy",
            "light-navy",
            "orange",
            "light-orange",
            "lighter-orange",
            "primary",
            "yellow",
            "bar-background",
            "chart-blue-light",
            "chart-blue-heavy",
            "chart-yellow-light",
            "chart-yellow-heavy",
            "chart-green-light",
            "chart-green-heavy",
            "chart-pink-light",
            "chart-pink-heavy",
            "page-background-start",
            "page-backgroud-end",
          ].map((color) => [color, `var(--${color})`]),
        ),
      },
    },
  },
  plugins: [],
};

export default config;
