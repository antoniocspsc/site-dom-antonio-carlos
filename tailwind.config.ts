import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#09243a",
        petrol: "#0e4b5a",
        mist: "#f4f7f8",
        gold: "#c4a25f",
        paper: "#fffdf8",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(9, 36, 58, 0.14)",
      },
    },
  },
  plugins: [],
};

export default config;
