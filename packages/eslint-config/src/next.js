/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: "latest",
    ecmaFeatures: { jsx: true },
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
      formComponents: ["Form"],
      linkComponents: [{ name: "Link", linkAttribute: "to" }],
    },
  },
  extends: ["./base", "./rules/react", "./rules/next"].map(require.resolve),
  rules: {},
};
