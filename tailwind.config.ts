import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      animation: {
        "slide-in-top": "slide-in-top 1.75s cubic-bezier(0.165, 0.840, 0.440, 1.000)   both",
        "text-focus-in": "text-focus-in 0.75s ease-in 1.8s  both",
      },
      keyframes: {
        "slide-in-top": {
          "0%": {
            transform: "translateY(-1000px)",
            opacity: "0"
          },
          to: {
            transform: "translateY(0)",
            opacity: "1"
          }
        },
        "text-focus-in": {
          "0%": {
              filter: "blur(12px)",
              opacity: "0"
          },
          to: {
              filter: "blur(0)",
              opacity: "1"
          }
      },
      },
    },
  },
  plugins: [],
};
export default config;
