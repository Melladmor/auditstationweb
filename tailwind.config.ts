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
          background: "#ffffff",
          text: "#000000",
          card: "#f8f8f8",
        },

        // Custom Dark Mode Colors
        dark: {
          background: "#0a0f18",
          text: "#ffffff",
          card: "#1a1f29",
        },
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"], // Enables both light and dark themes
  },
} satisfies Config;
