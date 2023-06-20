/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  overrides: [
    {
      files: ["**/__tests__/**/*.ts?(x)", "**/?(*.)+(spec|test).ts?(x)"],
      env: {
        es2022: true,
        browser: true,
        jest: true,
        node: true,
      },
      settings: {
        jest: {
          version: "detect",
        },
      },
      extends: ["./rules/jest"].map(require.resolve),
      rules: {
        "testing-library/render-result-naming-convention": "off",
        "@typescript-eslint/no-explicit-any": "off",
      },
    },
  ],
};
