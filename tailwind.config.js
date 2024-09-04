/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT(
  {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      sm: '640px',
      xs: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    transitionDuration: {
      '400': '400ms',
      '800': '800ms',
      // Add more durations if needed
    },
    transitionTimingFunction: {
      'ease-in-out': 'ease-in-out',
      'ease-in': 'ease-in',
      'ease-out': 'ease-out',
      'linear': 'linear',
      // Add more timing functions if needed
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
      qwitcher: ['"Qwitcher Grypen"', 'cursive'],
    },
    animation: {
      'infinite-scroll': 'infinite-scroll 50s linear infinite',
    },
    keyframes: {
      'infinite-scroll': {
        from: { transform: 'translateX(0)' },
        to: { transform: 'translateX(-100%)' },
      }
    },
  },
  plugins: [],
}
) 
