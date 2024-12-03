/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-dark': '#1d1d1b',
        'primary-color':'#f3631a',
        'primary-background':'#1F2937',
        'primary-color-hover':"#FF5733"

      },
    },
  },
  plugins: [],
};
