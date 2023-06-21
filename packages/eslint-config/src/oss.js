/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ["./base"].map(require.resolve),
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-use-before-define": "off",
  },
};
