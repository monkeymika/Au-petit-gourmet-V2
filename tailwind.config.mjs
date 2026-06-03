/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#FBF8F3",
          100: "#F5EFE5",
          200: "#EBE0CC",
        },
        forest: {
          50: "#F2F5F1",
          100: "#DDE5DA",
          400: "#7BA081",
          600: "#4D6F52",
          700: "#3A563F",
          800: "#2C4030",
          900: "#1F2D22",
        },
        terracotta: {
          400: "#C98C52",
          500: "#B07439",
          600: "#8E5B2C",
        },
        ink: {
          900: "#2A211C",
          700: "#4A3F36",
          500: "#6F6359",
        },
      },
      fontFamily: {
        serif: ['"Source Serif Pro"', "Georgia", "serif"],
        sans: ["Lato", "system-ui", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(3rem, 6vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        h1: ["clamp(2.25rem, 4.5vw, 3.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        h2: ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        lead: ["clamp(1.125rem, 1.6vw, 1.375rem)", { lineHeight: "1.55" }],
      },
      maxWidth: {
        prose: "65ch",
        content: "1280px",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
