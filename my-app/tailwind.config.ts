import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        neon: {
          "0%, 100%": {
            opacity: "1",
            textShadow: "0 0 5px white, 0 0 10px white",
          },
          "50%": {
            opacity: "0.4",
            textShadow: "none",
          },
        },
      },
      animation: {
        neon: "neon 1s infinite",
      },
    },
  },
  plugins: [],
};

export default config;
