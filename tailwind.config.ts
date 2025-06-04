import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4CAF50',
          DEFAULT: '#388E3C',
          dark: '#2E7D32',
        },
        secondary: {
          DEFAULT: '#00BCD4', // أزرق مخضر
          light: '#4DD0E1',
          dark: '#0097A7',
        },
        accent: {
          DEFAULT: '#FF9800', // برتقالي
          light: '#FFB74D',
          dark: '#F57C00',
        },
        background: {
          light: '#ffffff',
          dark: '#1a1a1a',
        },
        text: {
          light: '#333333',
          dark: '#ffffff',
        },
      },
      fontFamily: {
        arabic: ['Cairo', 'sans-serif'],
        english: ['Poppins', 'sans-serif'],
        sans: ['var(--font-cairo)'],
      },
    },
  },
  plugins: [],
}

export default config 