import type { Config } from "tailwindcss";

// Sistema de design "Terminal & Trilha":
// base tinta escura + papel quase-branco, um único acento âmbar (prompt de
// terminal) e um acento secundário ciano (dados/streaming). Nada de bege
// creme + terracota, nada de preto puro + neon — paleta própria do projeto.
const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0F17",
          900: "#0F1420",
          800: "#161D2C",
          700: "#212A3D",
          600: "#333F58",
        },
        paper: {
          50: "#F6F6F3",
          100: "#EFEFEA",
          200: "#E2E2DA",
        },
        signal: {
          400: "#FFC24D",
          500: "#FFA724",
          600: "#E88A00",
        },
        stream: {
          400: "#4FD8C8",
          500: "#1FB8A6",
          600: "#0E9585",
        },
        ok: "#3FAE5C",
        warn: "#E3A008",
        danger: "#D64545",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      maxWidth: {
        prose: "68ch",
      },
      typography: () => ({
        DEFAULT: {
          css: {
            maxWidth: "68ch",
            code: { fontWeight: "500" },
          },
        },
      }),
      keyframes: {
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
      animation: {
        blink: "blink 1.1s steps(1) infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
