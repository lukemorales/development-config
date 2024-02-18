/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ["airbnb-base"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    camelcase: "off",
    "class-methods-use-this": "off",
    "consistent-return": ["error", { treatUndefinedAsUnspecified: true }],
    curly: ["error", "multi", "consistent"],
    "grouped-accessor-pairs": ["error", "getBeforeSet"],
    "guard-for-in": "error",
    "implicit-arrow-linebreak": "off",
    "max-classes-per-file": "off",
    "no-await-in-loop": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-fallthrough": [
      "error",
      { commentPattern: "break[\\\\s\\\\w]*omitted", allowEmptyCase: true },
    ],
    "no-labels": ["error", { allowLoop: true, allowSwitch: false }],
    "no-native-reassign": "off",
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: [
          "^draft",
          "(e|ctx|context|result|map|set|obj|record|sum|group|staticContext)",
          "^(acc|req|res)",
          ".*(Map|Set)$",
        ],
      },
    ],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-promise-executor-return": "error",
    "no-shadow": "off",
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-constructor": "off",
    "no-useless-rename": [
      "error",
      { ignoreDestructuring: false, ignoreImport: false, ignoreExport: false },
    ],
    "no-void": "off",
    "prefer-object-has-own": "error",
    "prefer-template": "error",
    "require-await": "off",
    yoda: ["error", "never", { exceptRange: true }],

    // style
    "lines-around-directive": ["error", { before: "never", after: "always" }],
    "logical-assignment-operators": [
      "error",
      "always",
      { enforceForIfStatements: true },
    ],
    "multiline-comment-style": [
      "error",
      "separate-blocks",
      { checkJSDoc: false },
    ],
    "multiline-ternary": ["error", "always-multiline"],
    "newline-before-return": "error",
    "no-continue": "off",
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-restricted-syntax": [
      "error",
      {
        selector: "ForInStatement",
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
      },
      {
        selector: "LabeledStatement",
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
      },
      {
        selector: "WithStatement",
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
      },
      {
        selector: "TSEnumDeclaration",
        message:
          "Typescript enums are bad, use an object literal and cast it with `as const` instead",
      },
    ],
    "padding-line-between-statements": [
      "warn",
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: ["import"] },
      { blankLine: "always", prev: "block-like", next: "*" },
      { blankLine: "any", prev: "block-like", next: ["case", "default"] },
    ],
    "quote-props": [
      "error",
      "consistent-as-needed",
      { keywords: false, unnecessary: true, numbers: false },
    ],
  },
};
