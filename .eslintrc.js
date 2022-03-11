module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/essential', 'airbnb-base', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint'],
  rules: {
    'no-console': process.env.NODE_ENV !== 'production' ? 0 : 2,
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'no-plusplus': [0],
    'no-param-reassign': [0]
  }
}
