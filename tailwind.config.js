/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  safelist: ['lg:flex-col', 'lg:flex-row',],
  theme: {
    extend: {
      colors: { primary: '#024b30', secundary: '#30024B', tertiary: '#4B3002' },
      borderWidth: { 3: '3px' }
    }
  },
  plugins: []
}
