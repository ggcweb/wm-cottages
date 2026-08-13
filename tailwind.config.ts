import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        sm: "1.5rem",
        lg: "2.5rem",
        xl: "3rem",
      },
      screens: {
        "2xl": "1280px",
      },
    },
    extend: {
      colors: {
        // Barn red, sampled from the cottages themselves.
        barn: {
          DEFAULT: "#9b2f26",
          dark: "#7a2119",
          light: "#b8493c",
          wash: "#f7eae7",
        },
        // Deep evergreen for the dark surfaces.
        spruce: {
          DEFAULT: "#1f3a2e",
          dark: "#132419",
          light: "#35604b",
          wash: "#e7efe9",
        },
        // Warm paper tones.
        birch: {
          50: "#fcfaf6",
          100: "#f7f2e9",
          200: "#efe7d8",
          300: "#e0d4bf",
          400: "#c9b79b",
        },
        ink: {
          DEFAULT: "#1b1d1a",
          soft: "#4c4f49",
          muted: "#6e7169",
        },
        brass: {
          DEFAULT: "#b98a44",
          light: "#d9b478",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.6875rem", { lineHeight: "1rem" }],
      },
      letterSpacing: {
        eyebrow: "0.18em",
      },
      maxWidth: {
        prose: "68ch",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(27, 29, 26, 0.04), 0 12px 32px -12px rgba(27, 29, 26, 0.18)",
        lift: "0 2px 4px rgba(27, 29, 26, 0.06), 0 28px 56px -20px rgba(27, 29, 26, 0.32)",
        inset: "inset 0 0 0 1px rgba(27, 29, 26, 0.08)",
      },
      backgroundImage: {
        "scrim-b":
          "linear-gradient(to top, rgba(11,14,11,0.88) 0%, rgba(11,14,11,0.55) 35%, rgba(11,14,11,0.15) 65%, rgba(11,14,11,0.35) 100%)",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fadeIn 0.6s ease-out both",
        "hero-in": "heroIn 1.1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "ken-burns": "kenBurns 24s ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        heroIn: {
          "0%": { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        kenBurns: {
          "0%": { transform: "scale(1.06)" },
          "100%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
