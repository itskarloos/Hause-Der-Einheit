/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',
        'primary-dark': '#246B43',
        'primary-light': '#3CB371',
        background: '#FAF9F6',
        accent: '#f8fafc', // Using slate-50 as base off-white instead of beige
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'premium': '0 10px 40px -10px rgba(0, 0, 0, 0.08)',
        'premium-hover': '0 20px 40px -10px rgba(0, 0, 0, 0.12)',
      }
    },
  },
  plugins: [
    require('tailwindcss-animate')
  ],
};