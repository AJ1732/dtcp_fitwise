/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'steelblue-200': 'var(--color-steelblue-200)',
      },
    },
  },
  plugins: [],
}