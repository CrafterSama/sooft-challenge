import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import pluginImport from "eslint-plugin-import";
import pluginImportHelpers from "eslint-plugin-import-helpers";
import pluginPrettier from "eslint-plugin-prettier";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginUnusedImports from "eslint-plugin-unused-imports";


export default [
  {
    ignores: [
      "node_modules",
      ".next",
      "build",
      "dist",
      "performance",
      "next-i18next.config.js",
      "next.config.js",
      "next.config.ts",
      "postcss.config.js",
      "tailwind.config.js",
      "lint-staged.config.js",
    ],
  },
  {
    files: ["**/src/**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        project: ["tsconfig.json"],
        tsconfigRootDir: process.cwd(),
      },
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    plugins: {
      react: pluginReact,
      prettier: pluginPrettier,
      import: pluginImport,
      "react-hooks": pluginReactHooks,
      "import-helpers": pluginImportHelpers,
      "unused-imports": pluginUnusedImports,
      "@typescript-eslint": tseslint,
    },
    rules: {
      "comma-dangle": [
        "error",
        {
          arrays: "always-multiline",
          objects: "always-multiline",
          imports: "always-multiline",
          exports: "always-multiline",
          functions: "always-multiline",
        },
      ],
      semi: "off",
      "max-lines": [
        "warn",
        { max: 250, skipBlankLines: true, skipComments: true },
      ],
      "prettier/prettier": "warn",
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react/react-in-jsx-scope": "off",
      "react/display-name": "off",
      "react/prop-types": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/camelcase": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/explicit-member-accessibility": "off",
      "@typescript-eslint/indent": "off",
      "@typescript-eslint/member-delimiter-style": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-var-requires": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" },
      ],
      "no-console": ["warn", { allow: ["warn"] }],
      "import/no-duplicates": ["error", { considerQueryString: true }],
      "import-helpers/order-imports": [
        "warn",
        {
          newlinesBetween: "always",
          groups: [
            ["/^react/"],
            ["module"],
            ["/^@/"],
            ["parent", "sibling", "index"],
          ],
          alphabetize: {
            order: "asc",
            ignoreCase: true,
          },
        },
      ],
      "@typescript-eslint/no-empty-function": "warn",
      "@typescript-eslint/ban-ts-comment": "warn",
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": [
        "warn",
        {
          vars: "all",
          varsIgnorePattern: "^_",
          args: "after-used",
          argsIgnorePattern: "^_",
        },
      ],
      "sort-imports": ["error", { ignoreDeclarationSort: true }],
    },
  },
];
