import type { Config } from "tailwindcss";
import defaultColors from 'tailwindcss/colors';

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      red: "#FF3B30",
      orange: "#FF9500",
      yellow: "#FFCC00",
      green: "#34C759",
      blue: "#007AFF",
      indigo: "#5856D6",
      purple: "#AF52DE",
      pink: "#FF2D55",
      brown: "#A2845E",
      primary: {
        DEFAULT: "#1E6F9F",
        dark: "#4EA8DE"
      },
      secondary: {
        DEFAULT: "#8284FA",
        dark: "#5E60CE"
      },
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          100: "#F2F2F2",
          200: "#D9D9D9",
          300: "#808080",
          400: "#333333",
          500: "#262626",
        },        
      },
    },
  },
  plugins: [],
} satisfies Config;
