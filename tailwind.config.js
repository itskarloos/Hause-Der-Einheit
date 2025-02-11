/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',
        'primary-dark': '#246B43',
        background: '#FAF9F6',
        accent: '#F5F5DC'
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};