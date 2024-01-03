/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightestGreen: '#D7FFD7',
        lighterGreen: '#8ee68f',
        green: '#37E23B',
        greenish: '#257726',
        darkGreen: '#19581a',
        darkerGreen: '#008E00',
        darkBlue: '#3B82F6',
        textRed: '#DC2626'
      }
    }
  },
  plugins: []
}
