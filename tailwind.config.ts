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
      backgroundImage: {
        button_hover:
          "linear-gradient(90deg, #FF7701 6.28%, rgba(9, 18, 25, 0.54) 50%)",
      },
      boxShadow: {
        light: "4px 4px 15px 0px rgba(9, 18, 25, 0.25)",
        dark: "0",
      },
      colors: {
        mainblack: "#091219",
        secondary: "#FF7701",
        light: {
          bodyBg: "#ffffff",
          background: "#ffffff",
          text: "#000000",
          card: "#ffffff",
          border: "#B3B6B8",
        },
        dark: {
          bodyBg: "#0F0F0F",
          background: "#000000",
          text: "#ffffff",
          card: "#000000",
          border: "#B3B6B8",
        },
      },
    },
  },
  plugins: [require("daisyui")],
} satisfies Config;
