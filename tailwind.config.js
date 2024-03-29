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
        light: '#ececec',
        light2: '#f9f9f9',
        antracit: "#48474c",
        wood: "#5c3510"
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