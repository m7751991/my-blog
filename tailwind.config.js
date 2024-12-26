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
      colors: {
        customGray: 'rgb(202 205 210)', // 自定义灰色
        f7f7f7: '#f7f7f7',
      },
    },
  },
  daisyui: {
    themes: ['light', 'dark'],
  },
  // require("@tailwindcss/typography")
  plugins: [require('daisyui')],
};
