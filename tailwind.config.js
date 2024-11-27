/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'soft-gradient': 'linear-gradient(to bottom, #d9a7c7, #fffcdc)',
      },
    },
  },
  plugins: [],
}