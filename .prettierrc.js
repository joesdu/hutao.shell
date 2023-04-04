const fabric = require('@umijs/fabric');

module.exports = {
  ...fabric.prettier,
  printWidth: 400,
  trailingComma: 'none',
  arrowParens: 'avoid'
};
