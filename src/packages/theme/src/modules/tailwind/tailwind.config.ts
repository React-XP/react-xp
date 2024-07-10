const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{html,tsx}',
    './node_modules/@react-xp/**/*.{html,js}',
    '../../packages/*/src/**/*.{html,tsx}',
  ],
  plugins: [require('tailwindcss-animate'), require('daisyui')],
};
