module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  overrides: [],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-underscore-dangle': 'off',
    'linebreak-style': [
      'error',
      process.env.NODE_ENV === 'prod' ? 'unix' : 'windows',
    ],
    'prettier/prettier': 'error',
  },
};
