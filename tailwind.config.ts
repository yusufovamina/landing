import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          green: "#16A34A",
          "green-hover": "#15803D",
          "green-light": "#DCFCE7",
        },
        dark: {
          navy: "#1E293B",
          "navy-footer": "#0F172A",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          gray: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      spacing: {
        "section": "5rem",
      },
      borderRadius: {
        "card": "1rem",
      },
      boxShadow: {
        "card": "0 1px 3px rgba(0, 0, 0, 0.05)",
        "card-hover": "0 8px 16px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;

