/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          950: '#082f49',
        },
        driftwood: {
          50: '#faf8f5',
          100: '#f2ebe1',
          200: '#e8dbca',
          300: '#dcc6af',
          400: '#cfad90',
          500: '#c29370',
          600: '#a37554',
          700: '#855c41',
          800: '#6b4935',
          900: '#563c2c',
          950: '#2e1f16',
        },
        sand: {
          50: '#fdfcfb',
          100: '#f8f5f0',
          200: '#f1eadd',
          300: '#e8dec7',
          400: '#dfceab',
          500: '#d4bc8f',
        },
        gold: {
          400: '#e6c35c',
          500: '#d4af37',
          600: '#b8962b',
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
