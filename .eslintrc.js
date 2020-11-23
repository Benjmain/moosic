module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    '@vue/typescript/recommended',
    '@vue/prettier',
    '@vue/prettier/@typescript-eslint',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    tsconfigRootDir: './',
    extraFileExtensions: ['.vue'],
  },
  overrides: [
    {
      files: ['*.ts'],
      parserOptions: {
        parser: '@typescript-eslint/parser',
        project: 'tsconfig.json',
      },
    },
  ],
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/ban-ts-comment': 1,
    '@typescript-eslint/no-use-before-define': 0,
    'prettier/prettier': 'error',
  },
};
