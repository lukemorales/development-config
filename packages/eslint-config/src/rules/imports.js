/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: ["plugin:import/typescript"],
  plugins: ["import-helpers"],
  rules: {
    "import/prefer-default-export": "off",
    "import/no-duplicates": "off",
    "import/no-named-as-default": "off",
    "import/no-useless-path-segments": ["error", { noUselessIndex: true }],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          '**/test/**', // tape, common npm pattern
          '**/tests/**', // also common npm pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{js,jsx,ts,tsx}", // repos with a single test file
          "test-*.{js,jsx,ts,tsx}", // repos with multiple top-level test files
          '**/*{.,_}{test,spec,e2e-spec}.{js,jsx,ts,tsx}', // tests where the extension or filename suffix denotes that it is a test
          "**/{jest,vitest}.setup.{js,ts}", // jest/vitest setup
          "**/webpack.config.js", // webpack config
          "**/webpack.config.*.js", // webpack config
          '**/*.config.{js,ts}', // config files
          '**/*.setup.{js,ts}', // setup files
          '**/.eslintrc.{js,ts}', // eslint config
        ],
        optionalDependencies: false,
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      { js: "never", mjs: "never", jsx: "never", ts: "never", tsx: "never" },
    ],
    "import-helpers/order-imports": [
      "warn",
      {
        newlinesBetween: "always",
        groups: [
          [
            "/^(react|express|fastify)$/",
            "/^react-(native|dom)$/",
            "/^(next|@next|@nestjs|@fastify)/",
          ],
          "module",
          [
            "/^@(api|app|assets|common|components|constants|contexts|features|hooks|mocks|pages|routes|services|styles|types|utils|shared|store)/",
          ],
          ["parent", "sibling"],
          "index",
        ],
        alphabetize: { order: "ignore", ignoreCase: true },
      },
    ],
    "import/no-anonymous-default-export": [
      "error",
      {
        allowArray: true,
        allowArrowFunction: false,
        allowAnonymousClass: false,
        allowAnonymousFunction: false,
        allowCallExpression: true,
        allowLiteral: true,
        allowObject: true,
      },
    ],
    "no-restricted-imports": [
      "error",
      {
        patterns: [
          {
            group: ["@features/*/*"],
            message:
              "Usage of a feature internal modules is not allowed, please import from the feature public API",
          },
        ],
      },
    ],
  },
  overrides: [
    {
      files: ["**/pages/**/*.(j|t)s?(x)"],
      rules: {
        "import/no-named-as-default": "warn",
      },
    },
  ],
};
