/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    "airbnb",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-redux/recommended",
    "plugin:storybook/recommended",
  ],
  plugins: ["react", "react-redux", "react-hooks"],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": ["error", { assert: "either" }],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/boolean-prop-naming": "off",
    "react/hook-use-state": "warn",
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-no-constructed-context-values": "error",
    "react/jsx-no-leaked-render": [
      "error",
      { validStrategies: ["coerce", "ternary"] },
    ],
    "react/jsx-no-useless-fragment": ["error", { allowExpressions: true }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
    "react/jsx-sort-props": [
      "warn",
      {
        shorthandFirst: true,
        reservedFirst: ["key", "ref", "dangerouslySetInnerHTML"],
        ignoreCase: true,
        multiline: "last",
        noSortAlphabetically: true,
      },
    ],
    "react/no-access-state-in-setstate": "error",
    "react/no-array-index-key": "error",
    "react/no-children-prop": "error",
    "react/jsx-no-bind": [
      "error",
      {
        ignoreDOMComponents: true,
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: true,
        allowBind: false,
      },
    ],
    "react/no-multi-comp": "off",
    "react/no-redundant-should-component-update": "off",
    "react/no-this-in-sfc": "off",
    "react/no-typos": "warn",
    "react/no-unsafe": ["error", { checkAliases: false }],
    "react/no-unstable-nested-components": ["error", { allowAsProps: true }],
    "react/no-unused-state": "warn",
    "react/prop-types": "warn",
    "react/require-default-props": "off",
    "react/sort-comp": [
      "error",
      {
        order: [
          "static-methods",
          "lifecycle",
          "everything-else",
          "/^(on|handle).+$/",
          "render",
        ],
      },
    ],
    "react/state-in-constructor": "error",
    "react/void-dom-elements-no-children": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": [
      "error",
      { additionalHooks: "^(use).*(Effect)$" },
    ],
    "react-redux/useSelector-prefer-selectors": [
      "error",
      { matching: "^select.*" },
    ],
  },
  overrides: [
    {
      files: ["*.ts?(x)"],
      globals: {
        React: true,
      },
      rules: {
        "react/prop-types": "off",
        "react/jsx-filename-extension": ["warn", { extensions: [".tsx"] }],
      },
    },
  ],
};
