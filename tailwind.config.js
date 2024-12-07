/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-delayed': 'fade-in 1s ease-out 0.5s forwards',
      },
    },
  },
  plugins: [],
};