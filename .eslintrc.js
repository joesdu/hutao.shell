module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
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
