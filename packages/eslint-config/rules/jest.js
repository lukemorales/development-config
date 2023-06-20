/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  plugins: ["jest", "jest-formatting", "jest-dom", "testing-library"],
  extends: [
    "plugin:testing-library/react",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:jest-formatting/recommended",
    "plugin:jest-dom/recommended",
  ],
  rules: {
    "testing-library/render-result-naming-convention": "off",
    "jest/consistent-test-it": "error",
    "jest/expect-expect": [
      "error",
      {
        assertFunctionNames: [
          "expect",
          "expectTypeOf",
          "request.**.expect",
          "supertest.**.expect",
        ],
      },
    ],
    "jest/no-standalone-expect": [
      "error",
      { additionalTestBlockFunctions: ["eachCase"] },
    ],
    "jest/prefer-lowercase-title": [
      "error",
      {
        allowedPrefixes: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        ignoreTopLevelDescribe: true,
      },
    ],
    "jest/valid-title": [
      "error",
      {
        mustNotMatch: {
          it: [/^should/.source, 'Titles should not start with "should"'],
        },
      },
    ],
    "jest/no-conditional-expect": "warn",
    "jest-formatting/padding-around-after-all-blocks": "warn",
    "jest-formatting/padding-around-after-each-blocks": "warn",
    "jest-formatting/padding-around-before-all-blocks": "warn",
    "jest-formatting/padding-around-before-each-blocks": "warn",
    "jest-formatting/padding-around-describe-blocks": "warn",
    "jest-formatting/padding-around-test-blocks": "warn",
  },
};
