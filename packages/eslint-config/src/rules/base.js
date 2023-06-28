/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ["airbnb-base"],
  plugins: ["no-secrets"],
  rules: {
    "arrow-body-style": ["error", "as-needed"],
    camelcase: "off",
    "class-methods-use-this": "off",
    "implicit-arrow-linebreak": "off",
    "no-await-in-loop": "off",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsForRegex: [
          "^draft",
          "(result|map|set|obj|record|sum|group)",
          "^acc",
          ".*(Map|Set)$",
        ],
      },
    ],
    "no-secrets/no-secrets": ["error", { tolerance: 4.3 }],
    "no-shadow": "off",
    "no-return-await": "off",
    "no-restricted-syntax": [
      "error",
      "ForInStatement",
      "LabeledStatement",
      "WithStatement",
    ],
    "no-underscore-dangle": "off",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "off",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-useless-concat": "error",
    "no-useless-constructor": "off",
    "no-void": "off",
    "prefer-template": "error",
    "padding-line-between-statements": [
      "warn",
      // Note: When defining new entries for this rule keep the related lines
      // together and separate them from other lines using blank lines.

      // Require a blank line after groups of imports.
      { blankLine: "always", prev: "import", next: "*" },
      { blankLine: "any", prev: "import", next: ["import"] },

      // Require a blank line after block-like statements.
      { blankLine: "always", prev: "block-like", next: "*" },
      // Ignore rule for blocks within `switch` statements.
      { blankLine: "any", prev: "block-like", next: ["case", "default"] },
    ],
  },
};
