/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#001d3d',
      secondary: '#001d3d',
      tertiary: '#003566',
      quaternary: '#ffc300',
      quinary: '#ffd60a'
      },
    },
  },
  plugins: [],
}

