import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "20px",
          lg: "80px",
        },
      },
      colors: {
        primary: "#3889A4",
        secondary: "#E87022",
      },
      fontFamily: {
        sans: ["var(--font-poppins)"],
        serif: ["var(--font-playfair)"],
      },
    },
  },
  plugins: [],
};
export default config;
