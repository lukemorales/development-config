/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  env: {
    es2022: true,
    node: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"] },
      typescript: {},
    },
    "import/extensions": [".js", ".cjs", ".mjs", ".jsx", ".ts", ".tsx"],
  },
  extends: [
    "./rules/base",
    "./rules/imports",
    "./rules/typescript",
    "./rules/prettier",
  ].map(require.resolve),
  rules: {},
};
