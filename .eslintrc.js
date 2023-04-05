module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint'), 'eslint:recommended', 'plugin:@typescript-eslint/eslint-recommended', 'plugin:@typescript-eslint/recommended', 'plugin:import/recommended', 'plugin:import/electron', 'plugin:import/typescript'],
  globals: {
    page: true
  },
  // rules: {
  //   'prefer-const': 'off'
  // }
  env: {
    browser: true,
    es6: true,
    node: true
  },
  parser: '@typescript-eslint/parser'
};
