/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sage: {
          50:  '#f6f7f4',
          100: '#eaede4',
          200: '#d5dbca',
          300: '#b8c3a5',
          400: '#99a97e',
          500: '#7d8f63',
          600: '#62724d',
          700: '#4d593e',
          800: '#404934',
          900: '#373f2e',
          950: '#1c2116',
        },
        warm: {
          50:  '#fdfaf6',
          100: '#f9f1e5',
          200: '#f2e0c8',
          300: '#e9c9a3',
          400: '#ddaa7a',
          500: '#d4915a',
          600: '#c67a4e',
          700: '#a56142',
          800: '#854f3b',
          900: '#6c4233',
          950: '#3a2019',
        },
        cream: {
          50:  '#fefdfb',
          100: '#fdf9f3',
          200: '#faf2e5',
          300: '#f5e7d1',
          400: '#eed6b5',
          500: '#e5c39a',
        },
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
