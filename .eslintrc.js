
module.exports = {
    extends: ['eslint:recommended', 'plugin:cypress/recommended'],
    plugins: ['cypress'],
    parserOptions: {
      ecmaVersion: 2021,
    },
    env: {
      browser: true,
      node: true,
    },
    rules: {
      // Додайте свої правила ESLint тут
    },
  };
  