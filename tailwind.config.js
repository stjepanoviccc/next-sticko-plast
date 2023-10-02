/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#374151',
        secondary: '#1F2937',
        light: '#ececec'
      },
      keyframes: {
        borderAnimation: {
          '0%': {
            width: '0',
            left: '0',
          },
          '100%': {
            width: '100%',
            left: '0',
          },
        },
      }
    },
    plugins: [],
  }
}