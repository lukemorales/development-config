/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  plugins: ["@typescript-eslint"],
  rules: {
    "no-undef": "off",
    "@typescript-eslint/array-type": [
      "warn",
      { default: "array-simple", readonly: "array-simple" },
    ],
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": [
      "error",
      {
        extendDefaults: true,
        types: { "{}": false },
      },
    ],
    camelcase: "off",
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/consistent-type-imports": [
      "warn",
      { fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/consistent-generic-constructors": "warn",
    "@typescript-eslint/consistent-indexed-object-style": "warn",
    "@typescript-eslint/consistent-type-assertions": "warn",
    "default-param-last": "off",
    "@typescript-eslint/default-param-last": "warn",
    "dot-notation": "off",
    "@typescript-eslint/dot-notation": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "warn",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        classes: [
          // Index signature
          "signature",

          // Fields
          "public-static-field",
          "protected-static-field",
          "private-static-field",

          "public-decorated-field",
          "protected-decorated-field",
          "private-decorated-field",

          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",

          "public-abstract-field",
          "protected-abstract-field",

          "public-field",
          "protected-field",
          "private-field",

          "static-field",
          "instance-field",
          "abstract-field",

          "decorated-field",

          "field",

          // Static initialization
          "static-initialization",

          // Constructors
          "public-constructor",
          "protected-constructor",
          "private-constructor",

          "constructor",

          // Getters
          "public-static-get",
          "protected-static-get",
          "private-static-get",

          "public-decorated-get",
          "protected-decorated-get",
          "private-decorated-get",

          "public-instance-get",
          "protected-instance-get",
          "private-instance-get",

          "public-abstract-get",
          "protected-abstract-get",

          "public-get",
          "protected-get",
          "private-get",

          "static-get",
          "instance-get",
          "abstract-get",

          "decorated-get",

          "get",

          // Setters
          "public-static-set",
          "protected-static-set",
          "private-static-set",

          "public-decorated-set",
          "protected-decorated-set",
          "private-decorated-set",

          "public-instance-set",
          "protected-instance-set",
          "private-instance-set",

          "public-abstract-set",
          "protected-abstract-set",

          "public-set",
          "protected-set",
          "private-set",

          "static-set",
          "instance-set",
          "abstract-set",

          "decorated-set",

          "set",

          // Methods
          "public-static-method",
          "protected-static-method",
          "private-static-method",

          "public-decorated-method",
          "protected-decorated-method",
          "private-decorated-method",

          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",

          "public-abstract-method",
          "protected-abstract-method",

          "public-method",
          "protected-method",
          "private-method",

          "static-method",
          "instance-method",
          "abstract-method",

          "decorated-method",

          "method",
        ],
        interfaces: {
          memberTypes: ["signature"],
          order: "alphabetically-case-insensitive",
        },
        typeLiterals: {
          memberTypes: ["signature"],
          order: "alphabetically-case-insensitive",
        },
      },
    ],

    "@typescript-eslint/method-signature-style": "warn",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "variable",
        format: ["camelCase", "PascalCase", "snake_case", "UPPER_CASE"],
        leadingUnderscore: "allow",
      },
    ],
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "no-dupe-class-members": "off",
    "@typescript-eslint/no-dupe-class-members": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],

    "@typescript-eslint/no-explicit-any": ["warn", { ignoreRestArgs: true }],
    "no-extra-parens": "off",
    "@typescript-eslint/no-extra-parens": "off",
    "@typescript-eslint/no-extraneous-class": "off",
    "@typescript-eslint/no-floating-promises": ["error", { ignoreVoid: true }],
    "@typescript-eslint/no-for-in-array": "off",
    "@typescript-eslint/no-inferrable-types": [
      "error",
      { ignoreParameters: true },
    ],
    "@typescript-eslint/no-invalid-void-type": "warn",

    "@typescript-eslint/no-meaningless-void-operator": "warn",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false, properties: false } },
    ],
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "no-return-await": "off",
    "@typescript-eslint/return-await": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": ["error", { ignoreTypeValueShadow: true }],
    "@typescript-eslint/unbound-method": "off",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "error",
    "@typescript-eslint/no-unsafe-member-access": "error",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        ignoreRestSiblings: true,
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_$|[iI]gnored",
      },
    ],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-useless-constructor": "off",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/non-nullable-type-assertion-style": "warn",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-nullish-coalescing": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-return-this-type": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      { checkCompoundAssignments: true },
    ],
    "@typescript-eslint/switch-exhaustiveness-check": "warn",
    "@typescript-eslint/unified-signatures": "warn",
  },
  overrides: [
    {
      files: ["*.js", "*.jsx"],
      rules: {
        "no-console": "off",
        "@typescript-eslint/await-thenable": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-implied-eval": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/unbound-method": "off",
      },
    },
    {
      files: ["*.spec.ts", "*.e2e-spec.ts"],
      rules: {
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
      },
    },
  ],
};
