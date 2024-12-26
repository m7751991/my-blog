/*
 * @Description:
 * @Author: Wangwenchao
 * @Date: 2024-12-23 14:47:48
 * @LastEditTime: 2024-12-23 19:39:37
 * @LastEditors: Wangwenchao
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  typescript: {
    shim: false,
  },
  modules: ['@nuxtjs/tailwindcss'],
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      'postcss-pxtorem': {
        rootValue: 16, // 根元素字体大小
        unitPrecision: 5, // 转换后的小数位数
        propList: ['*'], // 需要转换的属性列表
        selectorBlackList: ['.ignore'], // 不进行转换的类
        replace: true, // 替换而不是添加备用属性
        mediaQuery: false, // 允许在媒体查询中转换px
        minPixelValue: 0, // 小于或等于这个值的像素单位不转换
      },
      // 'postcss-px-to-viewport': {
      //   viewportWidth: 750, // 设计稿的视口宽度
      //   unitPrecision: 5, // 转换后的小数位数
      //   viewportUnit: 'vw', // 使用的视口单位
      //   selectorBlackList: ['.ignore', '.hairlines'], // 不进行转换的类
      //   minPixelValue: 1, // 小于或等于这个值的像素单位不转换
      //   mediaQuery: false, // 允许在媒体查询中转换px
      // },
    },
  },
});
