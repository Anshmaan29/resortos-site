import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ResortOS product palette
        paper: "#f7f6f3",
        surface: "#ffffff",
        cream: {
          100: "#f1efea",
          200: "#e7e4dc",
        },
        line: "#e3dfd6",
        ink: {
          DEFAULT: "#1d1b16",
          soft: "#5b574d",
          muted: "#625e55",
        },
        brand: {
          DEFAULT: "#0f5c4d",
          dark: "#0b4a3e",
          soft: "#e3f0ec",
          accent: "#1f8a70",
        },
        success: "#17703f",
        warn: "#875000",
        info: "#1d5fbf",
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      borderRadius: {
        btn: "10px",
        card: "14px",
        panel: "20px",
      },
      boxShadow: {
        card: "0 1px 2px rgba(29,27,22,0.05), 0 4px 16px -4px rgba(29,27,22,0.08)",
        lift: "0 2px 4px rgba(29,27,22,0.06), 0 12px 32px -8px rgba(29,27,22,0.14)",
        mock: "0 32px 72px -28px rgba(15,92,77,0.28), 0 2px 8px rgba(29,27,22,0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
