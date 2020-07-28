module.exports = {
  root: true,
  env: {
    browser: true,
    amd: true,
    node: true,
    es6: true,
  },
  parser: 'babel-eslint',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    // 'plugin:prettier/recommended',
  ],
  plugins: ['react', 'react-native'],
  rules: {
    indent: ['error', 2],
  },
};
