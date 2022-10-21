/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'button-blue': 'rgba(102, 179, 255, 0.69)',
        'search-text': 'rgba(8, 12, 47, 0.65)',
        'category-text': 'rgba(8, 12, 47, 0.65)',
        'pink-bg': 'rgba(255, 163, 64, 0.75)',
        'blue-bg': '#70FFD0',
        'menu-bg':
          'linear-gradient(180deg, #FFFFFF 6.25%, rgba(255, 255, 255, 0.9) 127.68%)'
      },
      boxShadow: {
        'categories-shadow': '0px 5px 30px rgba(178, 178, 178, 0.2)',
        'menu-shadow': '0 -5px 30px rgba(178, 178, 178, 0.16)'
      }
    }
  },
  plugins: []
}
