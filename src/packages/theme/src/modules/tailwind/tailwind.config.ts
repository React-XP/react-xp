const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{md,mdx,html,js,jsx,ts,tsx}',
    './node_modules/@react-xp/**/*.{md,mdx,html,js,jsx,ts,tsx}',
    '../../*/*/src/**/*.{md,mdx,html,js,jsx,ts,tsx}',
  ],
  daisyui: {
    themes: ['light', 'dark', 'cupcake'],
  },
  plugins: [require('tailwindcss-animate'), require('daisyui')],
};
