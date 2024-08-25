import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(11, 32, 65)",
        foreground: "rgb(253, 249, 236)",
        pink: "rgb(239, 131, 157)",
        "dark-gray": "rgb(25, 27, 33)",
      },
    },
  },
  plugins: [],
};

export default config;
