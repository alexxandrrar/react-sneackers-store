module.exports = {
  extends: ['plugin:nestjs/recommended'],
  plugins: ['nestjs'],
  env: {
    browser: false,
    es2021: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
};
