/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ["next/core-web-vitals"],
  rules: {},
  overrides: [
    {
      files: ["**/app/**/*.ts?(x)"],
      rules: {
        "@next/next/no-head-element": "off",
      },
    },
    {
      files: [
        "**/app/**/{layout,loading,error,global-error,route,default,template,not-found,page}.tsx",
      ],
      rules: {
        "import/prefer-default-export": "error",
        "react/function-component-definition": [
          "error",
          {
            namedComponents: ["function-declaration", "arrow-function"],
            unnamedComponents: "arrow-function",
          },
        ],
      },
    },
    {
      files: ["**/app/**/head.tsx"],
      rules: {
        "react/jsx-no-useless-fragment": "off",
      },
    },
  ],
};
