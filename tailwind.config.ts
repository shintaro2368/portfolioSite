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
        "slide-in-fwd-bottom": "slide-in-fwd-bottom 1s cubic-bezier(0.455, 0.030, 0.515, 0.955) 1.75s  both",
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
        "slide-in-fwd-bottom": {
          "0%": {
            transform: "translateZ(-1400px) translateY(800px)",
            opacity: "0"
          },
          to: {
            transform: "translateZ(0) translateY(0)",
            opacity: "1"
          }
        },
      },
    },
  },
  plugins: [],
};
export default config;
