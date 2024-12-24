/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    spacing: Array.from({ length: 1000 }).reduce((map, _, index) => {
      map[index] = `${index}px`;
      return map;
    }, {}),
    extend: {
      fontSize: ({ theme }) => ({
        ...theme('spacing'),
      }),
    },
  },
  daisyui: {
    themes: ['light'],
  },
  // require("@tailwindcss/typography")
  plugins: [require('daisyui')],
};
