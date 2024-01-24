/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ["./base"].map(require.resolve),
  rules: {
    "no-param-reassign": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
  },
};
