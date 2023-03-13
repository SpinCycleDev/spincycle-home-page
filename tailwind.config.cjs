/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'gloock': ['Gloock', 'serif'],
        'vollkorn': ['Vollkorn', 'serif'],
      },
      backgroundImage: {
        'shallow-depth-cover': "url(../images/shallow-depth-cover.jpeg)",
        'man-in-machine': "url(../images/man-in-machine.jpg)",
        'machine-by-ocean': "url(../images/machine-by-ocean.jpg)",
        'machine-on-grass': "url(../images/machine-on-grass.jpg)",
      }
    },
  },
  plugins: [],
}