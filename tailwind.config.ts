import type { Config } from "tailwindcss";
import daisyui from "daisyui";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-lexend-deca)', 'sans-serif'],
        display: ['var(--font-ibm-plex-mono)', 'sans-serif'],
        mono: ['var(--font-arimo)', 'monospace'],
      },
      colors: {
        bunuelo: {
          50: '#FFF8ED',
          100: '#FFF2D9',
          200: '#FFE0B5',
          300: '#FFCD91',
          400: '#FFB363',
          500: '#FF9F43',
          600: '#DB7E2C',
          900: '#2D2424',
        },
      },
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      }
    },
  },
  plugins: [
    daisyui,
  ],
  daisyui: {
    themes: [
      {
        bunueloDark: {
          "primary": "#FF9F43",
          "primary-content": "#121212",
          "secondary": "#2D2424",
          "secondary-content": "#FFF2D9",
          "accent": "#FFF2D9",
          "accent-content": "#1F2937",
          "neutral": "#1F2937",
          "neutral-content": "#A6ADBB",
          "base-100": "#121212", // Fondo Gris Oscuro
          "base-200": "#1E1E1E",
          "base-300": "#2D2424",
          "base-content": "#E5E7EB",
          "--rounded-btn": "0.5rem",
          "--rounded-box": "1rem",
        },
      },
      "light",
    ],
  },
} satisfies Config;

export default config;