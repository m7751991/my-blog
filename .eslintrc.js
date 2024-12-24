export default {
  extends: [
    '@nuxtjs/eslint-config-typescript',
    // 'plugin:@typescript-eslint/recommended', // TypeScript 推荐规则
    // 'plugin:vue/vue3-recommended', // Vue 3 推荐规则
    'plugin:prettier/recommended', // Prettier 推荐规则
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  rules: {
    // 自定义规则
    '@typescript-eslint/no-unused-vars': 'error', // 禁止未使用的变量
    '@typescript-eslint/explicit-module-boundary-types': 'off', // 允许省略函数的返回值类型
    'vue/multi-word-component-names': 'off', // 禁用多单词组件名校验（Nuxt 项目允许单词）
    'prettier/prettier': ['error', { singleQuote: true, semi: false }], // Prettier 校验规则
    // indent: [0, 2],
    // '@typescript-eslint/no-unused-vars': 'warn',
    // 'vue/singleline-html-element-content-newline': [
    //   0,
    //   {
    //     // 配合printWidth
    //     ignoreWhenNoAttributes: true,
    //     ignoreWhenEmpty: true,
    //     ignores: ['pre', 'textarea'],
    //   },
    // ],
    // 'vue/multi-word-component-names': 'off',
    // 'comma-dangle': [
    //   'error',
    //   {
    //     // comma dangle
    //     arrays: 'never',
    //     objects: 'always', // 对象中最后一个属性 总是有分号
    //     imports: 'never',
    //     exports: 'never',
    //     functions: 'never',
    //   },
    // ],
    // 'vue/no-multiple-template-root': 0,
    // 'vue/no-unused-vars': 1,
    // 'vue/require-v-for-key': 0,
    // 'no-console': 0,
    // 'import/no-mutable-exports': 0,
  },
};
