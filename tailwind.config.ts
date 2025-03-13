import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "300px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      colors: {
        mainblack: "#091219",
        secondary: "#FF7701",
        light: {
          bodyBg: "#ffffff",
          background: "#ffffff",
          text: "#000000",
          card: "#f8f8f8",
        },
        dark: {
          bodyBg: "#0F0F0F",
          background: "#000000",
          text: "#ffffff",
          card: "#1a1f29",
        },
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
