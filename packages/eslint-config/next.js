/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ['./rules/next'].map(require.resolve),
  rules: {},
};
